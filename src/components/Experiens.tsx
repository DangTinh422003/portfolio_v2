import React from "react";

import { EXPERIENDS } from "@/common/constants/constants";

const Experiens = () => {
  return (
    <div className="mt-10 pb-8 md:mt-28 md:pb-0">
      <div className="separator mx-auto w-1/3 border-t-[1px] border-solid border-[#424242]"></div>
      <h3 className="mt-8 text-center text-3xl font-bold uppercase md:mt-14">
        EDUCATION & EXPERIENCE
      </h3>
      {/* experiens */}
      <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 pb-16 md:mt-20 lg:grid-cols-2 lg:gap-y-20">
        {EXPERIENDS.map((exp) => (
          <li key={exp.title} className="flex gap-5">
            <div className="before:absolute-center relative z-0 before:h-full before:w-[1px] before:bg-[#424242]">
              <div className="flex-center relative z-10 h-10 w-10 rounded-full bg-[var(--primary)] text-xl text-white">
                <exp.icon />
              </div>
            </div>
            <div>
              <p className="inline-block rounded-3xl bg-[var(--input-bg)] px-2 text-sm font-semibold opacity-80">
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
        ))}
      </ul>
    </div>
  );
};

export default Experiens;
