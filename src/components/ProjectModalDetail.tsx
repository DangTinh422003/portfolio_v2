"use client";
import React, { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import { Project } from "@/common/@types";

interface ProjectModalDetailProps {
  setIsShowModal: (value: boolean) => void;
  project: Project;
}

const mainSwiperConfig: SwiperOptions = {
  loop: true,
  spaceBetween: 10,
  navigation: true,
  modules: [Navigation, Thumbs],
};

const subSwiperConfig: SwiperOptions = {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  watchSlidesProgress: true,
  modules: [Navigation, Thumbs],
};

const ProjectModalDetail = ({
  setIsShowModal,
  project,
}: ProjectModalDetailProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  return (
    <div className="fixed z-50 min-h-screen w-screen top-0 left-0 flex-center transition-fade text-white">
      <div
        className="z-0 absolute w-full h-full top-0 left-0 bg-black bg-opacity-70"
        onClick={() => setIsShowModal(false)}
      ></div>
      <div className="overflow-y-scroll z-10 relative w-screen h-screen lg:h-auto lg:w-5/6 2xl:w-4/6 bg-[#252525] grid grid-cols-2 pt-8 p-2 lg:px-8 pb-4 rounded-lg gap-x-5">
        <div className="lg:col-span-1 col-span-2">
          <h2 className="mb-3 border-b-4 items-center border-solid border-[#3b3b3b] font-bold leading-[1.5] text-4xl uppercase text-[var(--primary)] flex justify-between">
            {project.name}
            <IoCloseCircleSharp
              className="rounded-full text-4xl text-[var(--primary)] flex-center lg:hidden"
              onClick={() => setIsShowModal(false)}
            />
          </h2>
          <Swiper
            thumbs={{ swiper: thumbsSwiper }}
            style={
              {
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              } as React.CSSProperties
            }
            className="mainSwiper mb-1"
            {...mainSwiperConfig}
          >
            {project.images.map((img, i) => (
              <SwiperSlide key={i}>
                <LazyLoadImage
                  src={img}
                  effect="blur"
                  wrapperClassName="w-full h-52 md:h-72 xl:h-80"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper onSwiper={setThumbsSwiper} {...subSwiperConfig}>
            {project.images.map((img, i) => (
              <SwiperSlide key={i}>
                <LazyLoadImage
                  src={img}
                  effect="blur"
                  wrapperClassName="w-full h-28"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-4 lg:mt-0 lg:col-span-1 col-span-2">
          <h2 className="mb-3 border-b-4 border-solid border-[#3b3b3b] font-bold leading-[1.5] text-4xl uppercase text-[var(--primary)]">
            details
          </h2>
          <ul className="font-light leading-[1.4] text-sm xl:text-base">
            <li className="mb-4 leading-[1.7]">{project.desc}</li>
            <li className="mb-2">
              <span className="opacity-80">Created - </span>
              {project.created_at}
            </li>
            <li className="mb-2">
              <span className="opacity-80">Role - </span> {project.role}
            </li>
            <li className="mb-2">
              <span className="opacity-80">Frontend - </span>{" "}
              {project.frontend_tech.join(", ")}
            </li>
            <li className="mb-2">
              <span className="opacity-80">Backend - </span>{" "}
              {project.backend_tech.join(", ")}
            </li>
            <li className="mb-2">
              <span className="opacity-80">Tags - </span>{" "}
              {project.tags.join(" / ")}
            </li>
            <li className="mb-2">
              <span className="opacity-80">Demo - </span>{" "}
              <a
                className="text-[var(--primary)] cursor-pointer font-semibold"
                href={project.demo}
                target="_blank"
              >
                {project.demo}
              </a>
            </li>
            <li className="mb-2">
              <span className="opacity-80">Source - </span> {project.source}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectModalDetail);
