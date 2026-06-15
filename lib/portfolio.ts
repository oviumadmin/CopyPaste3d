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
      image: "/portfolio/sculpture.webp",
    },
    colors: ["#E8F4F3", "#12273D"],
  },
  {
    id: "lever-handle",
    category: "repairs",
    media: { kind: "image", image: "/portfolio/handlebeforeandafter.webp" },
    colors: ["#3A4654", "#12273D"],
  },
  {
    id: "controller-housing",
    category: "prototypes",
    media: {
      kind: "viewer",
      demoModel: "bracket",
      image: "/portfolio/housing.webp",
    },
    colors: ["#9CA3AF", "#4B5563"],
  },
  {
    id: "cad-clamp",
    category: "prototypes",
    media: { kind: "image", image: "/portfolio/desklogo.webp" },
    colors: ["#14B8B1", "#0B1F33"],
  },
  {
    id: "sculpture-scan",
    category: "scans",
    media: {
      kind: "viewer",
      demoModel: "knot",
      image: "/portfolio/scanning.webp",
    },
    colors: ["#2BD4CC", "#3B5BFF"],
  },
  {
    id: "two-color-part",
    category: "parts",
    media: { kind: "image", image: "/portfolio/part.webp" },
    colors: ["#14B8B1", "#FF7A1A"],
  },
];
