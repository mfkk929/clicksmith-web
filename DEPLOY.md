# ClickSmith — Deploy Checklist

> **The CoastalCo lesson:** pages that build locally are not pages that Google can find. Follow every step. Don't skip any. Check the box in the PR description.

---

## Phase 1 — First deploy (one-time setup)

### A. Push to GitHub

- [ ] Create a **private** GitHub repo: `clicksmith-web` under your personal or `clicksmith-au` org
- [ ] Add the remote and push:
  ```bash
  git remote add origin git@github.com:<owner>/clicksmith-web.git
  git push -u origin main
  ```
- [ ] Repo is private, so enable Dependabot security updates in Settings → Security

### B. Connect Vercel

- [ ] Go to [vercel.com/new](https://vercel.com/new) → Import the repo
- [ ] Framework preset should auto-detect **Next.js**
- [ ] Build command: `next build` (default)
- [ ] Output: managed automatically
- [ ] Deploy the `main` branch — confirm the first deploy goes green

### C. Environment variables (in Vercel)

Settings → Environment Variables. Copy every key from `.env.example`, set values for **Production**, **Preview**, **Development**:

- [ ] `NEXT_PUBLIC_SITE_URL` → `https://www.clicksmith.com.au` (prod) / `https://<preview>.vercel.app` (preview)
- [ ] Supabase keys (once Supabase project exists)
- [ ] Resend keys (once domain verified in Resend)
- [ ] Stripe keys (when playbook shop goes live)
- [ ] Redeploy so env vars take effect

### D. Custom domain

- [ ] In Vercel → Settings → Domains, add `clicksmith.com.au` and `www.clicksmith.com.au`
- [ ] Update DNS at your registrar (GoDaddy / Namecheap / Cloudflare):
  - Apex `@`: A record `76.76.21.21`
  - `www` CNAME: `cname.vercel-dns.com`
- [ ] Wait for SSL to provision (usually <5 min, up to 24h)
- [ ] Set `www.clicksmith.com.au` as the **primary** domain, apex 301-redirects to www
- [ ] Test: `curl -I https://clicksmith.com.au` should 301 → `https://www.clicksmith.com.au`

---

## Phase 2 — SEO hygiene (non-negotiable, every launch)

### E. Google Search Console

- [ ] Add property for `https://www.clicksmith.com.au` (Domain or URL prefix)
- [ ] Verify via TXT record or HTML tag
- [ ] Submit sitemap: `https://www.clicksmith.com.au/sitemap.xml`
- [ ] Confirm it's detected and `/` is discovered
- [ ] URL Inspection tool → paste homepage URL → **Request indexing**
- [ ] Repeat "Request indexing" for each new page you ship

### F. Bing Webmaster Tools

- [ ] Import from Google Search Console (one click)
- [ ] Verify sitemap is picked up

### G. Google Business Profile

- [ ] Claim/create `ClickSmith` profile at [business.google.com](https://business.google.com)
- [ ] Set primary category: **Marketing agency**, secondary: **Website designer**
- [ ] Service areas: Sydney, Wollongong, Newcastle, Central Coast, South Coast NSW
- [ ] Website: `https://www.clicksmith.com.au`
- [ ] Phone: from `src/lib/site.ts`
- [ ] Upload logo + 3–5 brand photos
- [ ] Ask 3 happy tradies for Google reviews in week 1

---

## Phase 3 — Analytics & observability

### H. Privacy-first analytics (recommended: Plausible)

- [ ] Set up Plausible account → add domain `clicksmith.com.au`
- [ ] Add `<Script>` in `layout.tsx` with `strategy="afterInteractive"` OR use `next/third-parties`
- [ ] Define conversion goals: `hero_cta_click`, `form_submit`, `playbook_purchase`, `booking_confirmed`
- [ ] Confirm first visits show up in dashboard

### I. Microsoft Clarity (free heatmaps)

- [ ] Add Clarity snippet (deferred load)
- [ ] Verify session recording starts after 30 min

### J. Error tracking (optional but recommended)

- [ ] Sentry free tier → connect Next.js project
- [ ] Confirm errors route to your email/Slack

---

## Phase 4 — Launch day hygiene

### K. Pre-launch smoke tests

- [ ] Run `npm run build` — **zero errors, zero warnings**
- [ ] Lighthouse (mobile) on homepage: Perf ≥95, SEO 100, A11y ≥95
- [ ] Open on real iPhone and real Android — not just Chrome DevTools
- [ ] Test contact form end-to-end: submit → Supabase row appears → email alert arrives
- [ ] Test CTA clicks fire analytics events (Plausible live counter)
- [ ] Open Graph preview at [opengraph.xyz](https://www.opengraph.xyz) — check `og:image` renders
- [ ] `/robots.txt` and `/sitemap.xml` return 200 and correct content
- [ ] 404 page exists and is on-brand (see `src/app/not-found.tsx` when added)

### L. Legal pages before any lead form

- [ ] Privacy Policy live (Australian Privacy Act 1988 requirements)
- [ ] Terms of Service live
- [ ] Cookie notice if using any analytics that tracks identifiers
- [ ] Both linked from footer on every page

### M. Backup

- [ ] Private GitHub repo is the source-of-truth backup (nothing lives only on local disk)
- [ ] Supabase: enable Point-in-Time Recovery on the paid plan before storing real leads
- [ ] `.env.local` values stored in 1Password / Vercel only — never in git

---

## Post-launch (first 30 days)

- [ ] Check GSC **Coverage** report — every page you want indexed shows "Indexed"
- [ ] Check GSC **Mobile Usability** — zero errors
- [ ] Monitor Core Web Vitals in GSC — all URLs in green
- [ ] Weekly Plausible review: where are people landing, where are they dropping off
- [ ] Respond to every Google review within 24h

---

## The anti-CoastalCo rule

If any of these silently failed last time — this checklist makes them explicit:

1. **Sitemap wasn't updated** → now generated from code, updated when you add routes (see `src/app/sitemap.ts`)
2. **Didn't submit to Google** → step E above is a hard gate
3. **Vercel wasn't deploying** → step B confirms green deploy before moving on
4. **Didn't know to request indexing** → step E.6 is explicit

Copy this file into any new ClickSmith-built tradie site as `DEPLOY.md` — same checklist, different domain.
