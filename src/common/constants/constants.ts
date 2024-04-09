import { FC } from "react";
import { FaBookOpen, FaCode } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { MdGeneratingTokens } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { Project } from "../@types";

export const SKILLS: {
  name: string;
  image: string;
}[] = [
  {
    name: "html",
    image: "/icons/html.png",
  },
  {
    name: "css",
    image: "/icons/css.png",
  },
  {
    name: "javascript",
    image: "/icons/js.png",
  },
  {
    name: "typescript",
    image: "/icons/typescript.png",
  },
  {
    name: "react",
    image: "/icons/reactjs.png",
  },
  {
    name: "nextjs",
    image: "/icons/nextjs.png",
  },
  {
    name: "nodejs",
    image: "/icons/nodejs.png",
  },
  {
    name: "tailwindcss",
    image: "/icons/tailwind.png",
  },
  {
    name: "axios",
    image: "/icons/axios.png",
  },
  {
    name: "firebase",
    image: "/icons/firebase.png",
  },
  {
    name: "git",
    image: "/icons/git.png",
  },
  {
    name: "ubuntu",
    image: "/icons/ubuntu.png",
  },
  {
    name: "bootstrap",
    image: "/icons/bootstrap.png",
  },
  {
    name: "sass",
    image: "/icons/sass.png",
  },
  {
    name: "redux",
    image: "/icons/redux.png",
  },
];

export const EXPERIENDS: {
  timeLine: string;
  title: string;
  subTitle: string;
  icon: FC<any>;
}[] = [
  {
    timeLine: "2019 - 2021",
    title: "HOA HOI",
    subTitle: "HIGH SCHOOL",
    icon: FaBookOpen,
  },
  {
    timeLine: "Feb 2021",
    title: "TON DUC THANG",
    subTitle: "UNIVERSITY",
    icon: IoSchool,
  },
  {
    timeLine: "Nov 2021",
    title: "MENTOR",
    subTitle: "ICON CLUB",
    icon: FaCode,
  },
  {
    timeLine: "Aug 2022",
    title: "WEB TECHNICAL",
    subTitle: "CODEMELY",
    icon: FaCode,
  },
  {
    timeLine: "Sep 2023",
    title: "INTERNSHIP",
    subTitle: "Alta Software",
    icon: RiComputerFill,
  },
  {
    timeLine: "Feb 2024",
    title: "WEB DEVELOPER",
    subTitle: "The Binary Holdings",
    icon: MdGeneratingTokens,
  },
];

export const PROJECTS: Project[] = [
  {
    name: "MY PORTFOLIO",
    thumbnail: "/background.avif",
    images: ["/background.avif"],
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda vel quod exercitationem, facere quam rerum! Repellat ipsam optio molestias earum, odio non pariatur at? Repellat ducimus exercitationem sequi quo possimus.",
    created_at: "21 Sep, 2021",
    role: "Frontend Developer",
    demo: "https://google.com",
    source: "https://github.com",
    frontend_tech: ["React", "Nextjs", "Tailwindcss"],
    backend_tech: ["Nodejs", "Express", "MongoDB"],
    tags: ["React", "Nextjs", "Tailwindcss", "Nodejs", "Express", "MongoDB"],
  },
];
