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
        <title>Omer Abdul Rehman Sabir | Graphic Designer &amp; Customer Service Rep</title>
        <meta
          name="description"
          content="Freelance Graphic Designer & Customer Service Representative crafting brand identities, logos, and marketing visuals while delivering standout customer experiences."
        />
        <link rel="canonical" href={siteMetadata.siteUrl} />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta
          property="og:title"
          content="Omer Abdul Rehman Sabir | Graphic Designer & Customer Service Representative"
        />
        <meta
          property="og:description"
          content="Freelance Graphic Designer & Customer Service Representative skilled in Adobe Illustrator, Photoshop, Figma, and Canva — building brands and great customer experiences."
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
          content="Graphic Designer, Customer Service Representative, Logo Design, Branding, Adobe Illustrator, Photoshop, Figma, Canva, Social Media Design, Freelance Designer, Portfolio"
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
