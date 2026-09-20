import * as echarts from "echarts";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import { visit } from "unist-util-visit";
import { hasClass, textOf } from "./hast-utils.js";

const LANGUAGE_CLASS = "language-echarts";

const MIN_FORCED_LABEL_WIDTH = 28;

const VARIANTS = {
    desktop: {
        width: 900,
        height: 480,
        fontSize: 12,
        titleSize: 18,
        grid: { left: 70, right: 30, top: 90, bottom: 90 },
        labelWidth: 100,
    },
    mobile: {
        width: 420,
        height: 440,
        pieHeight: 380,
        pieMaxRadius: 50,
        pieLabelLine: { length: 8, length2: 8 },
        fontSize: 13,
        titleSize: 16,
        grid: { left: 8, right: 16 },
        labelWidth: 90,
        wrapText: true,
    },
};

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

function estimateLines(text, fontSize, width) {
    if (typeof text !== "string" || text === "") {
        return 0;
    }
    return Math.ceil((text.length * fontSize * 0.6) / width);
}

function hasLegend(option) {
    if (option.legend?.show === false) {
        return false;
    }
    const series = Array.isArray(option.series) ? option.series : [];
    return series.length > 1 || series.some((entry) => entry?.name || entry?.type === "pie");
}

function wrappedGridInsets(option, variant) {
    const textWidth = variant.width - 32;
    const titleLines = estimateLines(option.title?.text, variant.titleSize, textWidth);
    const subtextLines = estimateLines(option.title?.subtext, variant.fontSize, textWidth);
    const titleHeight = titleLines * variant.titleSize * 1.4;
    const subtextHeight = subtextLines * variant.fontSize * 1.5;
    return {
        top: Math.round(16 + titleHeight + subtextHeight + 40),
        bottom: hasLegend(option) ? 60 : 16,
    };
}

function categoryLabelWidth(option, variant) {
    const categories = option.xAxis?.data;
    if (!variant.wrapText || !Array.isArray(categories) || categories.length === 0) {
        return variant.labelWidth;
    }
    const slot = (variant.width - variant.grid.left - variant.grid.right) / categories.length;
    return Math.min(variant.labelWidth, Math.floor(slot) - 4);
}

function baseOption(theme, variant) {
    const palette = BRAND[theme];
    const wrap = variant.wrapText ? { width: variant.width - 32, overflow: "break" } : undefined;
    return {
        backgroundColor: "transparent",
        textStyle: { color: palette.text, fontSize: variant.fontSize },
        color: palette.palette,
        title: {
            left: "center",
            textStyle: {
                color: palette.text,
                fontSize: variant.titleSize,
                fontWeight: 600,
                ...wrap,
            },
            subtextStyle: { ...wrap },
        },
        legend: {
            bottom: 0,
            textStyle: { color: palette.text, fontSize: variant.fontSize },
        },
    };
}

function cartesianAxisDefaults(theme, variant, option) {
    const palette = BRAND[theme];
    const axisStyle = {
        axisLine: { lineStyle: { color: palette.border } },
        axisTick: { lineStyle: { color: palette.border } },
        axisLabel: { color: palette.text },
        splitLine: { lineStyle: { color: palette.border } },
    };
    const fittedWidth = categoryLabelWidth(option, variant);
    const forceLabels = fittedWidth >= MIN_FORCED_LABEL_WIDTH;
    return {
        grid: { ...variant.grid, containLabel: true },
        xAxis: {
            ...axisStyle,
            splitLine: { show: false },
            axisLabel: {
                ...axisStyle.axisLabel,
                interval: forceLabels ? 0 : "auto",
                width: forceLabels ? fittedWidth : variant.labelWidth,
                overflow: "break",
            },
        },
        yAxis: variant.wrapText ? { ...axisStyle, nameTextStyle: { align: "left" } } : axisStyle,
    };
}

function toSvgNode(svg, className) {
    const node = fromHtmlIsomorphic(svg, { fragment: true }).children[0];
    node.properties = { ...node.properties, className: [className] };
    return node;
}

function renderThemeVariants(option, theme) {
    return Object.entries(VARIANTS).map(([name, variant]) =>
        toSvgNode(renderChart(option, theme, variant), `chart-diagram-svg--${name}`)
    );
}

function capRadius(radius, maxPercent) {
    if (maxPercent === undefined || typeof radius !== "string" || !radius.endsWith("%")) {
        return radius;
    }
    return `${Math.min(Number.parseFloat(radius), maxPercent)}%`;
}

function applyPieDefaults(option, theme, variant) {
    if (!Array.isArray(option.series)) {
        return option;
    }
    const palette = BRAND[theme];
    return {
        ...option,
        series: option.series.map((series) =>
            series?.type === "pie"
                ? {
                      ...series,
                      ...(series.radius === undefined
                          ? {}
                          : { radius: capRadius(series.radius, variant.pieMaxRadius) }),
                      label: { color: palette.text, textBorderWidth: 0, ...series.label },
                      ...(variant.pieLabelLine && {
                          labelLine: { ...variant.pieLabelLine, ...series.labelLine },
                      }),
                  }
                : series
        ),
    };
}

function hasPie(option) {
    return Array.isArray(option.series) && option.series.some((series) => series?.type === "pie");
}

function renderChart(option, theme, variant) {
    const chart = echarts.init(null, null, {
        renderer: "svg",
        ssr: true,
        width: variant.width,
        height: hasPie(option) ? (variant.pieHeight ?? variant.height) : variant.height,
    });
    const isCartesian = option.xAxis !== undefined || option.yAxis !== undefined;
    let merged = baseOption(theme, variant);
    if (isCartesian) {
        const axisDefaults = cartesianAxisDefaults(theme, variant, option);
        if (variant.wrapText) {
            Object.assign(axisDefaults.grid, wrappedGridInsets(option, variant));
        }
        merged = deepMerge(merged, axisDefaults);
    }
    merged = deepMerge(merged, option);
    merged = applyPieDefaults(merged, theme, variant);
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
                        children: renderThemeVariants(option, "default"),
                    },
                    {
                        type: "element",
                        tagName: "div",
                        properties: { className: ["chart-diagram-dark"] },
                        children: renderThemeVariants(option, "dark"),
                    },
                ],
            });
        }

        groupAdjacentDiagrams(tree);
    };
}
