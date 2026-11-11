import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Páginas de cada serviço (uma por tema). Editáveis pelo Pages CMS.
const areas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/areas' }),
  schema: z.object({
    titulo: z.string(),
    area: z.enum(['previdenciario', 'civel']),
    resumo: z.string().max(200),
    ordem: z.number().default(99),
    faq: z
      .array(z.object({ pergunta: z.string(), resposta: z.string() }))
      .default([]),
  }),
});

// Artigos do blog.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    descricao: z.string().max(170),
    data: z.coerce.date(),
    atualizado: z.coerce.date().optional(),
    area: z.enum(['previdenciario', 'civel']),
    rascunho: z.boolean().default(false),
  }),
});

export const collections = { areas, blog };
