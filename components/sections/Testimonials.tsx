import { Quote, Star, ExternalLink } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

/**
 * Testimonials. The quotes in the dictionary are SAMPLES — swap for real
 * Google reviews before launch, and point the CTA at the Google profile.
 */
export function Testimonials({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-line bg-surface py-20 sm:py-24">
      <div className="section-wrap">
        <SectionHeader
          kicker={dict.testimonials.kicker}
          title={dict.testimonials.title}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {dict.testimonials.items.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <figure className="card flex h-full flex-col p-6">
                <Quote className="h-7 w-7 text-teal/40" aria-hidden />
                <div className="mt-3 flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-ember text-ember" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4 font-mono text-xs text-muted">
                  {t.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-10 text-center">
            {/* TODO: point at the real Google Business profile URL */}
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {dict.testimonials.googleCta}
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
