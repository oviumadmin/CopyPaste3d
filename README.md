# Copy Paste 3D — website

Production marketing site for **Copy Paste 3D**, a 3D scanning & printing studio
in Kościan, Wielkopolska, Poland. Bilingual (PL primary / EN secondary), with an
in-browser quote estimator, interactive 3D viewers, an AMS multi-color
visualizer, and a Formspree-wired contact + on-site-scan booking form.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion,
Lucide, and react-three-fiber / drei / three.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:3000 → redirects to /pl
npm run build    # production build
npm run start    # serve the production build
```

Node 18.18+ (developed on Node 24). No other setup required to run locally.

Copy `.env.example` to `.env.local` and fill in what you need (all optional for
local dev — see **Configuration** below).

---

## Where things live

| You want to change…            | Edit…                                            |
| ------------------------------ | ------------------------------------------------ |
| **Pricing** (the estimator)    | [`lib/pricing.ts`](lib/pricing.ts) — `PRICING`   |
| **Business data** (NIP, email, address, social, hours) | [`lib/site.ts`](lib/site.ts) — `SITE` |
| **All copy** (PL)              | [`lib/dictionaries/pl.ts`](lib/dictionaries/pl.ts) |
| **All copy** (EN)              | [`lib/dictionaries/en.ts`](lib/dictionaries/en.ts) |
| **Filament swatches / colors** | [`lib/filaments.ts`](lib/filaments.ts)           |
| **Portfolio items**            | [`lib/portfolio.ts`](lib/portfolio.ts) + dictionary `portfolio.items` |
| **Design tokens** (colors, fonts, radii) | [`tailwind.config.ts`](tailwind.config.ts) + [`app/globals.css`](app/globals.css) |
| **SEO / JSON-LD**              | [`lib/schema.ts`](lib/schema.ts)                 |

### Pricing constants

Everything the estimator uses is in **one object**, `PRICING` in
[`lib/pricing.ts`](lib/pricing.ts): setup fee, per-cm³ material rates, multi-color
surcharges, the print-time model, quantity discounts, minimum order, and the
displayed range spread. Edit the numbers and save — nothing else needs to change.
The output is always labelled an *estimate*, never a binding quote.

### Swapping photos

Placeholder artwork lives in [`public/portfolio/`](public/portfolio) as labelled
SVGs. To use real photos:

1. Drop your images (JPG/PNG/WebP) into `public/portfolio/`.
2. Update the `image` / `imageBefore` / `imageAfter` paths in
   [`lib/portfolio.ts`](lib/portfolio.ts).
3. Service-card image slots are placeholders in
   [`components/sections/Services.tsx`](components/sections/Services.tsx) — replace
   the icon block with a `next/image` when you have photos.

`next/image` handles optimization and lazy-loading automatically.

### Swapping the logo

The mark is drawn to spec (teal layered cube + navy ring) in
[`components/Logo.tsx`](components/Logo.tsx). To use a final SVG, replace the
`LogoMark` component body. The favicon/app icon is
[`public/icon.svg`](public/icon.svg). The social/OG card is generated per-locale
by [`app/[locale]/opengraph-image.tsx`](app/[locale]/opengraph-image.tsx).

---

## Configuration (env vars)

All optional — see [`.env.example`](.env.example). The site runs without any.

| Variable                          | Purpose                                                  |
| --------------------------------- | -------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`            | Canonical URL for sitemap / OG / JSON-LD                 |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT`  | Form backend (see below)                                 |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`    | Enables Plausible analytics                              |
| `NEXT_PUBLIC_GA_ID`               | Enables Google Analytics 4                               |

### Wiring Formspree

1. Create a form at [formspree.io](https://formspree.io); copy the endpoint
   (`https://formspree.io/f/xxxxxxx`).
2. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to it.

Until that's set, the contact form runs in **demo mode**: it validates and shows a
success state but sends nothing (and says so). The estimator's "Send for an exact
quote" attaches the uploaded file + parameters to the form. Newsletter signup
posts to the same endpoint tagged `form=newsletter`.

### Wiring analytics

Set **exactly one** of `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` or `NEXT_PUBLIC_GA_ID`.
With neither set, no analytics script loads. See
[`components/Analytics.tsx`](components/Analytics.tsx). No keys are hardcoded.

---

## Deploy

Zero-config on **Vercel** (recommended) or **Netlify**:

1. Push to GitHub and import the repo.
2. Set the env vars above in the host's dashboard (at minimum
   `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_FORMSPREE_ENDPOINT`).
3. Build command `npm run build`, output is detected automatically.

`robots.txt` and `sitemap.xml` are generated routes; they read `NEXT_PUBLIC_SITE_URL`.

---

## Notes & assumptions

- **Locale routing**: `middleware.ts` redirects `/` to `/pl` or `/en` based on a
  saved cookie, then `Accept-Language`, defaulting to Polish. The header toggle
  persists the choice in a cookie. hreflang alternates are emitted per page.
- **Performance**: three.js and all 3D viewers are dynamically imported
  (`next/dynamic`, `ssr: false`) and the mesh parser is `import()`-ed only on first
  file upload, so the initial JS payload stays light (~166 kB first load).
- **Reduced motion**: the hero animation, scroll reveals, the "print-in" portfolio
  motif, and the announcement rotation all collapse to static fallbacks under
  `prefers-reduced-motion`.
- **STEP files**: parsed-volume estimation needs a mesh, so STEP uploads are
  routed to manual quoting (the estimator says so and offers the contact handoff).
- **Placeholders** are marked with `<< >>` in [`lib/site.ts`](lib/site.ts)
  (phone, address, NIP, REGON, domain) and as labelled image slots. Testimonials
  in the dictionaries are **sample** quotes — replace with real Google reviews,
  and point the reviews CTA at the Google Business profile.
- Scope is strictly FDM (PLA/PETG/TPU/ABS) + structured-light scanning — no
  resin/SLS/metal claims anywhere.
```
