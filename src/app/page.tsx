"use client";
import LinkButton from "@/components/LinkButton";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <main className="h-screen max-h-[100vh] w-screen max-w-[100vw] flex relative overflow-hidden z-10">
      <div className="hidden xl:block absolute z-0 top-0 left-0 bg-yellow w-[100vw] h-[200vh] -rotate-[16deg] -translate-x-[78%]"></div>
      <div className="container mx-auto flex gap-32">
        <div className="w-4/12 flex-center relative">
          <div className="w-full h-[75vh] relative rounded-lg overflow-hidden">
            <Image
              src="/portfolio_img.png"
              alt=""
              fill={true}
              placeholder="blur"
              blurDataURL="/portfolio_img.png"
            />
          </div>
        </div>
        <div className="w-8/12 flex-center">
          <div>
            <h1 className="ml-10 text-6xl font-bold relative leading-[1.05]">
              <span className="text-yellow before:content-[''] before:w-11 before:h-2 before:absolute before:-left-16 before:top-7 before:rounded-lg before:bg-yellow">
                I&apos;m Cao Dang Tinh
              </span>
              <br /> Web Developer !
            </h1>
            <p className="leading-[1.8] text-xl text-justify mt-4 font-light">
              Hi! My name is Tinh, and I am a second-year student at Ton Duc
              Thang University. During the summer of my first year in 2021, I
              stumbled upon the F8 Fullstack community founded by Mr. Son, where
              I completed courses on HTML, CSS, and ReactJS, and worked on some
              personal projects. Despite facing many challenges, I am truly
              grateful to Mr. Son and the community for their support and
              encouragement, which kept me from giving up.
            </p>
            <div className="flex gap-7 mt-8">
              <LinkButton
                icon={FaArrowRightLong}
                title="portfolio"
                href="/portfolio"
              />
              <LinkButton icon={FaArrowRightLong} title="about" href="/about" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
