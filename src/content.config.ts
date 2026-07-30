import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const notes = defineCollection({
	// Load Markdown and MDX files in the `src/content/notes/` directory.
	loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		order: z.number().default(0),
		category: z.string().default('Core'),
	}),
});

export const collections = { notes };
