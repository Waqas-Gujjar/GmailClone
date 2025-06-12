import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from "../redux/appSlice";

const Message = ({email}) => {

  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const openMail = () => {
    dispatch(setSelectedEmail(email));
    navigate(`/mail/${email.id}`);
  }

  return (
    <div onClick={openMail} className="flex items-start justify-between border-b border-gray-100 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-500">
          <MdCropSquare w-5 h-5 />
        </div>
        <div className="flex-none text-gray-500">
          <RiStarLine w-5 h-5 />
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p className="text-gray-600 truncate inline-block max-w-full">
         {email.message}
        </p>
      </div>
      <div className="flex-none text-gray-900 text-sm font-semibold">
        <p>{new Date(email.createAt).toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default Message;
