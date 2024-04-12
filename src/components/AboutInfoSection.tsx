"use client";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

import LinkButton from "./LinkButton";

const AboutInfoSection = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1">
      {/* LEFT COL */}

      <div
        data-aos="fade-up-right"
        data-aos-delay="300"
        data-aos-duration="700"
      >
        <h3 className="uppercase text-3xl font-semibold">PERSONAL INFOS</h3>
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
        <div className="lg:mt-10 mt-5">
          <LinkButton
            href="/CV_Cao_Dang_Tinh.pdf"
            icon={FaArrowDown}
            title="download cv"
          />
        </div>
      </div>
      {/* RIGHT COL */}
      <div
        className="grid md:grid-cols-2 grid-cols-1 gap-x-5 md:gap-y-5 gap-y-3 items-center justify-center"
        data-aos-delay="300"
        data-aos-duration="700"
        data-aos="fade-up-left"
      >
        <div className="cursor-pointer hover:scale-[1.03] transition-fade w-full h-full border-[#424242] border border-solid rounded-lg p-9 shadow-xl">
          <p className="text-6xl font-bold text-[var(--primary)]">
            2<span className="text-5xl ml-1 relative -top-5">+</span>
          </p>
          <p className="text-xl mt-5 ml-12 uppercase font-normal relative before:content-[''] before:h-1 before:w-8 before:bg-[#424242] before:absolute-center before:-left-10 before:rounded-full">
            YEARS OF <br /> EXPERIENCE
          </p>
        </div>
        <div className="cursor-pointer hover:scale-[1.03] transition-fade w-full h-full border-[#424242] border border-solid rounded-lg p-9 shadow-xl">
          <p className="text-6xl font-bold text-[var(--primary)]">
            13<span className="text-5xl ml-1 relative -top-5">+</span>
          </p>
          <p className="text-xl mt-5 ml-12 uppercase font-normal relative before:content-[''] before:h-1 before:w-8 before:bg-[#424242] before:absolute-center before:-left-10 before:rounded-full">
            COMPLETED <br /> PROJECTS
          </p>
        </div>
        <div className="cursor-pointer hover:scale-[1.03] transition-fade w-full h-full border-[#424242] border border-solid rounded-lg p-9 shadow-xl">
          <p className="text-6xl font-bold text-[var(--primary)]">
            1<span className="text-5xl ml-1 relative -top-5">+</span>
          </p>
          <p className="text-xl mt-5 ml-12 uppercase font-normal relative before:content-[''] before:h-1 before:w-8 before:bg-[#424242] before:absolute-center before:-left-10 before:rounded-full">
            CERTIFICATES
          </p>
        </div>
        <div className="cursor-pointer hover:scale-[1.03] transition-fade w-full h-full border-[#424242] border border-solid rounded-lg p-9 shadow-xl">
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
