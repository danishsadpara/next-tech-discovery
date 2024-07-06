import React from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import Image from "next/image";
import Logo from "./Logo";
import Avatar from "./Avatar";

const Appbar = () => {
  return (
    <nav className="bg-gray-800 dark:bg-slat-300">
      <div className="flex justify-between items-center px-6 py-3">
        <div>
          <Logo />
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-7 h-7  rounded-full flex justify-center bg-slate-700 dark:bg-slate-500  align-middle">
            <ThemeSwitch />
          </div>
          <Avatar
            source="/self.jpg"
            altText="self avtar"
            width={40}
            height={40}
          />
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
