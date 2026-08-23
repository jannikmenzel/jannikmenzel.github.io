import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { visit } from "unist-util-visit";

function textOf(node) {
    if (node.type === "text") {
        return node.value;
    }
    if (!Array.isArray(node.children)) {
        return "";
    }
    return node.children.map(textOf).join("");
}

function isMathNode(node) {
    const classes = Array.isArray(node.properties?.className) ? node.properties.className : [];
    return (
        classes.includes("language-math") ||
        classes.includes("math-display") ||
        classes.includes("math-inline")
    );
}

export function rehypeMathCaptureSource() {
    return (tree, file) => {
        const sources = [];
        visit(tree, "element", (node) => {
            if (isMathNode(node)) {
                sources.push(textOf(node));
            }
        });
        file.data.mathSources = sources;
    };
}

export function rehypeMathApplyAccessibleTitles() {
    return (tree, file) => {
        const sources = file.data.mathSources ?? [];
        let index = 0;
        visit(tree, "element", (node) => {
            if (node.tagName !== "svg" || node.properties?.role !== "img") {
                return;
            }
            const source = sources[index++];
            if (!source) {
                return;
            }
            const titleId = `mjx-a11y-title-${index}`;
            node.children = [
                {
                    type: "element",
                    tagName: "title",
                    properties: { id: titleId },
                    children: [{ type: "text", value: source }],
                },
                ...node.children,
            ];
            node.properties["aria-labelledby"] = titleId;
        });
        delete file.data.mathSources;
    };
}

function countAccessibleFormulas(distDir) {
    const htmlFiles = fs
        .readdirSync(distDir, { recursive: true, encoding: "utf8" })
        .filter((entry) => entry.endsWith(".html"));

    let count = 0;
    for (const file of htmlFiles) {
        const html = fs.readFileSync(path.join(distDir, file), "utf8");
        const matches = html.match(/aria-labelledby="mjx-a11y-title-/g);
        count += matches?.length ?? 0;
    }
    return count;
}

export function mathJaxA11yReportIntegration() {
    return {
        name: "rehype-mathjax-a11y",
        hooks: {
            "astro:build:done": ({ dir, logger }) => {
                const count = countAccessibleFormulas(fileURLToPath(dir));
                logger.info(`Added accessible titles to ${count} MathJax formula(s)`);
            },
        },
    };
}
