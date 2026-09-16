export function hasClass(node, className) {
    const classes = node.properties?.className;
    return Array.isArray(classes) && classes.includes(className);
}

export function textOf(node) {
    if (node.type === "text") {
        return node.value;
    }
    if (!Array.isArray(node.children)) {
        return "";
    }
    return node.children.map(textOf).join("");
}
