import { postResponseSchema, postSchema } from '@/schemas/post';
import { z } from 'zod';

export type Post = z.infer<typeof postSchema>;

export type PostResponse = z.infer<typeof postResponseSchema>;
