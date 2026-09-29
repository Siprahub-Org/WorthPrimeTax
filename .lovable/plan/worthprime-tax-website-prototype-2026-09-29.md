# WorthPrime Tax — website prototype

Note: only the brief came through — the "US Worth Prime content" document isn't in the uploads. I'll build the full site now with the headings and links that the brief spells out, and clearly marked `[placeholder]` blocks anywhere the content document is the source. Send it over and I'll swap the real wording in.

## Pages

**Home** — hero with headline "Your Business Is More Than a Tax Return. So Are We.", two buttons plus a compact enquiry form; scrolling trust ticker; animated statistics band; "Built on Experience. Shaped by Perspective." founders block; sticky scroll-driven "One Firm. Every Business Need." proof section; grid of ten service flip cards; starting-from pricing preview; four-step how-it-works; client experience slots (reviews widget, video, badges); three insight cards; five-question FAQ accordion; oversized closing band; contact block and footer.

**Services** — page header with filter tabs (All, Individuals, Businesses, Compliance, Assurance); the same ten flip cards, filtered; price table (Service / Starting from / What's included) showing "From $5,000" for audit and `[price TBC]` elsewhere, with a quote button per row; "Not sure where to start?" guidance band; IRS refund status card; closing band.

**Service detail** — one template, built with U.S. Tax as the example and reused for all ten: back link, large service number and audience label, name plus tagline, first call to action, Overview, "What this can include", "Who it is for", three-step "How the work moves", closing call to action.

**About** — hero with the founding story; two large co-founder cards (Abuzer Ahmed Siddiqui, Jafiruddin Mohammad) that reveal the full biography on hover or tap; "Two Perspectives. One Purpose." statement; experience-in-numbers counters; leadership grid placeholders; credentials row; three office cards (US, UAE, India); optional video slot; closing band.

## Shared across every page

- Floating pill navigation: logo, About, Services (dropdown with all ten), Pricing, Insights, Contact; on the right a visually distinct "Pay here" button that pulses briefly, Login/Register, and "Request a quote". Stays visible on mobile.
- "IRS refund status" link in the desktop bar, mobile menu and footer.
- Fixed bottom-right contact cluster: WhatsApp, call, email, LinkedIn, plus an optional Instagram slot.
- Footer with numbered link columns, office addresses, phone, email, LinkedIn, Pay here, and a very large wordmark.
- Real links wired: Pay here, Login/Register, IRS refund status. LinkedIn left as a placeholder.

## Look and feel

Deep navy and gold, as chosen — navy canvas, warm gold accents, off-white type, generous editorial spacing, pill buttons, small uppercase labels with slash numbering ("01 / EXPLORE"). Contrast checked for readability, since the brief flags blue-on-white as a past complaint.

Motion: scroll reveals, counters that run once on entry, hover/tap card flips, smooth section transitions — all with a reduced-motion fallback.

## Technical notes

- Separate routes for `/`, `/services`, `/services/$slug`, `/about`; the ten services come from one shared data file so the cards, dropdown, price table and detail pages stay in sync.
- Design tokens (navy/gold palette, radii, spacing, shadows) defined once in `src/styles.css` and used everywhere.
- Per-page title and description metadata for search.
- Front-end only, no backend: the enquiry form validates and shows a success state without sending anything yet.
- Neutral placeholder imagery for portraits and offices, ready to be replaced with real photos.

## Not included

CRM, working login, payment processing, blog CMS, LinkedIn feed, the UAE site. No invented statistics, prices, testimonials or names.
