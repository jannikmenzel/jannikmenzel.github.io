import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export function createSitemap() {
    return {
        name: "sitemap-cleanup",
        hooks: {
            "astro:build:done": async ({ dir, logger }) => {
                const distPath = fileURLToPath(dir);
                const indexPath = path.join(distPath, "sitemap-index.xml");
                const sitemap0Path = path.join(distPath, "sitemap-0.xml");
                const finalSitemapPath = path.join(distPath, "sitemap.xml");

                try {
                    if (fs.existsSync(sitemap0Path)) {
                        fs.renameSync(sitemap0Path, finalSitemapPath);
                    }
                    if (fs.existsSync(indexPath)) {
                        fs.unlinkSync(indexPath);
                    }
                    logger.info("Renamed sitemap-0.xml to sitemap.xml");
                } catch (error) {
                    logger.error(`Failed to clean up sitemap files: ${error}`);
                }
            },
        },
    };
}
