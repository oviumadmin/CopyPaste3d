"use client";

import { useSyncExternalStore } from "react";

/**
 * Tiny client-side store that hands a file from the hero drop-zone to the
 * full Estimator section. The hero captures the upload (zero scroll on
 * landing); the Estimator watches this store, runs its parse → preview →
 * price flow, and the page smooth-scrolls down to it. Mirrors quote-store.
 */

let current: File | null = null;
const listeners = new Set<() => void>();

export function setPendingUpload(file: File | null) {
  current = file;
  listeners.forEach((fn) => fn());
}

export function usePendingUpload(): File | null {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => current,
    () => null
  );
}
