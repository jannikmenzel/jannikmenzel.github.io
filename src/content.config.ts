import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "zod";

const blog = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/content" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            slug: z.string(),
            date: z.coerce.date(),
            image: image(),
            teaser: z.string(),
            readingtime: z.string(),
            type: z.string().optional(),
        }),
});

export const collections = { blog };
