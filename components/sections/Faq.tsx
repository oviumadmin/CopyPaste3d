import type { Dictionary } from "@/lib/i18n";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { Accordion } from "../ui/Accordion";

/** FAQ accordion. FAQPage schema is emitted from buildJsonLd (same items). */
export function Faq({ dict }: { dict: Dictionary }) {
  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-wrap max-w-3xl">
        <SectionHeader
          kicker={dict.faq.kicker}
          title={dict.faq.title}
          align="center"
        />
        <Reveal delay={0.1} className="mt-12">
          <Accordion items={dict.faq.items} />
        </Reveal>
      </div>
    </section>
  );
}
