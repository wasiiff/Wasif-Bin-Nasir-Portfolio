import {
  FaBriefcase,
  FaHeadset,
  FaCommentDots,
  FaLightbulb,
  FaHandshake,
  FaUsers,
  FaChartLine,
  FaLanguage,
} from "react-icons/fa6";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Design Tools",
    skills: [
      { name: "Adobe Illustrator", icon: "/icons/illustrator.svg" },
      { name: "Adobe Photoshop", icon: "/icons/photoshop.svg" },
      { name: "Figma", icon: "/icons/figma.svg" },
      { name: "Canva", icon: "/icons/canva.svg" },
    ],
  },
  {
    sectionName: "Productivity",
    skills: [
      { name: "MS Office", icon: "/icons/office.svg" },
      { name: "Freelancing", icon: FaBriefcase },
    ],
  },
  {
    sectionName: "Customer Service",
    skills: [
      { name: "Customer Support", icon: FaHeadset },
      { name: "Communication", icon: FaCommentDots },
      { name: "Problem Solving", icon: FaLightbulb },
      { name: "Relationship Building", icon: FaHandshake },
    ],
  },
  {
    sectionName: "Professional",
    skills: [
      { name: "Leadership & Responsibility", icon: FaUsers },
      { name: "Sales & Marketing", icon: FaChartLine },
    ],
  },
  {
    sectionName: "Languages",
    skills: [
      { name: "Urdu", icon: FaLanguage },
      { name: "English", icon: FaLanguage },
    ],
  },
];
