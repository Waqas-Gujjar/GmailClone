import React, { useEffect, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../db/fireBase";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../redux/appSlice";
import store from "../redux/store";

const Messages = () => {
  const dispatch = useDispatch();
  const {searchMail, emails } = useSelector(store => store.app);
  const [temptMails, setTemptMails] = useState(emails)

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          ...doc.data(),
          id: doc.id,
          createAt: data.createAt?.toDate() || null, // ✅ convert Timestamp to Date
        };
      });
      console.log(allEmails);
      dispatch(setEmail(allEmails));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  useEffect(() => {
    const filteredMails = emails?.filter((email) =>{
      if (searchMail === "") return true; // If searchMail is empty, return all emails
      const subjectMatch = email.subject.toLowerCase().includes(searchMail.toLowerCase());
      const bodyMatch = email.to.toLowerCase().includes(searchMail.toLowerCase());
      const senderMatch = email.message.toLowerCase().includes(searchMail.toLowerCase());
      return subjectMatch || bodyMatch || senderMatch;
    })
    setTemptMails(filteredMails);
  }, [searchMail, emails]);
  

  return (
    <div>
      {temptMails &&
        temptMails?.map((email) => 
          <Message  email={email} />
        )}
    </div>
  );
};

export default Messages;
