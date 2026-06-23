import { AnimatePresence, Variants, motion, easeInOut } from "framer-motion";

export default function AnimatedLogoOS() {
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
        strokeLinejoin="round"
        strokeMiterlimit={8}
      >
        {/* O — drawn first, full weight */}
        <motion.circle
          cx="115"
          cy="187"
          r="78"
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
        {/* S — drawn second, lighter so the pair reads as a woven monogram */}
        <motion.path
          d="M 300 138 C 300 108, 252 104, 232 120 C 208 140, 218 174, 252 187 C 290 201, 298 238, 274 258 C 251 277, 210 272, 205 244"
          strokeWidth="26"
          custom={0.6}
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
