import Head from "next/head";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects by Wasif Bin Nasir | Full-Stack &amp; Web3 Engineer</title>
        <meta
          name="description"
          content="Explore projects by Muhammad Wasif Bin Nasir — AI-powered apps, Web3 platforms, and full-stack systems built with Next.js, Nest.js, LangChain, and Wagmi."
        />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/projects`} />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/projects`} />
        <meta
          property="og:title"
          content="Projects by Wasif Bin Nasir - Full-Stack & Web3 Engineer"
        />
        <meta
          property="og:description"
          content="Discover AI-powered apps, Web3 platforms, and full-stack systems crafted by Wasif Bin Nasir."
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
          content="Projects, Portfolio, Full-Stack Developer, Web3, AI, Next.js, Nest.js, LangChain, MongoDB, Blockchain"
        />
      </Head>
      <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
      <section className="mx-auto mb-40 mt-6 w-full px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          {/* page header */}
          <div className="mb-12 flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Portfolio
            </span>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Selected Work
              </h1>
              <span className="text-sm font-medium text-muted-foreground sm:pb-1">
                {PROJECTS_CARD.length} projects shipped
              </span>
            </div>
            <p className="mt-1 max-w-xl text-base text-muted-foreground md:text-lg">
              AI-powered pipelines, Web3 platforms, and full-stack systems —
              built to production quality.
            </p>
            <div className="mt-4 h-px w-full bg-border" />
          </div>

          {/* cards grid */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} index={index} />
            ))}
          </div>

          {/* footer cta */}
          <div className="mx-auto mt-20 max-w-5xl rounded-2xl border border-border bg-muted/50 px-8 py-12 text-center md:mt-28">
            <p className="text-base font-semibold text-foreground md:text-xl">
              Always building — currently exploring deeper Web3 integrations and
              agentic AI systems.
            </p>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              See more on my GitHub{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                className="font-semibold text-accent underline underline-offset-2 transition-colors duration-150 hover:text-accent/70"
              >
                @wasiiff
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
