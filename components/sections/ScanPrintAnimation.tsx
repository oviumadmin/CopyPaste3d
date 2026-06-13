"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * THE SIGNATURE ELEMENT — scan → print duplication.
 *
 * Left object: the "original", rendered as a sliced wireframe, swept
 * top-to-bottom by a scanning beam. A dashed data stream carries it across
 * the gap. Right object: the "copy", printing itself bottom-up in layers,
 * a print head stepping upward as it grows. One ember layer hints at
 * multi-color printing. Loops every 7 s.
 *
 * Under prefers-reduced-motion the same scene renders as a static frame:
 * original + finished copy, no animation.
 */

// ---- isometric slice geometry -------------------------------------------
const A = 72; // half-width of the cube
const B = 34; // iso half-diagonal of the top face
const SLICE_H = 18;
const SLICES = 6;
const BASE_Y = 286; // bottom of both cubes
const LEFT_CX = 168;
const RIGHT_CX = 512;

function slicePolys(cx: number, k: number) {
  const y0 = BASE_Y - k * SLICE_H; // bottom of the slab
  const y1 = y0 - SLICE_H; // top of the slab
  const pts = (arr: [number, number][]) =>
    arr.map(([x, y]) => `${cx + x},${y}`).join(" ");
  return {
    top: pts([
      [0, y1 - B],
      [A, y1],
      [0, y1 + B],
      [-A, y1],
    ]),
    left: pts([
      [-A, y1],
      [0, y1 + B],
      [0, y0 + B],
      [-A, y0],
    ]),
    right: pts([
      [0, y1 + B],
      [A, y1],
      [A, y0],
      [0, y0 + B],
    ]),
  };
}

/** Darken a hex color by factor f (0..1). */
function shade(hex: string, f: number): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.round(((n >> 16) & 255) * f);
  const g = Math.round(((n >> 8) & 255) * f);
  const b = Math.round((n & 255) * f);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

/** Layer palette, bottom → top. Slice 3 is ember: the multi-color wink. */
const LAYER_COLORS = [
  "#0E8F8A",
  "#14B8B1",
  "#2BD4CC",
  "#FF7A1A",
  "#2BD4CC",
  "#14B8B1",
];

// ---- timing (fractions of one cycle) -------------------------------------
const CYCLE = 7;
const SCAN_START = 0.04;
const SCAN_END = 0.34;
const STREAM_START = 0.3;
const STREAM_END = 0.52;
const BUILD_START = 0.4;
const BUILD_STEP = 0.065;
const HOLD_END = 0.93;

const sliceAppear = (k: number) => BUILD_START + k * BUILD_STEP;

const SCAN_TOP = BASE_Y - SLICES * SLICE_H - B - 14;
const SCAN_BOTTOM = BASE_Y + B + 10;

// Print-head step keyframes: arrive above slice k as it appears, lift away
// at the end of the cycle.
const headY = (k: number) => BASE_Y - (k + 1) * SLICE_H - B - 10;
const HEAD_Y: number[] = [headY(0), headY(0)];
const HEAD_TIMES: number[] = [0, sliceAppear(0)];
for (let k = 1; k < SLICES; k++) {
  HEAD_Y.push(headY(k - 1), headY(k));
  HEAD_TIMES.push(sliceAppear(k) - 0.02, sliceAppear(k) + 0.02);
}
HEAD_Y.push(headY(SLICES - 1), SCAN_TOP - 20);
HEAD_TIMES.push(HOLD_END - 0.05, 1);
const HEAD_OPACITY = HEAD_Y.map((_, i) =>
  i === 0 || i === HEAD_Y.length - 1 ? 0 : 1
);

