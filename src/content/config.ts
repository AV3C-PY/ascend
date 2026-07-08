import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    basePrice: z.number(),
    icon: z.string().optional(),
    order: z.number().default(0)
  })
});

const portfolioCollection = defineCollection({
  type: 'content',
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
