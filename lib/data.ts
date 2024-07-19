import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import onlylectures from "@/public/onlylectures.png"
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
    title: "Full Stack Developer",
    location: "Work from Home",
    description:
      "Redesigned Company website, Working on multiple products to be deployed to covert incoming traffic into protential clients",
    icon: React.createElement(CgWorkAlt),
    date: "02/2024 - present",
  },
  {
    title: "Seeking Software Role",
    location: "Open to work Anywhere",
    description:
      "I'm now a full-stack developer learning and growing everyday seeking new opportunities,I'm open to full-time, Part-time opportunities.",
    icon: React.createElement(FaReact),
    date: "present",
  },
] as const;

export const projectsData = [
  {
    title: "Only lectures",
    description:
      "Freelance work for a client(currently down)",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma","GCP"],
    imageUrl: onlylectures,
    projectUrl:"https://ayurheals.vercel.app/"
  },
  {
    title: "Car Price Predictor",
    description:
      "A machine learning model trained to predict the price of 2nd hand cars based on kms driven, manufature year, model etc (updating ui down)",
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