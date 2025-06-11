import React, { useState } from "react";
import {
  MdCropSquare,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { MdOutlineInbox } from "react-icons/md";
import { GoTag } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { VscInfo } from "react-icons/vsc";
import Messages from "./Msg/Messages";

const mailType = [
  {
    icon: <MdOutlineInbox size={"16px"} />,
    text: "Primary",
  },
  {
    icon: <GoTag size={"16px"} />,
    text: "Promotions",
  },
  {
    icon: <FaUserFriends size={"16px"} />,
    text: "Social",
  },
  {
    icon: <VscInfo size={"16px"} />,
    text: "Updates",
  },
];

const Indox = () => {
  const [mailTypeOption, setmailTypeOption] = useState(0);

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1 cursor-pointer">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"12px"} />
          </div>
          <div className="flex items-center gap-6 text-gray-700 py-2 px-4 cursor-pointer">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="flex items-center gap-6 text-gray-700 py-2 px-2 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">1-50 of 1000</p>
          <button className="  hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowLeft size={24} />
          </button>
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-5 ">
          {mailType.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setmailTypeOption(index)}
                className={` ${
                  mailTypeOption == index
                    ? "border-b-4 border-b-blue-600 text-blue-600"
                    : "border-b-4 border-transparent"
                } cursor-pointer flex items-center text-[14px] gap-5 p-4 w-52 hover:bg-gray-100 `}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            );
          })}
        </div>
        <Messages />
      </div>
    </div>
  );
};

export default Indox;
