import { useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, ArrowTopRight } from "@/components/icons";
import { classNames } from "@/utility/classNames";

export interface ProjectCardProps {
  name: string;
  youtubeUrl?: string;
  imageUrl?: string;
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
  tags?: string[];
  index?: number;
}

const getEmbedUrl = (url: string) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;
  return `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&showinfo=0&rel=0`;
};

export default function ProjectCard(props: ProjectCardProps) {
  const idx = props.index ?? 0;
  const num = String(idx + 1).padStart(2, "0");
  const isEven = idx % 2 === 0;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", duration: 0.7, delay: idx * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative grid grid-cols-1 gap-6 border-t border-border pt-8 md:grid-cols-12 md:gap-8 md:pt-12"
    >
      {/* index number */}
      <div className="flex items-start md:col-span-1">
        <span
          aria-hidden
          className="font-display select-none text-5xl font-black leading-none text-foreground/10 transition-colors duration-500 group-hover:text-accent md:text-6xl lg:text-7xl"
        >
          {num}
        </span>
      </div>

      {/* content */}
      <div
        className={classNames(
          "flex flex-col justify-center gap-4 md:col-span-5",
          !isEven && "md:order-3",
        )}
      >
        <h3 className="text-2xl font-bold leading-tight tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent md:text-3xl lg:text-[2.5rem]">
          {props.name}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground md:text-base lg:text-[17px]">
          {props.description}
        </p>

        {props.tags && props.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {props.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground transition-colors duration-200 group-hover:border-accent/30 md:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href={props.sourceCodeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3.5 py-2 text-xs font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/40 md:text-sm"
          >
            <GithubIcon className="h-4 w-4" />
            Source
          </a>
          {props.liveWebsiteHref && (
            <a
              href={props.liveWebsiteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-xs font-semibold text-accent-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 md:text-sm"
            >
              Live demo
              <ArrowTopRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* video preview */}
      <div
        className={classNames(
          "relative md:col-span-6",
          !isEven && "md:order-2",
        )}
      >
        {/* coral glow halo on hover */}
        <div
          className={classNames(
            "pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 via-accent/0 to-accent/10 blur-xl transition-opacity duration-500",
            hovered ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={classNames(
            "relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black transition-all duration-500 ease-out",
            hovered
              ? "scale-[1.015] shadow-2xl shadow-accent/15"
              : "shadow-md",
          )}
        >
          {/* corner ribbon */}
          <div className="pointer-events-none absolute left-4 top-4 z-20 flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-foreground backdrop-blur-md ring-1 ring-border">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {num} · {props.youtubeUrl ? "Demo reel" : "In production"}
            </span>
          </div>
          {props.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={props.imageUrl}
              alt={`${props.name} preview`}
              loading="lazy"
              className={classNames(
                "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out",
                hovered ? "scale-[1.04]" : "scale-100",
              )}
            />
          ) : props.youtubeUrl ? (
            <iframe
              src={getEmbedUrl(props.youtubeUrl)}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={props.name}
            />
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
