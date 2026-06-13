import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand constants
        teal: {
          DEFAULT: "#14B8B1",
          bright: "#2BD4CC",
          deep: "#0E8F8A",
          ink: "#0A6661",
        },
        navy: { DEFAULT: "#0B1F33", 2: "#12273D", 3: "#1A3450" },
        mist: "#E8F4F3",
        paper: "#F7FAFA",
        ember: { DEFAULT: "#FF7A1A", deep: "#E5640A" },
        // Semantic, theme-aware (CSS vars set in globals.css)
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      maxWidth: {
        wrap: "76rem",
      },
      keyframes: {
        "scan-sweep": {
          "0%": { transform: "translateY(-8%)" },
          "100%": { transform: "translateY(108%)" },
        },
      },
      animation: {
        "scan-sweep": "scan-sweep 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
