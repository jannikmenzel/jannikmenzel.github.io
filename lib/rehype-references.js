import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import { visit } from "unist-util-visit";
import { hasClass, textOf } from "./hast-utils.js";

const LANGUAGE_CLASS = "language-references";

const TYPES = {
    study: "Studie",
    book: "Buch",
    video: "Video",
    podcast: "Podcast",
    article: "Artikel",
    website: "Website",
    other: "Sonstiges",
};

const CHIP_CLASS =
    "inline-flex items-center border border-primary/15 bg-background px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-accent hover:text-accent aria-pressed:border-background-foreground aria-pressed:bg-background-foreground aria-pressed:text-background";

const BADGE_CLASS =
    "inline-flex w-full items-center justify-center border border-primary/15 bg-background px-3 py-1 text-center text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground";

const INIT_SCRIPT = `
document.querySelectorAll("[data-ref-table]").forEach((root) => {
    if (root.dataset.refInit) return;
    root.dataset.refInit = "true";

    const rows = Array.from(root.querySelectorAll("[data-ref-row]"));
    const searchInput = root.querySelector("[data-ref-search-input]");
    const chips = Array.from(root.querySelectorAll("[data-ref-chip]"));
    const empty = root.querySelector("[data-ref-empty]");
    const count = root.querySelector("[data-ref-count]");
    let activeType = "all";

    function applyFilters() {
        const query = (searchInput?.value ?? "").trim().toLowerCase();
        let visible = 0;

        for (const row of rows) {
            const matchesType = activeType === "all" || row.dataset.refType === activeType;
            const matchesQuery = !query || (row.dataset.refSearch ?? "").includes(query);
            const show = matchesType && matchesQuery;
            row.hidden = !show;
            if (show) visible += 1;
        }

        if (empty) empty.hidden = visible !== 0;
        if (count) count.textContent = visible + " von " + rows.length + " Einträgen angezeigt";
    }

    searchInput?.addEventListener("input", applyFilters);

    for (const chip of chips) {
        chip.addEventListener("click", () => {
            activeType = chip.dataset.refChip ?? "all";
            for (const c of chips) c.setAttribute("aria-pressed", String(c === chip));
            applyFilters();
        });
    }

    applyFilters();
});
`.trim();

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function normalizeType(type) {
    const key = String(type ?? "other").toLowerCase();
    return TYPES[key] ? key : "other";
}

function buildSearchHaystack(entry) {
    return [entry.title, entry.authors].filter(Boolean).join(" ").toLowerCase();
}

function renderRow(entry, fallbackId, hasId) {
    const type = normalizeType(entry.type);
    const entryId = entry.id ? String(entry.id).trim() : "";
    const rowId = entryId || fallbackId;
    const titleHtml = entry.url
        ? `<a href="${escapeHtml(entry.url)}" target="_blank" rel="noopener noreferrer" class="hover:text-muted-foreground">${escapeHtml(entry.title)}</a>`
        : escapeHtml(entry.title);
    const idHtml = hasId
        ? `<span class="min-w-[2.5ch] shrink-0 font-mono text-sm font-normal text-muted-foreground">${entryId ? `[${escapeHtml(entryId)}]` : ""}</span>`
        : "";

    return `
<tr id="${escapeHtml(rowId)}" data-ref-row data-ref-type="${type}" data-ref-search="${escapeHtml(buildSearchHaystack(entry))}" class="hover:bg-background-alt">
<td class="hidden lg:table-cell">
    <span class="${BADGE_CLASS}">${TYPES[type]}</span>
</td>
    <td class="wrap-break-word">
        <div class="flex items-baseline gap-2">
            ${idHtml}
            <div class="min-w-0">
                <span class="block font-semibold">${titleHtml}</span>
                ${entry.authors ? `<span class="mt-1 block text-sm text-muted-foreground">${escapeHtml(entry.authors)}</span>` : ""}
            </div>
        </div>
    </td>
    <td class="hidden text-muted-foreground sm:table-cell">${entry.year ? escapeHtml(String(entry.year)) : ""}</td>
</tr>`;
}

