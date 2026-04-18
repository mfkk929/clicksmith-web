# ClickSmith Web

Marketing agency website for ClickSmith — lead-generating sites, local SEO, and Google Ads for Australian tradies. Also the storefront for ClickSmith DIY playbooks.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · Supabase · Vercel

**Design system:** source of truth lives in `../design-system/MASTER.md`. Page-specific overrides in `../design-system/pages/`.

---

## Local development

```bash
# Install
npm install

# Copy env template and fill in values
cp .env.example .env.local

# Dev server on http://localhost:3000
npm run dev

# Production build (catches TS/build errors)
npm run build

# Lint
npm run lint
```

---

## Project structure

```
src/
  app/
    layout.tsx        # Root layout: fonts, metadata, OG tags, skip-link
    page.tsx          # Homepage
    globals.css       # Design tokens (see MASTER.md)
    robots.ts         # /robots.txt generator
    sitemap.ts        # /sitemap.xml generator — add new routes here
  components/
    ui/               # Primitives (Button, Input, ...)
    sections/         # Page sections (Hero, FeatureGrid, ...)
  lib/
    site.ts           # Site config (name, URL, contact)
    utils.ts          # cn() helper
```

---

## Adding a new page

1. Create `src/app/<route>/page.tsx`
2. Export a `Metadata` object (title <60 chars, description <155 chars)
3. **Add the URL to `src/app/sitemap.ts`** — otherwise it won't be discoverable
4. Wire any new CTA into analytics (see `DEPLOY.md`)

---

## Deployment

Push to `main` → Vercel auto-deploys. Full post-push checklist in [DEPLOY.md](./DEPLOY.md) — follow it every launch to avoid the CoastalCo-style "built but not indexed" problem.

---

## Performance targets

- Lighthouse: Performance ≥95, SEO 100, Accessibility ≥95
- LCP <2.0s, INP <200ms, CLS <0.1
- First-load JS <120KB on homepage

Run `npm run build` + `npm run start` and check Lighthouse on mobile before every release.
