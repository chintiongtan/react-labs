import { z } from 'zod';

export const postSchema = z.object({
  id: z.number(),
  title: z.string(),
});

export const postResponseSchema = z.object({
  posts: z.array(postSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});
