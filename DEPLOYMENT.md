# Aedis Solutions — Deployment Guide

## Before Going Live

### 1. Set up EmailJS (Contact Form)
1. Create a free account at https://www.emailjs.com
2. Add an **Email Service** (connect your Gmail or SMTP)
3. Create an **Email Template** with variables: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{service}}`, `{{message}}`
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Create a `.env.local` file (copy from `.env.local.example`) and fill in the values

### 2. Set up Google Analytics 4
1. Go to https://analytics.google.com and create a property for `www.aedis.ltd`
2. Get your **Measurement ID** (format: `G-XXXXXXXXXX`)
3. Add it to `.env.local` as `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

### 3. Build for production
```bash
npm run build
```
This generates the `out/` folder (pure HTML/CSS/JS) + `sitemap.xml` + `robots.txt`.

## Deploying to GoDaddy

### Option A — File Manager (simplest)
1. Log in to GoDaddy → **cPanel** → **File Manager**
2. Navigate to `public_html/`
3. Upload the entire contents of the `out/` folder (not the folder itself)
4. Done — visit `www.aedis.ltd`

### Option B — FTP
1. Use an FTP client (FileZilla, Cyberduck)
2. Connect using GoDaddy FTP credentials (cPanel → FTP Accounts)
3. Upload all files from `out/` into `public_html/`

> **Important:** Upload the *contents* of `out/`, not the folder itself. The `index.html` should be directly inside `public_html/`.

## DNS Setup (GoDaddy)
- Domain: `aedis.ltd` is already registered with GoDaddy
- Point the `www` CNAME record to your hosting
- Point the `@` A record to your hosting IP
- Allow up to 48 hours for propagation

## Outstanding Items (swap placeholders when ready)
| Item | File(s) to update |
|---|---|
| Phone number | `src/components/layout/Footer.tsx`, `src/components/sections/Hero.tsx` |
| Real photos (gallery) | `src/app/gallery/page.tsx` — replace placeholder divs with `<Image>` |
| Logo SVG file | `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx` |
| Social media links | `src/components/layout/Footer.tsx` — replace `href="#"` |
| Google Maps embed | `src/components/sections/ServiceAreaSection.tsx` |
| Tagline (finalised) | `src/app/layout.tsx` metadata description |
| Team photos | `src/app/about/page.tsx` |
| Google Review link | `src/app/testimonials/page.tsx` — update `href` |

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

> Note: `.env.local` is never committed to git. Keep these values secure.
