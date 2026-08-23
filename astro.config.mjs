import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeMathjax from "rehype-mathjax";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import tailwindcss from "@tailwindcss/vite";
import { cspHashIntegration } from "./lib/csp-integration.js";
import { rehypeOpenLinksInNewTab } from "./lib/rehype-external-links.js";
import { rehypeImageSize } from "./lib/rehype-image-size.js";
import {
    mathJaxA11yReportIntegration,
    rehypeMathApplyAccessibleTitles,
    rehypeMathCaptureSource,
} from "./lib/rehype-mathjax-a11y.js";
import { createSitemap } from "./lib/sitemap-cleanup.js";

export default defineConfig({
    site: "https://jannikmenzel.me",
    base: "/",
    output: "static",
    trailingSlash: "always",
    integrations: [
        icon(),
        sitemap({
            filter: (page) => {
                const url = new URL(page);
                const path = url.pathname;
                return (
                    !path.includes("/404") && !path.includes("index.html") && !path.includes("//")
                );
            },
            namespaces: {
                news: false,
                xhtml: false,
                image: false,
                video: false,
            },
        }),
        createSitemap(),
        cspHashIntegration(),
        mathJaxA11yReportIntegration(),
    ],
    markdown: {
        syntaxHighlight: "prism",
        processor: unified({
            remarkPlugins: [remarkMath],
            rehypePlugins: [
                [rehypeImageSize, { dir: "public" }],
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                rehypeMathCaptureSource,
                rehypeMathjax,
                rehypeMathApplyAccessibleTitles,
                rehypeOpenLinksInNewTab,
            ],
        }),
    },
    compressHTML: true,
    build: {
        format: "directory",
        assets: "_astro",
    },
    security: {
        csp: {
            directives: [
                "default-src 'self'",
                "img-src 'self' data: https:",
                "font-src 'self' data:",
                "connect-src 'self' https://api.web3forms.com",
            ],
            styleDirective: {
                resources: [{ resource: "'unsafe-inline'", kind: "attribute" }],
            },
            scriptDirective: {},
        },
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
