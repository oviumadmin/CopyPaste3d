"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock, Paperclip, Check } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { SITE, isFormBackendConfigured } from "@/lib/site";
import { formatPrice } from "@/lib/pricing";
import { useQuoteHandoff } from "@/lib/quote-store";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

type SubmitState = "idle" | "submitting" | "success" | "demo" | "error";

export function Contact({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const t = dict.contact;
  const f = t.form;
  const handoff = useQuoteHandoff();
  const [topic, setTopic] = useState<keyof typeof f.topics>("print");
  const [state, setState] = useState<SubmitState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [attachedName, setAttachedName] = useState<string | null>(null);

  // When the estimator hands off a file + params, reflect it here.
  useEffect(() => {
    if (!handoff) return;
    setTopic("print");
    setAttachedName(handoff.file.name);
    // Move the file into the form's file input via DataTransfer.
    if (fileInputRef.current) {
      const dt = new DataTransfer();
      dt.items.add(handoff.file);
      fileInputRef.current.files = dt.files;
    }
  }, [handoff]);

  const showOnsite = topic === "onsite";

  const validate = (form: HTMLFormElement) => {
    const next: Record<string, string> = {};
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      ?.value;
    if (!name?.trim()) next.name = f.required;
    if (!email?.trim()) next.email = f.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = f.invalidEmail;
    if (!message?.trim()) next.message = f.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;

    const data = new FormData(form);
    // Attach quote parameters as a readable line for the studio inbox.
    if (handoff) {
      const s = handoff.summary;
      const price =
        s.priceLow != null && s.priceHigh != null
          ? ` · ${formatPrice(s.priceLow, locale)}–${formatPrice(
              s.priceHigh,
              locale
            )}`
          : "";
      data.append(
        f.quoteParams,
        `${s.material} · ${s.colors}× ${
          s.colors > 1 ? "AMS" : ""
        } · ${s.infillPct}% · x${s.quantity}${
          s.volumeCm3 ? ` · ${s.volumeCm3.toFixed(1)} cm³` : ""
        }${price}`
      );
    }
    data.append("_subject", `Copy Paste 3D — ${f.topics[topic]}`);

    if (!isFormBackendConfigured()) {
      setState("demo");
      return;
    }

    setState("submitting");
    try {
      const res = await fetch(SITE.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setState(res.ok ? "success" : "error");
      if (res.ok) form.reset();
    } catch {
      setState("error");
    }
  };

  if (state === "success" || state === "demo") {
    return (
      <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
        <div className="section-wrap max-w-2xl">
          <div className="card flex flex-col items-center p-10 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/15 text-teal">
              <Check className="h-7 w-7" />
            </span>
            <p className="mt-5 font-display text-xl font-semibold text-ink">
              {f.success}
            </p>
            {state === "demo" && (
              <p className="mt-3 max-w-md text-sm text-muted">
                {f.demoNotice}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-wrap">
        <SectionHeader kicker={t.kicker} title={t.title} lead={t.lead} />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* form */}
          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="card grid gap-4 p-6 sm:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={f.name} error={errors.name} required>
                  <input name="name" className="cp-input" autoComplete="name" />
                </Field>
                <Field label={f.email} error={errors.email} required>
                  <input
                    name="email"
                    type="email"
                    className="cp-input"
                    autoComplete="email"
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={f.phone}>
                  <input
                    name="phone"
                    type="tel"
                    className="cp-input"
                    autoComplete="tel"
                  />
                </Field>
                <Field label={f.topic}>
                  <select
                    name="topic"
                    value={topic}
                    onChange={(e) =>
                      setTopic(e.target.value as keyof typeof f.topics)
                    }
                    className="cp-input"
                  >
                    {(
                      Object.keys(f.topics) as (keyof typeof f.topics)[]
                    ).map((k) => (
                      <option key={k} value={k}>
                        {f.topics[k]}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* on-site booking fields */}
              {showOnsite && (
                <div className="grid gap-4 rounded-2xl border border-teal/30 bg-teal/5 p-4 sm:grid-cols-2">
                  <Field label={f.date}>
                    <input name="preferred_date" type="date" className="cp-input" />
                  </Field>
                  <Field label={f.area}>
                    <input
                      name="location"
                      placeholder={f.areaPlaceholder}
                      className="cp-input"
                    />
                  </Field>
                </div>
              )}

              <Field label={f.message} error={errors.message} required>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={f.messagePlaceholder}
                  className="cp-input resize-y"
                />
              </Field>

              {/* file attachment */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">
                  {f.file}
                </label>
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-line px-4 py-3 text-sm text-muted hover:border-teal/60">
                  <Paperclip className="h-4 w-4 shrink-0 text-teal" />
                  <span className="truncate">
                    {attachedName ?? f.fileFormats}
                  </span>
                  <input
                    ref={fileInputRef}
                    name="attachment"
                    type="file"
                    accept=".stl,.3mf,.obj,.step,.stp,.jpg,.jpeg,.png"
                    className="sr-only"
                    onChange={(e) =>
                      setAttachedName(e.target.files?.[0]?.name ?? null)
                    }
                  />
                </label>
                {handoff && (
                  <p className="mt-1.5 font-mono text-[11px] text-teal">
                    {f.fileAttached}: {handoff.file.name}
                  </p>
                )}
              </div>

              <label className="flex items-start gap-2.5 text-sm text-muted">
                <input
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 accent-teal"
                />
                {f.consent}
              </label>

              <button
                type="submit"
                disabled={state === "submitting"}
                className="btn-primary w-full disabled:opacity-60"
              >
                {state === "submitting" ? f.submitting : f.submit}
              </button>

              {state === "error" && (
                <p className="text-sm text-ember" role="alert">
                  {f.error}{" "}
                  <a href={`mailto:${SITE.email}`} className="underline">
                    {SITE.email}
                  </a>
                </p>
              )}
            </form>
          </Reveal>

          {/* contact info */}
          <Reveal delay={0.1}>
            <div className="card flex h-full flex-col gap-6 p-6 sm:p-7">
              <h3 className="font-display text-lg font-semibold text-ink">
                {t.info.title}
              </h3>
              <ul className="space-y-4">
                <InfoRow icon={<Mail className="h-5 w-5" />} label={f.email}>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-ink hover:text-teal"
                  >
                    {SITE.email}
                  </a>
                </InfoRow>
                <InfoRow icon={<Phone className="h-5 w-5" />} label={f.phone}>
                  <span className="text-ink">{SITE.phone}</span>
                </InfoRow>
                <InfoRow
                  icon={<MapPin className="h-5 w-5" />}
                  label={t.info.serviceArea}
                >
                  <span className="text-ink">{t.info.serviceAreaValue}</span>
                </InfoRow>
                <InfoRow
                  icon={<Clock className="h-5 w-5" />}
                  label={t.info.hoursTitle}
                >
                  <span className="text-ink">
                    {t.info.hours.map((h) => (
                      <span key={h} className="block">
                        {h}
                      </span>
                    ))}
                  </span>
                </InfoRow>
              </ul>
              {/* Static map placeholder — swap for an embed or static image */}
              <div className="blueprint-grid mt-auto flex aspect-[16/10] items-center justify-center rounded-2xl border border-line bg-surface-2">
                <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
                  <MapPin className="h-4 w-4 text-teal" />
                  Kościan, Wielkopolska
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-ember">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs text-ember" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
        {icon}
      </span>
      <div className="text-sm">
        <p className="readout">{label}</p>
        <div className="mt-0.5">{children}</div>
      </div>
    </li>
  );
}
