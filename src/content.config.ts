import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const papers = defineCollection({
  loader: file("src/content/papers.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    year: z.number(),
    arxiv: z.string(),
    category: z.string(),
    description: z.string(),
    filename: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { papers, blog };
