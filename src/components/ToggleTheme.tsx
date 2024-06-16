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
      className="flex-center fixed right-[20px] top-[20px] z-50 h-[50px] w-[50px] cursor-pointer rounded-full border-0 bg-[var(--primary)] text-xl text-white shadow-xl outline-none md:right-[30px] md:top-[30px]"
      onClick={() => setIsDarkTheme(!isDarkTheme)}
    >
      {isDarkTheme ? <IoMoon /> : <FaSun />}
    </button>
  );
};

export default ToggleTheme;
