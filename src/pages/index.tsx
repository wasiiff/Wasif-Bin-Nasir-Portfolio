import Head from "next/head";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Wasif Bin Nasir | Full-Stack &amp; Web3 Engineer</title>
        <meta
          name="description"
          content="Full-Stack & Web3 Engineer with 1+ year of experience building enterprise-grade web applications, AI-powered pipelines, and blockchain-integrated platforms."
        />
        <link rel="canonical" href={siteMetadata.siteUrl} />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta
          property="og:title"
          content="Muhammad Wasif Bin Nasir | Full-Stack & Web3 Engineer"
        />
        <meta
          property="og:description"
          content="Full-Stack & Web3 Engineer specializing in Next.js, Nest.js, LangChain, Wagmi, and MongoDB — shipping production systems that automate workflows and scale reliably."
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
          content="Full-Stack Developer, Web3 Engineer, Next.js, Nest.js, LangChain, Wagmi, MongoDB, AI, Blockchain, React, TypeScript, Portfolio"
        />
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
    </>
  );
}
