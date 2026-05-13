import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function AboutHero() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-4 pt-24 text-center sm:px-14 md:px-20 md:pt-32 lg:pt-36">
      <AnimatePresence>
        <FadeUp key="hero-badge" duration={0.5}>
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            About Me
          </span>
        </FadeUp>

        <FadeUp key="title-greeting" duration={0.6} delay={0.1}>
          <h1 className="mt-6 bg-accent bg-clip-text text-6xl font-bold leading-tight text-transparent sm:text-7xl md:text-8xl">
            Hi, I&apos;m Wasif
          </h1>
        </FadeUp>

        <FadeUp key="divider" duration={0.5} delay={0.2}>
          <div className="mx-auto mt-8 h-px w-16 rounded-full bg-accent/40" />
        </FadeUp>

        <FadeUp key="description-1" duration={0.6} delay={0.3}>
          <p className="mt-8 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Full-Stack &amp; Web3 Engineer with 1+ year of experience building
            enterprise-grade web applications, AI-powered pipelines, and
            blockchain-integrated platforms. Proficient in Next.js, Nest.js,
            LangChain, Wagmi, and MongoDB — shipping production systems that
            automate workflows and scale reliably.
          </p>
        </FadeUp>

        <FadeUp key="description-2" duration={0.6} delay={0.45}>
          <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Beyond code, I served as Head Class Representative for 1200+
            students and led IT operations as Media &amp; IT Director at
            TUFMUN&apos;24 — combining technical depth with real leadership
            experience.
          </p>
        </FadeUp>
      </AnimatePresence>
    </div>
  );
}
