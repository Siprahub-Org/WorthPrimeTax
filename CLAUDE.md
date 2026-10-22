# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for WorthPrime Tax (U.S. tax, accounting and compliance services). TanStack Start (SSR) + React 19 + Vite + Tailwind CSS v4 + shadcn/ui. Bun is the package manager (`bun.lock`), but npm works too.

## Commands

```sh
bun install
bun run dev        # dev server at http://localhost:8080
bun run build      # production build (nitro, Cloudflare target by default)
bun run preview    # serve the production build
bun run lint       # ESLint (includes Prettier as a lint rule)
bun run format     # Prettier --write
npx tsc --noEmit   # type-check (no script for this; tsconfig is strict)
```

There is no test suite. Verify changes in the running dev server. `../.claude/launch.json` defines the `wptax-dev` preview config.

`bunfig.toml` blocks package versions published less than 24h ago. Ask the user before adding entries to `minimumReleaseAgeExcludes`.

## Overrides to team defaults

These rules take precedence over the shared defaults in `~/.claude/CLAUDE.md` for this repo.

- **Testing:** there is no test framework, so don't add tests or a test runner without approval (new dependencies). "Test and verify" here means `bun run lint`, `npx tsc --noEmit`, and checking the affected pages in the dev server preview (desktop and mobile width).
- **Personal data:** the published business contact details in `src/data/site.ts` (phone, email, office addresses, WhatsApp) are intended site content. Never add personal data of clients or staff.

## Git and Lovable sync

- The repo syncs with Lovable (remote `lovable`) through `main`. Push only to `origin` (Siprahub-Org/WorthPrimeTax).
- Work on a feature branch and open a PR into `main` on Siprahub-Org/WorthPrimeTax. Don't commit to `main` directly. Changes appear in the Lovable editor only after the PR is merged, so every merge must leave `main` working.
- **Never rewrite pushed history** (no force-push, no rebasing/amending/squashing pushed commits), because that destroys the Lovable project history.
- `handoffs/` is git-ignored. Never commit handoff files.

## Architecture

- **Build config:** `vite.config.ts` uses `@lovable.dev/vite-tanstack-config`, which already bundles tanstackStart, React, Tailwind, tsconfig paths, nitro, the `@` alias and devtools. **Don't add those plugins again** (duplicates break the app). Pass extra Vite options through `defineConfig({ vite: {...} })`.
- **Routing:** file-based routing in `src/routes/` (see `src/routes/README.md`). `__root.tsx` is the only layout. It renders the HTML shell, global head/fonts, `Nav`, `<Outlet />`, `Footer` and the floating `ContactCluster`. `routeTree.gen.ts` is generated, so don't edit it. Dynamic segments use `$param` (e.g. `services.$slug.tsx` → `/services/:slug`). Pages set SEO via the route `head()`, and data-driven routes resolve from a `loader` that throws `notFound()`.
- **Server entry:** `vite.config.ts` points `tanstackStart.server.entry` at `src/server.ts`, which wraps the Start handler and turns swallowed h3 SSR errors into an HTML error page (`src/lib/error-page.ts`). `src/start.ts` registers the error middleware and **must re-add the CSRF middleware explicitly** for server functions, because defining `start.ts` turns off the default one.
- **Server-only code:** name modules `*.server.ts` or use `@tanstack/react-start/server-only`. ESLint bans the Next.js `server-only` package.
- **Content is data-driven:** all copy, services, prices, contact details, offices and external links live in `src/data/site.ts` and `src/data/services.ts`. Nav, service cards, the pricing marquee, the enquiry form's service dropdown and the `/services/$slug` detail pages all read from `SERVICES`, so add or edit a service there, not in components. Copy marked `[price TBC]` / `[suggested copy]` / `[placeholder]` is still waiting on the client.
- **Components:** site-specific blocks live in `src/components/site/` (`primitives.tsx` holds `Section`, `SectionLabel`, `Reveal`, etc.). shadcn primitives live in `src/components/ui/` (style `new-york`, aliases in `components.json`).
- **Enquiry form** (`EnquiryForm.tsx`) is a prototype only: submitting just flips local state and sends nothing.
- **Assets:** images in `src/assets/` are imported as modules. The logo is a Lovable-hosted asset (`*.asset.json`) served from `/__l5e/...`. In local dev, Vite proxies `/__l5e` to `https://wptax.lovable.app`.

## Styling rules

- Use only the semantic tokens in `src/styles.css` (`@theme inline` plus `:root` vars) for colours, radii and motion. No hardcoded colour utilities, so the palette can be re-themed in one place.
- **Token names are historical and don't match their values:** `--gold`, `--brown` and `--ink` are actually brand navy `#1a233a`, and `--navy`/`--navy-soft`/`--cream` are white. Check the value in `styles.css` before choosing a token by its name.
- Visual system: white surfaces, brand-blue (#1a233a) headings and selected blue promotional/service panels, black body copy, Open Sans everywhere. Every page hero is followed by the `PricingMarquee`.