function sortByEntryId(entries) {
    return entries.slice().sort((a, b) => {
        const idA = a.id ? String(a.id).trim() : "";
        const idB = b.id ? String(b.id).trim() : "";
        if (!idA && !idB) return 0;
        if (!idA) return 1;
        if (!idB) return -1;
        const numA = Number(idA);
        const numB = Number(idB);
        if (!Number.isNaN(numA) && !Number.isNaN(numB)) return numA - numB;
        return idA.localeCompare(idB);
    });
}

function renderReferenceTable(entries, blockIndex) {
    const tableId = `ref-table-${blockIndex}`;
    const typeOrder = Object.keys(TYPES);
    const usedTypes = [...new Set(entries.map((entry) => normalizeType(entry.type)))].sort(
        (a, b) => typeOrder.indexOf(a) - typeOrder.indexOf(b)
    );
    const chips = usedTypes
        .map(
            (type) =>
                `<button type="button" data-ref-chip="${type}" aria-pressed="false" class="${CHIP_CLASS}">${TYPES[type]}</button>`
        )
        .join("");
    const fallbackIds = new Map(entries.map((entry, index) => [entry, `${tableId}-${index}`]));
    const hasYear = entries.some((entry) => entry.year);
    const hasId = entries.some((entry) => entry.id);
    const rows = sortByEntryId(entries)
        .map((entry) => renderRow(entry, fallbackIds.get(entry), hasId))
        .join("");

    return `
<div id="${tableId}" data-ref-table class="my-8 border border-border">
    <div class="flex flex-wrap items-center gap-3 border-b border-border bg-background-alt p-3">
        <label class="flex min-w-[220px] flex-1 items-center gap-2 border border-border bg-background px-3 py-2 text-muted-foreground">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" class="h-4 w-4 shrink-0"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 5L20.49 19zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9" /></svg>
            <input type="text" name="ref-search" data-ref-search-input placeholder="Suchen" aria-label="Einträge durchsuchen" class="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        </label>
        ${
            usedTypes.length > 1
                ? `<div data-ref-chips role="group" aria-label="Nach Typ filtern" class="flex flex-wrap gap-2">
            <button type="button" data-ref-chip="all" aria-pressed="true" class="${CHIP_CLASS}">Alle</button>
            ${chips}
        </div>`
                : ""
        }
    </div>
    <div class="overflow-x-auto">
        <table class="w-full table-fixed">
            <thead>
                <tr>
                    <th scope="col" class="hidden w-36 font-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground lg:table-cell">Typ</th>
                    <th scope="col" class="font-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">Titel</th>
                    <th scope="col" class="hidden w-24 font-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:table-cell">${hasYear ? "Datum" : ""}</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    </div>
    <p data-ref-empty hidden class="border-t border-border px-4 py-3 text-sm text-muted-foreground">Keine Einträge gefunden.</p>
    <p data-ref-count aria-live="polite" class="px-4 py-2 text-xs text-muted-foreground">${entries.length} von ${entries.length} Einträgen angezeigt</p>
</div>`;
}

export function rehypeReferences() {
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
                blocks.push({ parent, index, source: textOf(code) });
            }
        });

        if (blocks.length === 0) {
            return;
        }

        for (let i = blocks.length - 1; i >= 0; i--) {
            const { parent, index, source } = blocks[i];
            let entries;
            try {
                entries = JSON.parse(source);
            } catch (error) {
                throw new Error(`Invalid JSON in \`\`\`references block:\n${source}`, {
                    cause: error,
                });
            }
            if (!Array.isArray(entries) || entries.length === 0) {
                throw new Error(
                    `\`\`\`references block must contain a non-empty array:\n${source}`
                );
            }
            entries.forEach((entry, entryIndex) => {
                if (!entry || typeof entry.title !== "string" || !entry.title.trim()) {
                    throw new Error(
                        `\`\`\`references entry at index ${entryIndex} is missing a "title":\n${source}`
                    );
                }
            });

            const html = renderReferenceTable(entries, i);
            const replacement = fromHtmlIsomorphic(html, { fragment: true }).children;
            parent.children.splice(index, 1, ...replacement);
        }

        const scriptNode = fromHtmlIsomorphic(`<script>${INIT_SCRIPT}</script>`, {
            fragment: true,
        }).children[0];
        tree.children.push(scriptNode);
    };
}
