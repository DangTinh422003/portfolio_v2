"use client";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { SKILLS } from "@/common/constants/constants";

const Skills = () => {
  return (
    <div className="mt-10 lg:mt-28">
      <div className="separator mx-auto w-1/3 border-t-[1px] border-solid border-[#424242]"></div>
      <h3 className="mt-8 text-center text-3xl font-bold uppercase md:mt-14">
        MY SKILLS
      </h3>
      <div className="mt-12 grid grid-cols-2 justify-center gap-y-11 md:grid-cols-3 lg:grid-cols-4">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="transition-fade cursor-pointer hover:scale-[1.1]"
          >
            <div className="flex-center mx-auto h-32 w-32 rounded-full bg-[var(--input-bg)]">
              <LazyLoadImage
                alt=""
                src={skill.image}
                effect="blur"
                wrapperClassName="h-20 w-20 relative flex-center"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-lg uppercase">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
