"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only the DOM-animation feature set of Framer Motion and exposes it to
 * the lightweight `m` components used throughout the app. Pairing `LazyMotion`
 * + `m` (instead of the all-in-one `motion`) keeps the initial JS bundle small:
 * `m` ships almost nothing on its own and the ~15 kB `domAnimation` features
 * (animations, variants, exit, hover/tap/focus + whileInView) load once here.
 *
 * `strict` makes the heavy `motion` component throw if it sneaks back in, so we
 * can't silently re-bundle the full feature set.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
