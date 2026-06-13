"use client";

import { useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { filamentSwatches, defaultAmsSlots } from "@/lib/filaments";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { LazyModelViewer } from "../three/LazyModelViewer";

/**
 * Materials & colors. The AMS visualizer assigns up to 4 filament colors to
 * the demo model's parts — pick a slot, pick a swatch, watch it change.
 * This demonstrates the multi-material story directly.
 */
export function Materials({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const swatchById = (id: string) =>
    filamentSwatches.find((s) => s.id === id) ?? filamentSwatches[0];

  const [slots, setSlots] = useState<string[]>(defaultAmsSlots);
  const [activeSlot, setActiveSlot] = useState(0);

  const setSlotColor = (id: string) =>
    setSlots((prev) => prev.map((s, i) => (i === activeSlot ? id : s)));

  const colors = slots.map((id) => swatchById(id).hex);

  return (
    <section
      id="materials"
      className="scroll-mt-24 border-y border-line bg-surface py-20 sm:py-24"
    >
      <div className="section-wrap">
        <SectionHeader
          kicker={dict.materials.kicker}
          title={dict.materials.title}
          lead={dict.materials.lead}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* Visualizer */}
          <Reveal>
            <div className="card overflow-hidden">
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="font-display text-sm font-semibold text-ink">
                  {dict.materials.visualizerTitle}
                </span>
                <span className="flex gap-1.5">
                  {slots.map((id, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlot(i)}
                      aria-label={`${dict.materials.slotLabel} ${i + 1}`}
                      aria-pressed={activeSlot === i}
                      className={`h-7 w-7 rounded-lg border-2 transition-transform ${
                        activeSlot === i
                          ? "scale-110 border-teal"
                          : "border-transparent"
                      }`}
                      style={{ backgroundColor: swatchById(id).hex }}
                    />
                  ))}
                </span>
              </div>
              <div className="aspect-[4/3] w-full bg-surface-2">
                <LazyModelViewer demoModel="figurine" colors={colors} />
              </div>
              <p className="px-5 py-3 text-center font-mono text-[11px] text-muted">
                {dict.materials.visualizerHint}
              </p>
            </div>
          </Reveal>

          {/* Swatches + materials */}
          <Reveal delay={0.1}>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">
                {dict.materials.swatchesTitle}
              </h3>
              <div className="mt-4 grid grid-cols-6 gap-2.5 sm:grid-cols-8 lg:grid-cols-6">
                {filamentSwatches.map((s) => {
                  const selected = slots[activeSlot] === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSlotColor(s.id)}
                      title={s.name[locale]}
                      aria-label={`${dict.materials.slotLabel} ${activeSlot + 1}: ${s.name[locale]}`}
                      className={`group relative aspect-square rounded-xl border transition-transform hover:scale-105 ${
                        selected
                          ? "border-teal ring-2 ring-teal/40"
                          : "border-line"
                      }`}
                      style={{ backgroundColor: s.hex }}
                    />
                  );
                })}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {dict.materials.swatchesNote}
              </p>

              <h3 className="mt-8 font-display text-lg font-semibold text-ink">
                {dict.materials.materialsTitle}
              </h3>
              <dl className="mt-4 space-y-2">
                {dict.materials.materialNotes.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-baseline gap-3 rounded-xl border border-line bg-bg px-4 py-2.5"
                  >
                    <dt className="w-14 shrink-0 font-mono text-sm font-semibold text-teal">
                      {m.name}
                    </dt>
                    <dd className="text-sm text-muted">{m.note}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
