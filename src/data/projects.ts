import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

const BEHANCE = "https://www.behance.net/graphicdesign781";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Brand Identity & Logo Design",
    href: "/projects",
    tags: ["Logo", "Branding", "Illustrator"],
    youtubeUrl: "",
    liveWebsiteHref: BEHANCE,
  },
  {
    index: 1,
    title: "Social Media Design Sets",
    href: "/projects",
    tags: ["Instagram", "Posts", "Canva"],
    youtubeUrl: "",
    liveWebsiteHref: BEHANCE,
  },
  {
    index: 2,
    title: "Posters & Flyers",
    href: "/projects",
    tags: ["Print", "Layout", "Photoshop"],
    youtubeUrl: "",
    liveWebsiteHref: BEHANCE,
  },
  {
    index: 3,
    title: "Banners & Ad Creatives",
    href: "/projects",
    tags: ["Web", "Ads", "Marketing"],
    youtubeUrl: "",
    liveWebsiteHref: BEHANCE,
  },
  {
    index: 4,
    title: "Marketing Collateral",
    href: "/projects",
    tags: ["Brochure", "Identity", "Print"],
    youtubeUrl: "",
    liveWebsiteHref: BEHANCE,
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Brand Identity & Logo Design",
    imageUrl: "/images/projects/brand-identity.svg",
    description:
      "Complete visual identities built from the ground up — logos, color systems, and typography that give brands a distinct, memorable presence. Each mark is crafted in Adobe Illustrator and refined to scale cleanly across print and digital.",
    sourceCodeHref: BEHANCE,
    liveWebsiteHref: BEHANCE,
    tags: ["Logo Design", "Branding", "Illustrator"],
  },
  {
    name: "Social Media Design Sets",
    imageUrl: "/images/projects/social-media.svg",
    description:
      "Scroll-stopping social media posts, story templates, and campaign creatives designed to boost engagement and keep a brand's feed consistent. Built for fast turnaround in Canva and Photoshop without sacrificing polish.",
    sourceCodeHref: BEHANCE,
    liveWebsiteHref: BEHANCE,
    tags: ["Social Media", "Canva", "Content"],
  },
  {
    name: "Posters & Flyers",
    imageUrl: "/images/projects/posters-flyers.svg",
    description:
      "Eye-catching posters and flyers for events, promotions, and announcements — strong typographic hierarchy and bold layouts that communicate the message at a glance, prepared print-ready in Photoshop.",
    sourceCodeHref: BEHANCE,
    liveWebsiteHref: BEHANCE,
    tags: ["Print", "Layout", "Photoshop"],
  },
  {
    name: "Banners & Ad Creatives",
    imageUrl: "/images/projects/banners-ads.svg",
    description:
      "Web banners and advertising creatives optimized for clicks — clear calls to action, on-brand visuals, and variations sized for every placement to support marketing campaigns.",
    sourceCodeHref: BEHANCE,
    liveWebsiteHref: BEHANCE,
    tags: ["Web Banners", "Ads", "Marketing"],
  },
  {
    name: "Marketing Collateral",
    imageUrl: "/images/projects/marketing-collateral.svg",
    description:
      "Brochures, business cards, and marketing material that carry a brand's identity consistently across every touchpoint — designed to look professional in hand and reinforce brand presence.",
    sourceCodeHref: BEHANCE,
    liveWebsiteHref: BEHANCE,
    tags: ["Brochure", "Identity", "Print"],
  },
];
