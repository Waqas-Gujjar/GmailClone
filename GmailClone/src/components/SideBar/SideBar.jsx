import React from "react";
import { LuPencil } from "react-icons/lu";
import { MdOutlineInbox } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiSendPlane2Line } from "react-icons/ri";
import { IoChevronDownOutline } from "react-icons/io5";
import { MdOutlineDrafts } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";

const sideBarItem = [
  {
    icon: <MdOutlineInbox size={20} />,
    text: "Inbox",
  },
  {
    icon: <IoStarOutline size={20} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={20} />,
    text: "Snoozed",
  },
  {
    icon: <RiSendPlane2Line size={20} />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={20} />,
    text: "Drafts",
  },
  {
    icon: <IoChevronDownOutline size={20} />,
    text: "More",
  },
];

const SideBar = () => {

   const dispatch = useDispatch();
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button onClick={() => dispatch(setOpen(true))} className="flex gap-4 items-center hover:shadow-md px-3 py-4 rounded-2xl bg-[#C2E7FF] text-[14px] font-semibold text-[#001D35] cursor-pointer">
          <LuPencil size={20} /> 
          <h1>Compose</h1>
        </button>
      </div>
      <div className="text-[#202124] text-[14px] ">
        {sideBarItem.map((items, Index) => {
          return (
            <div className="flex items-center gap-4 pl-6 px-1 rounded-r-2xl hover:cursor-pointer font-semibold hover:bg-gray-300 py-1 my-2 ">
              <i>{items.icon}</i>
              <p>{items.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
