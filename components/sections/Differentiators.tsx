import { Layers, MapPin } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { Reveal } from "../ui/Reveal";

const ICONS = [Layers, MapPin];

/** The two things local competitors don't have — stated as benefits. */
export function Differentiators({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-line bg-surface">
      <div className="section-wrap grid gap-6 py-12 sm:grid-cols-2 sm:py-14">
        {dict.differentiators.items.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
