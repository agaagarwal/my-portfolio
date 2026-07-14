# Amulya Agarwal — Portfolio

Personal portfolio website: React + Vite + TypeScript. Implemented from the Claude Design
handoff in `project/` (the original HTML/CSS/JS prototype and design chat transcripts live
in `project/` and `chats/` for reference).

## Getting started

```bash
npm install
npm run dev        # dev server with hot reload
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

The production build in `dist/` is fully static — deploy it to Vercel, Netlify,
GitHub Pages, or any static host.

## Structure

```
public/assets/          images + plane.lottie used by the site
src/
  data/content.ts       all copy, project entries, links — edit here to add projects
  components/
    Hero/               hero photo, nav pills, plane flock, quote banner, section tabs
    Projects/           sticky-stacking project cards
    PersonalSpace/      intro copy + infinite photo carousel
    Footer/             contact bar with LinkedIn / Behance
```

## Editing content

- **Add a project**: append an entry to `PROJECTS` in `src/data/content.ts` and drop its
  cover image into `public/assets/`. The card stack handles any count.
- **Add carousel photos**: drop `snippet-N.png` into `public/assets/` and bump
  `SNIPPET_COUNT` in `src/data/content.ts`.
- **Section tab copy**: edit `DESCRIPTIONS` in `src/data/content.ts`.
- **Resume**: place a `resume.pdf` in `public/` — the nav's RESUME pill already links to it.
- The cursive background word from the design exists but is hidden
  (`display: none` on `.cursive-word` in `src/components/Hero/hero.css`) to match the
  final design state.

Fonts (Figtree, Seaweed Script) and the dotLottie player are npm dependencies bundled at
build time — no external CDNs at runtime.
