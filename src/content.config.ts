import { defineCollection, glob } from 'astro:content';
import { z } from 'astro/zod';
const common = z.object({
 title: z.string(), author: z.string().optional(), edition: z.number().optional(),
 cover: z.string().optional(), draft: z.boolean().optional(),
 review_status: z.string().optional(), order: z.number().optional(),
 slug: z.string().optional(), source_text_pages: z.array(z.number()).optional(),
});
const licoes=defineCollection({ loader:glob({pattern:'**/*.md',base:'./src/content/licoes'}),schema:common.extend({lesson_number:z.number()}) });
const apelo=defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/apelo-final'}),schema:common});
const devocionais=defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/devocionais'}),schema:common});
export const collections = { licoes, 'apelo-final':apelo, devocionais };
