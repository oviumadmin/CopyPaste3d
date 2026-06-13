"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Box, SlidersHorizontal } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import {
  portfolioItems,
  type PortfolioCategory,
  type PortfolioItem,
} from "@/lib/portfolio";
import { SectionHeader } from "../ui/SectionHeader";
import { PrintInReveal } from "../ui/PrintInReveal";
import { Modal } from "../ui/Modal";
import { BeforeAfterSlider } from "../ui/BeforeAfterSlider";
import { LazyModelViewer } from "../three/LazyModelViewer";

type Filter = "all" | PortfolioCategory;
const FILTERS: Filter[] = [
  "all",
  "figurines",
  "parts",
  "prototypes",
  "repairs",
  "scans",
];

export function Portfolio({ dict }: { dict: Dictionary }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);

  const visible = useMemo(
    () =>
      portfolioItems
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => filter === "all" || item.category === filter),
    [filter]
  );

  const label = (f: Filter) =>
    f === "all"
      ? dict.portfolio.filterAll
      : dict.portfolio.categories[f];

  return (
    <section id="portfolio" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-wrap">
        <SectionHeader
          kicker={dict.portfolio.kicker}
          title={dict.portfolio.title}
          lead={dict.portfolio.lead}
        />

        {/* filters */}
        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label={dict.portfolio.kicker}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? "border-teal bg-teal text-navy"
                  : "border-line text-muted hover:border-teal hover:text-teal"
              }`}
            >
              {label(f)}
            </button>
          ))}
        </div>

        {/* grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map(({ item, index }, i) => (
            <PrintInReveal key={item.id} delay={(i % 3) * 0.06}>
              <PortfolioCard
                item={item}
                dict={dict}
                onOpen={() => setActive(index)}
              />
            </PrintInReveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <PortfolioModal
          item={portfolioItems[active]}
          index={active}
          dict={dict}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}

function PortfolioCard({
  item,
  dict,
  onOpen,
}: {
  item: PortfolioItem;
  dict: Dictionary;
  onOpen: () => void;
}) {
  const idx = portfolioItems.indexOf(item);
  const copy = dict.portfolio.items[idx];
  const interactive = item.media.kind !== "image";
  const actionLabel =
    item.media.kind === "viewer"
      ? dict.portfolio.open3d
      : item.media.kind === "compare"
        ? dict.portfolio.openCompare
        : null;

  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
        <Image
          src={item.media.image}
          alt={copy.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-mist">
          {dict.portfolio.categories[item.category]}
        </span>
        {/* color chips reflecting the multi-color story */}
        <div className="absolute bottom-3 left-3 flex gap-1">
          {item.colors.map((c) => (
            <span
              key={c}
              className="h-3.5 w-3.5 rounded-full border border-white/40"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold text-ink">
          {copy.title}
        </h3>
        <p className="mt-1.5 flex-1 text-sm text-muted">{copy.blurb}</p>
        {interactive && actionLabel && (
          <button
            onClick={onOpen}
            className="mt-4 inline-flex items-center gap-2 self-start font-mono text-xs font-medium text-teal hover:text-teal-bright"
          >
            {item.media.kind === "viewer" ? (
              <Box className="h-4 w-4" aria-hidden />
            ) : (
              <SlidersHorizontal className="h-4 w-4" aria-hidden />
            )}
            {actionLabel}
          </button>
        )}
      </div>
    </article>
  );
}

function PortfolioModal({
  item,
  index,
  dict,
  onClose,
}: {
  item: PortfolioItem;
  index: number;
  dict: Dictionary;
  onClose: () => void;
}) {
  const copy = dict.portfolio.items[index];

  return (
    <Modal
      open
      onClose={onClose}
      title={copy.title}
      closeLabel={dict.portfolio.close}
    >
      {item.media.kind === "viewer" ? (
        <div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-surface-2">
            <LazyModelViewer
              demoModel={item.media.demoModel}
              colors={item.colors}
            />
          </div>
          <p className="mt-3 text-center font-mono text-[11px] text-muted">
            {dict.portfolio.viewerHint}
          </p>
        </div>
      ) : item.media.kind === "compare" ? (
        <BeforeAfterSlider
          before={item.media.imageBefore}
          after={item.media.imageAfter}
          beforeLabel={dict.portfolio.compareBefore}
          afterLabel={dict.portfolio.compareAfter}
          hint={dict.portfolio.compareHint}
        />
      ) : null}
      <p className="mt-4 text-sm text-muted">{copy.blurb}</p>
    </Modal>
  );
}
