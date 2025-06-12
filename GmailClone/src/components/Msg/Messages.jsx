import React, { useEffect } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../db/fireBase";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../redux/appSlice";

const Messages = () => {
  const dispatch = useDispatch();
  const { emails } = useSelector((store) => store.app);

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,

      }));
      dispatch(setEmail(allEmails));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {emails &&
        emails.map((email) => (
          <Message  email={email} />
        ))}
    </div>
  );
};

export default Messages;
