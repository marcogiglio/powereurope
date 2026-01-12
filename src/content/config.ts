import { defineCollection, z } from 'astro:content';

const baseSchema = {
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  author: z.string().default('PowerEurope'),
  readTime: z.string().optional(),
  tags: z.array(z.string()).optional(),
};

const research = defineCollection({
  type: 'content',
  schema: z.object({
    ...baseSchema,
    category: z.literal('research'),
    layoutType: z.enum(['article', 'custom']).default('article'),
  }),
});

const opinion = defineCollection({
  type: 'content',
  schema: z.object({
    ...baseSchema,
    category: z.literal('opinion'),
    layoutType: z.literal('article').default('article'),
  }),
});

export const collections = { research, opinion };
