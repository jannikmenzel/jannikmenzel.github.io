import { defineConfig } from "astro/config";
import icon from "astro-icon";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: "https://jannikmenzel.me",
    base: "/",
    output: "static",
    integrations: [icon()],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }], rehypeMathjax],
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
