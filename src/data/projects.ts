import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "AutoGrader",
    href: "/projects",
    tags: ["Next.js", "Nest.js", "MongoDB", "LangChain", "Gemini"],
    youtubeUrl: "https://www.youtube.com/watch?v=tLLQjr-e5Dw",
  },
  {
    index: 1,
    title: "CareerCraft",
    href: "/projects",
    tags: ["Next.js", "TypeScript", "Nest.js", "MongoDB", "Puppeteer"],
    youtubeUrl: "https://www.youtube.com/watch?v=dhZ-nAk4e90",
  },
  {
    index: 2,
    title: "SHOP.CO",
    href: "/projects",
    tags: ["Next.js", "Nest.js", "MongoDB", "Stripe", "OAuth"],
    youtubeUrl: "https://www.youtube.com/watch?v=nA58Rqfv9iY",
  },
  {
    index: 3,
    title: "Cric-Stats-Break",
    href: "/projects",
    tags: ["Next.js", "LangGraph", "Gemini", "MongoDB"],
    youtubeUrl: "https://www.youtube.com/watch?v=ckgp1IVc_I8",
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "AutoGrader",
    youtubeUrl: "https://www.youtube.com/watch?v=tLLQjr-e5Dw",
    description:
      "AI-powered assignment evaluation system that automates grading for teacher-uploaded student assignments with intelligent analysis and CSV export functionality.",
    sourceCodeHref: "https://github.com/wasiiff/Auto-Grader",
    liveWebsiteHref: "https://auto-grader-gui.vercel.app/",
    tags: ["Next.js", "Nest.js", "MongoDB", "LangChain", "Gemini"],
  },
  {
    name: "CareerCraft",
    youtubeUrl: "https://www.youtube.com/watch?v=dhZ-nAk4e90",
    description:
      "Full-stack resume builder with real-time preview and instant export to PDF/DOCX formats, designed for responsiveness across all devices.",
    sourceCodeHref: "https://github.com/wasiiff/CareerCraft",
    liveWebsiteHref: "https://career-craft-client-beta.vercel.app/",
    tags: ["Next.js", "TypeScript", "Nest.js", "MongoDB", "Puppeteer"],
  },
  {
    name: "SHOP.CO",
    youtubeUrl: "https://www.youtube.com/watch?v=nA58Rqfv9iY",
    description:
      "Complete e-commerce platform featuring secure Stripe payments, an admin dashboard, OAuth 2.0 authentication, and advanced product filtering.",
    sourceCodeHref: "https://github.com/wasiiff/Ecom_Client",
    liveWebsiteHref: "https://clientgui.vercel.app/",
    tags: ["Next.js", "Nest.js", "MongoDB", "Stripe", "OAuth"],
  },
  {
    name: "Cric-Stats-Break",
    youtubeUrl: "https://www.youtube.com/watch?v=ckgp1IVc_I8",
    description:
      "AI cricket analytics engine with RAG-powered natural language querying, Gemini Pro, and persistent multi-turn conversational memory.",
    sourceCodeHref: "https://github.com/wasiiff/Stats-Break",
    liveWebsiteHref: "https://cric-stat-ai-ui.vercel.app/",
    tags: ["Next.js", "LangGraph", "Gemini", "MongoDB"],
  },
];
