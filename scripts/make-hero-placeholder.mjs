import puppeteer from "puppeteer";
import { mkdirSync } from "node:fs";

mkdirSync("public/hero", { recursive: true });

const html = `<!doctype html><html><head><meta charset="utf8"><style>
  html,body{margin:0}
  .wrap{width:1672px;height:950px;position:relative;overflow:hidden;
    background:radial-gradient(120% 120% at 75% 50%, #12273D 0%, #0B1F33 70%);
    font-family:sans-serif}
  .grid{position:absolute;inset:0;
    background-image:linear-gradient(rgba(232,244,243,.05) 1px,transparent 1px),
      linear-gradient(90deg,rgba(232,244,243,.05) 1px,transparent 1px);
    background-size:48px 48px;
    -webkit-mask-image:linear-gradient(to top,#000,transparent 70%)}
  svg{position:absolute;inset:0}
  .label{position:absolute;left:90px;bottom:80px;color:#93ADC0;
    font-family:monospace;font-size:22px;letter-spacing:.18em}
  .label b{color:#2BD4CC}
</style></head><body>
  <div class="wrap">
    <div class="grid"></div>
    <svg viewBox="0 0 1672 950">
      <!-- wireframe (scan) -->
      <g fill="none" stroke="#2BD4CC" stroke-opacity=".55" stroke-width="1.5">
        <ellipse cx="560" cy="500" rx="300" ry="150"/>
        <ellipse cx="560" cy="500" rx="300" ry="150" transform="rotate(20 560 500)"/>
        <ellipse cx="560" cy="500" rx="300" ry="150" transform="rotate(-20 560 500)"/>
        <circle cx="560" cy="500" r="90"/>
        <path d="M260 500 H860 M560 350 V650"/>
      </g>
      <!-- dissolve dots -->
      <g fill="#2BD4CC" fill-opacity=".5">
        ${Array.from({ length: 120 })
          .map(
            () =>
              `<circle cx="${760 + Math.random() * 220}" cy="${
                380 + Math.random() * 240
              }" r="${Math.random() * 2.2}"/>`
          )
          .join("")}
      </g>
      <!-- printed solid (paste) -->
      <g>
        <rect x="980" y="360" width="420" height="280" rx="26" fill="#1A3450"/>
        <rect x="980" y="360" width="420" height="280" rx="26" fill="none" stroke="#0E8F8A" stroke-width="2"/>
        <circle cx="1190" cy="500" r="86" fill="#0B1F33" stroke="#FF7A1A" stroke-width="10"/>
        <circle cx="1330" cy="410" r="22" fill="#FF7A1A"/>
        <circle cx="1330" cy="590" r="22" fill="#FF7A1A"/>
        ${Array.from({ length: 14 })
          .map(
            (_, i) =>
              `<line x1="982" y1="${380 + i * 18}" x2="1398" y2="${
                380 + i * 18
              }" stroke="rgba(255,255,255,.04)" stroke-width="6"/>`
          )
          .join("")}
      </g>
    </svg>
    <div class="label">⌜ <b>skan</b> → <b>wydruk</b> ⌟ &nbsp;·&nbsp; HERO IMAGE PLACEHOLDER — replace public/hero/hero.jpg</div>
  </div>
</body></html>`;

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1672, height: 950, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle0" });
await page.screenshot({
  path: "public/hero/hero.jpg",
  type: "jpeg",
  quality: 88,
  clip: { x: 0, y: 0, width: 1672, height: 950 },
});
console.log("OK public/hero/hero.jpg");
await browser.close();
