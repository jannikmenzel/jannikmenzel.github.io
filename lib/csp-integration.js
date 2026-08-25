import { fileURLToPath } from "node:url";
import {
    computeInlineScriptHashes,
    computeMathJaxStyleHash,
    patchStructuredDataHashes,
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
                const patchedFiles = patchStructuredDataHashes(fileURLToPath(dir));
                if (patchedFiles > 0) {
                    logger.info(
                        `Patched CSP script-src with per-page structured-data hash(es) on ${patchedFiles} page(s)`
                    );
                }
            },
        },
    };
}
