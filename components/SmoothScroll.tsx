"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import "lenis/dist/lenis.css";
import type { ReactNode } from "react";

// Tuned for a *slight* slide: lerp is the per-frame catch-up factor — lower
// glides longer, higher snaps. 0.1 reads as a gentle, smooth ease without the
// page ever feeling heavy or laggy. Touch devices keep their native momentum
// (syncTouch off), which feels better than re-simulating it.
const LENIS_OPTIONS = {
  lerp: 0.1,
  smoothWheel: true,
  syncTouch: false,
} as const;

export function SmoothScroll({ children }: { children: ReactNode }) {
  // Respect the OS "reduce motion" setting — fall back to native scrolling.
  // useReducedMotion returns null during SSR/first paint, so smoothing is the
  // default and only disabled once we know the user opted out.
  const reduced = useReducedMotion();
  if (reduced) return <>{children}</>;

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
