import { EXPERIENDS } from "@/common/constants/constants";
import React from "react";
import { FaBookOpen } from "react-icons/fa6";

const Experiens = () => {
  return (
    <div className="mt-28">
      <div className="separator w-1/3 border-t-[1px] border-solid border-[#424242] mx-auto"></div>
      <h3 className="text-center uppercase font-bold text-3xl mt-14">
        EDUCATION & EXPERIENCE
      </h3>
      {/* experiens */}
      <ul className="grid grid-cols-3 gap-y-20 gap-x-10 mt-20 pb-16">
        {EXPERIENDS.map((exp) => (
          <li key={exp.title} className="flex gap-7">
            <div className="relative before:absolute-center before:h-full before:w-[1px] before:bg-[#424242] z-0">
              <div className="h-10 w-10 bg-[var(--primary)] rounded-full flex-center text-xl relative z-10">
                <FaBookOpen />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold opacity-80 rounded-3xl bg-[var(--input-bg)] px-2 inline-block">
                {exp.timeLine}
              </p>
              <p className="uppercase opacity-80 my-3">
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
        ))}
      </ul>
    </div>
  );
};

export default Experiens;
