"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionEntry {
  q: string;
  a: string;
}

/** Accessible accordion: buttons with aria-expanded + labelled regions. */
export function Accordion({ items }: { items: AccordionEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
      {items.map((item, i) => {
        const open = openIndex === i;
        const headerId = `${baseId}-h-${i}`;
        const panelId = `${baseId}-p-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-medium text-ink transition-colors hover:text-teal sm:px-6"
              >
                {item.q}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                    open ? "rotate-180 text-teal" : ""
                  }`}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!open}
              className="px-5 pb-5 sm:px-6"
            >
              <p className="text-sm leading-relaxed text-muted">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
