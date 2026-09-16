import { visit } from "unist-util-visit";

export function remarkChartRow() {
    return (tree) => {
        visit(tree, "code", (node) => {
            if (node.lang !== "echarts") {
                return;
            }
            const meta = (node.meta ?? "").trim().split(/\s+/);
            if (meta.includes("row")) {
                node.data ??= {};
                node.data.hProperties ??= {};
                node.data.hProperties["data-diagram-row"] = "true";
            }
        });
    };
}
