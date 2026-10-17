import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    // Lower numbers appear first on the homepage and journal index.
    order: z.number().default(100),
    draft: z.boolean().default(true),
  }),
});

export const collections = { journal };
