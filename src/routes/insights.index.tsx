import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { INSIGHTS, INSIGHTS_PAGE, LINKS } from "@/data/site";
import { Container } from "@/components/site/primitives";
import { ArticleCard } from "@/components/site/ArticleCard";
import { LinkedInBand } from "@/components/site/LinkedInBand";
import { ConsultationBanner } from "@/components/site/ConsultationBanner";
import heroImage from "@/assets/worthprime-hero-blue.jpg";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: INSIGHTS_PAGE.title },
      { name: "description", content: INSIGHTS_PAGE.description },
      { property: "og:title", content: INSIGHTS_PAGE.title },
      { property: "og:description", content: INSIGHTS_PAGE.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InsightsPage,
});

function GoldRule() {
  return <span className="h-0.5 w-12 rounded-full bg-brand-gold" aria-hidden />;
}

function InsightsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-linear-to-b from-tint to-background">
        {/* Team photo on the right, fading into the page on its left edge. */}
        <img
          src={heroImage}
          alt=""
          width={1264}
          height={848}
          className="absolute inset-y-0 right-0 -z-10 hidden h-full w-[58%] object-cover object-[center_35%] [mask-image:linear-gradient(to_right,transparent,black_30%)] lg:block"
        />
        <Container className="pt-5 pb-8 sm:pt-6 sm:pb-10 lg:pt-6 lg:pb-9">
          <div className="max-w-[34rem] lg:max-w-[46%]">
            <h1 className="font-serif text-[clamp(2.25rem,4vw,3.75rem)] leading-[1] font-bold tracking-[-0.02em]">
              <span className="block text-primary">{INSIGHTS_PAGE.heading}</span>
              <span className="block font-semibold text-brand-gold italic">
                {INSIGHTS_PAGE.headingMuted}
              </span>
            </h1>
            <p className="mt-4 text-base leading-snug text-muted-foreground sm:text-[1.0625rem]">
              {INSIGHTS_PAGE.intro}
            </p>
          </div>
          <img
            src={heroImage}
            alt=""
            width={1264}
            height={848}
            className="mt-6 aspect-[16/8] w-full rounded-xl object-cover lg:hidden"
          />
        </Container>
      </section>

      <section aria-labelledby="latest-articles" className="pt-6 pb-5 sm:pt-8">
        <Container>
          <div className="flex items-center gap-4">
            <GoldRule />
            <p className="text-xs font-semibold tracking-[0.24em] text-primary uppercase">
              {INSIGHTS_PAGE.latestLabel}
            </p>
          </div>
          <div className="mt-2 flex flex-col gap-3 lg:flex-row lg:items-end lg:gap-6">
            <h2
              id="latest-articles"
              className="shrink-0 font-serif text-[clamp(1.85rem,2.8vw,2.4rem)] leading-tight font-bold text-primary"
            >
              {INSIGHTS_PAGE.latestHeading}
            </h2>
            <p className="max-w-[30rem] text-[0.95rem] leading-snug text-muted-foreground lg:pb-1.5">
              {INSIGHTS_PAGE.latestIntro}
            </p>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 self-start text-sm font-semibold text-primary underline underline-offset-4 lg:ml-auto lg:self-auto lg:pb-1.5"
            >
              View all articles
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>

          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INSIGHTS.map((insight) => (
              <li key={insight.slug}>
                <ArticleCard insight={insight} />
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <LinkedInBand />
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            {INSIGHTS_PAGE.disclaimer}
          </p>
        </Container>
      </section>

      <ConsultationBanner />
    </>
  );
}
