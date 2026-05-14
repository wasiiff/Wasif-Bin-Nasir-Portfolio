import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Shadway",
    href: "/projects",
    tags: ["Next.js", "Shadcn", "Tailwind v4", "MongoDB", "AI"],
    youtubeUrl: "",
    liveWebsiteHref: "https://shadway.online",
  },
  {
    index: 1,
    title: "Blokk Lens",
    href: "/projects",
    tags: ["Next.js 16", "Wagmi", "RainbowKit", "CoinGecko", "AI"],
    youtubeUrl: "",
    liveWebsiteHref: "https://blokklens.vercel.app",
  },
  {
    index: 2,
    title: "Arsenal.chat",
    href: "/projects",
    tags: ["Next.js", "TypeScript", "AI", "Vercel"],
    youtubeUrl: "",
    liveWebsiteHref: "https://arsenaldotchat.vercel.app",
  },
  {
    index: 3,
    title: "AutoGrader",
    href: "/projects",
    tags: ["Next.js", "Nest.js", "MongoDB", "LangChain", "Gemini"],
    youtubeUrl: "https://www.youtube.com/watch?v=tLLQjr-e5Dw",
  },
  {
    index: 4,
    title: "Cric-Stats-Break",
    href: "/projects",
    tags: ["Next.js", "LangGraph", "Gemini", "MongoDB"],
    youtubeUrl: "https://www.youtube.com/watch?v=ckgp1IVc_I8",
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Shadway",
    imageUrl: "/images/projects/shadway.png",
    description:
      "A curated Shadcn UI component library and platform — discover, generate via AI, and publish production-ready components. Includes a Vibecode gallery, premium templates, and community submissions, all built with Next.js 15 and Tailwind v4.",
    sourceCodeHref: "https://github.com/moazamtech/shadway",
    liveWebsiteHref: "https://shadway.online",
    tags: ["Next.js 15", "Shadcn", "Tailwind v4", "MongoDB", "AI Generator"],
  },
  {
    name: "Blokk Lens",
    imageUrl: "/images/projects/blokk-lens.png",
    description:
      "Next-gen crypto tracking and portfolio platform with real-time market data, AI trading insights, multi-chain wallet support (Ethereum, Polygon, Base, Arbitrum…), and a glassmorphism UI. Built on Next.js 16, Wagmi, RainbowKit, and the CoinGecko API.",
    sourceCodeHref: "https://github.com/wasiiff/blokk-lens",
    liveWebsiteHref: "https://blokklens.vercel.app",
    tags: ["Next.js 16", "Wagmi", "RainbowKit", "AI SDK", "Web3"],
  },
  {
    name: "Arsenal.chat",
    imageUrl: "/images/projects/arsenaldotchat.png",
    description:
      "Pakistan's first leading chat wrapper — a slick, low-latency conversational interface built on Next.js with TypeScript, optimized for fast streaming responses and a polished mobile-first UX.",
    sourceCodeHref: "https://github.com/moazamtech/arsenaldotchat",
    liveWebsiteHref: "https://arsenaldotchat.vercel.app",
    tags: ["Next.js", "TypeScript", "AI Chat", "Vercel"],
  },
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
    name: "Cric-Stats-Break",
    youtubeUrl: "https://www.youtube.com/watch?v=ckgp1IVc_I8",
    description:
      "AI cricket analytics engine with RAG-powered natural language querying, Gemini Pro, and persistent multi-turn conversational memory.",
    sourceCodeHref: "https://github.com/wasiiff/Stats-Break",
    liveWebsiteHref: "https://cric-stat-ai-ui.vercel.app/",
    tags: ["Next.js", "LangGraph", "Gemini", "MongoDB"],
  },
];
