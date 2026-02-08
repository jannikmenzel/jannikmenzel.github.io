document.addEventListener("DOMContentLoaded", () => {
    /* ========================
       carousel
       ======================== */
    const track = document.querySelector('.carousel-track');
    if (track) {
        const cards = Array.from(track.children);

        cards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });
    }

    /* ========================
       Skills Animation
       ======================== */
    const skills = document.querySelectorAll(".skill");

    skills.forEach(skill => {
        const percentageEl = skill.querySelector(".skill-percentage");
        const barEl = skill.querySelector(".skill-bar");

        const target = Number.parseInt(percentageEl.dataset.target);
        const width = Number.parseInt(barEl.dataset.width);

        let count = 0;

        const interval = setInterval(() => {
            if (count >= target) {
                clearInterval(interval);
            } else {
                count++;
                percentageEl.textContent = count + "%";
                barEl.style.width = (width * count / target) + "%";
            }
        }, 10);
    });

    /* ========================
       Darkmode
       ======================== */
    const themeSwitch = document.getElementById("theme-switch");
    const prefersDarkScheme = globalThis.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (theme) => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    };

    const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

    // system changes
    prefersDarkScheme.addEventListener("change", (e) => {
        const saved = localStorage.getItem("theme");
        if (!saved) {
            applyTheme(e.matches ? "dark" : "light");
        }
    });

    // toggle handler
    themeSwitch.addEventListener("click", () => {
        const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(newTheme);
        setStoredTheme(newTheme);
    });

    const updateThemeImages = () => {
        const isDark = document.documentElement.classList.contains("dark");
        const images = document.querySelectorAll("img[data-dark-src]");
        images.forEach(img => {
            if (isDark) {
                img.src = img.dataset.darkSrc;
            } else {
                img.src = img.dataset.lightSrc || img.dataset.src || img.src;
            }
        });
    };

    const updateBodyThemeAttr = () => {
        document.body.dataset.theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    };
    updateBodyThemeAttr();
    updateThemeImages();

    // update on change
    const observer = new MutationObserver(() => {
        updateBodyThemeAttr();
        updateThemeImages();
    });
    observer.observe(document.documentElement, {attributes: true, attributeFilter: ["class"]});

    prefersDarkScheme.addEventListener("change", () => {
        updateBodyThemeAttr();
    });
});
