/**
 * QUOTE ESTIMATOR PRICING — the owner's tuning panel.
 *
 * Every number the estimator uses lives in this one object.
 * Edit the values, save, done. No other file needs to change.
 *
 * The estimate shown to the user is ALWAYS labelled as an estimate,
 * never a binding quote.
 */

export type MaterialId =
  | "PLA"
  | "PETG"
  | "ABS"
  | "ASA"
  | "TPU"
  | "PC"
  | "PA"
  | "CF"
  | "GF";

/** Currencies the estimate can be displayed in. Base prices are in PLN. */
export type Currency = "PLN" | "EUR";

/**
 * Approximate PLN per 1 EUR, used only to display the estimate in euros.
 * It's a rough display rate — the binding quote is always confirmed by us.
 */
export const PLN_PER_EUR = 4.3;

export const PRICING = {
  currency: "PLN",

  /** Fixed preparation fee per order (slicing, setup, first-layer check). */
  setupFee: 15,

  /** Price per cm³ of *deposited* material, by filament type. */
  materialRatePerCm3: {
    PLA: 0.5,
    PETG: 0.6,
    ABS: 0.65,
    ASA: 0.7,
    TPU: 0.95,
    PC: 1.1, // polycarbonate
    PA: 1.2, // nylon
    CF: 1.6, // carbon-fiber reinforced
    GF: 1.3, // glass-fiber reinforced
  } satisfies Record<MaterialId, number>,

  /**
   * How much of the model volume actually becomes plastic.
   * effective = volume × (shellFraction + (1 − shellFraction) × infill)
   * shellFraction ≈ walls + top/bottom on a typical part.
   */
  shellFraction: 0.25,

  /** Multi-color surcharges. */
  multiColor: {
    /** Flat fee per color beyond the first (extra spool handling). */
    perExtraColor: 12,
    /** Purge/waste per extra color, as a fraction of part volume. */
    wasteFractionPerExtraColor: 0.06,
    /** Multi-color prints are slower (tool changes, purging). */
    timeMultiplier: 1.6,
  },

  /** Print-time model. */
  time: {
    /** Average deposition speed on a typical part, cm³/h. */
    cm3PerHour: 14,
    /** Machine + supervision rate per print hour. */
    ratePerHour: 9,
    /** Fixed minutes added per print job (heat-up, removal, cleanup). */
    fixedMinutesPerJob: 20,
  },

  /** Per-piece discount steps by quantity (1 = no discount). */
  quantityDiscount: [
    { minQty: 10, factor: 0.85 },
    { minQty: 5, factor: 0.92 },
  ],

  /** No order goes below this. */
  minimumOrder: 30,

  /** The displayed range is price × (1 ± spread). */
  rangeSpread: 0.18,
} as const;

export interface EstimateInput {
  /** Model volume in cm³ (already multiplied by nothing — raw mesh volume). */
  volumeCm3: number;
  material: MaterialId;
  /** Total colors in the print (1 = single color). */
  colors: number;
  /** 0.1 – 1.0 */
  infill: number;
  quantity: number;
}

export interface Estimate {
  priceLow: number;
  priceHigh: number;
  pricePerPiece: number;
  printHoursPerPiece: number;
  totalHours: number;
  currency: string;
}

export function estimateQuote(input: EstimateInput): Estimate {
  const p = PRICING;
  const colors = Math.max(1, Math.round(input.colors));
  const extraColors = colors - 1;
  const infill = Math.min(1, Math.max(0.1, input.infill));
  const qty = Math.max(1, Math.round(input.quantity));

  // Deposited material per piece, incl. multi-color purge waste.
  const solidFraction = p.shellFraction + (1 - p.shellFraction) * infill;
  const waste =
    extraColors * p.multiColor.wasteFractionPerExtraColor * input.volumeCm3;
  const depositedCm3 = input.volumeCm3 * solidFraction + waste;

  const materialCost = depositedCm3 * p.materialRatePerCm3[input.material];

  const baseHours = depositedCm3 / p.time.cm3PerHour;
  const hoursPerPiece =
    baseHours * (extraColors > 0 ? p.multiColor.timeMultiplier : 1) +
    p.time.fixedMinutesPerJob / 60;
  const timeCost = hoursPerPiece * p.time.ratePerHour;

  const colorFee = extraColors * p.multiColor.perExtraColor;

  let perPiece = materialCost + timeCost;
  const discount =
    p.quantityDiscount.find((d) => qty >= d.minQty)?.factor ?? 1;
  perPiece *= discount;

  let total = p.setupFee + colorFee + perPiece * qty;
  total = Math.max(total, p.minimumOrder);

  return {
    priceLow: round2(total * (1 - p.rangeSpread)),
    priceHigh: round2(total * (1 + p.rangeSpread)),
    pricePerPiece: round2(perPiece),
    printHoursPerPiece: round2(hoursPerPiece),
    totalHours: round2(hoursPerPiece * qty),
    currency: p.currency,
  };
}

const round2 = (n: number) => Math.round(n * 100) / 100;

export function formatPrice(
  n: number,
  locale: string,
  currency: Currency = "PLN"
) {
  const intlLocale =
    locale === "pl" ? "pl-PL" : locale === "de" ? "de-DE" : "en-GB";
  // Base prices are PLN; convert for display when euros are requested.
  const amount = currency === "EUR" ? n / PLN_PER_EUR : n;
  return new Intl.NumberFormat(intlLocale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatHours(h: number, locale: string): string {
  if (h < 1) return `${Math.max(5, Math.round(h * 60))} min`;
  const whole = Math.floor(h);
  const mins = Math.round((h - whole) * 60);
  const hUnit = locale === "pl" ? "godz." : locale === "de" ? "Std." : "h";
  return mins > 0 ? `${whole} ${hUnit} ${mins} min` : `${whole} ${hUnit}`;
}
