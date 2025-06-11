import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import { setOpen } from "./redux/appSlice";
import { FaCaretDown } from "react-icons/fa";
import { MdFormatColorText } from "react-icons/md";
import { IoMdAttach } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { MdAddToDrive } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineLockClock } from "react-icons/md";
import { FaPenAlt } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";
import { MdOutlineOpenInFull } from "react-icons/md";

const SendMail = () => {
  const open = useSelector((store) => store.app.open);
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } bg-white max-w-8xl shadow-xl shadow-slate-600 rounded-t-md`}
    >
      <div className="flex px-3 py-2 bg-[#F2F6Fc] justify-between rounded-t-md">
        <h1 className="font-semibold text-l">New Message</h1>
        <div onClick={() => dispatch(setOpen(false))} className=" gap-3 flex ">
          <FaMinus className="rounded-full  hover:bg-gray-200 cursor-pointer" />
          <MdOutlineOpenInFull className="rounded-full hover:bg-gray-200 cursor-pointer" />
          <RxCross2
            size={"16px"}
            className="rounded-full hover:bg-gray-200 cursor-pointer"
          />
        </div>
      </div>
      <form action="" className=" flex flex-col p-3 gap-2">
        <input type="text" placeholder="To" className="outline-none py-1" />
        <input
          type="text"
          placeholder="Subject"
          className="outline-none py-1"
        />
        <textarea
          name="Message"
          cols={30}
          rows={10}
          className="outline-none py-1"
        ></textarea>
        <div className="flex items-center ">
          <button
            type="submit"
            className=" cursor-pointer rounded-l-full px-1 w-18 h-9 text-white font-medium bg-[#0B57D0] "
          >
            Send
          </button>
          <button
            type="submit"
            className=" items-center px-1 cursor-pointer rounded-r-full w-8 border-l-2 border-gray-500 h-9  text-white font-medium bg-[#0B57D0] "
          >
            <FaCaretDown />
          </button>
          <div className="flex items-center gap-2 ml-3">
            <div className=" rounded-full hover:bg-gray-200 cursor-pointer p-1">
              <MdFormatColorText size={"20px"} />
            </div>
            <div className=" rounded-full hover:bg-gray-200 cursor-pointer p-1">
              <IoMdAttach size={"20px"} />
            </div>
            <div className=" rounded-full hover:bg-gray-200 cursor-pointer p-1">
              <IoLinkSharp size={"20px"} />
            </div>
            <div className=" rounded-full hover:bg-gray-200 cursor-pointer p-1">
              <MdOutlineEmojiEmotions size={"20px"} />
            </div>
            <div className=" rounded-full hover:bg-gray-200 cursor-pointer p-1">
              <MdAddToDrive size={"20px"} />
            </div>
            <div className=" rounded-full hover:bg-gray-200 cursor-pointer p-1">
              <CiImageOn size={"20px"} />
            </div>
            <div className=" rounded-full hover:bg-gray-200 cursor-pointer p-1">
              <MdOutlineLockClock size={"20px"} />
            </div>
            <div className=" rounded-full hover:bg-gray-200 cursor-pointer p-1">
              <FaPenAlt size={"20px"} />
            </div>
            <div className=" rounded-full hover:bg-gray-200 cursor-pointer p-1">
              <HiOutlineDotsVertical size={"20px"} />
            </div>
            <div className="ml-14 rounded-full hover:bg-gray-200 cursor-pointer ">
              <RiDeleteBin6Line size={"20px"} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
