import { Layers, Maximize, ScanLine, Check } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

const ICONS = [Layers, Maximize, ScanLine];

/**
 * Capabilities as trust signals — stated as what we can do, without naming
 * specific machines or software.
 */
export function Capabilities({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-wrap">
        <SectionHeader
          kicker={dict.capabilities.kicker}
          title={dict.capabilities.title}
          lead={dict.capabilities.lead}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {dict.capabilities.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={item.name} delay={i * 0.08}>
                <article className="card card-hover flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-teal">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {item.role}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {item.name}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {item.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                          aria-hidden
                        />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 text-center font-mono text-xs tracking-wide text-muted">
            {dict.capabilities.software}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
