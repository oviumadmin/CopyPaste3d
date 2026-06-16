import { ImageResponse } from "next/og";
import { getDictionary, isLocale } from "@/lib/i18n";

export const alt = "Copy Paste 3D";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated OG/Twitter card per locale. Replace with a branded render later. */
export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "pl");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0B1F33 0%, #12273D 100%)",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              border: "4px solid #14B8B1",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700, color: "#E8F4F3" }}>
            Copy<span style={{ color: "#14B8B1" }}>Paste</span>3D
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#E8F4F3",
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            {dict.hero.title}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "#93ADC0",
              display: "flex",
              gap: 16,
            }}
          >
            <span style={{ color: "#14B8B1" }}>{dict.hero.kicker}</span>
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#93ADC0" }}>
          Czempiń · Wielkopolska · Polska
        </div>
      </div>
    ),
    size
  );
}
