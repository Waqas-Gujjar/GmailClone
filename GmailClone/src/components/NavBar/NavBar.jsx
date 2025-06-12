import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchMail } from "../redux/appSlice";

const NavBar = () => {
  const [input, setinput] = useState("")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchMail(input))
  }, [input])


  return (
    <div className="flex justify-between items-center mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-8"
            src="data:image/png;base64,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"
            alt="Gmail log"
          />
          <p className="text-2xl text-gray-500 font-medium cursor-pointer ">
            Gmail
          </p>
        </div>
      </div>

      <div className=" md:block hidden w-[50%] mr-20">
        <div className="flex items-center px-2 py-3 bg-[#EAF1FB] rounded-full">
          <IoIosSearch
            className="text-gray-700  hover:bg-gray-200 rounded-full "
            size={"24px"}
          />
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            className="rounded-full outline-none px-1 w-full   bg-transparent"
            type="text"
            placeholder="Search mail"
          />
        </div>
      </div>

      <div className="md:block hidden ">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer ">
            <CiCircleQuestion size={"24px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer ">
            <IoSettingsOutline size={"24px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer ">
            <TbGridDots size={"24px"} />
          </div>
          <div className="cursor-pointer">
            <Avatar
              src="https://images.pexels.com/photos/32282325/pexels-photo-32282325/free-photo-of-elegant-portrait-of-young-woman-in-studio-setting.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              size={40}
              round={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
