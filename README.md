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
> - The client strip now shows real client names as text wordmarks (`clients`
>   in `content.ts`, sourced from the company deck). Confirm name/mark usage is
>   approved with each company, or switch to logos once permissions are in hand.
> - The homepage `testimonials` in `content.ts` are representative,
>   role-attributed placeholders. Replace with real, client-approved quotes
>   and names.
> - The `impact` figures are indicative (derived from installed capacity), not
>   metered portfolio generation.
> - The homepage `trust` and `segments` arrays in `content.ts` are written from
>   the deck's stated capabilities/projects — verify each claim before launch.
> - The "Who we serve" / careers strip links to `/contact` (no `/careers`
>   page yet).

All figures, project names, and locations are illustrative placeholders.
