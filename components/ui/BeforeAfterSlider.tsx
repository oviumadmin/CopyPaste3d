"use client";

import { useRef, useState } from "react";
import Image from "next/image";

/**
 * Draggable original-vs-print comparison.
 * The control is a real <input type="range"> stretched over the image,
 * so it works with keyboard, touch and screen readers out of the box.
 */
export function BeforeAfterSlider({
  before,
  after,
  beforeLabel,
  afterLabel,
  hint,
}: {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
  hint: string;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <figure>
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-line bg-surface-2"
      >
        {/* after (full) */}
        <Image
          src={after}
          alt={afterLabel}
          fill
          sizes="(max-width: 768px) 100vw, 640px"
          className="object-cover"
          draggable={false}
        />
        {/* before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          aria-hidden
        >
          <Image
            src={before}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* divider + handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-teal shadow-[0_0_12px_rgba(20,184,177,0.8)]"
          style={{ left: `${pos}%` }}
          aria-hidden
        >
          <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-teal bg-navy text-teal">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M8.5 5 2 12l6.5 7v-4.5h7V19L22 12l-6.5-7v4.5h-7V5Z" />
            </svg>
          </span>
        </div>

        {/* labels */}
        <span className="absolute left-3 top-3 rounded-full bg-navy/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-mist">
          {beforeLabel}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-teal/90 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-navy">
          {afterLabel}
        </span>

        {/* invisible range input = the actual control */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`${beforeLabel} / ${afterLabel}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-2 text-center font-mono text-[11px] text-muted">
        {hint}
      </figcaption>
    </figure>
  );
}
