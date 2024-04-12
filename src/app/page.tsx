"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TypeAnimation } from "react-type-animation";

import ContentWrapper from "@/components/ContentWrapper";
import LinkButton from "@/components/LinkButton";

export default function Home() {
  return (
    <main className="h-screen w-screen flex relative z-[5] overflow-hidden max-w-[100vw] xl:max-h-[100vh]">
      <div className="hidden absolute z-0 top-0 left-0 bg-[var(--primary)] w-[100vw] h-[200vh] -rotate-[16deg] -translate-x-[78%] xl:block"></div>
      <ContentWrapper className="lg:0 xl:flex xl:gap-16 2xl:gap-24">
        <div
          className="flex-center relative mt-10 md:mt-16 lg:w-full xl:w-4/12 xl:mt-0"
          data-aos="fade-right"
        >
          <LazyLoadImage
            alt=""
            src="/portfolio_img.png"
            effect="blur"
            wrapperClassName="relative shadow-2xl rounded-full overflow-hidden border-[2px] border-solid border-[var(--primary)] w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] xl:w-full xl:h-[35rem] 2xl:h-[45rem] xl:border-0  xl:rounded-3xl"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="flex-center lg:w-full xl:w-8/12"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-offset="50"
          data-aos-delay="300"
        >
          <div>
            <h1 className="font-bold relative leading-[1.05] text-center text-3xl mt-8 md:mt-10 md:text-5xl xl:text-left xl:text-5xl 2xl:text-6xl 2xl:leading-[1.2] xl:ml-10 xl:mt-0">
              <TypeAnimation
                sequence={["I'm Cao Dang Tinh", 1000, "A Fullstack", 1000]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                className="text-[var(--primary)] before:content-[''] before:w-11 before:h-2 before:absolute before:-left-16 before:top-7 before:rounded-lg before:bg-[var(--primary)] before:hidden before:xl:block"
              />
              <br />
              Web Developer !
            </h1>
            <p className="mt-8 font-normal text-md text-center lg:px-10 lg:text-justify xl:pl-0 xl:pr-20 2xl:px-0 xl:text-base 2xl:text-lg leading-[1.8] xl:leading-[2] 2xl:leading-[2]">
              Hi, I am currently a third-year student majoring in Computer
              Science at Ton Duc Thang University. After a period of studying at
              the university and working on personal projects, I have gained
              knowledge in Html, Css, Javascript, TypeScript, NextJS, ExpressJS,
              and more... Currently, I am seeking an fresher position in Web
              development to further develop my skills. In the future, I plan to
              leverage my abilities to contribute to the growth of the company
              if I am selected to join your team.
            </p>
            <div className="flex-center mt-4 gap-4 flex-col justify-center md:flex-row md:gap-7 md:mt-8 xl:justify-start pb-24 lg:pb-0">
              <div className="hidden md:block">
                <LinkButton
                  icon={FaArrowRightLong}
                  title="portfolio"
                  href="/portfolio"
                />
              </div>
              <div>
                <LinkButton
                  icon={FaArrowRightLong}
                  title="about"
                  href="/about"
                />
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </main>
  );
}
