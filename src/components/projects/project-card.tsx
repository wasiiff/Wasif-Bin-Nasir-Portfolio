import { motion } from "framer-motion";
import { GithubIcon, ArrowTopRight } from "@/components/icons";

export interface ProjectCardProps {
  name: string;
  youtubeUrl: string;
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
  tags?: string[];
  index?: number;
}

export default function ProjectCard(props: ProjectCardProps) {
  const num = String((props.index ?? 0) + 1).padStart(2, "0");

  const getEmbedUrl = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    return `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&showinfo=0&rel=0`;
  };

  return (
    <motion.article
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        duration: 0.55,
        delay: (props.index ?? 0) * 0.08,
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/8 dark:bg-muted"
    >
      {/* video embed */}
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {/* number badge over the video */}
        <div className="absolute left-3 top-3 z-10 flex h-7 min-w-[28px] items-center justify-center rounded-full bg-black/60 px-2 text-[11px] font-bold tracking-tight text-white backdrop-blur-md ring-1 ring-white/10">
          {num}
        </div>
        <iframe
          src={getEmbedUrl(props.youtubeUrl)}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={props.name}
        />
      </div>

      {/* content body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* title + tags row */}
        <div className="flex flex-col gap-2.5">
          <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors duration-150 group-hover:text-accent sm:text-xl">
            {props.name}
          </h3>
          {props.tags && props.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {props.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-accent ring-1 ring-accent/15 md:text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* description */}
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
          {props.description}
        </p>

        {/* action row */}
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <a
            href={props.sourceCodeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground md:text-sm"
          >
            <GithubIcon className="h-4 w-4" />
            Source code
          </a>
          {props.liveWebsiteHref && (
            <a
              href={props.liveWebsiteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent ring-1 ring-accent/20 transition-all duration-150 hover:bg-accent hover:text-accent-foreground md:text-sm"
            >
              Live demo
              <ArrowTopRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
