import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder artwork ships as SVG; real photos (JPG/PNG/WebP) drop in
    // with zero config changes and get optimized automatically.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
