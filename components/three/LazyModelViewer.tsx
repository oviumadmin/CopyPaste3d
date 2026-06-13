"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

/**
 * Dynamic, client-only wrapper around ModelViewer. Keeps three.js out of
 * the initial bundle — it loads on demand (modal open, estimator upload,
 * AMS visualizer in view).
 */
export const LazyModelViewer = dynamic(
  () => import("./ModelViewer").then((m) => m.ModelViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-surface-2">
        <Loader2 className="h-6 w-6 animate-spin text-teal" aria-hidden />
      </div>
    ),
  }
);
