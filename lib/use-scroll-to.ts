"use client";

import { useCallback } from "react";

/**
 * Returns `scrollToId(id)`, which scrolls a section into view below the
 * sticky header.
 *
 * Pure native scrolling: `scroll-behavior: smooth` and `scroll-padding-top`
 * in globals.css supply the easing and the header clearance, and the
 * reduced-motion media query there flips the easing off automatically — so
 * `scrollIntoView` (behavior defaults to the element's computed
 * scroll-behavior) does the right thing without any JS scroll library.
 */
export function useScrollToId() {
  return useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ block: "start" });
  }, []);
}
