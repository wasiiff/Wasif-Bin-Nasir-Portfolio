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
        <title>About Omer Abdul Rehman Sabir | Graphic Designer &amp; CSR</title>
        <meta
          name="description"
          content="Learn more about Omer Abdul Rehman Sabir, a freelance Graphic Designer & Customer Service Representative skilled in Adobe Illustrator, Photoshop, Figma, and Canva."
        />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/about`} />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/about`} />
        <meta
          property="og:title"
          content="About Omer Abdul Rehman Sabir - Graphic Designer & Customer Service Representative"
        />
        <meta
          property="og:description"
          content="Discover the journey, skills, and experience of Omer Abdul Rehman Sabir — freelance Graphic Designer and Customer Service Representative."
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
          content="About, Graphic Designer, Customer Service Representative, Logo Design, Branding, Adobe Illustrator, Photoshop, Figma, Canva, Freelance Designer"
        />
      </Head>
      <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
