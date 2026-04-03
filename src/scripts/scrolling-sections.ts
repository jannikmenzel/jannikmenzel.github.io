import { animate, stagger, inView } from "motion";

const TARGET_SELECTOR = ".scrolling-section";

const initScrollingSections = () => {
    if (globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        // Keep sections visible for reduced-motion users.
        document.querySelectorAll<HTMLElement>(TARGET_SELECTOR).forEach((section) => {
            section.style.opacity = "1";
            section.style.transform = "none";
        });
        return;
    }

    inView(
        TARGET_SELECTOR,
        (element) => {
            const section = element as HTMLElement;

            if (section.dataset.animated === "true") {
                return;
            }

            section.dataset.animated = "true";

            animate(
                section,
                { opacity: [0, 1], y: [40, 0] },
                { ease: [0.22, 1, 0.36, 1], duration: 0.8 }
            );

            const cards = section.querySelectorAll(".card");
            if (cards.length > 0) {
                animate(
                    cards,
                    { opacity: [0, 1], y: [12, 0] },
                    {
                        ease: [0.22, 1, 0.36, 1],
                        duration: 0.45,
                        delay: stagger(0.12, { startDelay: 0.1 }),
                    }
                );
            }
        },
        { amount: 0.25 }
    );
};

initScrollingSections();
