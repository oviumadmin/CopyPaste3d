"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n";

/** Slim dark bar above the nav, rotating short messages. */
export function AnnouncementBar({ dict }: { dict: Dictionary }) {
  const messages = dict.announcement.messages;
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced || messages.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % messages.length),
      5000
    );
    return () => clearInterval(id);
  }, [reduced, messages.length]);

  return (
    <div
      className="relative z-50 bg-navy text-mist"
      role="status"
      aria-live="polite"
    >
      <div className="section-wrap flex h-9 items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <m.p
            key={index}
            initial={reduced ? false : { y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduced ? undefined : { y: -14, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="truncate text-center font-mono text-[11px] tracking-wide sm:text-xs"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-teal align-middle" />
            {messages[index]}
          </m.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
