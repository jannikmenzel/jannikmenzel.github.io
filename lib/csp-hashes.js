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
    return perFile.flat();
}

const LD_JSON_SCRIPT_RE = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
const SCRIPT_SRC_DIRECTIVE_RE = /(script-src)([^;"]*)/;

function findHtmlFiles(dir) {
    return fs
        .readdirSync(dir, { recursive: true, encoding: "utf8" })
        .filter((entry) => entry.endsWith(".html"))
        .map((entry) => path.join(dir, entry));
}

export function patchStructuredDataHashes(outDir) {
    let patchedFiles = 0;
    for (const file of findHtmlFiles(outDir)) {
        const html = fs.readFileSync(file, "utf8");
        const missingHashes = [...html.matchAll(LD_JSON_SCRIPT_RE)]
            .map((match) => sha256(match[1]))
            .filter((hash) => !html.includes(hash));

        if (missingHashes.length === 0) {
            continue;
        }

        const quotedHashes = [...new Set(missingHashes)].map((hash) => ` '${hash}'`).join("");
        const patched = html.replace(SCRIPT_SRC_DIRECTIVE_RE, (_full, prefix, rest) => {
            return `${prefix}${rest}${quotedHashes}`;
        });
        if (patched === html) {
            throw new Error(`Could not find a script-src directive to patch in ${file}`);
        }

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
    const match = code.match(/<style[^>]*>([\s\S]*?)<\/style>/);
    if (!match) {
        throw new Error("Could not find the MathJax stylesheet to hash for the CSP config.");
    }
    return sha256(match[1]);
}
