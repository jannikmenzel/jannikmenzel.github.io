export default {
    content: ["./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                white: "var(--white)",
                black: "var(--black)",
                light: "var(--light)",
                lightOff: "var(--light-off)",
                dark: "var(--dark)",
                darkOff: "var(--dark-off)",
                lightAlt: "var(--light-alt)",
                darkAlt: "var(--dark-alt)",
                background: {
                    DEFAULT: "var(--background)",
                    foreground: "var(--foreground)",
                },
                backgroundAlt: {
                    DEFAULT: "var(--background-alt)",
                    foreground: "var(--foreground-alt)",
                },
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                },
                destructive: {
                    DEFAULT: "var(--destructive)",
                    foreground: "var(--destructive-foreground)",
                },
                muted: {
                    DEFAULT: "var(--muted)",
                    foreground: "var(--muted-foreground)",
                },
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",
                navbar: "var(--navbar)",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                display: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-poppins)", "sans-serif"],
            },
        },
    },
    darkMode: "class",
};
