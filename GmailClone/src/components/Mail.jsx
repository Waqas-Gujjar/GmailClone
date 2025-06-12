import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineArchive,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
} from "react-icons/md";

import { IoMdArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../db/fireBase";

export const Mail = () => {
  const navigate = useNavigate();
  const params = useParams()
  const {selectedEmail} = useSelector(store => store.app)
  const back = () => {
    navigate("/");
  };
  const deleteDocMailById = async (id) => {
    try {
       await deleteDoc(doc(db, "emails", id));
       navigate("/");
    } catch (error) {
      console.error("Error deleting email:", error);
    }
  }
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div
            onClick={back}
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <IoMdArrowBack />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineArchive />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineReport />
          </div>
          <div onClick={() => deleteDocMailById(params.id)} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <RiDeleteBin6Line />
          </div>
          <div className="p-2 rounded-full text-gray-200 text-xl hover:bg-gray-100 cursor-pointer">
            |
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineMarkEmailUnread />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineDriveFileMove />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineAddTask />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineWatchLater />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">1 of 10</p>
          <button className=" text-gray-400 font-thin  hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowLeft size={24} />
          </button>
          <button className="text-gray-400 font-thin hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto p-8">
        <div className="flex items-center justify-between bh-white gap-1 ">
          <div className="flex items-center justify-between gap-5">
            <h1 className="text-2xl  font-medium">{selectedEmail?.subject}</h1>
            <span className="text-sm bg-gray-200  rounded-md px-2">inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>{new Date(selectedEmail?.createAt).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <h1>{selectedEmail?.to}</h1>
          <span>to me</span>
        </div>
        <div className="my-10">
          <p>{selectedEmail?.message}</p>
        </div>
      </div>
    </div>
  );
};
