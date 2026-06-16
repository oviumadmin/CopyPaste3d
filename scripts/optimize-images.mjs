/**
 * One-off: recompress the heavy hero/service JPEGs in place.
 * They shipped at 1.8–2.2 MB each; next/image still has to fetch and
 * optimize those originals, so shrinking the sources is a real win.
 * Re-run after dropping in new photos. Safe to run repeatedly
 * (withoutEnlargement keeps already-small images untouched).
 */
import sharp from "sharp";
import { readFile, writeFile, stat } from "node:fs/promises";
import { glob } from "node:fs/promises";

const TARGETS = [
  { pattern: "public/hero/*.jpg", maxEdge: 1920, quality: 80 },
  { pattern: "public/services/*.jpg", maxEdge: 1280, quality: 76 },
];

const kb = (n) => `${Math.round(n / 1024)} KB`;

for (const { pattern, maxEdge, quality } of TARGETS) {
  for await (const file of glob(pattern)) {
    const before = (await stat(file)).size;
    const input = await readFile(file); // read first — sharp can't read+write same path
    const output = await sharp(input)
      .resize({ width: maxEdge, height: maxEdge, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
    if (output.length < before) {
      await writeFile(file, output);
      console.log(`${file}: ${kb(before)} -> ${kb(output.length)}`);
    } else {
      console.log(`${file}: kept (${kb(before)}, already optimal)`);
    }
  }
}
