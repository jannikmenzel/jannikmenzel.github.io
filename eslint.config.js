import js from "@eslint/js";
import globals from "globals";
import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier";

export default [
    {
        ignores: ["dist/**", ".astro/**", "**/.astro/**", "node_modules/**", "**/*.d.ts"],
    },

    {
        plugins: {
            prettier,
        },
    },

    js.configs.recommended,
    ...astro.configs["flat/recommended"],

    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,astro}"],
        ignores: ["**/*.d.ts"],
        languageOptions: {
            globals: globals.browser,
        },
    },
];
