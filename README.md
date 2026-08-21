# BuildFlow Agency Website Template

A complete, production-ready agency website template built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. It's styled as a fictional agency ("BuildFlow") that builds websites and automation systems for contractors. Clone it, make it yours, and launch your own agency site.

> **A note before you clone:** this template is meant as a starting point and a source of inspiration, not a finished product to ship as-is. Plenty of other people have access to this same repo, so if you copy it 1:1 for your own business, your website will look identical to everyone else's. Use the structure and patterns, then make it your own: change the design, rewrite the copy in your voice, swap the images, and tailor everything to your niche.

## What's included

- Home page with hero, before/after slider, services grid, FAQ, and founder section
- 7 service detail pages driven by a single config file
- Pricing, Our Work (portfolio), About, Process, and Trades pages
- Book-a-Call page with a placeholder for your scheduling widget
- Privacy Policy and Terms pages
- SEO: per-page metadata, JSON-LD structured data, sitemap, robots.txt

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Make it yours: checklist

1. **Brand basics** - open `src/config/site.ts` and replace the name, tagline, phone, email, address, domain, and social links. Most of the site reads from this file.
2. **Search & replace** - search the project for `BuildFlow` and `yourdomain.com` and replace any remaining mentions with your own brand and domain.
3. **Logo & favicon** - replace `src/assets/logo.png` and `src/app/icon.png`.
4. **Images** - replace `src/assets/founder.jpg` and `src/assets/about-team.jpg` with your own photos.
5. **Portfolio** - in `src/views/OurWorkPage.tsx`, swap the placeholder images for screenshots of your own work. The hero before/after slider images live in `src/components/home/HeroBrowserMockup.tsx`.
6. **Booking calendar** - in `src/views/BookCallPage.tsx`, replace the placeholder with your scheduling embed (e.g. a GoHighLevel calendar).
7. **Service videos** - drop your explainer videos into `public/servicevideos/` and update the `PLACEHOLDER_VIDEO` constant at the top of `src/config/service-details.ts`.
8. **Copy** - review the text in `src/config/service-details.ts`, `src/config/page-content.ts`, and the page components; tailor it to your niche.
9. **SEO** - update `public/sitemap.xml`, `public/robots.txt`, and the OG image at `public/og-default.png` with your real domain and branding.

## Tech stack

| Layer | Tool |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS, shadcn/ui (Radix) |
| Language | TypeScript |
