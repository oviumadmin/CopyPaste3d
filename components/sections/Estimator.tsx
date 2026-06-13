"use client";

import { useCallback, useRef, useState } from "react";
import {
  UploadCloud,
  FileBox,
  Loader2,
  X,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import {
  estimateQuote,
  formatPrice,
  formatHours,
  type Estimate,
  type MaterialId,
} from "@/lib/pricing";
import type { MeshStats } from "@/lib/mesh";
import { setQuoteHandoff } from "@/lib/quote-store";
import type { Object3D } from "three";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { LazyModelViewer } from "../three/LazyModelViewer";

const MATERIALS: MaterialId[] = [
  "PLA",
  "PETG",
  "ABS",
  "ASA",
  "TPU",
  "PC",
  "PA",
  "CF",
  "GF",
];
const MAX_BYTES = 50 * 1024 * 1024;

type Status =
  | { kind: "empty" }
  | { kind: "parsing" }
  | { kind: "step"; fileName: string }
  | { kind: "ready"; fileName: string; stats: MeshStats; object: Object3D }
  | { kind: "error"; message: string };

export function Estimator({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const t = dict.estimator;
  const [status, setStatus] = useState<Status>({ kind: "empty" });
  const [dragging, setDragging] = useState(false);
  const [sent, setSent] = useState(false);
  const fileRef = useRef<File | null>(null);

  // controls
  const [material, setMaterial] = useState<MaterialId>("PLA");
  const [colors, setColors] = useState(1);
  const [infill, setInfill] = useState(20);
  const [quantity, setQuantity] = useState(1);

  const handleFile = useCallback(
    async (file: File) => {
      setSent(false);
      fileRef.current = file;
      if (file.size > MAX_BYTES) {
        setStatus({ kind: "error", message: t.fileTooLarge });
        return;
      }
      // three.js + loaders load only now, on first upload — not in the
      // initial page bundle.
      const { detectFormat, parseModelFile } = await import("@/lib/mesh");
      const format = detectFormat(file.name);
      if (!format) {
        setStatus({ kind: "error", message: t.parseError });
        return;
      }
      if (format === "step") {
        setStatus({ kind: "step", fileName: file.name });
        return;
      }
      setStatus({ kind: "parsing" });
      try {
        const { object, stats } = await parseModelFile(file);
        setStatus({ kind: "ready", fileName: file.name, stats, object });
      } catch {
        setStatus({ kind: "error", message: t.parseError });
      }
    },
    [t]
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const reset = () => {
    fileRef.current = null;
    setStatus({ kind: "empty" });
    setSent(false);
  };

  const stats = status.kind === "ready" ? status.stats : null;
  const estimate: Estimate | null = stats
    ? estimateQuote({
        volumeCm3: stats.volumeCm3,
        material,
        colors,
        infill: infill / 100,
        quantity,
      })
    : null;

  const sendToContact = () => {
    if (!fileRef.current) return;
    setQuoteHandoff({
      file: fileRef.current,
      summary: {
        material,
        colors,
        infillPct: infill,
        quantity,
        volumeCm3: stats?.volumeCm3 ?? null,
        priceLow: estimate?.priceLow ?? null,
        priceHigh: estimate?.priceHigh ?? null,
      },
    });
    setSent(true);
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="estimator"
      className="scroll-mt-24 py-20 sm:py-24"
    >
      <div className="section-wrap">
        <SectionHeader kicker={t.kicker} title={t.title} lead={t.lead} />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* LEFT: upload + preview */}
          <Reveal>
            <div className="card flex h-full flex-col overflow-hidden">
              {status.kind === "ready" ? (
                <div className="relative aspect-[4/3] w-full bg-surface-2">
                  <LazyModelViewer object={status.object} autoRotate />
                  <button
                    onClick={reset}
                    aria-label={t.removeFile}
                    className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy/80 text-mist hover:bg-navy"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <label
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragging(true);
                  }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={onDrop}
                  className={`flex aspect-[4/3] w-full cursor-pointer flex-col items-center justify-center gap-3 border-2 border-dashed p-6 text-center transition-colors ${
                    dragging
                      ? "border-teal bg-teal/5"
                      : "border-line hover:border-teal/60"
                  }`}
                >
                  <input
                    type="file"
                    accept=".stl,.3mf,.obj,.step,.stp"
                    className="sr-only"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) handleFile(f);
                    }}
                  />
                  {status.kind === "parsing" ? (
                    <>
                      <Loader2 className="h-9 w-9 animate-spin text-teal" />
                      <p className="text-sm text-muted">{t.parsing}</p>
                    </>
                  ) : status.kind === "step" ? (
                    <>
                      <FileBox className="h-9 w-9 text-teal" />
                      <p className="font-display text-base font-semibold text-ink">
                        {status.fileName}
                      </p>
                      <p className="max-w-xs text-sm text-muted">
                        {t.stepNotice}
                      </p>
                    </>
                  ) : status.kind === "error" ? (
                    <>
                      <AlertCircle className="h-9 w-9 text-ember" />
                      <p className="max-w-xs text-sm text-muted">
                        {status.message}
                      </p>
                      <span className="font-mono text-xs text-teal">
                        {t.browse}
                      </span>
                    </>
                  ) : (
                    <>
                      <UploadCloud className="h-10 w-10 text-teal" />
                      <p className="font-display text-lg font-semibold text-ink">
                        {t.dropTitle}
                      </p>
                      <p className="text-sm text-muted">
                        {t.dropOr}{" "}
                        <span className="font-medium text-teal underline">
                          {t.browse}
                        </span>
                      </p>
                      <p className="mt-1 font-mono text-[11px] text-muted">
                        {t.dropFormats}
                      </p>
                    </>
                  )}
                </label>
              )}

              {/* stats readout */}
              {stats && (
                <dl className="grid grid-cols-3 divide-x divide-line border-t border-line text-center">
                  <Stat
                    label={t.dimensions}
                    value={`${fmt(stats.size.x)}×${fmt(stats.size.y)}×${fmt(
                      stats.size.z
                    )}`}
                    unit="mm"
                  />
                  <Stat
                    label={t.volume}
                    value={fmt(stats.volumeCm3)}
                    unit="cm³"
                  />
                  <Stat
                    label={t.triangles}
                    value={stats.triangles.toLocaleString(locale)}
                  />
                </dl>
              )}
              {stats && (
                <p className="border-t border-line px-4 py-2 text-center font-mono text-[10px] text-muted">
                  {t.unitsNote}
                </p>
              )}
            </div>
          </Reveal>

          {/* RIGHT: controls + result */}
          <Reveal delay={0.1}>
            <div className="card flex h-full flex-col p-6">
              {status.kind === "empty" || status.kind === "error" ? (
                <div className="flex flex-1 flex-col items-center justify-center text-center">
                  <p className="max-w-xs text-sm text-muted">{t.emptyState}</p>
                </div>
              ) : (
                <div className="flex h-full flex-col gap-5">
                  {/* material */}
                  <Control label={t.controls.material}>
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                      {MATERIALS.map((m) => (
                        <button
                          key={m}
                          onClick={() => setMaterial(m)}
                          aria-pressed={material === m}
                          className={`rounded-xl border py-2.5 font-mono text-sm font-medium transition-colors ${
                            material === m
                              ? "border-teal bg-teal/10 text-teal"
                              : "border-line text-muted hover:border-teal/50"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </Control>

                  {/* colors */}
                  <Control
                    label={t.controls.colors}
                    hint={t.controls.colorsHint}
                  >
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((n) => (
                        <button
                          key={n}
                          onClick={() => setColors(n)}
                          aria-pressed={colors === n}
                          className={`rounded-xl border py-2.5 text-sm font-medium transition-colors ${
                            colors === n
                              ? "border-teal bg-teal/10 text-teal"
                              : "border-line text-muted hover:border-teal/50"
                          }`}
                        >
                          {n === 1 ? "1" : `${n}×`}
                        </button>
                      ))}
                    </div>
                  </Control>

                  {/* infill */}
                  <Control label={`${t.controls.infill} — ${infill}%`}>
                    <input
                      type="range"
                      min={10}
                      max={100}
                      step={5}
                      value={infill}
                      onChange={(e) => setInfill(Number(e.target.value))}
                      className="h-2 w-full cursor-pointer appearance-none rounded-full bg-surface-2 accent-teal"
                      aria-label={t.controls.infill}
                    />
                  </Control>

                  {/* quantity */}
                  <Control label={t.controls.quantity}>
                    <input
                      type="number"
                      min={1}
                      max={999}
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(
                          Math.max(1, Math.min(999, Number(e.target.value) || 1))
                        )
                      }
                      className="h-11 w-28 rounded-xl border border-line bg-bg px-4 text-sm text-ink focus:border-teal"
                    />
                  </Control>

                  {/* result */}
                  {estimate && (
                    <div className="mt-auto rounded-2xl border border-teal/30 bg-teal/5 p-5">
                      <div className="flex flex-wrap items-end justify-between gap-3">
                        <div>
                          <p className="readout">{t.result.estimateLabel}</p>
                          <p className="font-display text-3xl font-bold text-ink">
                            {formatPrice(estimate.priceLow, locale)}
                            <span className="text-muted"> – </span>
                            {formatPrice(estimate.priceHigh, locale)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="readout">{t.result.timeLabel}</p>
                          <p className="font-display text-lg font-semibold text-ink">
                            {formatHours(estimate.totalHours, locale)}
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-muted">
                        {t.result.disclaimer}
                      </p>
                    </div>
                  )}

                  <div>
                    <button
                      onClick={sendToContact}
                      className="btn-primary w-full"
                    >
                      {t.result.send}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </button>
                    {sent && (
                      <p
                        className="mt-2 text-center text-xs text-teal"
                        role="status"
                      >
                        {t.result.sent}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Control({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-2">
        <span className="text-sm font-medium text-ink">{label}</span>
      </div>
      {children}
      {hint && <p className="mt-1.5 font-mono text-[11px] text-muted">{hint}</p>}
    </div>
  );
}

function Stat({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit?: string;
}) {
  return (
    <div className="px-2 py-3">
      <dt className="readout">{label}</dt>
      <dd className="mt-0.5 font-mono text-sm font-semibold text-ink">
        {value}
        {unit && <span className="ml-0.5 text-[10px] text-muted">{unit}</span>}
      </dd>
    </div>
  );
}

const fmt = (n: number) =>
  n >= 100 ? Math.round(n).toString() : n.toFixed(1);
