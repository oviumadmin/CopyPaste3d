"use client";

import { useCallback } from "react";
import { useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";

/**
 * Sticky-header clearance, in px. Mirrors the html `scroll-padding-top`
 * (6.5rem) in globals.css so Lenis lands sections in the same spot the
 * native fallback does.
 */
const HEADER_OFFSET = 104;

/**
 * Returns `scrollToId(id)`, which scrolls a section into view below the
 * sticky header.
 *
 * When Lenis smooth-scroll is mounted we MUST drive the jump through
 * `lenis.scrollTo` — a raw `Element.scrollIntoView` fights Lenis's rAF loop,
 * which reads the scroll position every frame and snaps it straight back to 0.
 * When Lenis is absent (reduced-motion users get native scrolling, so the
 * provider isn't rendered) `useLenis` returns null and we fall back to the
 * native API, where `scroll-padding-top` supplies the offset.
 */
export function useScrollToId() {
  const lenis = useLenis();
  const reduced = useReducedMotion();

  return useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (lenis) {
        lenis.scrollTo(el, { offset: -HEADER_OFFSET });
      } else {
        el.scrollIntoView({
          behavior: reduced ? "auto" : "smooth",
          block: "start",
        });
      }
    },
    [lenis, reduced]
  );
}
