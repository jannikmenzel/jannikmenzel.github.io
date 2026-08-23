import { computeInlineScriptHashes, computeMathJaxStyleHash } from "./csp-hashes.js";

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
        },
    };
}
