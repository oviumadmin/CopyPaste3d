import puppeteer from "puppeteer";
import { mkdirSync } from "node:fs";

mkdirSync("public/services", { recursive: true });

/** Each entry: output filename + inner SVG motif (teal line art, centred ~600,300). */
const SERVICES = [
  {
    file: "scanning.jpg",
    motif: `
      <rect x="470" y="200" width="260" height="200" rx="20" fill="none" stroke="#14B8B1" stroke-width="5" opacity=".7"/>
      <g stroke="#2BD4CC" stroke-width="3" opacity=".5">
        <line x1="490" y1="250" x2="710" y2="250"/>
        <line x1="490" y1="300" x2="710" y2="300"/>
        <line x1="490" y1="350" x2="710" y2="350"/>
      </g>
      <rect x="440" y="288" width="320" height="10" rx="5" fill="#2BD4CC"/>
      <g fill="#2BD4CC" opacity=".55">
        ${Array.from({ length: 40 }).map(() => `<circle cx="${470 + Math.random() * 260}" cy="${200 + Math.random() * 200}" r="${Math.random() * 1.8}"/>`).join("")}
      </g>`,
  },
  {
    file: "reverse-engineering.jpg",
    motif: `
      <circle cx="600" cy="300" r="92" fill="none" stroke="#14B8B1" stroke-width="5" opacity=".8"/>
      <circle cx="600" cy="300" r="34" fill="none" stroke="#14B8B1" stroke-width="5" opacity=".8"/>
      <g stroke="#2BD4CC" stroke-width="3" opacity=".7">
        <line x1="460" y1="430" x2="740" y2="430"/>
        <path d="M460 422 v16 M740 422 v16"/>
        <path d="M468 430 l14 -6 v12 Z" fill="#2BD4CC" stroke="none"/>
        <path d="M732 430 l-14 -6 v12 Z" fill="#2BD4CC" stroke="none"/>
      </g>
      <text x="600" y="462" text-anchor="middle" font-family="monospace" font-size="18" fill="#93ADC0">Ø 140.0</text>`,
  },
  {
    file: "prototyping.jpg",
    motif: `
      <g fill="none" stroke="#14B8B1" stroke-width="5">
        <rect x="500" y="320" width="150" height="110" rx="10" opacity=".35"/>
        <rect x="530" y="280" width="150" height="110" rx="10" opacity=".6"/>
        <rect x="560" y="240" width="150" height="110" rx="10" opacity="1"/>
      </g>
      <circle cx="635" cy="295" r="10" fill="#FF7A1A"/>`,
  },
  {
    file: "figurines.jpg",
    motif: `
      <circle cx="600" cy="235" r="40" fill="#2BD4CC"/>
      <path d="M555 300 q45 -40 90 0 l14 110 h-118 Z" fill="#14B8B1"/>
      <rect x="548" y="408" width="104" height="26" rx="8" fill="#16385C"/>
      <circle cx="600" cy="330" r="12" fill="#FF7A1A"/>`,
  },
  {
    file: "cad-consulting.jpg",
    motif: `
      <g fill="none" stroke="#14B8B1" stroke-width="3" opacity=".8">
        <circle cx="600" cy="300" r="95"/>
        <ellipse cx="600" cy="300" rx="95" ry="36"/>
        <ellipse cx="600" cy="300" rx="36" ry="95"/>
        <line x1="505" y1="300" x2="695" y2="300"/>
        <line x1="600" y1="205" x2="600" y2="395"/>
      </g>
      <g fill="#2BD4CC">
        <circle cx="600" cy="205" r="5"/><circle cx="600" cy="395" r="5"/>
        <circle cx="505" cy="300" r="5"/><circle cx="695" cy="300" r="5"/>
      </g>`,
  },
];

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 675, deviceScaleFactor: 1 });

for (const s of SERVICES) {
  const html = `<!doctype html><html><head><meta charset="utf8"><style>
    html,body{margin:0}
    .wrap{width:1200px;height:675px;position:relative;overflow:hidden;
      background:radial-gradient(120% 120% at 50% 38%, #12273D 0%, #0B1F33 78%);font-family:sans-serif}
    .grid{position:absolute;inset:0;
      background-image:linear-gradient(rgba(232,244,243,.05) 1px,transparent 1px),
        linear-gradient(90deg,rgba(232,244,243,.05) 1px,transparent 1px);background-size:48px 48px;
      -webkit-mask-image:radial-gradient(120% 120% at 50% 40%, #000 40%, transparent 85%)}
    .label{position:absolute;left:0;right:0;bottom:30px;text-align:center;color:#93ADC0;
      font-family:monospace;font-size:14px;letter-spacing:.16em}
  </style></head><body>
    <div class="wrap"><div class="grid"></div>
      <svg viewBox="0 0 1200 675">${s.motif}</svg>
      <div class="label">ZDJĘCIE USŁUGI — replace public/services/${s.file}</div>
    </div></body></html>`;
  await page.setContent(html, { waitUntil: "domcontentloaded" });
  await new Promise((r) => setTimeout(r, 200));
  await page.screenshot({
    path: `public/services/${s.file}`,
    type: "jpeg",
    quality: 88,
    clip: { x: 0, y: 0, width: 1200, height: 675 },
  });
  console.log("OK", s.file);
}
await browser.close();
