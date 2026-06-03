import { AnimatePresence, Variants, motion, easeInOut } from "framer-motion";

export default function AnimatedLogoWN() {
  const strokeVariant: Variants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: (custom: number) => ({
      pathLength: 1,
      opacity: custom,
    }),
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 375 375"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full overflow-visible stroke-accent"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="miter"
        strokeMiterlimit={8}
      >
        {/* W — drawn first, full weight */}
        <motion.path
          d="M 30 95 L 78 280 L 150 150 L 222 280 L 270 95"
          strokeWidth="26"
          custom={1}
          variants={strokeVariant}
          initial="hidden"
          animate="visible"
          transition={{
            pathLength: { duration: 1.7, ease: easeInOut },
            opacity: { duration: 0.2 },
          }}
        />
        {/* N — overlaid and offset, lighter so the overlap reads as woven depth */}
        <motion.path
          d="M 135 280 L 135 95 L 300 280 L 300 95"
          strokeWidth="26"
          custom={0.55}
          variants={strokeVariant}
          initial="hidden"
          animate="visible"
          transition={{
            pathLength: { duration: 1.7, ease: easeInOut, delay: 0.85 },
            opacity: { duration: 0.3, delay: 0.85 },
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
