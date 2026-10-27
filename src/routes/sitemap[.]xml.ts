import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/data/services";
import { INSIGHTS } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

// Every indexable page, built from the same data as the routes so new services and articles appear
// automatically. Not-found and redirecting URLs are never listed.
const STATIC_PATHS = [
  "/",
  "/about",
  "/services",
  "/pricing",
  "/insights",
  "/contact",
  "/payment-methods",
  "/privacy-policy",
  "/terms-of-use",
];

function sitemapXml() {
  const entries = [
    ...STATIC_PATHS.map((path) => ({ path })),
    ...SERVICES.map((s) => ({ path: `/services/${s.slug}` })),
    ...INSIGHTS.map((i) => ({ path: `/insights/${i.slug}`, lastmod: i.date })),
  ];
  const urls = entries
    .map(
      (e) =>
        `  <url><loc>${absoluteUrl(e.path)}</loc>${"lastmod" in e && e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ""}</url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(sitemapXml(), {
          headers: { "content-type": "application/xml; charset=utf-8" },
        }),
    },
  },
});
