// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: manter igual a SITE.url em src/site.config.ts
export default defineConfig({
  site: 'https://vitoriasouza.adv.br',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
