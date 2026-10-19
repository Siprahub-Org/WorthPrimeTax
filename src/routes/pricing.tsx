import { createFileRoute } from "@tanstack/react-router";
import { PRICING_PAGE } from "@/data/site";
import { Section, SectionLabel } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { PriceChart } from "@/components/site/PriceChart";
import { PricingMarquee } from "@/components/site/PricingMarquee";
import documentsImage from "@/assets/worthprime-documents-blue.jpg";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: PRICING_PAGE.title },
      { name: "description", content: PRICING_PAGE.description },
      { property: "og:title", content: PRICING_PAGE.title },
      { property: "og:description", content: PRICING_PAGE.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <Section className="bg-hero pb-0 pt-14 text-hero-foreground">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="pb-12 sm:pb-16">
            <SectionLabel className="text-hero-muted!">{PRICING_PAGE.label}</SectionLabel>
            <h1 className="mt-5 max-w-4xl hero-heading text-hero-foreground">
              {PRICING_PAGE.heading}{" "}
              <span className="italic text-hero-muted">{PRICING_PAGE.headingMuted}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hero-muted">
              {PRICING_PAGE.intro}
            </p>
          </div>
          <img
            src={documentsImage}
            alt="Financial documents ready for tax review"
            width={1408}
            height={1008}
            className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
          />
        </div>
      </Section>

      <PricingMarquee />

      <Section className="pt-10 sm:pt-14">
        <SectionLabel>Price chart</SectionLabel>
        <PriceChart />
      </Section>

      <CtaBand />
    </>
  );
}
