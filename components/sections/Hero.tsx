"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

/**
 * Full-bleed cinematic hero. The background image carries the signature
 * scan→print idea (wireframe dissolving into a printed part); a navy scrim
 * keeps the left-aligned copy legible in either theme, and a one-time
 * scan-line sweep nods to the motif on load (skipped under reduced motion).
 *
 * IMAGE SLOT: save the hero render as `public/hero/hero.jpg`
 * (≥1600px wide, dark, subject weighted to the right). Until then the
 * navy gradient fallback shows and the hero still reads as intentional.
 */
export function Hero({ dict }: { dict: Dictionary }) {
  const reduced = useReducedMotion();

  const enter = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.65,
            delay,
            ease: [0.21, 0.65, 0.36, 1] as const,
          },
        };

  return (
    <section className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-navy sm:min-h-[680px] lg:min-h-[88vh]">
      {/* background image (fallback: navy gradient + blueprint grid) */}
      <div className="blueprint-grid absolute inset-0 -z-10 bg-gradient-to-br from-navy via-navy-2 to-navy">
        <Image
          src="/hero/hero.jpg"
          alt={dict.hero.animationAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center]"
        />
      </div>

      {/* scrims: darken left for text, ground the bottom edge */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/80 to-navy/10 sm:to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy to-transparent"
      />

      {/* one-time scan-line sweep — the signature motif, subtle */}
      {!reduced && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -z-10 h-24"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(43,212,204,0.18) 60%, rgba(43,212,204,0.55))",
          }}
          initial={{ top: "-12%", opacity: 0 }}
          animate={{ top: ["-12%", "112%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.1, delay: 0.5, ease: "easeInOut" }}
        />
      )}

      {/* content — forced dark scope so copy stays light over the image */}
      <div className="dark section-wrap relative w-full">
        <div className="max-w-2xl py-16 sm:py-20">
          <motion.p {...enter(0)} className="kicker">
            {dict.hero.kicker}
          </motion.p>
          <motion.h1
            {...enter(0.08)}
            className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink drop-shadow-[0_2px_24px_rgba(11,31,51,0.6)] sm:text-5xl lg:text-6xl"
          >
            {dict.hero.title}
          </motion.h1>
          <motion.p
            {...enter(0.16)}
            className="mt-5 max-w-xl text-base leading-relaxed text-mist/80 sm:text-lg"
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
            <a
              href="#portfolio"
              className="btn-secondary border-mist/30 text-mist hover:border-teal hover:text-teal"
            >
              {dict.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
