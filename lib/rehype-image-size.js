import path from "node:path";
import sharp from "sharp";
import { visit } from "unist-util-visit";

const absolutePathRegex = /^(?:[a-z]+:)?\/\//;

export function rehypeImageSize({ dir } = {}) {
    return async (tree) => {
        const imgNodes = [];
        visit(tree, "element", (node) => {
            if (node.tagName === "img" && node.properties?.src) {
                imgNodes.push(node);
            }
        });

        await Promise.all(
            imgNodes.map(async (node) => {
                let src = String(node.properties.src);
                if (absolutePathRegex.test(src)) {
                    return;
                }

                const shouldJoin = !path.isAbsolute(src) || src.startsWith("/");
                if (dir && shouldJoin) {
                    src = path.join(dir, src);
                }

                const { width, height } = await sharp(src).metadata();
                node.properties.width = width;
                node.properties.height = height;
                node.properties.loading = "lazy";
            })
        );
    };
}
