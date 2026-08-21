import fsrLight from "../images/mockups/fsr-mockup-light.png";
import fsrDark from "../images/mockups/fsr-mockup-dark.png";
import ascii from "../images/mockups/ascii-mockup.png";
import ploucquet from "../images/mockups/ploucquet-mockup.png";
import lernstudio from "../images/mockups/lernstudio-mockup.png";
import asciiMobile from "../images/mockups/ascii-mockup-mobile.png";
import lernstudioMobile from "../images/mockups/lernstudio-mockup-mobile.png";
import findora from "../images/mockups/findora-mockup.png";
import stura from "../images/mockups/stura-mockup.png";
import sturaMobile from "../images/mockups/stura-mockup-mobile.png";

export const projects = [
    {
        id: "stura",
        title: "Stura TU Dresden",
        href: "https://www.stura.tu-dresden.de/",
        year: "Web Development / 2026",
        aspect: "md:aspect-square",
        grid: "md:col-span-4",
        featured: false,
        badge: ["Astro", "Tailwind", "Sveltia"],
        image: stura,
        imageMobile: sturaMobile,
        alt: "",
    },
    {
        id: "findora",
        title: "Findora",
        href: "https://findora.de",
        year: "Web Development / 2026",
        aspect: "aspect-[16/10]",
        grid: "md:col-span-8",
        featured: true,
        badge: ["Astro", "Tailwind", "React"],
        image: findora,
        alt: "",
    },
    {
        id: "fsr",
        title: "FSR Informatik TU Dresden",
        href: "https://ifsr.de",
        year: "Web Design / 2025",
        aspect: "aspect-[16/10]",
        grid: "md:col-span-8",
        featured: true,
        badge: ["Hugo", "HTML/CSS/JS", "Bootstrap"],
        imageLight: fsrLight,
        imageDark: fsrDark,
        alt: "",
    },
    {
        id: "ascii",
        title: "Ascii Dresden",
        href: "https://ascii-dresden.de/",
        year: "Web Design / 2026",
        aspect: "md:aspect-square",
        grid: "md:col-span-4",
        featured: false,
        badge: ["Hugo", "HTML/CSS/JS", "Tailwind"],
        image: ascii,
        imageMobile: asciiMobile,
        alt: "",
    },
    {
        id: "lernstudio",
        title: "Lernstudio Zittau",
        href: "https://nachhilfe-zittau.de/",
        year: "Visual Identity / 2024",
        aspect: "md:aspect-[3/4]",
        grid: "md:col-span-4",
        featured: false,
        badge: ["WordPress", "CSS/JS", "Custom Theme"],
        image: lernstudio,
        imageMobile: lernstudioMobile,
        alt: "",
    },
    {
        id: "ploucquet",
        title: "Ploucquet GMBH",
        href: "https://ploucquet.eu",
        year: "Visual Identity / 2023",
        aspect: "aspect-[16/10]",
        grid: "md:col-span-8 md:mt-16",
        featured: true,
        badge: ["WordPress", "HTML/JS", "Custom Theme"],
        image: ploucquet,
        alt: "",
    },
] as const;
