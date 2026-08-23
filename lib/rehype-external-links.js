export function rehypeOpenLinksInNewTab() {
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
