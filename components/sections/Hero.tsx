"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { UploadCloud, Clock, MapPin, Layers, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { setPendingUpload } from "@/lib/upload-store";

/**
 * Full-bleed cinematic hero. The background image carries the signature
 * scan→print idea (wireframe dissolving into a printed part); a navy scrim
 * keeps the left-aligned copy legible in either theme, and a one-time
 * scan-line sweep nods to the motif on load (skipped under reduced motion).
 *
 * The hero's right column is the primary conversion lever: the upload
 * drop-zone. Dropping a file here hands it to the full Estimator section
 * (via upload-store) and smooth-scrolls to it — the quote flow starts with
 * zero scrolling and zero clicks. A trust strip under the copy answers the
 * "is it safe to upload my design?" hesitation right next to the drop-zone.
 *
 * IMAGE SLOT: save the hero render as `public/hero/hero.jpg`
 * (≥1600px wide, dark, subject weighted to the right). Until then the
 * navy gradient fallback shows and the hero still reads as intentional.
 */
export function Hero({ dict }: { dict: Dictionary }) {
  const reduced = useReducedMotion();
  const [dragging, setDragging] = useState(false);

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

  // Stash the file for the Estimator and scroll down to it. The Estimator
  // validates format/size and runs the parse — the hero just captures.
  const handleFile = useCallback((file: File) => {
    setPendingUpload(file);
    document
      .getElementById("estimator")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const trust = [
    { icon: Clock, label: dict.hero.trust.turnaround },
    { icon: MapPin, label: dict.hero.trust.location },
    { icon: Layers, label: dict.hero.trust.materials },
    { icon: ShieldCheck, label: dict.hero.trust.privacy },
  ];

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
        <div className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          {/* left: copy + trust strip */}
          <div className="max-w-xl">
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
              className="mt-5 max-w-lg text-base leading-relaxed text-mist/80 sm:text-lg"
            >
              {dict.hero.lead}
            </motion.p>

            {/* trust strip — answers "is it safe to upload?" next to the drop-zone */}
            <motion.ul
              {...enter(0.34)}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5"
            >
              {trust.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 text-sm text-mist/80"
                >
                  <Icon className="h-4 w-4 shrink-0 text-teal" aria-hidden />
                  {label}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* right: the primary action — upload drop-zone */}
          <motion.div {...enter(0.24)}>
            <label
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
              className={`group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed bg-navy/40 p-8 text-center backdrop-blur-sm transition-colors sm:p-10 ${
                dragging
                  ? "border-teal bg-teal/10"
                  : "border-mist/30 hover:border-teal"
              }`}
            >
              <input
                type="file"
                accept=".stl,.3mf,.obj,.step,.stp"
                className="sr-only"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleFile(f);
                }}
              />
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/15 text-teal">
                <UploadCloud className="h-7 w-7" aria-hidden />
              </span>
              <p className="font-display text-xl font-semibold text-ink">
                {dict.estimator.dropTitle}
              </p>
              <p className="text-sm text-mist/70">
                {dict.estimator.dropOr}{" "}
                <span className="font-medium text-teal underline">
                  {dict.estimator.browse}
                </span>
              </p>
              <p className="mt-1 font-mono text-[11px] text-mist/60">
                {dict.estimator.dropFormats}
              </p>
            </label>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
