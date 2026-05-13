import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

const generateVideoUrls = (proj: ProjectShowcaseListItem[]) => {
  return proj.map((p) => p.youtubeUrl);
};

interface ProjectShowcaseProps {
  projects: ProjectShowcaseListItem[];
}

export default function ProjectShowcase(props: ProjectShowcaseProps) {
  const videos = useMemo(() => {
    return generateVideoUrls(props.projects);
  }, [props.projects]);

  // Helper function to convert YouTube URL to embed URL
  const getEmbedUrl = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    return `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&showinfo=0&rel=0`;
  };

  return (
    <section className="overflow-hidden px-6 py-32 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative right-0 top-0 hidden lg:block">
          <AnimatePresence>
            <motion.div
              key={props.projects[0].title}
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: "55%",
                y: "50%",
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 100,
              }}
              className="absolute right-0 top-0 -z-50"
            >
              <iframe
                src={getEmbedUrl(videos[0])}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video h-auto w-1/2 rounded-lg border border-border shadow-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
