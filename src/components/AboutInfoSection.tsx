"use client";
import React from "react";
import LinkButton from "./LinkButton";
import { FaArrowDown } from "react-icons/fa";

const AboutInfoSection = () => {
  return (
    <div className="grid grid-cols-2">
      {/* LEFT COL */}
      <div>
        <h3 className="uppercase text-3xl font-semibold">PERSONAL INFOS</h3>
        <ul className="grid grid-cols-2">
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
            <span className="opacity-70">Sex :</span> Male
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
            <span className="opacity-70">Facebook :</span>{" "}
            <a href="https://www.facebook.com/people/%C4%90%C4%83ng-T%C3%ACnh/pfbid032GprHCGZ1Zrym6ECJT61FihGWVbohroYmkwBUdCsj6joPF4bnD1kkAwc5gLbhx6nl/">
              Dang Tinh
            </a>
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
        <div className="mt-10">
          <LinkButton
            href="/CV_Cao_Dang_Tinh.pdf"
            icon={FaArrowDown}
            title="download cv"
          />
        </div>
      </div>

      {/* RIGHT COL */}
      <div className="grid grid-cols-2 gap-x-5 gap-y-5 items-center justify-center">
        <div className="grid-col-1 cursor-pointer hover:scale-[1.03] transition-fade w-full h-full border-[#424242] border border-solid rounded-lg p-9 shadow-xl">
          <p className="text-6xl font-bold text-[var(--primary)]">
            2<span className="text-5xl ml-1 relative -top-5">+</span>
          </p>
          <p className="text-xl mt-5 ml-12 uppercase font-normal relative before:content-[''] before:h-1 before:w-8 before:bg-[#424242] before:absolute-center before:-left-10 before:rounded-full">
            YEARS OF <br /> EXPERIENCE
          </p>
        </div>
        <div className="grid-col-1 cursor-pointer hover:scale-[1.03] transition-fade w-full h-full border-[#424242] border border-solid rounded-lg p-9 shadow-xl">
          <p className="text-6xl font-bold text-[var(--primary)]">
            13<span className="text-5xl ml-1 relative -top-5">+</span>
          </p>
          <p className="text-xl mt-5 ml-12 uppercase font-normal relative before:content-[''] before:h-1 before:w-8 before:bg-[#424242] before:absolute-center before:-left-10 before:rounded-full">
            COMPLETED <br /> PROJECTS
          </p>
        </div>
        <div className="grid-col-1 cursor-pointer hover:scale-[1.03] transition-fade w-full h-full border-[#424242] border border-solid rounded-lg p-9 shadow-xl">
          <p className="text-6xl font-bold text-[var(--primary)]">
            1<span className="text-5xl ml-1 relative -top-5">+</span>
          </p>
          <p className="text-xl mt-5 ml-12 uppercase font-normal relative before:content-[''] before:h-1 before:w-8 before:bg-[#424242] before:absolute-center before:-left-10 before:rounded-full">
            CERTIFICATES
          </p>
        </div>
        <div className="grid-col-1 cursor-pointer hover:scale-[1.03] transition-fade w-full h-full border-[#424242] border border-solid rounded-lg p-9 shadow-xl">
          <p className="text-6xl font-bold text-[var(--primary)]">
            1<span className="text-5xl ml-1 relative -top-5">+</span>
          </p>
          <p className="text-xl mt-5 ml-12 uppercase font-normal relative before:content-[''] before:h-1 before:w-8 before:bg-[#424242] before:absolute-center before:-left-10 before:rounded-full">
            AWARD <br /> WON
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInfoSection;
