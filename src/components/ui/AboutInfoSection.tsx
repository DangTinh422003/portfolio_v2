"use client";
import React, { ReactNode } from "react";
import { FaArrowDown } from "react-icons/fa";

import LinkButton from "./LinkButton";
import { v4 } from "uuid";
import { HoverEffect } from "./card-hover-effect";
import { motion } from "framer-motion";
import { FaCopy } from "react-icons/fa6";
import prisma from "@/common/lib/db";

export interface IInfo {
  count: number;
  label: ReactNode;
}

const INFOS: IInfo[] = [
  {
    count: 2,
    label: "YEARS OF EXPERIENCE",
  },
  {
    count: 13,
    label: "COMPLETED PROJECTS",
  },
  {
    count: 2,
    label: "CERTIFICATES",
  },
  {
    count: 1,
    label: "AWARD WON",
  },
];

const PERSONAL_INFOS = [
  {
    title: "First name",
    value: "Tinh",
  },
  {
    title: "Last name",
    value: "Cao Dang",
  },
  {
    title: "National",
    value: "Vietnam",
  },
  {
    title: "Address",
    value: "District 7, Ho Chi Minh City",
  },
  {
    title: "Phone",
    value: "0862040542",
  },
  {
    title: "Major",
    value: "Computer Science",
  },
  {
    title: "Jobs",
    value: "Fullstack Web Developer",
  },
];

const AboutInfoSection = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2">
      {/* LEFT COL */}

      <div>
        <motion.h3
          animate={{
            scale: [0.5, 1],
            x: [-20, 10, 0],
            opacity: [0, 1],
          }}
          whileInView={{
            scale: [0.5, 1],
            x: [-20, 10, 0],
            opacity: [0, 1],
          }}
          className="text-3xl font-semibold uppercase"
        >
          PERSONAL INFOS
        </motion.h3>
        <ul className="grid md:grid-cols-2">
          <li key={v4()} className="mt-6 flex items-center gap-2">
            <span className="opacity-70">Email:</span>{" "}
            <div className="flex gap-2">
              <a
                href="mailto: caodangtinh04022003@gmail.com"
                className="text-[var(--primary)] underline"
              >
                Click Here
              </a>
              <FaCopy
                className="cursor-pointer hover:opacity-80"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "caodangtinh04022003@gmail.com",
                  );
                }}
              />
            </div>
          </li>
          {PERSONAL_INFOS.map((info, i) => {
            return (
              <motion.li
                animate={{
                  x: [-20, 0],
                  opacity: [0, 1],
                  transition: {
                    delay: 0.4 + i * 0.1,
                  },
                }}
                whileInView={{
                  x: [-20, 0],
                  opacity: [0, 1],
                  transition: {
                    delay: 0.4 + i * 0.1,
                  },
                }}
                key={v4()}
                className="mt-6"
              >
                <span className="opacity-70">{info.title}:</span>{" "}
                <span>{info.value}</span>
              </motion.li>
            );
          })}
        </ul>
        <motion.div
          animate={{
            x: [-20, 0],
            opacity: [0, 1],
            transition: {
              delay: 0.7,
              duration: 0.5,
            },
          }}
          whileInView={{
            x: [-20, 0],
            opacity: [0, 1],
            transition: {
              delay: 0.7,
              duration: 0.5,
            },
          }}
          className="mt-5 lg:mt-10"
        >
          <LinkButton
            href="/CV_Cao_Dang_Tinh.pdf"
            icon={FaArrowDown}
            title="download cv"
          />
        </motion.div>
      </div>
      {/* RIGHT COL */}
      <div>
        <HoverEffect
          items={INFOS.map((info) => {
            return {
              description: <Box key={v4()} {...info} />,
            };
          })}
        />
      </div>
    </div>
  );
};

const Box = ({ count, label }: IInfo) => {
  return (
    <div className="transition-fade size-full min-h-52 cursor-pointer rounded-xl border border-solid border-[#424242]/40 p-9 shadow-xl hover:scale-[1.03]">
      <p className="text-6xl font-bold text-[var(--primary)]">
        <span>{count}</span>
        <span className="relative -top-5 ml-1 text-5xl">+</span>
      </p>
      <div className="before:absolute-center relative ml-12 mt-5 text-wrap text-xl font-normal uppercase before:-left-10 before:h-1 before:w-8 before:rounded-full before:bg-[#424242] before:content-['']">
        {label}
      </div>
    </div>
  );
};

export default AboutInfoSection;
