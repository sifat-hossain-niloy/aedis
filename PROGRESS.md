# Aedis Solutions — Website Build Progress

> Last updated: May 2026  
> Live URL: https://www.aedis.ltd  
> Repo: https://github.com/sifat-hossain-niloy/aedis  
> Stack: Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion · EmailJS

---

## Phase 1 — Foundation ✅ COMPLETE

| Task | Status | Notes |
|---|---|---|
| Project scaffold (Next.js 16, TypeScript) | ✅ Done | |
| Tailwind CSS v4 design tokens & global styles | ✅ Done | Brand navy `#1b3461`, accent blue `#2563eb` |
| Plus Jakarta Sans font (via next/font) | ✅ Done | |
| `cn()` utility (clsx + tailwind-merge) | ✅ Done | `src/lib/utils.ts` |
| Services data file (7 services) | ✅ Done | `src/data/services.ts` |
| Testimonials data file (6 reviews) | ✅ Done | `src/data/testimonials.ts` |
| Navbar (transparent→solid on scroll, mobile menu) | ✅ Done | `src/components/layout/Navbar.tsx` |
| Footer (links, contact, social icons) | ✅ Done | `src/components/layout/Footer.tsx` |
| Home page — Hero section | ✅ Done | Full-viewport, animated, CTAs |
| Home page — Stats bar | ✅ Done | Est. / Services / Area / Guarantee |
| Home page — Services grid (7 cards) | ✅ Done | Links to individual pages |
| Home page — USPs section | ✅ Done | Quality · Punctuality · Experience · Guarantee |
| Home page — Service area section | ✅ Done | 12 areas listed, map placeholder |
| Home page — Testimonials strip (3 cards) | ✅ Done | |
| Home page — CTA banner | ✅ Done | |
| Framer Motion scroll animations | ✅ Done | `AnimatedSection`, `StaggerChildren`, `StaggerItem` |
| static export config (`output: 'export'`) | ✅ Done | `next.config.ts` |
| GitHub Actions deploy workflow | ✅ Done | `.github/workflows/deploy.yml` |

---

## Phase 2 — Inner Pages ✅ COMPLETE

| Task | Status | Notes |
|---|---|---|
| Services overview page | ✅ Done | `/services` — all 7 services with features |
| Individual service pages (×7) | ✅ Done | `/services/[slug]` — description, features, sidebar CTA |
| About Us page | ✅ Done | Story, values, commitments |
| Gallery page | ✅ Done | Placeholder grid — ready for real photos |
| Testimonials page | ✅ Done | All 6 reviews + stats + leave-a-review prompt |
| Contact page + enquiry form | ✅ Done | React Hook Form + Zod validation + EmailJS |
| Privacy Policy page | ✅ Done | UK GDPR compliant |

---

## Phase 3 — SEO & Launch Prep ✅ COMPLETE

| Task | Status | Notes |
|---|---|---|
| Per-page `<title>` + `<meta description>` | ✅ Done | All pages |
| Open Graph tags | ✅ Done | All pages |
| JSON-LD LocalBusiness structured data | ✅ Done | Homepage — `src/components/JsonLd.tsx` |
| Service page JSON-LD (per-service SEO meta) | ✅ Done | `metaTitle` + `metaDescription` in data |
| Canonical URLs | ✅ Done | All pages |
| Sitemap (`/sitemap.xml`) | ✅ Done | `src/app/sitemap.ts` — 13 URLs |
| robots.txt | ✅ Done | `src/app/robots.ts` |
| Google Analytics 4 (consent-gated) | ✅ Done | `src/components/GoogleAnalytics.tsx` |
| Cookie consent banner (GDPR) | ✅ Done | `src/components/CookieBanner.tsx` |
| `CNAME` file for custom domain | ✅ Done | `public/CNAME` → `www.aedis.ltd` |
| GitHub Pages deployment workflow | ✅ Done | Auto-deploys on push to `main` |

---

## Outstanding — Awaiting Client Assets

| Item | Priority | Where to update |
|---|---|---|
| ☐ Phone number (0203/0208) | High | `Footer.tsx` + `Hero.tsx` — replace `TBC` |
| ☐ Logo SVG/PNG file | High | Replace diamond text logo in `Navbar.tsx` + `Footer.tsx` |
| ☐ Real project photos (gallery) | Medium | `src/app/gallery/page.tsx` — replace placeholder divs with `<Image>` |
| ☐ Tagline (finalised wording) | Medium | `layout.tsx` metadata + Hero subtitle |
| ☐ Team photos | Low | `src/app/about/page.tsx` — add team section |
| ☐ Social media URLs (FB, Instagram) | Low | `Footer.tsx` — replace `href="#"` |
| ☐ Google Review link | Low | `testimonials/page.tsx` — update href |
| ☐ Google Maps embed | Low | `ServiceAreaSection.tsx` — replace placeholder div |
| ☐ Checkatrade / Rated People URLs | Low | Add to Footer if/when live |

---

## Environment Variables Required

Create `.env.local` from `.env.local.example`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Add the same as **GitHub Secrets** in repo Settings → Secrets and variables → Actions:
- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`  
- `EMAILJS_PUBLIC_KEY`
- `GA_ID`

---

## Deploy Commands

```bash
# Local dev
npm run dev

# Production build (generates out/ folder)
npm run build

# Deploy: just push to main — GitHub Actions handles the rest
git push origin main
```

---

## DNS Setup (for www.aedis.ltd with GitHub Pages)

In GoDaddy DNS settings:

| Type | Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `sifat-hossain-niloy.github.io` |

Then in GitHub repo → Settings → Pages → Custom domain → enter `www.aedis.ltd` → Enable HTTPS.
