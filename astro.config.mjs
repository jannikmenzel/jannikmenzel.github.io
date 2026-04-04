import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import tailwindcss from "@tailwindcss/vite";
import rehypeImgSize from "rehype-img-size";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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

function createSitemap() {
    return {
        name: "createSitemap",
        hooks: {
            "astro:build:done": async ({ dir }) => {
                const distPath = fileURLToPath(dir);
                const indexPath = path.join(distPath, "sitemap-index.xml");
                const sitemap0Path = path.join(distPath, "sitemap-0.xml");
                const finalSitemapPath = path.join(distPath, "sitemap.xml");

                try {
                    if (fs.existsSync(sitemap0Path)) {
                        fs.renameSync(sitemap0Path, finalSitemapPath);
                        console.log("Renamed sitemap-0.xml to sitemap.xml");
                    }

                    if (fs.existsSync(indexPath)) {
                        fs.unlinkSync(indexPath);
                        console.log("Removed sitemap-index.xml");
                    }
                } catch (error) {
                    console.error("Error cleaning up sitemap files:", error);
                }
            },
        },
    };
}

export default defineConfig({
    site: "https://jannikmenzel.me",
    base: "/",
    output: "static",
    integrations: [
        icon(),
        sitemap({
            namespaces: {
                news: false,
                xhtml: false,
                image: false,
                video: false,
            },
        }),
        createSitemap(),
    ],
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
            [rehypeImgSize, { dir: "public" }],
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
