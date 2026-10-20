import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import process from "node:process";
import TextToSVG from "text-to-svg";

const require = createRequire(import.meta.url);

const FONT_SIZE = 16;
const LINE_HEIGHT = 24;

const [name, ...lines] = process.argv.slice(2);
if (!name || lines.length === 0) {
    console.error(
        'Usage: node scripts/generate-contact-svg.mjs <name> "<line 1>" ["<line 2>" ...]'
    );
    process.exit(1);
}

const fontPath = require.resolve("@fontsource/epilogue/files/epilogue-latin-400-normal.woff");
const textToSVG = TextToSVG.loadSync(fontPath);
const { ascender, descender, unitsPerEm } = textToSVG.font;

const ascent = (ascender / unitsPerEm) * FONT_SIZE;
const descent = (-descender / unitsPerEm) * FONT_SIZE;
const baseline = (LINE_HEIGHT - (ascent + descent)) / 2 + ascent;

const paths = lines.map((line, i) =>
    textToSVG.getD(line, {
        x: 0,
        y: i * LINE_HEIGHT + baseline,
        fontSize: FONT_SIZE,
        anchor: "left baseline",
    })
);
const width = Math.ceil(
    Math.max(...lines.map((line) => textToSVG.getMetrics(line, { fontSize: FONT_SIZE }).width))
);
const height = lines.length * LINE_HEIGHT;

const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" ` +
    `width="${width / FONT_SIZE}em" height="${height / FONT_SIZE}em" fill="currentColor" aria-hidden="true">` +
    paths.map((d) => `<path d="${d}"/>`).join("") +
    `</svg>\n`;

const outDir = new URL("../src/assets/contact/", import.meta.url);
mkdirSync(outDir, { recursive: true });
writeFileSync(new URL(`${name}.svg`, outDir), svg);
console.log(`Wrote src/assets/contact/${name}.svg (${lines.length} line(s))`);
