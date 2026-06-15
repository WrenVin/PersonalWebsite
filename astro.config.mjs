import { defineConfig } from 'astro/config';

// Custom domain (CNAME = www.vincentwren.com) means the site is served from the
// root, so no `base` path is needed.
export default defineConfig({
  site: 'https://www.vincentwren.com',
});
