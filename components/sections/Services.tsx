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
 * Six services as cards. Each card has an image slot — drop a photo into
 * /public/services and swap the placeholder block for an <Image>.
 */
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
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <article className="card card-hover group flex h-full flex-col overflow-hidden">
                  {/* IMAGE SLOT — replace with a real photo */}
                  <div className="relative flex aspect-[16/9] items-center justify-center border-b border-line bg-surface-2">
                    <Icon
                      className="h-10 w-10 text-teal/40 transition-transform duration-300 group-hover:scale-110"
                      aria-hidden
                    />
                    <span className="absolute bottom-2 right-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-muted/60">
                      <ImageIcon className="h-3 w-3" aria-hidden />
                      {dict.services.imagePlaceholder}
                    </span>
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
