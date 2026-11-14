import { fileURLToPath } from "node:url";
import { computeInlineScriptHashes, patchMissingCspHashes } from "./csp-hashes.js";

export function cspHashIntegration() {
    return {
        name: "csp-hashes",
        hooks: {
            "astro:config:setup": async ({ updateConfig, logger }) => {
                const scriptHashes = await computeInlineScriptHashes();

                logger.info(`Computed ${scriptHashes.length} inline-script hash(es) for CSP`);

                updateConfig({
                    security: {
                        csp: {
                            scriptDirective: { hashes: scriptHashes },
                        },
                    },
                });
            },
            "astro:build:done": async ({ dir, logger }) => {
                const outDir = fileURLToPath(dir);
                const patchedFiles = patchMissingCspHashes(outDir);
                if (patchedFiles > 0) {
                    logger.info(
                        `Patched CSP script-src/style-src with per-page inline hash(es) on ${patchedFiles} page(s)`
                    );
                }
            },
        },
    };
}
