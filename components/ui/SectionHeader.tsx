import { Reveal } from "./Reveal";

export function SectionHeader({
  kicker,
  title,
  lead,
  align = "left",
}: {
  kicker: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <p className="kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {lead && (
        <p className={`section-lead ${align === "center" ? "mx-auto" : ""}`}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
