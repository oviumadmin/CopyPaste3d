"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * The signature scan→print motif, reused sparingly: content "prints in"
 * bottom-up via an animated clip-path, with a teal scanline riding the
 * build edge. Used on portfolio cards. No-op under reduced motion.
 */
export function PrintInReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={`relative ${className ?? ""}`}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div
        variants={{
          hidden: { clipPath: "inset(100% 0 0 0)" },
          shown: { clipPath: "inset(0% 0 0 0)" },
        }}
        transition={{ duration: 0.7, delay, ease: [0.33, 1, 0.68, 1] }}
      >
        {children}
      </motion.div>
      {/* scanline riding the build edge */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 h-8 print-in-overlay"
        variants={{
          hidden: { top: "100%", opacity: 0 },
          shown: { top: "-8%", opacity: [0, 1, 1, 0] },
        }}
        transition={{ duration: 0.7, delay, ease: [0.33, 1, 0.68, 1] }}
      />
    </motion.div>
  );
}
