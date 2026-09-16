import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseAstro } from "@astrojs/compiler";
import { createMarkdownProcessor } from "@astrojs/markdown-remark";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";
import { rehypeMathApplyAccessibleTitles, rehypeMathCaptureSource } from "./rehype-mathjax-a11y.js";

export function sha256(text) {
    return `sha256-${createHash("sha256").update(text, "utf8").digest("base64")}`;
}

const SRC_DIR = fileURLToPath(new URL("../src", import.meta.url));

function findAstroFiles(dir) {
    return fs
        .readdirSync(dir, { recursive: true, encoding: "utf8" })
        .filter((entry) => entry.endsWith(".astro"))
        .map((entry) => path.join(dir, entry));
}

async function hashInlineScripts(filePath) {
    const source = fs.readFileSync(filePath, "utf8");
    const { ast, diagnostics } = await parseAstro(source, { position: false });
    const fatal = diagnostics.filter((d) => d.severity === 1);
    if (fatal.length > 0) {
        throw new Error(`Failed to parse ${filePath} for CSP hashing: ${JSON.stringify(fatal)}`);
    }

    const hashes = [];
    walk(ast);
    return hashes;

    function walk(node) {
        if (node.type === "element" && node.name === "script") {
            const isInline = node.attributes.some((attr) => attr.name === "is:inline");
            if (isInline) {
                const body = node.children
                    .map((child) => (child.type === "text" ? child.value : ""))
                    .join("");
                if (body) {
                    hashes.push(sha256(body));
                }
            }
        }
        for (const child of node.children ?? []) {
            walk(child);
        }
    }
}

export async function computeInlineScriptHashes() {
    const perFile = await Promise.all(findAstroFiles(SRC_DIR).map(hashInlineScripts));
    return [...new Set(perFile.flat())];
}

const LD_JSON_SCRIPT_RE = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
const INLINE_SCRIPT_RE = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g;
const INLINE_STYLE_ATTR_RE = /\sstyle="([^"]*?)"/g;
const STYLE_BLOCK_SOURCE = "<style[^>]*>([\\s\\S]*?)</style>";
const STYLE_BLOCK_RE = new RegExp(STYLE_BLOCK_SOURCE, "g");
const SCRIPT_SRC_DIRECTIVE_RE = /(script-src)([^;"]*)/;
const STYLE_SRC_DIRECTIVE_RE = /(style-src)([^;"]*)/;

function findHtmlFiles(dir) {
    return fs
        .readdirSync(dir, { recursive: true, encoding: "utf8" })
        .filter((entry) => entry.endsWith(".html"))
        .map((entry) => path.join(dir, entry));
}

function collectMissingHashes(html, regexes) {
    const hashes = regexes.flatMap((re) =>
        [...html.matchAll(re)]
            .map((match) => match[1])
            .filter((body) => body.trim().length > 0)
            .map((body) => sha256(body))
    );
    return [...new Set(hashes)].filter((hash) => !html.includes(hash));
}

function patchDirective(html, directiveRe, hashes, label, file) {
    if (hashes.length === 0) {
        return html;
    }
    const quotedHashes = hashes.map((hash) => ` '${hash}'`).join("");
    const patched = html.replace(
        directiveRe,
        (_full, prefix, rest) => `${prefix}${rest}${quotedHashes}`
    );
    if (patched === html) {
        throw new Error(`Could not find a ${label} directive to patch in ${file}`);
    }
    return patched;
}

export function patchMissingCspHashes(outDir) {
    let patchedFiles = 0;
    for (const file of findHtmlFiles(outDir)) {
        const html = fs.readFileSync(file, "utf8");
        const missingScriptHashes = collectMissingHashes(html, [
            LD_JSON_SCRIPT_RE,
            INLINE_SCRIPT_RE,
        ]);
        const missingStyleHashes = collectMissingHashes(html, [
            INLINE_STYLE_ATTR_RE,
            STYLE_BLOCK_RE,
        ]);

        if (missingScriptHashes.length === 0 && missingStyleHashes.length === 0) {
            continue;
        }

        let patched = patchDirective(
            html,
            SCRIPT_SRC_DIRECTIVE_RE,
            missingScriptHashes,
            "script-src",
            file
        );
        patched = patchDirective(
            patched,
            STYLE_SRC_DIRECTIVE_RE,
            missingStyleHashes,
            "style-src",
            file
        );

        fs.writeFileSync(file, patched, "utf8");
        patchedFiles += 1;
    }
    return patchedFiles;
}

export async function computeMathJaxStyleHash() {
    const processor = await createMarkdownProcessor({
        syntaxHighlight: "prism",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeMathCaptureSource, rehypeMathjax, rehypeMathApplyAccessibleTitles],
    });
    const { code } = await processor.render("$x$");
    const match = code.match(new RegExp(STYLE_BLOCK_SOURCE));
    if (!match) {
        throw new Error("Could not find the MathJax stylesheet to hash for the CSP config.");
    }
    return sha256(match[1]);
}
