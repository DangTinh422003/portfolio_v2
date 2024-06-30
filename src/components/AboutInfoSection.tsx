"use client";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

import LinkButton from "./LinkButton";

const AboutInfoSection = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2">
      {/* LEFT COL */}

      <div>
        <h3 className="text-3xl font-semibold uppercase">PERSONAL INFOS</h3>
        <ul className="grid md:grid-cols-2">
          <li className="mt-6">
            <span className="opacity-70">First name:</span> Cao
          </li>
          <li className="mt-6">
            <span className="opacity-70">Last name:</span> Dang Tinh
          </li>
          <li className="mt-6">
            <span className="opacity-70">Birthday :</span> 22 years old
          </li>
          <li className="mt-6">
            <span className="opacity-70">National :</span> Vietnam
          </li>
          <li className="mt-6">
            <span className="opacity-70">Address :</span> District 7, Ho Chi
            Minh City
          </li>
          <li className="mt-6">
            <span className="opacity-70">Phone :</span> 0862040542
          </li>
          <li className="mt-6">
            <span className="opacity-70">Major :</span> Computer Science
          </li>
          <li className="mt-6">
            <span className="opacity-70">Email :</span>{" "}
            caodangtinh04022003@gmail.com
          </li>
          <li className="mt-6">
            <span className="opacity-70">Jobs :</span> Fullstack Web Developer
          </li>
        </ul>
        <div className="mt-5 lg:mt-10">
          <LinkButton
            href="/CV_Cao_Dang_Tinh.pdf"
            icon={FaArrowDown}
            title="download cv"
          />
        </div>
      </div>
      {/* RIGHT COL */}
      <div className="mt-2 grid grid-cols-1 items-center justify-center gap-x-5 gap-y-3 md:grid-cols-2 md:gap-y-5 lg:mt-0">
        <div className="transition-fade h-full w-full cursor-pointer rounded-lg border border-solid border-[#424242] p-9 shadow-xl hover:scale-[1.03]">
          <p className="text-6xl font-bold text-[var(--primary)]">
            2<span className="relative -top-5 ml-1 text-5xl">+</span>
          </p>
          <p className="before:absolute-center relative ml-12 mt-5 text-xl font-normal uppercase before:-left-10 before:h-1 before:w-8 before:rounded-full before:bg-[#424242] before:content-['']">
            YEARS OF <br /> EXPERIENCE
          </p>
        </div>
        <div className="transition-fade h-full w-full cursor-pointer rounded-lg border border-solid border-[#424242] p-9 shadow-xl hover:scale-[1.03]">
          <p className="text-6xl font-bold text-[var(--primary)]">
            13<span className="relative -top-5 ml-1 text-5xl">+</span>
          </p>
          <p className="before:absolute-center relative ml-12 mt-5 text-xl font-normal uppercase before:-left-10 before:h-1 before:w-8 before:rounded-full before:bg-[#424242] before:content-['']">
            COMPLETED <br /> PROJECTS
          </p>
        </div>
        <div className="transition-fade h-full w-full cursor-pointer rounded-lg border border-solid border-[#424242] p-9 shadow-xl hover:scale-[1.03]">
          <p className="text-6xl font-bold text-[var(--primary)]">
            1<span className="relative -top-5 ml-1 text-5xl">+</span>
          </p>
          <p className="before:absolute-center relative ml-12 mt-5 text-xl font-normal uppercase before:-left-10 before:h-1 before:w-8 before:rounded-full before:bg-[#424242] before:content-['']">
            CERTIFICATES
          </p>
        </div>
        <div className="transition-fade h-full w-full cursor-pointer rounded-lg border border-solid border-[#424242] p-9 shadow-xl hover:scale-[1.03]">
          <p className="text-6xl font-bold text-[var(--primary)]">
            1<span className="relative -top-5 ml-1 text-5xl">+</span>
          </p>
          <p className="before:absolute-center relative ml-12 mt-5 text-xl font-normal uppercase before:-left-10 before:h-1 before:w-8 before:rounded-full before:bg-[#424242] before:content-['']">
            AWARD <br /> WON
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInfoSection;
