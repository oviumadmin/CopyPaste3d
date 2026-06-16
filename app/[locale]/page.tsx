import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import { buildJsonLd } from "@/lib/schema";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Materials } from "@/components/sections/Materials";
import { Estimator } from "@/components/sections/Estimator";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const jsonLd = buildJsonLd(dict, locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal focus:px-5 focus:py-2 focus:text-navy"
      >
        {dict.nav.skipToContent}
      </a>
      <AnnouncementBar dict={dict} />
      <Header dict={dict} locale={locale} />
      <main id="main">
        <Hero dict={dict} />
        <Services dict={dict} />
        <Portfolio dict={dict} />
        <Materials dict={dict} />
        <Estimator dict={dict} locale={locale} />
        <Faq dict={dict} />
        <Contact dict={dict} locale={locale} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
