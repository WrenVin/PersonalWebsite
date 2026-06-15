# vincentwren.com

Personal website for Vincent Wren: GIS & spatial analysis, urban planning, and computer science.
Built with [Astro](https://astro.build) and deployed to GitHub Pages at
[www.vincentwren.com](https://www.vincentwren.com).

## Develop

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Editing content

Almost everything is data-driven, so there's no need to touch markup for routine updates:

- `src/data/site.ts`: name, intro, skills, experience, education, contact links.
- `src/data/projects.ts`: all projects. Each project becomes a page at `/projects/<slug>`.

### Adding an ArcGIS map to a project

Each featured project renders an interactive map slot (`src/components/MapEmbed.astro`).
Until a real map is wired up it shows a labeled placeholder. To embed a real map, set the
project's `mapEmbed` field to an ArcGIS share URL (web map, StoryMap, or Experience Builder),
e.g.:

```ts
mapEmbed: "https://www.arcgis.com/apps/instant/.../index.html?appid=XXXX",
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes
it to GitHub Pages. The custom domain is configured via `public/CNAME`.

> The previous HTML5 UP "Lens" template is archived in `.old-site-backup/` (git-ignored) and
> remains in the repository history.
