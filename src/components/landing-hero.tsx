import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import { ArrowTopRight } from "@/components/icons";

const STACK = [
  "Illustrator",
  "Photoshop",
  "Figma",
  "Canva",
  "Branding",
  "Logo Design",
  "Social Media",
  "Customer Care",
];

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{ transform: `translateY(${progress * 20}vh)` }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="relative flex min-h-[calc(100vh-112px)] items-center px-6 sm:px-14 md:px-20"
    >
      {/* faded "OARS" monogram watermark — editorial style */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 -mt-6 select-none text-[26vw] font-black leading-none tracking-tighter text-foreground/[0.035] sm:inset-x-14 md:inset-x-20 md:-mt-10 md:text-[18vw]"
      >
        OARS
      </span>

      <div className="relative -mt-[112px] w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            {/* status row — open to work + location + clock */}

            {/* role tag */}
            <FadeUp key="role-tag" duration={0.5} delay={0.1}>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  Graphic Design · Branding · Customer Care
                </span>
              </div>
            </FadeUp>

            {/* huge name headline — broken across lines for editorial impact */}
            <FadeUp key="title-main" duration={0.6} delay={0.18}>
              <h1 className="mt-4 text-[13vw] font-bold leading-[0.95] tracking-tighter text-foreground sm:text-7xl md:text-8xl xl:text-[8rem]">
                Omer Abdul
                <br />
                <span className="relative inline-block text-accent">
                  Rehman Sabir
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-accent/25 md:h-2.5"
                  />
                </span>
                <span className="text-foreground/40">.</span>
              </h1>
            </FadeUp>

            {/* role line + bio — editorial rhythm */}
            <FadeUp key="description" duration={0.6} delay={0.28}>
              <div className="mt-8 grid max-w-5xl gap-4 md:grid-cols-12 md:gap-8">
                <p className="text-base font-medium leading-relaxed text-foreground/80 md:col-span-9 md:text-xl">
                  I&apos;m a freelance graphic designer and customer service
                  representative. I craft brand identities, logos, and marketing
                  visuals in{" "}
                  <span className="font-semibold text-foreground">
                    Illustrator
                  </span>
                  ,{" "}
                  <span className="font-semibold text-foreground">
                    Photoshop
                  </span>
                  ,{" "}
                  <span className="font-semibold text-foreground">Figma</span>,
                  and{" "}
                  <span className="font-semibold text-foreground">Canva</span> —
                  and bring the same care to creating great customer
                  experiences.
                </p>
              </div>
            </FadeUp>

            {/* CTAs */}
            <FadeUp key="ctas" duration={0.6} delay={0.36}>
              <div className="pointer-events-auto mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 md:text-base"
                >
                  See selected work
                  <ArrowTopRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-bold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/40 md:text-base"
                >
                  About me
                </Link>
              </div>
            </FadeUp>

            {/* tech ribbon at the bottom of viewport */}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
