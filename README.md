# Polaris Renewable Energy

Marketing website for **Polaris Renewable Energy**, a (fictional) developer and
operator of utility-scale solar, wind, and storage projects.

Built with **Next.js 15** (App Router), **React 19**, **TypeScript**, and
**Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run Next.js ESLint |

## Structure

```
src/
  app/
    layout.tsx            Root layout, header + footer, metadata
    page.tsx              Home
    solutions/            Solar, wind, storage, PPAs
    projects/             Portfolio (operating + pipeline)
    sustainability/       Impact commitments and reporting
    insights/             Article index + [slug] template
    about/                Story, timeline, values
    contact/              Contact form + details
    not-found.tsx         404
    sitemap.ts            Generated sitemap
  components/             Header, Footer, Hero, cards, shared UI
  lib/
    content.ts            All site copy and data — edit here first
```

## Customizing

- **Copy and data:** `src/lib/content.ts` is the single source for stats,
  solutions, projects, values, milestones, and insights.
- **Theme:** colors, fonts, and shadows are defined as Tailwind v4 tokens in
  `src/app/globals.css` under `@theme`.
- **Contact form:** `src/components/ContactForm.tsx` currently just shows a
  confirmation. Wire it to a CRM or email endpoint before launch.

> **Before publishing:**
> - The "Selected clients & project stakeholders" strip uses generic brand SVGs
>   (`public/img/clients/`, `clientLogos` in `content.ts`) purely for the visual.
>   Swap every one for a real Polaris client/partner logo.
> - The homepage `testimonials` in `content.ts` are representative,
>   role-attributed placeholders. Replace with real, client-approved quotes
>   and names.
> - The `impact` figures are indicative (derived from installed capacity), not
>   metered portfolio generation.

All figures, project names, and locations are illustrative placeholders.
