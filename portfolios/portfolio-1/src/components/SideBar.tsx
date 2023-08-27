import React from "react";
import {
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoLinkedin,
  IoLogoDribbble,
} from "react-icons/io5";

function SideBar() {
  return (
    <div className="w-[90px] h-screen fixed bg-white border-r-[1px] flex flex-col justify-around items-center mt-[90px]">
      <h2 className="-rotate-90">HOMEPAGE</h2>
      <div className="flex flex-col gap-7 mb-10 text-[20px]">
        <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        <IoLogoYoutube className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        <IoLogoDribbble className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
      </div>
    </div>
  );
}

export default SideBar;
