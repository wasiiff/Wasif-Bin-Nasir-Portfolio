import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
} from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const STATS = [
  { value: "1+", label: "Years shipping" },
  { value: "5+", label: "Production builds" },
  { value: "1200+", label: "Students led" },
] as const;

const SOCIALS = [
  { name: "GitHub", href: siteMetadata.github, Icon: GithubIcon },
  { name: "LinkedIn", href: siteMetadata.linkedin, Icon: LinkedinIcon },
  { name: "Twitter", href: siteMetadata.twitter, Icon: TwitterIcon },
  { name: "Email", href: `mailto:${siteMetadata.email}`, Icon: MailIcon },
] as const;

export default function AboutHero() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-20 sm:px-14 md:px-20 md:pt-28 lg:pt-32">
      {/* faded "ABOUT" watermark, matches projects page editorial style */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 left-2 select-none text-[18vw] font-black leading-none tracking-tighter text-foreground/[0.04] md:-top-6 md:text-[12vw]"
      >
        ABOUT
      </span>

      <AnimatePresence>
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* portrait — left column */}
          <FadeUp
            key="hero-portrait"
            duration={0.7}
            className="order-2 lg:order-1 lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm lg:mx-0">
              {/* coral glow halo behind portrait */}
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/25 via-accent/0 to-accent/10 blur-2xl" />

              {/* tiny offset frame */}
              <div className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-3xl border border-accent/40 lg:block" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-muted shadow-xl">
                <Image
                  src={siteMetadata.image}
                  alt={siteMetadata.author}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover transition-all duration-700 hover:scale-[1.03]"
                  priority
                />
                {/* corner status badge */}
                {/* <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-background/85 px-4 py-3 backdrop-blur-md ring-1 ring-border">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                    </span>
                    <span className="text-xs font-semibold text-foreground">
                      Open to opportunities
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Islamabad, PK
                  </span>
                </div> */}
              </div>
            </div>
          </FadeUp>

          {/* content — right column */}
          <div className="order-1 flex flex-col gap-7 lg:order-2 lg:col-span-7 lg:pt-6">
            <FadeUp key="hero-badge" duration={0.5}>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  About Me ·
                </span>
              </div>
            </FadeUp>

            <FadeUp key="hero-title" duration={0.6} delay={0.1}>
              <h1 className="text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
                Hi, I&apos;m{" "}
                <span className="relative inline-block text-accent">
                  Wasif
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-accent/30"
                  />
                </span>
                .
              </h1>
            </FadeUp>

            <FadeUp key="hero-role" duration={0.55} delay={0.18}>
              <p className="text-lg font-semibold text-foreground/80 md:text-xl">
                Full-Stack &amp; Web3 Engineer · building AI-driven systems and
                blockchain platforms.
              </p>
            </FadeUp>

            <FadeUp key="hero-bio-1" duration={0.6} delay={0.26}>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Over a year of experience shipping enterprise-grade web apps,
                AI-powered pipelines, and blockchain-integrated platforms.
                Proficient in{" "}
                <span className="font-semibold text-foreground">Next.js</span>,{" "}
                <span className="font-semibold text-foreground">Nest.js</span>,{" "}
                <span className="font-semibold text-foreground">LangChain</span>
                ,{" "}
                <span className="font-semibold text-foreground">Wagmi</span>,
                and{" "}
                <span className="font-semibold text-foreground">MongoDB</span> —
                shipping production systems that automate workflows and scale
                reliably.
              </p>
            </FadeUp>

            <FadeUp key="hero-bio-2" duration={0.6} delay={0.34}>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Beyond code, I served as Head Class Representative for 1200+
                students and led IT operations as Media &amp; IT Director at
                TUFMUN&apos;24 — combining technical depth with real leadership.
              </p>
            </FadeUp>

            {/* stats row */}
            {/* <FadeUp key="hero-stats" duration={0.6} delay={0.42}>
              <div className="grid grid-cols-3 gap-3 pt-2 sm:gap-4">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.06, duration: 0.4 }}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-muted/40 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-muted sm:p-5"
                  >
                    <div
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
                    />
                    <div className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeUp> */}

            {/* socials */}
            {/* <FadeUp key="hero-socials" duration={0.6} delay={0.5}>
              <div className="flex items-center gap-3 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                  Connect
                </span>
                <span className="h-px flex-1 max-w-[40px] bg-border" />
                <div className="flex items-center gap-1.5">
                  {SOCIALS.map(({ name, href, Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/20"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeUp> */}
          </div>
        </div>
      </AnimatePresence>
    </section>
  );
}
