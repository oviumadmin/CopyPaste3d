import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Prefer AVIF (then WebP) — next/image transcodes the source JPG/PNG/WebP
    // on demand, serving ~30-50% smaller bytes to browsers that support it
    // and falling back automatically for those that don't.
    formats: ["image/avif", "image/webp"],
    // Placeholder artwork ships as SVG; real photos (JPG/PNG/WebP) drop in
    // with zero config changes and get optimized automatically.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
