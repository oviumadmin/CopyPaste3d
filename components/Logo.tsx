/**
 * LOGO SLOT — replace with the final SVG when supplied.
 * Until then: the brand mark drawn to spec (teal layered hexagon/cube
 * inside a navy ring) + wordmark set in the display face.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* ring */}
      <circle cx="24" cy="24" r="21.5" stroke="currentColor" strokeWidth="3" />
      {/* layered iso-cube: three slices, bottom to top */}
      {/* slice 1 (bottom) */}
      <path d="M24 36.5 13.5 30.5v-4l10.5 6 10.5-6v4L24 36.5Z" fill="#0E8F8A" />
      {/* slice 2 */}
      <path d="M24 30.5 13.5 24.5v-4l10.5 6 10.5-6v4L24 30.5Z" fill="#14B8B1" />
      {/* slice 3 (top) — full cube top */}
      <path d="M13.5 18.5 24 12.5l10.5 6-10.5 6-10.5-6Z" fill="#2BD4CC" />
      <path d="M24 24.5 13.5 18.5v-2l10.5 6 10.5-6v2L24 24.5Z" fill="#14B8B1" />
    </svg>
  );
}

export function Logo({
  compact = false,
  hideWordmarkOnMobile = false,
}: {
  compact?: boolean;
  /** Drop the wordmark below ~440px so the header fits on small phones. */
  hideWordmarkOnMobile?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className="h-9 w-9 text-navy dark:text-teal" />
      {!compact && (
        <span
          className={`font-display text-lg font-semibold tracking-tight text-ink${
            hideWordmarkOnMobile ? " hidden min-[440px]:inline" : ""
          }`}
        >
          Copy<span className="text-teal">Paste</span>3D
        </span>
      )}
    </span>
  );
}
