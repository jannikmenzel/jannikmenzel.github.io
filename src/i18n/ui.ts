import de from "./de.json";
import en from "./en.json";

export const languages = {
    de: "Deutsch",
    en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "de";

export const ui = {
    de,
    en,
} as const;

export function useLang(lang: string | undefined): Lang {
    if (lang && Object.keys(languages).includes(lang)) {
        return lang as Lang;
    }
    return defaultLang;
}

export function getLangFromUrl(url: URL): Lang {
    const [, lang] = url.pathname.split("/");
    return useLang(lang);
}

export function getPathForLang(path: string, targetLang: Lang): string {
    const [base, hash] = path.split("#");
    const hashPart = hash ? `#${hash}` : "";

    if (targetLang === defaultLang) {
        const localized = base.replace(/^\/en/, "") || "/";
        return `${localized}${hashPart}`;
    }
    const cleanPath = base === "/" ? "" : base;
    if (cleanPath === "") {
        return `/en/${hashPart}`;
    }
    return `/en${cleanPath}${hashPart}`;
}

export function getLocalizedPath(targetLang: Lang, path = "/"): string {
    return getPathForLang(path, targetLang);
}

export function t(lang: Lang, key: string): string {
    const keys = key.split(".");
    let value: any = ui[lang];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}
