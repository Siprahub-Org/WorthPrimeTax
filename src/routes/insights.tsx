import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { INSIGHTS, INSIGHTS_PAGE, LINKS } from "@/data/site";
import { Container, Reveal, Section, SectionLabel } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { InsightCard } from "@/components/site/InsightCard";
import { PricingMarquee } from "@/components/site/PricingMarquee";
import heroImage from "@/assets/worthprime-hero-blue.jpg";

export const Route = createFileRoute("/insights")({
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

function InsightsPage() {
  return (
    <>
      <Section className="bg-hero pb-0 pt-14 text-hero-foreground">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="pb-12 sm:pb-16">
            <SectionLabel className="text-hero-muted!">{INSIGHTS_PAGE.label}</SectionLabel>
            <h1 className="mt-5 max-w-4xl hero-heading text-hero-foreground">
              {INSIGHTS_PAGE.heading}{" "}
              <span className="italic text-hero-muted">{INSIGHTS_PAGE.headingMuted}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hero-muted">
              {INSIGHTS_PAGE.intro}
            </p>
          </div>
          <img
            src={heroImage}
            alt="WorthPrime advisers reviewing documents together"
            width={1264}
            height={848}
            className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
          />
        </div>
      </Section>

      <PricingMarquee />

      <Section className="pt-10 sm:pt-14">
        <SectionLabel>Latest articles</SectionLabel>
        <p className="mt-4 text-sm text-muted-foreground">{INSIGHTS_PAGE.feedNote}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INSIGHTS.map((a, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <InsightCard insight={a} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Container>
        <a
          href={LINKS.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="surface-card flex flex-wrap items-center justify-between gap-4 p-7 transition-colors hover:border-primary/60"
        >
          <div>
            <SectionLabel>Follow us</SectionLabel>
            <h2 className="mt-2 text-2xl">Get new insights on LinkedIn</h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-hero-foreground">
            <Linkedin className="size-4" /> Follow WorthPrime Tax
          </span>
        </a>
      </Container>

      <CtaBand />
    </>
  );
}
