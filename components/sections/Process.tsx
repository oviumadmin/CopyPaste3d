import { ScanLine, Box, Printer, Sparkles } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

const ICONS = [ScanLine, Box, Printer, Sparkles];

/** Scan → Model → Print → Finish. Numbered: here order carries meaning. */
export function Process({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-line bg-surface py-20 sm:py-24">
      <div className="section-wrap">
        <SectionHeader
          kicker={dict.process.kicker}
          title={dict.process.title}
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dict.process.steps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={step.name} delay={i * 0.1}>
                <li className="relative h-full">
                  {/* connector (desktop) */}
                  {i < dict.process.steps.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-[calc(100%_-_0.5rem)] top-7 hidden h-px w-[calc(2rem+1rem)] border-t border-dashed border-teal/40 lg:block"
                    />
                  )}
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-teal/30 bg-teal/10 text-teal">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="font-mono text-xs tracking-[0.2em] text-muted">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
