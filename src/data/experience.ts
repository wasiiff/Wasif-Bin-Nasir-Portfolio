import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Software Engineer",
    organisation: {
      name: "Kakushin CYP Ltd",
      href: "https://arenatwo.com",
    },
    date: "November 2025 – Present",
    location: "Islamabad, Pakistan",
    description:
      "Built scalable MERN apps with Web3 integrations (Wagmi, Viem) for wallet auth and multi-chain support; contributed to the Arenatwo ecosystem with complex on-chain interaction flows. Managed Strapi CMS + MongoDB for content workflows; built Firebase Cloud Functions for serverless automation and developed Chrome Extensions for extended platform usability. Integrated AI-driven features for intelligent content delivery, enhancing user engagement and experience.",
  },
  {
    title: "MERN Stack Developer",
    organisation: {
      name: "Netixsol",
      href: "https://www.netixsol.com/",
    },
    date: "July 2024 – November 2024",
    location: "Faisalabad, Pakistan",
    description:
      "Architected and shipped multiple production full-stack applications with API performance gains via query optimization and caching; led cross-team code review initiatives to improve code quality. Built agentic AI pipelines with LangChain and LangGraph to automate complex workflows; secured user accounts via JWT and RBAC authentication systems.",
  },
];
