import type { Dictionary } from "@/lib/i18n";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { Accordion } from "../ui/Accordion";

/** FAQ accordion. FAQPage schema is emitted from buildJsonLd (same items). */
export function Faq({ dict }: { dict: Dictionary }) {
  return (
    <section id="faq" className="scroll-mt-24 pt-20 pb-10 sm:pt-24 sm:pb-12">
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
