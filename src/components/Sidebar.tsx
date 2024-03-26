"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { FaHouse, FaUser } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { MdBackpack } from "react-icons/md";

const SIDEBARS: {
  icon: FC<any>;
  title: string;
  href: string;
}[] = [
  {
    icon: FaHouse,
    title: "home",
    href: "/",
  },
  {
    icon: MdBackpack,
    title: "portfolio",
    href: "/portfolio",
  },
  {
    icon: FaUser,
    title: "about",
    href: "/about",
  },
  {
    icon: IoMailSharp,
    title: "contact",
    href: "/contact",
  },
];

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <ul className="fixed flex py-3 px-4 justify-center gap-10 bottom-0 left-0 w-full z-50 bg-gray lg:bg-transparent lg:bottom-auto lg:left-auto lg:right-[30px] lg:p-0 lg:top-1/2 lg:-translate-y-1/2 lg:flex-col lg:w-auto lg:justify-start lg:py-auto lg:px-auto lg:gap-5">
      {SIDEBARS.map((sidebar) => (
        <li className="cursor-pointer relative z-10 group" key={sidebar.title}>
          <Link href={sidebar.href}>
            <div
              className={`w-[50px] h-[50px]  ${
                pathName === sidebar.href ? "bg-[var(--primary)]" : "bg-gray"
              } text-white flex-center rounded-full text-xl relative z-10 group-hover:bg-[var(--primary)] transition-fade shadow-xl`}
            >
              <sidebar.icon></sidebar.icon>
            </div>
            <p className="uppercase hidden absolute right-0 top-0 text-white flex-center bg-[var(--primary)] rounded-full h-full z-0 font-semibold opacity-0 invisible pr-8 pl-4 group-hover:pr-16 group-hover:pl-6 group-hover:opacity-100 group-hover:visible transition-fade duration-[400ms] lg:flex">
              {sidebar.title}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
