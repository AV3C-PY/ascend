import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const servicesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    basePrice: z.number(),
    icon: z.string().optional(),
    order: z.number().default(0)
  })
});

const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    description: z.string(),
    services: z.array(z.string()),
    duration: z.string(),
    category: z.string(),
    image: z.string().optional()
  })
});

export const collections = {
  'services': servicesCollection,
  'portfolio': portfolioCollection,
};
