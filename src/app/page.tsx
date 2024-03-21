import LinkButton from "@/components/LinkButton";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto flex gap-32 h-screen">
        <div className="w-4/12 flex-center">
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
            <p className="leading-[1.8] text-lg w-11/12 text-justify mt-4 font-light">
              Hi! My name is Tinh, and I am a second-year student at Ton Duc
              Thang University. During the summer of my first year in 2021, I
              stumbled upon the F8 Fullstack community founded by Mr. Son, where
              I completed courses on HTML, CSS, and ReactJS, and worked on some
              personal projects. Despite facing many challenges, I am truly
              grateful to Mr. Son and the community for their support and
              encouragement, which kept me from giving up.
            </p>
            <div className="flex gap-5 mt-6">
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
