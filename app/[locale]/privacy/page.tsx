import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getDictionary, isLocale, locales } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { privacyContent } from "@/lib/privacy";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const doc = privacyContent[locale];

  return {
    title: `${doc.title} · ${SITE.name}`,
    description: doc.title,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        pl: "/pl/privacy",
        en: "/en/privacy",
        de: "/de/privacy",
        "x-default": "/pl/privacy",
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const doc = privacyContent[locale];

  return (
    <>
      <Header dict={dict} locale={locale} />
      <main id="main" className="pt-28 pb-20 sm:pt-32">
        <article className="section-wrap max-w-3xl">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-teal"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {dict.privacy.backHome}
          </Link>

          <h1 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {doc.title}
          </h1>
          {doc.lead && (
            <p className="mt-3 text-sm italic text-muted">{doc.lead}</p>
          )}

          <div className="mt-10 space-y-10">
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-lg font-semibold text-ink">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted">
                  {section.blocks.map((block, i) =>
                    block.type === "p" ? (
                      <p key={i}>{block.text}</p>
                    ) : (
                      <ul key={i} className="list-disc space-y-2 pl-5">
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-12 border-t border-line pt-6 font-mono text-xs text-muted">
            {doc.updatedLabel}: {doc.updated}
          </p>
        </article>
      </main>
      <Footer dict={dict} />
    </>
  );
}
