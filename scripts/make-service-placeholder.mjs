import puppeteer from "puppeteer";
import { mkdirSync } from "node:fs";

mkdirSync("public/services", { recursive: true });

const html = `<!doctype html><html><head><meta charset="utf8"><style>
  html,body{margin:0}
  .wrap{width:1200px;height:675px;position:relative;overflow:hidden;
    background:radial-gradient(120% 120% at 50% 35%, #12273D 0%, #0B1F33 75%);
    font-family:sans-serif}
  svg{position:absolute;inset:0}
  .label{position:absolute;left:0;right:0;bottom:34px;text-align:center;color:#93ADC0;
    font-family:monospace;font-size:15px;letter-spacing:.16em}
</style></head><body>
  <div class="wrap">
    <svg viewBox="0 0 1200 675">
      <g transform="translate(600 340)">
        <!-- isometric multi-color cube, bottom→top: navy, white, teal -->
        <!-- navy base -->
        <polygon points="-150,40 0,120 150,40 0,-40" fill="#16385C"/>
        <polygon points="-150,40 -150,-20 0,60 0,120" fill="#0E2440"/>
        <polygon points="150,40 150,-20 0,60 0,120" fill="#11304f"/>
        <!-- white middle -->
        <polygon points="-150,-30 0,50 150,-30 0,-110" fill="#F2F3F0"/>
        <polygon points="-150,-30 -150,-90 0,-10 0,50" fill="#D7DAD3"/>
        <polygon points="150,-30 150,-90 0,-10 0,50" fill="#E4E6E0"/>
        <!-- teal top -->
        <polygon points="-150,-100 0,-20 150,-100 0,-180" fill="#14B8B1"/>
        <polygon points="-150,-100 -150,-150 0,-70 0,-20" fill="#0E8F8A"/>
        <polygon points="150,-100 150,-150 0,-70 0,-20" fill="#11a39c"/>
        <!-- orange knob -->
        <polygon points="-30,-150 0,-134 30,-150 0,-166" fill="#FF7A1A"/>
        <polygon points="-30,-150 -30,-138 0,-122 0,-134" fill="#E5640A"/>
        <polygon points="30,-150 30,-138 0,-122 0,-134" fill="#ff8c3a"/>
        <!-- subtle layer lines on the white left face -->
        <g stroke="rgba(0,0,0,.06)" stroke-width="3">
          ${Array.from({ length: 8 })
            .map((_, i) => `<line x1="-150" y1="${-84 + i * 8}" x2="0" y2="${-4 + i * 8}"/>`)
            .join("")}
        </g>
      </g>
    </svg>
    <div class="label">ZDJĘCIE USŁUGI — replace public/services/multicolor-fdm.jpg</div>
  </div>
</body></html>`;

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 675, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle0" });
await page.screenshot({
  path: "public/services/multicolor-fdm.jpg",
  type: "jpeg",
  quality: 88,
  clip: { x: 0, y: 0, width: 1200, height: 675 },
});
console.log("OK public/services/multicolor-fdm.jpg");
await browser.close();
