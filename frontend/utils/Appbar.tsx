import React from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import Image from "next/image";
import Logo from "./Logo";

const Appbar = () => {
  return (
    <nav className="bg-gray-800 dark:bg-slat-300">
      <div className="flex justify-between items-center px-6 py-3">
        <div>
          <Logo />
        </div>
        <div className="w-9 h-9 flex rounded-lg items-center justify-center bg-slate-100 dark:bg-slate-500  align-middle">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
