import puppeteer from "puppeteer";

const URL = process.env.SHOOT_URL || "http://localhost:3000/pl";
const WIDTH = Number(process.env.SHOOT_W || 1440);
const PREFIX = process.env.SHOOT_PREFIX || "band";

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--use-gl=swiftshader", "--enable-webgl"],
});
const page = await browser.newPage();
await page.setViewport({ width: WIDTH, height: 1000, deviceScaleFactor: 1 });
await page.emulateMediaFeatures([
  { name: "prefers-reduced-motion", value: "reduce" },
]);
await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 2500));
// prime lazy assets
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await new Promise((r) => setTimeout(r, 1200));
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 600));

const total = await page.evaluate(() => document.body.scrollHeight);
const bandH = Math.ceil(total / 4);
for (let i = 0; i < 4; i++) {
  const y = i * bandH;
  const h = Math.min(bandH, total - y);
  await page.screenshot({
    path: `${PREFIX}-${i + 1}.png`,
    clip: { x: 0, y, width: WIDTH, height: h },
  });
}
console.log("OK total=", total, "bandH=", bandH);
await browser.close();
