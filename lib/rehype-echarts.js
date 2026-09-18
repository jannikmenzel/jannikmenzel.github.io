import * as echarts from "echarts";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import { visit } from "unist-util-visit";
import { hasClass, textOf } from "./hast-utils.js";

const LANGUAGE_CLASS = "language-echarts";
const WIDTH = 900;
const HEIGHT = 480;

const BRAND = {
    default: {
        text: "#1d1d1f",
        border: "#d4d4d4",
        palette: ["#475569", "#64748b", "#94a3b8", "#334155", "#1e293b", "#cbd5e1"],
    },
    dark: {
        background: "#1d1d1f",
        text: "#f8f8f8",
        border: "#404040",
        palette: ["#94a3b8", "#cbd5e1", "#64748b", "#e2e8f0", "#475569", "#334155"],
    },
};

function isPlainObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
}

function deepMerge(base, override) {
    if (override === undefined) {
        return base;
    }
    if (isPlainObject(base) && isPlainObject(override)) {
        const result = { ...base };
        for (const key of Object.keys(override)) {
            result[key] = deepMerge(base[key], override[key]);
        }
        return result;
    }
    return override;
}

function baseOption(theme) {
    const palette = BRAND[theme];
    return {
        backgroundColor: "transparent",
        textStyle: { color: palette.text },
        color: palette.palette,
        title: {
            left: "center",
            textStyle: { color: palette.text, fontSize: 18, fontWeight: 600 },
        },
        legend: { bottom: 0, textStyle: { color: palette.text } },
    };
}

function cartesianAxisDefaults(theme) {
    const palette = BRAND[theme];
    const axisStyle = {
        axisLine: { lineStyle: { color: palette.border } },
        axisTick: { lineStyle: { color: palette.border } },
        axisLabel: { color: palette.text },
        splitLine: { lineStyle: { color: palette.border } },
    };
    return {
        grid: { left: 70, right: 30, top: 90, bottom: 90, containLabel: true },
        xAxis: {
            ...axisStyle,
            splitLine: { show: false },
            axisLabel: {
                ...axisStyle.axisLabel,
                interval: 0,
                width: 100,
                overflow: "break",
            },
        },
        yAxis: axisStyle,
    };
}

function toSvgNode(svg) {
    return fromHtmlIsomorphic(svg, { fragment: true }).children[0];
}

function applyPieLabelDefaults(option, theme) {
    if (!Array.isArray(option.series)) {
        return option;
    }
    const palette = BRAND[theme];
    return {
        ...option,
        series: option.series.map((series) =>
            series?.type === "pie"
                ? { ...series, label: { color: palette.text, textBorderWidth: 0, ...series.label } }
                : series
        ),
    };
}

function renderChart(option, theme) {
    const chart = echarts.init(null, null, {
        renderer: "svg",
        ssr: true,
        width: WIDTH,
        height: HEIGHT,
    });
    const isCartesian = option.xAxis !== undefined || option.yAxis !== undefined;
    let merged = baseOption(theme);
    if (isCartesian) {
        merged = deepMerge(merged, cartesianAxisDefaults(theme));
    }
    merged = deepMerge(merged, option);
    merged = applyPieLabelDefaults(merged, theme);
    chart.setOption(merged);
    const svg = chart.renderToSVGString();
    chart.dispose();
    return theme === "dark" ? clearLegendSymbolFill(svg) : svg;
}

function clearLegendSymbolFill(svg) {
    return svg.replaceAll('fill="#fff"', `fill="${BRAND.dark.background}"`);
}

function isChartDiagram(node) {
    return node.type === "element" && node.tagName === "div" && hasClass(node, "chart-diagram");
}

function isRowEligibleDiagram(node) {
    return isChartDiagram(node) && hasClass(node, "chart-diagram--row");
}

function isWhitespaceText(node) {
    return node.type === "text" && node.value.trim() === "";
}

function groupAdjacentDiagrams(node) {
    if (!Array.isArray(node.children)) {
        return;
    }
    for (const child of node.children) {
        groupAdjacentDiagrams(child);
    }
    const grouped = [];
    let i = 0;
    while (i < node.children.length) {
        const child = node.children[i];
        if (!isRowEligibleDiagram(child)) {
            grouped.push(child);
            i++;
            continue;
        }
        const run = [child];
        let next = i + 1;
        for (;;) {
            let lookahead = next;
            while (lookahead < node.children.length && isWhitespaceText(node.children[lookahead])) {
                lookahead++;
            }
            if (
                lookahead >= node.children.length ||
                !isRowEligibleDiagram(node.children[lookahead])
            ) {
                break;
            }
            run.push(node.children[lookahead]);
            next = lookahead + 1;
        }
        grouped.push(
            run.length > 1
                ? {
                      type: "element",
                      tagName: "div",
                      properties: { className: ["chart-diagram-row"] },
                      children: run,
                  }
                : run[0]
        );
        i = next;
    }
    node.children = grouped;
}

export function rehypeEcharts() {
    return (tree) => {
        const blocks = [];
        visit(tree, "element", (node, index, parent) => {
            if (node.tagName !== "pre" || !parent || typeof index !== "number") {
                return;
            }
            const code = node.children.find(
                (child) => child.type === "element" && child.tagName === "code"
            );
            if (code && hasClass(code, LANGUAGE_CLASS)) {
                const row = Boolean(
                    code.properties?.["data-diagram-row"] ?? code.properties?.dataDiagramRow
                );
                blocks.push({ parent, index, source: textOf(code), row });
            }
        });

        if (blocks.length === 0) {
            return;
        }

        for (let i = blocks.length - 1; i >= 0; i--) {
            const { parent, index, row, source } = blocks[i];
            let option;
            try {
                option = JSON.parse(source);
            } catch (error) {
                throw new Error(`Invalid JSON in \`\`\`echarts block:\n${source}`, {
                    cause: error,
                });
            }

            const className = ["chart-diagram"];
            if (row) {
                className.push("chart-diagram--row");
            }
            parent.children.splice(index, 1, {
                type: "element",
                tagName: "div",
                properties: { className },
                children: [
                    {
                        type: "element",
                        tagName: "div",
                        properties: { className: ["chart-diagram-light"] },
                        children: [toSvgNode(renderChart(option, "default"))],
                    },
                    {
                        type: "element",
                        tagName: "div",
                        properties: { className: ["chart-diagram-dark"] },
                        children: [toSvgNode(renderChart(option, "dark"))],
                    },
                ],
            });
        }

        groupAdjacentDiagrams(tree);
    };
}
