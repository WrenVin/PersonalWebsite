import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain (CNAME = vincentwren.com) means the site is served from the
// root, so no `base` path is needed.
export default defineConfig({
  site: 'https://vincentwren.com',
  integrations: [sitemap()],
});
