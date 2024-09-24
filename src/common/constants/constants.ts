import { FC } from "react";
import { FaBookOpen, FaCode } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { MdGeneratingTokens } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";

import { Project } from "../@types";

export enum DeviceMinSize {
  DESKTOP = 1200,
  TABLET = 768,
}

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
    id: "0918237091287309812637021683021946196",
    name: "MY PORTFOLIO",
    thumbnail: "/Screenshot from 2024-04-10 01-05-55.png",
    images: [
      "Screenshot from 2024-04-10 01-05-55.png",
      "Screenshot from 2024-04-10 01-02-32.png",
      "Screenshot from 2024-04-10 01-02-38.png",
      "Screenshot from 2024-04-10 01-02-42.png",
      "Screenshot from 2024-04-10 01-02-44.png",
      "Screenshot from 2024-04-10 01-04-51.png",
    ],
    desc: "Project Description Of Personal Information, Including Skills And Programming Languages. Experiences And Jobs During The Time As A Student, Including Information About Other Personal Projects. Finally, Include Contact Information.",
    role: "Frontend Developer",
    frontend_techs: ["NextJs", "Tailwindcss", "Formik", "Yup"],
    backend_techs: [],
    created_at: "Apr 19, 2023",
    tags: ["React", "Scss/Sass module", "UI/UX", "Responsive"],
    demo: "https://cdt-portfolio.id.vn",
    source: "https://github.com/DangTinh422003/portfolio_v2",
  },
  {
    id: "3-u80123-12873-12983721-98371290-8",
    name: "MOVIX",
    thumbnail: "/Screenshot from 2024-04-10 01-53-56.png",
    images: [
      "/Screenshot from 2024-04-10 01-53-56.png",
      "Screenshot from 2024-04-10 01-54-05.png",
      "Screenshot from 2024-04-10 01-54-08.png",
      "Screenshot from 2024-04-10 01-54-24.png",
      "Screenshot from 2024-04-10 01-54-31.png",
      "Screenshot from 2024-04-10 01-54-42.png",
      "Screenshot from 2024-04-10 01-54-57.png",
      "Screenshot from 2024-04-10 01-55-15.png",
    ],
    desc: "A small website built on open APIs for the purpose of introducing and searching for movies.",
    role: "Frontend Developer",
    frontend_techs: [
      "ReactJs",
      "Css",
      "Scss/Sass",
      "Bootstrap",
      "Redux-Toolkit",
    ],
    backend_techs: [],
    created_at: " Jul 6, 2023",
    tags: [
      "Html",
      "Css",
      "Redux",
      "Redux-toolkit",
      "Scss/Sass module",
      "UI/UX",
      "Responsive",
      "Web Design",
    ],
    demo: "https://movix-six-ashy.vercel.app",
    source: "https://github.com/dangtinh422003/movix",
  },
  {
    id: "029813-1089738=-12873=120937=1203721",
    name: "HOTEL BOOKING",
    thumbnail: "/hotel_booking_1.png",
    images: [
      "/hotel_booking_1.png",
      "/hotel_booking_2.png",
      "/hotel_booking_3.png",
      "/hotel_booking_4.png",
      "/hotel_booking_5.png",
      "/hotel_booking_6.png",
      "/hotel_booking_7.png",
      "/hotel_booking_8.png",
      "/hotel_booking_9.png",
      "/hotel_booking_10.png",
      "/hotel_booking_11.png",
    ],
    desc: "The Final Assignment For The NodeJS Course Was A Group Project On The Topic Of A Hotel Booking System And An Admin Website For Managing The Hotel With A Focus On Server-Side Rendering.",
    role: "Frontend, Backend Developer",
    frontend_techs: ["Html", "Css", "Handlebars", "Scss/Sass", "Bootstrap"],
    backend_techs: ["NodeJs", "ExpressJs", "MongoDB", "JWT"],
    created_at: "Apr 19, 2023",
    tags: [
      "Html",
      "Css",
      "Jquery",
      "ExpressJs",
      "Scss/Sass module",
      "UI/UX",
      "Responsive",
      "Web Design",
    ],
    demo: "",
    source: "https://github.com/DangTinh422003/Booking-hotel",
  },
  {
    id: "-012938-120938-120938-2013",
    name: "TEVILY TRAVEL",
    thumbnail: "/Screenshot from 2024-04-10 01-40-46.png",
    images: [
      "/Screenshot from 2024-04-10 01-40-46.png",
      "/Screenshot from 2024-04-10 01-40-49.png",
      "/Screenshot from 2024-04-10 01-40-54.png",
      "/Screenshot from 2024-04-10 01-41-06.png",
      "/Screenshot from 2024-04-10 01-41-09.png",
    ],
    desc: "The First ReactJS Project That Was Both Studied And Worked On Was A Midterm Assignment On The Topic Of Single-Page-Application In The Basic Web Programming Course.",
    role: "Frontend Developer",
    frontend_techs: ["Html", "Css", "Bootstrap"],
    backend_techs: [],
    created_at: "Nov 21, 2022",
    tags: [
      "Html",
      "Css",
      "Jquery",
      "Scss/Sass module",
      "UI/UX",
      "Responsive",
      "Web Design",
    ],
    demo: "https://react-travel-spa.vercel.app",
    source: "https://github.com/dangtinh422003/reacttravel_spa",
  },
  {
    id: "0-91283-021839-0210982",
    name: "CHAT APP",
    thumbnail: "/chatapp_1.png",
    images: [
      "/chatapp_1.png",
      "/chatapp_2.png",
      "/chatapp_3.png",
      "/chatapp_4.png",
    ],
    desc: "The Midterm Assignment For The NodeJs Course Involved Using The Socket.Io Library And The Expressjs Framework, Along With The Handlebars View Engine, To Build A Real-Time Chat Application.",
    role: "Frontend, Backend Developer",
    frontend_techs: [
      "Html",
      "Css",
      "Scss/Sass module",
      "Handlebars",
      "Bootstrap",
    ],
    backend_techs: ["NodeJs", "ExpressJs", "Socket.io", "MongoDB", "Mongoose"],
    created_at: "Mar 22, 2023",
    tags: [
      "Html",
      "Css",
      "Jquery",
      "Scss/Sass module",
      "UI/UX",
      "Responsive",
      "Web Design",
      "Handlebars",
      "Socket.io",
    ],
    demo: "",
    source: "https://github.com/dangtinh422003/chat-app-socket.io",
  },
  {
    id: "312983-=012938-1209318=230912",
    name: "LEAGUE OF LEGENDS",
    thumbnail: "/Screenshot from 2024-04-10 01-59-33.png",
    images: [
      "/Screenshot from 2024-04-10 01-59-33.png",
      "/Screenshot from 2024-04-10 01-59-39.png",
      "/Screenshot from 2024-04-10 01-59-41.png",
      "/Screenshot from 2024-04-10 01-59-45.png",
      "/Screenshot from 2024-04-10 01-59-55.png",
    ],
    desc: "A website that introduces a famous game called League of Legends, built with ReactJs and the ViteJs tool.",
    role: "Frontend Developer",
    frontend_techs: [
      "ReactJs",
      "Scss/Sass",
      "Hover-effect",
      "SwiperJs",
      "ViteJs",
    ],
    backend_techs: [],
    created_at: "Mar 25, 2024",
    demo: "https://games-landing-page.vercel.app",
    source: "https://github.com/DangTinh422003/games-landing-page",
    tags: ["React", "Scss/Sass module", "UI/UX", "Responsive", "ViteJs"],
  },
  {
    id: "-012937-09123890-=12",
    name: "CodeMeLy landing",
    thumbnail: "/Screenshot from 2024-04-10 02-09-27.png",
    desc: "This is the website introducing our CodeMeLy community, a non-profit organization with the mission of building a dynamic, talented and creative Gen Z IT community with the colors of Gen Z and IT.",
    created_at: "Aug 13, 2023",
    backend_techs: [],
    frontend_techs: [
      "NextJs",
      "Styled-components",
      "SwiperJs",
      "Bootstrap",
      "Framer-motion",
      "Firebase",
    ],
    images: [
      "/Screenshot from 2024-04-10 02-09-27.png",
      "/Screenshot from 2024-04-10 02-09-40.png",
      "/Screenshot from 2024-04-10 02-09-48.png",
      "/Screenshot from 2024-04-10 02-09-52.png",
      "/Screenshot from 2024-04-10 02-09-58.png",
      "/Screenshot from 2024-04-10 02-10-01.png",
    ],
    role: "Frontend Developer",
    tags: [
      "NextJs",
      "Styled-components",
      "UI/UX",
      "Responsive",
      "Firebase",
      "Lodash",
      "Bootstrap",
    ],
    demo: "https://www.codemely.dev",
    source: "",
  },
];
