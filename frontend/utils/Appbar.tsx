import React from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import Image from "next/image";
import Logo from "./Logo";
import Avatar from "./Avatar";

const Appbar = () => {
  return (
    <nav className="bg-slate-200 dark:bg-slate-950">
      <div className="flex justify-between items-center px-6 py-3">
        <div>
          <Logo />
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="">
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
