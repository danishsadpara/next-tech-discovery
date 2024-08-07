"use client";
import React from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import Image from "next/image";
import Logo from "./Logo";
import Avatar from "./Avatar";
import { CogIcon } from "@heroicons/react/24/solid";

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
          <div className="relative">
            <Avatar
              source="/self.jpg"
              altText="self avatar"
              width={40}
              height={40}
            />
            <CogIcon className="h-4 w-4 text-yellow-500 dark:text-white absolute -bottom-0.5 -right-0.5 cursor-pointer " />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
