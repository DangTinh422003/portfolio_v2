"use client";
import { useTheme } from "next-themes";
import { useLayoutEffect, useState } from "react";
import { FaSun } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const { setTheme } = useTheme();

  useLayoutEffect(() => {
    isDarkTheme ? setTheme("dark") : setTheme("light");
  }, [isDarkTheme, setTheme]);

  return (
    <button
      className="w-[50px] h-[50px] bg-[var(--primary)] rounded-full border-0 outline-none fixed z-50 top-[20px] right-[20px] flex-center text-white text-xl cursor-pointer shadow-xl md:top-[30px] md:right-[30px]"
      onClick={() => setIsDarkTheme(!isDarkTheme)}
    >
      {isDarkTheme ? <IoMoon /> : <FaSun />}
    </button>
  );
};

export default ToggleTheme;
