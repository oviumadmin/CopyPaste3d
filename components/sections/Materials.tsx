import type { Dictionary } from "@/lib/i18n";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

/**
 * Materials — a compact chip row. Nobody picks a filament before contacting
 * us, so this sits below the portfolio as a quick "here's what we print"
 * reference rather than a deep-dive. Hover a chip for what it's good for.
 */
export function Materials({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="materials"
      className="scroll-mt-24 border-y border-line bg-surface py-16 sm:py-20"
    >
      <div className="section-wrap">
        <SectionHeader
          kicker={dict.materials.kicker}
          title={dict.materials.title}
          lead={dict.materials.lead}
        />
        <Reveal>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {dict.materials.materialNotes.map((m) => (
              <li
                key={m.name}
                title={m.note}
                className="cursor-default rounded-full border border-line bg-bg px-4 py-2 font-mono text-sm font-medium text-ink transition-colors hover:border-teal/60 hover:text-teal"
              >
                {m.name}
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
            {dict.materials.swatchesNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
