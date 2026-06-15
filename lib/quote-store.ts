"use client";

import { useSyncExternalStore } from "react";
import type { Currency, MaterialId } from "./pricing";

/**
 * Tiny client-side store that hands the estimator's file + parameters
 * to the contact form ("Send for an exact quote" flow). No dependencies.
 */

export interface QuoteHandoff {
  file: File;
  summary: {
    material: MaterialId;
    colors: number;
    infillPct: number;
    quantity: number;
    volumeCm3: number | null;
    priceLow: number | null;
    priceHigh: number | null;
    currency: Currency;
  };
}

let current: QuoteHandoff | null = null;
const listeners = new Set<() => void>();

export function setQuoteHandoff(handoff: QuoteHandoff | null) {
  current = handoff;
  listeners.forEach((fn) => fn());
}

export function useQuoteHandoff(): QuoteHandoff | null {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => current,
    () => null
  );
}
