import Head from "next/head";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import { ArrowTopRight } from "@/components/icons";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Work by Omer Abdul Rehman Sabir | Graphic Designer</title>
        <meta
          name="description"
          content="Explore graphic design work by Omer Abdul Rehman Sabir — brand identities, logos, social media designs, posters, and marketing collateral."
        />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/projects`} />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/projects`} />
        <meta
          property="og:title"
          content="Work by Omer Abdul Rehman Sabir - Graphic Designer"
        />
        <meta
          property="og:description"
          content="Discover brand identities, logos, social media designs, posters, and marketing collateral crafted by Omer Abdul Rehman Sabir."
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
          content="Projects, Portfolio, Graphic Design, Logo Design, Branding, Social Media Design, Posters, Flyers, Marketing Collateral, Adobe Illustrator, Photoshop"
        />
      </Head>
      <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />

      <section className="mx-auto mb-40 mt-6 w-full px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          {/* editorial header — massive faded watermark + crisp title */}
          <div className="relative mb-16 md:mb-24">
            <span
              aria-hidden
              className="pointer-events-none absolute -left-2 -top-6 select-none text-[18vw] font-black leading-none tracking-tighter text-foreground/[0.04] md:-top-10 md:text-[14vw]"
            >
              WORK
            </span>

            <div className="relative flex flex-col gap-4 pt-10 md:pt-16">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  Portfolio · Graphic Design
                </span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  Selected work,
                  <br />
                  crafted with care.
                </h1>
                <div className="flex items-center gap-3 text-sm font-semibold text-muted-foreground sm:pb-2">
                  <span className="flex h-2 w-2 animate-pulse rounded-full bg-accent" />
                  {PROJECTS_CARD.length} Categories ·
                </div>
              </div>

              <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Brand identities, logos, social media designs, and marketing
                collateral. Explore the full collection on Behance.
              </p>
            </div>
          </div>

          {/* editorial stack — each project gets a full-width alternating row */}
          <div className="flex flex-col gap-20 md:gap-28">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} index={index} />
            ))}
          </div>

          {/* footer CTA — bold split block */}
          <div className="mt-28 grid grid-cols-1 overflow-hidden rounded-3xl border border-border md:mt-36 md:grid-cols-5">
            <div className="bg-muted/50 p-8 md:col-span-3 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                What&apos;s next
              </p>
              <p className="mt-3 text-2xl font-bold leading-snug text-foreground md:text-3xl">
                Always taking on new branding and design projects — open to
                freelance work and creative collaborations.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 bg-foreground p-8 md:col-span-2 md:p-12">
              <p className="text-sm text-background/70">
                See more on Behance
              </p>
              <a
                href={siteMetadata.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-2 rounded-xl bg-accent px-5 py-4 text-base font-bold text-accent-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
              >
                <span>@graphicdesign781</span>
                <ArrowTopRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={`mailto:${siteMetadata.email}`}
                className="text-sm font-semibold text-background underline underline-offset-4 transition-opacity hover:opacity-80"
              >
                Or get in touch →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
