import { AnimatePresence } from "framer-motion";

import SkillPill, {
  type SkillPillProps,
} from "@/components/skills/skills-pill";
import FadeRight from "@/animation/fade-right";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { useDebounceValue } from "@/hooks/useDebounceValue";

export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebonced = useDebounceValue(isMobile, 600);

  const totalSkills = skills.reduce((acc, s) => acc + s.skills.length, 0);

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-14 md:px-20 md:py-32">
      <div className="relative mx-auto max-w-7xl">
        {/* faded watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-2 left-0 select-none text-[18vw] font-black leading-none tracking-tighter text-foreground/[0.04] md:-top-6 md:text-[12vw]"
        >
          STACK
        </span>

        {/* editorial header */}
        <div className="relative mb-12 flex flex-col gap-4 md:mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Skills ·
            </span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Tools of the trade.
            </h2>
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground sm:pb-2">
              <span className="text-foreground">{totalSkills}</span>
              <span>skills · {skills.length} categories</span>
            </div>
          </div>

          <p className="mt-1 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            The design tools, software, and people skills I reach for when
            building brands and supporting customers.
          </p>
        </div>

        {/* skill sections */}
        <div className="flex flex-col gap-12 md:gap-14">
          {skills.map((section) => (
            <AnimatePresence key={section.sectionName}>
              <div className="grid grid-cols-1 gap-4 border-t border-border pt-8 md:grid-cols-12 md:gap-8">
                {/* section label column */}
                <div className="md:col-span-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    {String(skills.indexOf(section) + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-xl font-bold tracking-tight text-foreground md:text-2xl">
                    {section.sectionName}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground">
                    {section.skills.length} item
                    {section.skills.length === 1 ? "" : "s"}
                  </p>
                </div>

                {/* pills */}
                <div className="flex flex-wrap gap-3 md:col-span-9">
                  {section.skills.map((pill, index) => (
                    <FadeRight
                      key={`lang-${index}`}
                      duration={0.4}
                      delay={0.1 + index * 0.1}
                      whileInView={!isMobileDebonced}
                      className="-z-20"
                    >
                      <SkillPill {...pill} />
                    </FadeRight>
                  ))}
                </div>
              </div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </section>
  );
}
