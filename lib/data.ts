import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import Ayurheals from "@/public/Ayurheals.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Shri Shankaracharya Technical Campus",
    location: "Durg, Chhattisgarh",
    description:
      "I earned my Bachelor of Technology in Computer Science, navigating a diverse range of technologies and languages, and crafting enduring memories along the way.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Back-End Developer",
    location: "Work from Home",
    description:
      "I worked as a Backend developer, initially hired as a intern then worked for 2 months as full time emplyoee",
    icon: React.createElement(CgWorkAlt),
    date: "08/2023 - 10/2023",
  },
  {
    title: "Actively Seeking Software Role",
    location: "Open to work Anywhere",
    description:
      "I'm now a full-stack developer learning and growing everyday seeking new opportunities,I'm open to full-time, Part-time opportunities.",
    icon: React.createElement(FaReact),
    date: "10/2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Dawai Dhundo",
    description:
      "A web-application designed to help users to get medicines froom their nearby stores, promoting local businesses while catering fast and easy access of medicines",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma","GCP"],
    imageUrl: corpcommentImg,
    projectUrl:"https://ayurheals.vercel.app/"
  },
  {
    title: "Car Price Predictor",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["Python", "Django", "Machine Learning", "Html/Css", "Javascript"],
    imageUrl: rmtdevImg,
    projectUrl:"https://ayurheals.vercel.app/"
  },
  {
    title: "Ayurheals",
    description:
      "A public web app made for hiring task",
    tags: ["React", "Next.js", "Sqlite", "Tailwind", ],
    imageUrl:Ayurheals,
    projectUrl:"https://ayurheals.vercel.app/"
  },
] as const;


export const skillsData = [
  "Python",
  "Django",
  "Flask",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "PostgreSql",
  "GraphQL",
  "Aws",
  "Gcp",
  "Framer Motion",
] as const;