import { SKILLS } from "@/common/constants/constants";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="lg:mt-28 mt-10">
      <div className="separator w-1/3 border-t-[1px] border-solid border-[#424242] mx-auto"></div>
      <h3 className="text-center uppercase font-bold text-3xl md:mt-14 mt-8">
        MY SKILLS
      </h3>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-y-11 justify-center mt-12">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="hover:scale-[1.1] cursor-pointer transition-fade"
          >
            <div className="h-32 w-32 rounded-full bg-[var(--input-bg)] flex-center mx-auto">
              <div className="h-20 w-20 relative flex-center">
                <Image src={skill.image} alt="" sizes="auto" fill />
              </div>
            </div>
            <p className="text-center uppercase text-lg mt-3">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
