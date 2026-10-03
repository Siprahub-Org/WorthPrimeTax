<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- All site copy, service definitions and contact details live in `src/data/` (`site.ts`, `services.ts`) — single source so nav, cards, price table and detail pages never drift apart.
- Shared page chrome and reusable building blocks live in `src/components/site/`; shadcn primitives stay in `src/components/ui/`.
- Colours, radii and motion come only from the tokens in `src/styles.css` — no hardcoded colour utilities, so the palette can be re-themed in one place.
- The visual system pairs light editorial sections with deep-navy, white-text page heroes; imagery uses a cool blue editorial grade, while the official WorthPrime logo remains the primary brand asset.
