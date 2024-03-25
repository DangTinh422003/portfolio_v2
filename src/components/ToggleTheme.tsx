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
    <button
      className="w-[50px] h-[50px] bg-[var(--primary)] rounded-full border-0 outline-none fixed z-50 top-[20px] right-[20px] flex-center text-white text-xl cursor-pointer shadow md:top-[50px] md:right-[50px]"
      onClick={handleToggleTheme}
    >
      {isDarkTheme ? <IoMoon /> : <FaSun />}
    </button>
  );
};

export default ToggleTheme;
