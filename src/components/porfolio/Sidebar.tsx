"use client";
import { FC } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaHouse, FaUser } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { MdBackpack } from "react-icons/md";
import { v4 as uuid } from "uuid";

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
  const router = useRouter();

  return (
    <ul className="fixed bottom-0 left-0 z-50 flex w-full justify-center gap-10 bg-gray px-4 py-3 lg:bottom-auto lg:left-auto lg:right-[30px] lg:top-1/2 lg:w-auto lg:-translate-y-1/2 lg:flex-col lg:justify-start lg:gap-5 lg:bg-transparent lg:p-0">
      {SIDEBARS.map((sidebar) => {
        const id = uuid();
        return (
          <li className="group relative z-10 cursor-pointer" key={id}>
            <button onClick={() => router.push(sidebar.href)}>
              <div
                className={`size-[50px] ${
                  pathName === sidebar.href ? "bg-[var(--primary)]" : "bg-gray"
                } flex-center transition-fade relative z-10 rounded-full text-xl text-white shadow-xl group-hover:bg-[var(--primary)]`}
              >
                <sidebar.icon />
              </div>
              <p className="flex-center transition-fade duration-[400ms] invisible absolute right-0 top-0 z-0 hidden h-full rounded-full bg-[var(--primary)] pl-4 pr-8 font-semibold uppercase text-white opacity-0 group-hover:visible group-hover:pl-6 group-hover:pr-16 group-hover:opacity-100 lg:flex">
                {sidebar.title}
              </p>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
