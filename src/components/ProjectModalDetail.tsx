"use client";
import { Project } from "@/common/@types";
import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
interface ProjectModalDetailProps {
  setIsShowModal: (value: boolean) => void;
  project: Project;
}

const mainSwiperConfig: SwiperOptions = {
  loop: true,
  spaceBetween: 10,
  navigation: true,
  modules: [FreeMode, Navigation, Thumbs],
};

const subSwiperConfig: SwiperOptions = {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  modules: [FreeMode, Navigation, Thumbs],
};

const ProjectModalDetail = ({
  setIsShowModal,
  project,
}: ProjectModalDetailProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  return (
    <div className="fixed z-50 h-screen w-screen top-0 left-0 flex-center transition-fade text-white">
      <div
        className="z-0 absolute w-full h-full top-0 left-0 bg-black bg-opacity-70"
        onClick={() => setIsShowModal(false)}
      ></div>
      <div className="z-10 relative w-4/6 bg-[#252525] grid grid-cols-2 p-8 rounded-lg gap-x-5">
        <div>
          <h2 className="mb-3 border-b-4 border-solid border-[#3b3b3b] font-bold leading-[1.5] text-3xl uppercase text-[var(--primary)]">
            {project.name}
          </h2>
          <div>
            <Swiper thumbs={{ swiper: thumbsSwiper }} {...mainSwiperConfig}>
              {project.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <LazyLoadImage
                    src={img}
                    effect="opacity"
                    wrapperClassName="w-full h-80"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper onSwiper={setThumbsSwiper} {...subSwiperConfig}>
              {project.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <LazyLoadImage
                    src={img}
                    effect="opacity"
                    wrapperClassName="w-full h-80"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="">
          <h2 className="mb-3 border-b-4 border-solid border-[#3b3b3b] font-bold leading-[1.5] text-3xl uppercase text-[var(--primary)]">
            details
          </h2>
          <ul className="font-light">
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
              <span className="text-[var(--primary)] cursor-pointer">
                {project.demo}
              </span>
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
