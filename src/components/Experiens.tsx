"use client";
import { motion } from "framer-motion";
import React from "react";
import { v4 as uuid } from "uuid";

import { EXPERIENDS } from "@/common/constants/constants";

const Experiens = () => {
  return (
    <div className={`
      mt-10 pb-8

      md:mt-28 md:pb-0
    `}>
      <div className={`
        separator mx-auto w-1/3 border-t border-solid border-[#424242]
      `}></div>
      <motion.h3
        animate={{
          y: [50, -10, 0],
          opacity: [0, 0.8, 1],
        }}
        whileInView={{
          y: [50, -10, 0],
          opacity: [0, 0.8, 1],
        }}
        className={`
          mt-8 text-center text-3xl font-bold uppercase

          md:mt-14
        `}
      >
        EDUCATION & EXPERIENCE
      </motion.h3>
      {/* experiens */}
      <ul className={`
        mt-10 grid grid-cols-1 gap-x-10 gap-y-6 pb-16

        lg:grid-cols-2 lg:gap-y-20

        md:mt-20
      `}>
        {EXPERIENDS.map((exp) => {
          const id = uuid();
          return (
            <li key={id} className="flex gap-5">
              <div className={`
                relative z-0

                before:absolute-center before:h-full before:w-px
                before:bg-[#424242]
              `}>
                <div className={`
                  flex-center relative z-10 size-10 rounded-full bg-primary
                  text-xl text-white
                `}>
                  <exp.icon />
                </div>
              </div>
              <div>
                <p className={`
                  inline-block rounded-3xl bg-input-bg px-2 text-sm
                  font-semibold opacity-80
                `}>
                  {exp.timeLine}
                </p>
                <p className="my-3 uppercase opacity-80">
                  <span className="text-xl font-semibold opacity-100">
                    {exp.title}
                  </span>
                  {" - "}
                  <span className="font-medium">{exp.subTitle}</span>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati rerum maiores velit ducimus minima earum corrupti
                  necessitatibus, nulla dolor? vero.
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experiens;
