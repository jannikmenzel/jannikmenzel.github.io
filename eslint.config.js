import globals from "globals";
import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import astroParser from "astro-eslint-parser";

export default [
    {
        ignores: ["dist/**", ".astro/**", "**/.astro/**", "node_modules/**", "**/*.d.ts"],
    },

    {
        plugins: {
            prettier,
            "@typescript-eslint": tseslint,
        },
    },

    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: globals.browser,
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "error",
        },
    },
    {
        files: ["**/*.astro"],
        plugins: { astro },
        rules: {
            "astro/no-unused-css-selector": "warn",
            "astro/no-set-html-directive": "off",
        },
    },
    {
        files: ["**/*.ts", "**/*.tsx"],
        plugins: { "@typescript-eslint": tseslint },
        rules: {
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "off",
        },
    },

    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: "./tsconfig.json",
                sourceType: "module",
            },
        },
        plugins: {
            "@typescript-eslint": tseslint,
        },
    },
    {
        files: ["**/*.astro"],
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: tsParser,
                extraFileExtensions: [".astro"],
            },
        },
        plugins: {
            astro,
            "@typescript-eslint": tseslint,
        },
    },
];
