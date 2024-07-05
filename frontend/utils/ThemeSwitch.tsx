"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex ">
      <button
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <MoonIcon
            className="h-6 w-6"
            style={{ width: "20px", height: "20px" }}
          />
        ) : (
          <SunIcon
            className="h-6 w-6"
            style={{ width: "20px", height: "20px" }}
          />
        )}
      </button>
    </div>
  );
};
