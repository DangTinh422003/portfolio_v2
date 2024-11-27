"use client";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { v4 as uuid } from "uuid";

import { SKILLS } from "@/common/constants/constants";

const Skills = () => {
  return (
    <div className={`
      mt-10

      lg:mt-28
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
        MY SKILLS
      </motion.h3>
      <div className={`
        mt-12 grid grid-cols-2 justify-center gap-y-11

        lg:grid-cols-4

        md:grid-cols-3
      `}>
        {SKILLS.map((skill, i) => {
          const id = uuid();
          return (
            <motion.div
              animate={{
                opacity: [0, 1],
                transition: {
                  delay: 0.2 + i * 0.1,
                },
              }}
              whileInView={{
                opacity: [0, 1],
                transition: {
                  delay: 0.2 + i * 0.05,
                },
              }}
              key={id}
              className={`
                transition-fade cursor-pointer

                hover:scale-110
              `}
            >
              <div className={`
                flex-center mx-auto size-32 rounded-full bg-input-bg
              `}>
                <LazyLoadImage
                  alt=""
                  src={skill.image}
                  effect="blur"
                  wrapperClassName="h-20 w-20 relative flex-center"
                  className="size-full object-cover"
                />
              </div>
              <p className="mt-3 text-center text-lg uppercase">{skill.name}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
