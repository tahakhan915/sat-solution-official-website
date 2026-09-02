# S.A.T Solution — website

## Local development
```bash
npm install
npm run dev
```

## Production build (prerendered, SEO-ready)
```bash
npm run build
```
This does three things automatically:
1. `vite build` — builds the client React app into `dist/`
2. `vite build --ssr` — builds a server-side render bundle
3. `scripts/prerender.mjs` — renders every route (`/`, `/about`, `/services`,
   `/packages`, `/process`, `/portfolio`, `/contact`) to a real static
   `index.html` with the page's actual content, title, description,
   canonical URL, and Open Graph tags already baked in — so search engines
   and social-media crawlers see full content even without running
   JavaScript. The React app then hydrates on top of it in the browser.

Preview the production build locally:
```bash
npm run preview
```

## Deploying
Upload the contents of `dist/` to your host (satsolution.tech).

- **Netlify**: the included `public/_redirects` handles routing automatically.
- **Vercel**: the included `vercel.json` handles routing automatically.
- **Any other static host** (cPanel/Apache, Nginx, GitHub Pages, etc.):
  since every route now has its own prerendered folder
  (`dist/about/index.html`, `dist/services/index.html`, ...), it works out
  of the box on a plain static file server — no special rewrite rules
  needed for the main pages. Just make sure the server falls back to
  `dist/404.html` for unknown URLs.

## SEO
- Per-page title/description/canonical/OG tags are centralized in
  `src/seoConfig.js` — edit copy there, not inside individual pages.
- `public/robots.txt` and `public/sitemap.xml` list all live routes.
- `public/og-image.png` is the social-share preview image (1200×630).
- After deploying, submit `https://satsolution.tech/sitemap.xml` in
  Google Search Console.
