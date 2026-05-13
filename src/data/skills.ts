import {
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiFirebase,
  SiStripe,
  SiSolidity,
  SiNestjs,
  SiLangchain,
  SiVercel,
} from "react-icons/si";
import {
  FramerMotionIcon,
  GithubIcon,
  ReactRouterDomIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "HTML5", icon: "/icons/html.svg" },
      { name: "CSS3", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Solidity", icon: SiSolidity },
    ],
  },
  {
    sectionName: "Frontend",
    skills: [
      { name: "React.js", icon: "/icons/reactjs.svg" },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { name: "Shadcn UI", icon: "/icons/shadcn.svg" },
      { name: "Framer Motion", icon: FramerMotionIcon },
      { name: "Vite", icon: "/icons/vite.svg" },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Express.js", icon: SiExpress },
      { name: "Nest.js", icon: SiNestjs },
    ],
  },
  {
    sectionName: "Database & ORM",
    skills: [
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "Prisma", icon: "/icons/prisma.svg" },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    sectionName: "AI & Web3",
    skills: [
      { name: "LangChain", icon: SiLangchain },
      { name: "LangGraph", icon: ReactRouterDomIcon },
      { name: "Wagmi", icon: "/icons/react-router-color.svg" },
    ],
  },
  {
    sectionName: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: GithubIcon },
      { name: "Vercel", icon: SiVercel },
      { name: "Postman", icon: "/icons/postman.svg" },
      { name: "Stripe", icon: SiStripe },
    ],
  },
];
