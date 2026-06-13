import Image from "next/image";
import {
  Layers,
  ScanLine,
  DraftingCompass,
  Zap,
  Gift,
  Wrench,
  ImageIcon,
} from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

const ICONS = [Layers, ScanLine, DraftingCompass, Zap, Gift, Wrench];

/**
 * Per-service photo, index-aligned with dict.services.items.
 * Drop a 16:9 image into /public/services and set its path here; leave
 * `null` to show the icon placeholder. Order:
 * 0 multi-color FDM · 1 scanning · 2 reverse-eng · 3 prototyping ·
 * 4 figurines · 5 CAD consulting
 */
const SERVICE_IMAGES: (string | null)[] = [
  "/services/multicolor-fdm.jpg",
  "/services/scanning.jpg",
  "/services/reverse-engineering.jpg",
  "/services/prototyping.jpg",
  "/services/figurines.jpg",
  "/services/cad-consulting.jpg",
];

/** Six services as cards, each with an image slot. */
export function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-wrap">
        <SectionHeader
          kicker={dict.services.kicker}
          title={dict.services.title}
          lead={dict.services.lead}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((service, i) => {
            const Icon = ICONS[i];
            const img = SERVICE_IMAGES[i];
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <article className="card card-hover group flex h-full flex-col overflow-hidden">
                  <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-line bg-surface-2">
                    {img ? (
                      <Image
                        src={img}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <Icon
                          className="h-10 w-10 text-teal/40 transition-transform duration-300 group-hover:scale-110"
                          aria-hidden
                        />
                        <span className="absolute bottom-2 right-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-muted/60">
                          <ImageIcon className="h-3 w-3" aria-hidden />
                          {dict.services.imagePlaceholder}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-base font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {service.body}
                    </p>
                    <p className="mt-4 border-t border-line pt-3 font-mono text-[11px] text-teal">
                      {service.example}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
