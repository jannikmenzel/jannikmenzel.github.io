import { animate, stagger } from "motion";

const prefersReducedMotion = () =>
    globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches;

let isFirstPageLoad = true;
let prevUrl = "";
const INSTANT_ID = "vt-instant";

function setInstantVT() {
    if (document.getElementById(INSTANT_ID)) return;
    const style = document.createElement("style");
    style.id = INSTANT_ID;
    style.textContent = `
        ::view-transition-old(root),
        ::view-transition-new(root) {
            animation-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

function clearInstantVT() {
    document.getElementById(INSTANT_ID)?.remove();
}

document.addEventListener("astro:after-swap", () => {
    const html = document.documentElement;
    html.classList.remove("no-js");
    html.classList.add("js");

    if (isFirstPageLoad) return;
    if (prefersReducedMotion()) return;

    const isSamePage = location.href === prevUrl;
    clearInstantVT();

    if (isSamePage) {
        setInstantVT();
        return;
    }

    const content = document.querySelectorAll<HTMLElement>("main > :not(.scrolling-section)");
    if (content.length === 0) return;

    content.forEach((el) => {
        el.style.opacity = "0";
    });
});

document.addEventListener("astro:page-load", () => {
    clearInstantVT();

    if (isFirstPageLoad) {
        isFirstPageLoad = false;
        prevUrl = location.href;
        return;
    }
    if (prefersReducedMotion()) return;
    if (location.href === prevUrl) return;
    prevUrl = location.href;

    const content = document.querySelectorAll<HTMLElement>("main > :not(.scrolling-section)");
    if (content.length === 0) return;

    animate(
        content,
        { opacity: [0, 1] },
        {
            ease: [0.22, 1, 0.36, 1],
            duration: 0.45,
            delay: stagger(0.08),
        }
    );
});
