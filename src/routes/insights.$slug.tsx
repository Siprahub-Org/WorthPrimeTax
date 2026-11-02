import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Linkedin } from "lucide-react";
import {
  formatInsightDate,
  HAS_LINKEDIN,
  INSIGHTS_PAGE,
  isIndexableInsight,
  SITE,
} from "@/data/site";
import { getInsights } from "@/lib/linkedin-insights";
import { absoluteUrl, breadcrumbJsonLd, insightCrumbs, jsonLdScript, seoHead } from "@/lib/seo";
import { Container, Section } from "@/components/site/primitives";
import { InsightTag } from "@/components/site/ArticleCard";
import { insightImage } from "@/components/site/insightImages";
import { InsightImage } from "@/components/site/InsightImage";
import { LinkedInBand } from "@/components/site/LinkedInBand";
// import { CtaBand } from "@/components/site/CtaBand";
import { PricingMarquee } from "@/components/site/PricingMarquee";

export const Route = createFileRoute("/insights/$slug")({
  loader: async ({ params }) => {
    const insight = (await getInsights()).find((a) => a.slug === params.slug);
    if (!insight) throw notFound();
    return { insight };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article Not Found | WorthPrime Tax" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { insight } = loaderData;
    const path = `/insights/${insight.slug}`;
    const image = insightImage(insight);
    const seo = seoHead({
      title: `${insight.title} | WorthPrime Tax`,
      description: insight.excerpt || insight.title,
      path,
      type: "article",
    });
    return {
      ...seo,
      meta: isIndexableInsight(insight)
        ? seo.meta
        : [...seo.meta, { name: "robots", content: "noindex, follow" }],
      scripts: [
        breadcrumbJsonLd(insightCrumbs(insight)),
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: insight.title,
          description: insight.excerpt,
          datePublished: insight.date,
          mainEntityOfPage: absoluteUrl(path),
          ...(image && { image: absoluteUrl(image.src) }),
          author: { "@id": `${SITE.url}/#organization` },
          publisher: { "@id": `${SITE.url}/#organization` },
        }),
      ],
    };
  },
  component: InsightPage,
  notFoundComponent: () => (
    <Section>
      <h1 className="font-serif text-3xl font-bold text-primary">Article Not Found</h1>
      <Link to="/insights" className="mt-4 inline-block text-primary underline">
        Back to all insights
      </Link>
    </Section>
  ),
});

function InsightPage() {
  const { insight } = Route.useLoaderData();
  const [cover, ...gallery] = insight.images ?? [];
  const ctaClass =
    "inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90";
  const linkedinClass =
    "inline-flex items-center gap-3 rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-tint";

  return (
    <>
      <article className="bg-linear-to-b from-tint to-background pt-8 pb-10 sm:pt-10">
        <Container className="max-w-[880px]">
          <div className="flex items-center gap-4">
            <InsightTag tag={insight.tag} />
            <time dateTime={insight.date} className="text-sm text-muted-foreground">
              {formatInsightDate(insight.date)}
            </time>
          </div>
          <h1 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.08] font-bold tracking-[-0.01em] text-primary">
            {insight.title}
          </h1>
          {insight.excerpt && (
            <p className="mt-3 text-lg leading-snug text-muted-foreground">{insight.excerpt}</p>
          )}

          {cover ? (
            // LinkedIn images are designed flyers with text, so they are shown whole, not cropped.
            <figure className="mt-7 overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={cover.src}
                alt={cover.alt}
                className="mx-auto max-h-[36rem] w-auto object-contain"
              />
            </figure>
          ) : (
            <InsightImage
              insight={insight}
              className="mt-7 aspect-[2.2/1] w-full rounded-xl object-cover"
            />
          )}
        </Container>

        <div className="mt-8">
          <PricingMarquee />
        </div>

        <Container className="max-w-[880px]">
          <div className="mt-8 space-y-4 text-[1.0625rem] leading-relaxed text-foreground">
            {insight.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {gallery.length > 0 && (
            <section aria-labelledby="post-photos" className="mt-8">
              <h2 id="post-photos" className="font-serif text-2xl font-bold text-primary">
                {INSIGHTS_PAGE.galleryHeading}
              </h2>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {gallery.map((image, i) => (
                  <li key={image.src}>
                    <a
                      href={image.src}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group block overflow-hidden rounded-lg border border-border bg-card"
                    >
                      <img
                        src={image.src}
                        alt={`${image.alt}, photo ${i + 2}`}
                        loading="lazy"
                        className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {insight.takeaways.length > 0 && (
            <section
              aria-labelledby="takeaways"
              className="mt-8 rounded-xl border border-border bg-card p-6 sm:p-7"
            >
              <h2 id="takeaways" className="font-serif text-2xl font-bold text-primary">
                Key Takeaways
              </h2>
              <ul className="mt-4 space-y-3">
                {insight.takeaways.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[1rem] leading-snug">
                    <span
                      className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-gold/20 text-primary"
                      aria-hidden
                    >
                      <Check className="size-3" strokeWidth={2.5} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-7 flex flex-wrap gap-3">
            {insight.cta.serviceSlug ? (
              <Link
                to="/services/$slug"
                params={{ slug: insight.cta.serviceSlug }}
                className={ctaClass}
              >
                {insight.cta.label}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            ) : (
              <Link to="/contact" hash="contact-form" className={ctaClass}>
                {insight.cta.label}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            )}
            {insight.sourceUrl && (
              <a
                href={insight.sourceUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={linkedinClass}
              >
                <Linkedin className="size-4" aria-hidden />
                {INSIGHTS_PAGE.viewOnLinkedIn}
              </a>
            )}
          </div>

          <p className="mt-8 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
            <strong className="font-semibold">Disclaimer:</strong> {INSIGHTS_PAGE.disclaimer}
          </p>
        </Container>
      </article>

      {HAS_LINKEDIN && (
        <Container className="pb-6">
          <LinkedInBand />
        </Container>
      )}

      {/* <CtaBand /> */}
    </>
  );
}