export function ScanPrintAnimation({
  scanLabel,
  printLabel,
  title,
}: {
  scanLabel: string;
  printLabel: string;
  title: string;
}) {
  const reduced = useReducedMotion();

  const leftSlices = Array.from({ length: SLICES }, (_, k) =>
    slicePolys(LEFT_CX, k)
  );
  const rightSlices = Array.from({ length: SLICES }, (_, k) =>
    slicePolys(RIGHT_CX, k)
  );

  const streamY = BASE_Y - (SLICES * SLICE_H) / 2 - 6;

  return (
    <svg
      viewBox="0 0 680 380"
      role="img"
      aria-label={title}
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="scan-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2BD4CC" stopOpacity="0" />
          <stop offset="100%" stopColor="#2BD4CC" stopOpacity="0.28" />
        </linearGradient>
        <filter id="beam-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>

      {/* ground line */}
      <line
        x1="40"
        y1={BASE_Y + B + 18}
        x2="640"
        y2={BASE_Y + B + 18}
        stroke="var(--line)"
        strokeWidth="1"
      />

      {/* ---------------- left: the original, being scanned -------------- */}
      <g>
        {leftSlices.map((s, k) => (
          <g
            key={k}
            fill="none"
            stroke="#14B8B1"
            strokeOpacity="0.55"
            strokeWidth="1.2"
          >
            <polygon points={s.top} fill="rgba(20,184,177,0.05)" />
            <polygon points={s.left} fill="rgba(20,184,177,0.03)" />
            <polygon points={s.right} fill="rgba(20,184,177,0.08)" />
          </g>
        ))}

        {!reduced && (
          <motion.g
            initial={false}
            animate={{
              y: [SCAN_TOP, SCAN_TOP, SCAN_BOTTOM, SCAN_BOTTOM, SCAN_BOTTOM],
              opacity: [0, 1, 1, 0, 0],
            }}
            transition={{
              duration: CYCLE,
              times: [0, SCAN_START, SCAN_END, SCAN_END + 0.05, 1],
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* beam sits at y=0 inside this group; the group is translated */}
            <rect
              x={LEFT_CX - A - 18}
              y={-26}
              width={2 * A + 36}
              height={26}
              fill="url(#scan-glow)"
            />
            <line
              x1={LEFT_CX - A - 18}
              y1="0"
              x2={LEFT_CX + A + 18}
              y2="0"
              stroke="#2BD4CC"
              strokeWidth="2.5"
              filter="url(#beam-blur)"
            />
            <line
              x1={LEFT_CX - A - 18}
              y1="0"
              x2={LEFT_CX + A + 18}
              y2="0"
              stroke="#E8F4F3"
              strokeWidth="0.8"
            />
          </motion.g>
        )}
      </g>

      {/* ---------------- data stream: original → copy ------------------- */}
      {reduced ? (
        <g>
          <line
            x1={LEFT_CX + A + 24}
            y1={streamY}
            x2={RIGHT_CX - A - 30}
            y2={streamY}
            stroke="#14B8B1"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <path
            d={`M ${RIGHT_CX - A - 30} ${streamY - 5} l 10 5 -10 5 Z`}
            fill="#14B8B1"
          />
        </g>
      ) : (
        <motion.g
          initial={false}
          animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
          transition={{
            duration: CYCLE,
            times: [
              0,
              STREAM_START - 0.03,
              STREAM_START,
              STREAM_END,
              STREAM_END + 0.05,
              1,
            ],
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.line
            x1={LEFT_CX + A + 24}
            y1={streamY}
            x2={RIGHT_CX - A - 30}
            y2={streamY}
            stroke="#14B8B1"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            initial={false}
            animate={{ strokeDashoffset: [0, -84] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          />
          <path
            d={`M ${RIGHT_CX - A - 30} ${streamY - 5} l 10 5 -10 5 Z`}
            fill="#14B8B1"
          />
        </motion.g>
      )}

      {/* ---------------- right: the copy, printing in -------------------- */}
      <g>
        {rightSlices.map((s, k) => {
          const base = LAYER_COLORS[k];
          const polys = (
            <>
              <polygon points={s.top} fill={base} />
              <polygon points={s.left} fill={shade(base, 0.55)} />
              <polygon points={s.right} fill={shade(base, 0.78)} />
            </>
          );
          if (reduced) return <g key={k}>{polys}</g>;
          const t = sliceAppear(k);
          return (
            <motion.g
              key={k}
              initial={false}
              animate={{
                opacity: [0, 0, 1, 1, 0],
                y: [6, 6, 0, 0, 0],
              }}
              transition={{
                duration: CYCLE,
                times: [0, t, t + 0.035, HOLD_END, 1],
                repeat: Infinity,
                ease: "easeOut",
              }}
            >
              {polys}
            </motion.g>
          );
        })}

        {/* print head stepping up as layers appear */}
        {!reduced && (
          <motion.g
            initial={false}
            animate={{ y: HEAD_Y, opacity: HEAD_OPACITY }}
            transition={{
              duration: CYCLE,
              times: HEAD_TIMES,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <line
              x1={RIGHT_CX - A - 14}
              y1="0"
              x2={RIGHT_CX + A + 14}
              y2="0"
              stroke="var(--ink)"
              strokeOpacity="0.45"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* nozzle */}
            <path d={`M ${RIGHT_CX - 7} 1 h 14 l -5 9 h -4 Z`} fill="#FF7A1A" />
            <circle cx={RIGHT_CX} cy="13" r="1.8" fill="#2BD4CC" />
          </motion.g>
        )}
      </g>

      {/* captions */}
      <g
        fontFamily="var(--font-mono)"
        fontSize="12"
        letterSpacing="0.2em"
        fill="var(--muted)"
        textAnchor="middle"
      >
        <text x={LEFT_CX} y={BASE_Y + B + 44}>
          ⌜{scanLabel}⌟
        </text>
        <text x={RIGHT_CX} y={BASE_Y + B + 44}>
          ⌜{printLabel}⌟
        </text>
      </g>
    </svg>
  );
}
