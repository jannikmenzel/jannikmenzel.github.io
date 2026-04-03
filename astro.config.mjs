import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import tailwindcss from "@tailwindcss/vite";

function rehypeOpenLinksInNewTab() {
    return (tree) => {
        const visit = (node) => {
            if (!node || typeof node !== "object") {
                return;
            }

            if (node.type === "element" && node.tagName === "a" && node.properties?.href) {
                const href = String(node.properties.href);

                if (!href.startsWith("#")) {
                    node.properties.target = "_blank";
                    node.properties.rel = "noopener noreferrer";
                }
            }

            if (Array.isArray(node.children)) {
                for (const child of node.children) {
                    visit(child);
                }
            }
        };

        visit(tree);
    };
}

export default defineConfig({
    site: "https://jannikmenzel.me",
    base: "/",
    output: "static",
    integrations: [icon(), sitemap()],
    markdown: {
        syntaxHighlight: "shiki",
        shikiConfig: {
            themes: {
                light: "one-light",
                dark: "one-dark-pro",
            },
        },
        remarkPlugins: [remarkMath],
        rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
            rehypeMathjax,
            rehypeOpenLinksInNewTab,
        ],
    },
    vite: {
        plugins: [tailwindcss()],
        build: {
            rollupOptions: {
                onLog(level, log, handler) {
                    const isKnownAstroUnusedImportWarning =
                        level === "warn" &&
                        log.code === "UNUSED_EXTERNAL_IMPORT" &&
                        typeof log.message === "string" &&
                        log.message.includes("@astrojs/internal-helpers/remote") &&
                        log.message.includes("node_modules/astro/dist/assets/utils/index.js");

                    if (!isKnownAstroUnusedImportWarning) {
                        handler(level, log);
                    }
                },
            },
        },
    },
});
