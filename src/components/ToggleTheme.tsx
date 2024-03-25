"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import { FaSun } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { setTheme } = useTheme();

  const handleToggleTheme = () => {
    if (isDarkTheme) {
      setTheme("light");
      setIsDarkTheme(false);
    } else {
      setTheme("dark");
      setIsDarkTheme(true);
    }
  };

  return (
    <div
      className="w-[50px] h-[50px] bg-yellow rounded-full fixed z-50 top-[50px] right-[50px] flex-center text-white text-xl cursor-pointer"
      onClick={handleToggleTheme}
    >
      {isDarkTheme ? <IoMoon /> : <FaSun />}
    </div>
  );
};

export default ToggleTheme;
