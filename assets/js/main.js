document.addEventListener("DOMContentLoaded", () => {
    /* ========================
       spotlight
       ======================== */
    const spotlight = document.createElement("div");
    spotlight.classList.add("spotlight");
    document.body.appendChild(spotlight);

    document.addEventListener("mousemove", (e) => {
        const { clientX: x, clientY: y } = e;
        spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 180, 255, 0.08) 0%, rgba(0, 0, 0, 0) 50%)`;
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
});