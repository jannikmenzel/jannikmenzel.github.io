document.addEventListener("DOMContentLoaded", () => {
    /* ========================
       spotlight
       ======================== */
    const spotlight = document.createElement("div");
    spotlight.classList.add("spotlight");
    document.body.appendChild(spotlight);

    document.addEventListener("mousemove", (e) => {
        const { clientX: x, clientY: y } = e;
        const isDark = document.documentElement.classList.contains("dark");
        const color = isDark ? "rgba(255, 180, 255, 0.08)" : "rgba(180, 150, 255, 0.15)";
        spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, ${color} 0%, rgba(255, 255, 255, 0) 50%)`;
    });

    /* ========================
       typewriter
       ======================== */
    if (document.querySelector('.typewrite')) {
        let TxtType = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function() {
            let i = this.loopNum % this.toRotate.length;
            let fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

            let that = this;
            let delta = 250 - Math.random() * 160;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function() {
                that.tick();
            }, delta);
        };

        // Typewriter
        let elements = document.getElementsByClassName('typewrite');
        for (let i = 0; i < elements.length; i++) {
            let toRotate = elements[i].getAttribute('data-type');
            let period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }

        let css = document.createElement("style");
        css["type"] = "text/css";
        css.innerHTML = `
            .typewrite > .wrap {
                display: inline-block;
                position: relative;
            }
            .typewrite > .wrap::after {
                content: "";
                display: inline-block;
                width: 2px;
                height: 0.8em;
                background-color: #ccc;
                right: -5px;
                top: 0.1em;
                animation: blink 0.7s step-end infinite;
            }
            @keyframes blink {
                50% { opacity: 0; }
            }
        `;
        document.body.appendChild(css);
    }

    /* ========================
       carousel
       ======================== */
    const track = document.querySelector('.carousel-track');
    if (track) {  // Nur wenn das .carousel-track-Element existiert
        const cards = Array.from(track.children);

        cards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });
    }

    /* ========================
       Darkmode
       ======================== */
    const themeSwitch = document.getElementById("theme-switch");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

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
                img.src = img.getAttribute("data-dark-src");
            } else {
                img.src = img.getAttribute("data-light-src") || img.getAttribute("data-src") || img.src;
            }
        });
    };

    const updateBodyThemeAttr = () => {
        const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
        document.body.setAttribute("data-theme", current);
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
