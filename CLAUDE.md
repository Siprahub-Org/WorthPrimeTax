# WorthPrime Tax website

Marketing site for WorthPrime Tax (U.S. tax, accounting, payroll and compliance services). Also read `AGENTS.md`: the project is connected to Lovable, so never rewrite pushed git history.

## Stack

- TanStack Start + TanStack Router (file routes in `src/routes/`), React 19, TypeScript
- Tailwind CSS v4 (utility classes; theme tokens in `src/styles.css` and `src/styles/theme.css`)
- shadcn/ui primitives in `src/components/ui/`; lucide-react icons
- Vite config comes from `@lovable.dev/vite-tanstack-config`; do not add plugins it already includes
- Package files: `bun.lock` and `package.json` (npm scripts work too)

## Commands (run from this folder)

- `npm run dev` : dev server on port 8080 (falls back to another port if taken)
- `npm run build` : production build
- `npm run lint` : eslint (includes prettier; `npx eslint --fix <files>` formats)
- There is no test suite and no TypeScript compiler script. Check changes with lint and in the browser.

## Where things live

- All copy, links, prices, offices and FAQ text: `src/data/` (`site.ts`, `services.ts`, `servicePages.ts`). Edit text there, not in components.
- Shared page pieces: `src/components/site/` (Nav, CtaBand, EnquiryForm, PricingMarquee, ContactCluster, primitives such as `Section`, `Container`, `Reveal`).
- Service detail pages share one layout: `src/components/site/ServiceDetailFeature.tsx`. Per-service photos: `src/assets/service-pages/<service-slug>/<slot>.jpg|webp` with slots `hero`, `overview`, `included`, `who-for`, `thumb`.
- The home page is `src/routes/index.tsx` (one function per section).

## Design rules

- Colours, radii and motion come from theme tokens only; no hardcoded colour values. The primary blue is `--brand-navy` in `src/styles/theme.css`.
- The site is gold-free by design. `--theme-gold` (the `brand-gold` utilities) deliberately points at the primary blue, and there is no gold colour defined. Do not add gold or yellow without being asked. The only yellow is Google's review stars (`--brand-star`).
- Headings are blue serif; body text is near-black on white. Section backgrounds fade from white (no hard edges between sections).
- Section spacing is tight (`py-12 sm:py-16` via `Section`). Keep new sections compact.

## Conventions and gotchas

- Placeholder or unconfirmed content is marked `[suggested, client to confirm]` or `[NEED: ...]`. Leave those markers until the client confirms; do not invent business claims, prices or credentials.
- Reviews on the home page come from `CLIENT_EXPERIENCE` in `src/data/site.ts`.
- Some files use Windows (CRLF) line endings, which makes the prettier lint rule report every line. Do not reformat a whole file just for that; `eslint --fix` only on files you changed on purpose.
- `Reveal` fades sections in on scroll. In an automated browser they can look washed out until the animation finishes.
- Verify UI changes in the browser at desktop (about 1440px), tablet (768px) and mobile (375px), and confirm there is no horizontal scrolling.
