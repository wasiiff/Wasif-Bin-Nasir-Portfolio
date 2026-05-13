import Head from "next/head";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";

export default function About() {
  return (
    <>
      <Head>
        <title>About Wasif Bin Nasir | Full-Stack &amp; Web3 Engineer</title>
        <meta
          name="description"
          content="Learn more about Muhammad Wasif Bin Nasir, a Full-Stack & Web3 Engineer with 1+ year of experience building enterprise-grade web apps, AI pipelines, and blockchain platforms."
        />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/about`} />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/about`} />
        <meta
          property="og:title"
          content="About Wasif Bin Nasir - Full-Stack & Web3 Engineer"
        />
        <meta
          property="og:description"
          content="Discover the journey, skills, and projects of Wasif Bin Nasir — Full-Stack & Web3 Engineer specializing in Next.js, Nest.js, LangChain, and Wagmi."
        />
        <meta
          property="og:image"
          content={`${siteMetadata.siteUrl}${siteMetadata.twitterImage}`}
        />
        <meta property="og:site_name" content={siteMetadata.siteName} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="About, Full-Stack Developer, Web3 Engineer, Next.js, Nest.js, LangChain, Wagmi, MongoDB, AI, Blockchain"
        />
      </Head>
      <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
