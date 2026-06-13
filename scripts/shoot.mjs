import puppeteer from "puppeteer";

const URL = process.env.SHOOT_URL || "http://localhost:3000/pl";
const OUT = process.env.SHOOT_OUT || "shot.png";
const WIDTH = Number(process.env.SHOOT_W || 1440);

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--use-gl=swiftshader", "--enable-webgl"],
});
const page = await browser.newPage();
await page.setViewport({ width: WIDTH, height: 1000, deviceScaleFactor: 1 });
// Static end-state: reveals visible, hero static, no perpetual animation.
await page.emulateMediaFeatures([
  { name: "prefers-reduced-motion", value: "reduce" },
]);
await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
// let fonts + any 3D settle
await new Promise((r) => setTimeout(r, 2500));
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await new Promise((r) => setTimeout(r, 1200));
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 600));
await page.screenshot({ path: OUT, fullPage: true });
const h = await page.evaluate(() => document.body.scrollHeight);
console.log("OK", OUT, "height=", h);
await browser.close();
