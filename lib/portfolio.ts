/**
 * Portfolio items. Titles/blurbs come from the dictionary (same order!);
 * this file holds the non-translatable config: category, media, demo models.
 *
 * TO SWAP IN REAL PHOTOS: drop files into /public/portfolio and update
 * `image` / `imageBefore` / `imageAfter` paths below.
 */

export type PortfolioCategory =
  | "figurines"
  | "parts"
  | "prototypes"
  | "repairs"
  | "scans";

export type PortfolioMedia =
  | { kind: "viewer"; demoModel: DemoModel; image: string }
  | { kind: "compare"; imageBefore: string; imageAfter: string; image: string }
  | { kind: "image"; image: string };

/** Procedural demo geometry shown until real STL scans are supplied. */
export type DemoModel = "figurine" | "bracket" | "knob" | "knot";

export interface PortfolioItem {
  id: string;
  category: PortfolioCategory;
  media: PortfolioMedia;
  /** Accent colors used on the demo model / card chip. */
  colors: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "wedding-figurine",
    category: "figurines",
    media: {
      kind: "viewer",
      demoModel: "figurine",
      image: "/portfolio/figurine.svg",
    },
    colors: ["#14B8B1", "#FF7A1A", "#E8F4F3"],
  },
  {
    id: "lever-handle",
    category: "parts",
    media: {
      kind: "compare",
      imageBefore: "/portfolio/handle-before.svg",
      imageAfter: "/portfolio/handle-after.svg",
      image: "/portfolio/handle-after.svg",
    },
    colors: ["#12273D"],
  },
  {
    id: "controller-housing",
    category: "prototypes",
    media: {
      kind: "viewer",
      demoModel: "bracket",
      image: "/portfolio/housing.svg",
    },
    colors: ["#14B8B1", "#0B1F33"],
  },
  {
    id: "grinder-knob",
    category: "repairs",
    media: {
      kind: "compare",
      imageBefore: "/portfolio/knob-before.svg",
      imageAfter: "/portfolio/knob-after.svg",
      image: "/portfolio/knob-after.svg",
    },
    colors: ["#1A3450"],
  },
  {
    id: "sculpture-scan",
    category: "scans",
    media: {
      kind: "viewer",
      demoModel: "knot",
      image: "/portfolio/sculpture.svg",
    },
    colors: ["#2BD4CC"],
  },
  {
    id: "desk-logo",
    category: "figurines",
    media: { kind: "image", image: "/portfolio/desk-logo.svg" },
    colors: ["#14B8B1", "#FF7A1A", "#E8F4F3", "#0B1F33"],
  },
];
