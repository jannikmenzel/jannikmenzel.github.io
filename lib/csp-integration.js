import { fileURLToPath } from "node:url";
import {
    computeInlineScriptHashes,
    computeMathJaxStyleHash,
    patchMissingCspHashes,
} from "./csp-hashes.js";

export function cspHashIntegration() {
    return {
        name: "csp-hashes",
        hooks: {
            "astro:config:setup": async ({ updateConfig, logger }) => {
                const [styleHash, scriptHashes] = await Promise.all([
                    computeMathJaxStyleHash(),
                    computeInlineScriptHashes(),
                ]);

                logger.info(
                    `Computed ${scriptHashes.length} inline-script hash(es) and 1 stylesheet hash for CSP`
                );

                updateConfig({
                    security: {
                        csp: {
                            styleDirective: { hashes: [styleHash] },
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
