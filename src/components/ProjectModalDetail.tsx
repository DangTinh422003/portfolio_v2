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
    <div className="flex-center transition-fade fixed left-0 top-0 z-50 min-h-screen w-screen text-white">
      <div
        className="absolute left-0 top-0 z-0 h-full w-full bg-black bg-opacity-70"
        onClick={() => setIsShowModal(false)}
      ></div>
      <div className="relative z-10 grid h-screen w-screen grid-cols-2 gap-x-5 overflow-y-scroll rounded-lg bg-[#252525] p-2 pb-4 pt-8 lg:h-auto lg:w-5/6 lg:px-8 2xl:w-4/6">
        <div className="col-span-2 lg:col-span-1">
          <h2 className="mb-3 flex items-center justify-between border-b-4 border-solid border-[#3b3b3b] text-4xl font-bold uppercase leading-[1.5] text-[var(--primary)]">
            {project.name}
            <IoCloseCircleSharp
              className="flex-center rounded-full text-4xl text-[var(--primary)] lg:hidden"
              onClick={() => setIsShowModal(false)}
            />
          </h2>
          <div className="flex flex-col justify-between gap-2">
            <div>
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
                      wrapperClassName="w-full h-52 md:h-64"
                      className="h-full w-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div>
              <Swiper onSwiper={setThumbsSwiper} {...subSwiperConfig}>
                {project.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <LazyLoadImage
                      src={img}
                      effect="blur"
                      wrapperClassName="w-full h-24"
                      className="h-full w-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-4 lg:col-span-1 lg:mt-0">
          <h2 className="mb-3 border-b-4 border-solid border-[#3b3b3b] text-4xl font-bold uppercase leading-[1.5] text-[var(--primary)]">
            details
          </h2>
          <ul className="text-sm font-light leading-[1.4] xl:text-base">
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
                className="cursor-pointer font-semibold text-[var(--primary)]"
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
