import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import { blogRedirects } from "./lib/blog-redirects.js";
import { cspHashIntegration } from "./lib/csp-integration.js";
import { createSitemap } from "./lib/sitemap-cleanup.js";

export default defineConfig({
    site: "https://www.jannikmenzel.me",
    base: "/",
    output: "static",
    trailingSlash: "always",
    redirects: blogRedirects,
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
    ],
    markdown: {
        syntaxHighlight: false,
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
                "connect-src 'self' https://n8n.jannikmenzel.me https://stats.jannikmenzel.me",
            ],
            styleDirective: {
                resources: [{ resource: "'unsafe-inline'", kind: "attribute" }],
            },
            scriptDirective: {
                resources: ["'self'", "https://stats.jannikmenzel.me"],
            },
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
