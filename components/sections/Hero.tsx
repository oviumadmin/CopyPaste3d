"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { ScanPrintAnimation } from "./ScanPrintAnimation";

export function Hero({ dict }: { dict: Dictionary }) {
  const reduced = useReducedMotion();

  const enter = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.65,
            delay,
            ease: [0.21, 0.65, 0.36, 1] as const,
          },
        };

  return (
    <section className="blueprint-grid relative overflow-hidden">
      {/* soft teal glow behind the animation */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/3 h-[28rem] w-[28rem] rounded-full bg-teal/10 blur-[120px]"
      />
      <div className="section-wrap grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-6 lg:py-24">
        <div className="relative z-10">
          <motion.p {...enter(0)} className="kicker">
            {dict.hero.kicker}
          </motion.p>
          <motion.h1
            {...enter(0.08)}
            className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {dict.hero.title}
          </motion.h1>
          <motion.p
            {...enter(0.16)}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {dict.hero.lead}
          </motion.p>
          <motion.div
            {...enter(0.26)}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#estimator" className="btn-primary">
              {dict.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#portfolio" className="btn-secondary">
              {dict.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          {...(reduced
            ? {}
            : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.8, delay: 0.3 },
              })}
        >
          <ScanPrintAnimation
            scanLabel={dict.hero.scanLabel}
            printLabel={dict.hero.printLabel}
            title={dict.hero.animationAlt}
          />
        </motion.div>
      </div>
    </section>
  );
}
