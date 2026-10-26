import { createFileRoute, Link } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { AUDIENCES, SERVICES, type Audience } from "@/data/services";
import { LINKS } from "@/data/site";
import { Container, Reveal, Section, SectionLabel } from "@/components/site/primitives";
import { ServiceCard } from "@/components/site/ServiceCard";
import { PricingTable } from "@/components/site/PricingTable";
import { BackdropHero } from "@/components/site/BackdropHero";
import { CtaBand } from "@/components/site/CtaBand";
import { PricingMarquee } from "@/components/site/PricingMarquee";
import { cn } from "@/lib/utils";
import heroBackdrop from "@/assets/service-pages/hero-backdrop.webp";

const TITLE = "Services | WorthPrime Tax";
const DESCRIPTION =
  "Ten U.S. tax, accounting, payroll, audit and compliance services — with a starting-from price chart and guidance on where to begin.";

export const Route = createFileRoute("/services/")({
  head: () => seoHead({ title: TITLE, description: DESCRIPTION, path: "/services" }),
  component: ServicesPage,
});

const GUIDES = [
  { situation: "Starting a new business", slug: "business-formation-entity-structuring" },
  { situation: "Growing and need reliable books", slug: "accounting-bookkeeping" },
  { situation: "Received an IRS letter", slug: "irs-audit-notice-resolution" },
  { situation: "Hold overseas accounts", slug: "fbar-fatca-boir-compliance" },
];

function ServicesPage() {
  const [filter, setFilter] = useState<"All" | Audience>("All");
  const shown = filter === "All" ? SERVICES : SERVICES.filter((s) => s.audience === filter);

  return (
    <>
      <BackdropHero
        lines={[
          [{ text: "The Numbers Behind Your Business." }],
          [{ text: "The Perspective Beyond Them.", accent: true }],
        ]}
        intro="From Individual Tax and Form 1040 filings to U.S. business tax, Form 1120, Form 1120S and Form 1065, our work is designed around accuracy, compliance and the broader objectives of the client. Whether you are forming an LLC, operating a C Corp, S Corp or Partnership, managing payroll, maintaining your books through QuickBooks, or responding to an IRS Audit, we bring the relevant expertise into sharper focus."
        image={heroBackdrop}
      />

      <PricingMarquee />

      <Section className="pt-10 sm:pt-14">
        {/* The cards carry h3 names; this keeps the outline h1 → h2 → h3 without changing the look. */}
        <h2 className="sr-only">All services</h2>
        <div className="flex flex-wrap gap-2">
          {AUDIENCES.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setFilter(a)}
              aria-pressed={filter === a}
              className={cn(
                "rounded-full border px-5 py-2 text-sm transition-colors",
                filter === a
                  ? "border-primary bg-primary text-hero-foreground"
                  : "border-border text-foreground/80 hover:bg-accent",
              )}
            >
              {a}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 70}>
              <ServiceCard service={s} photoOnly />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="pricing" className="scroll-mt-24 bg-background/40">
        <SectionLabel>Price chart</SectionLabel>
        <h2 className="mt-5 text-[clamp(1.9rem,4.4vw,3.2rem)] leading-tight">
          Starting from, <span className="italic text-primary">before scope.</span>
        </h2>
        {/* Same table as the Pricing page. */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-2 shadow-[0_24px_60px_-36px] shadow-primary/40 sm:p-3">
          <PricingTable />
        </div>
      </Section>

      <Section>
        <SectionLabel>Not sure where to start?</SectionLabel>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GUIDES.map((g, i) => {
            const service = SERVICES.find((s) => s.slug === g.slug)!;
            return (
              <Reveal key={g.slug} delay={i * 70}>
                <Link
                  to="/services/$slug"
                  params={{ slug: g.slug }}
                  className="surface-card group flex h-full flex-col justify-between p-6 transition-colors hover:border-primary/60"
                >
                  <p className="text-lg leading-snug">{g.situation}</p>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
                    {service.name}{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Container>
        <a
          href={LINKS.irs}
          target="_blank"
          rel="noreferrer noopener"
          className="surface-card flex flex-wrap items-center justify-between gap-4 p-7 transition-colors hover:border-primary/60"
        >
          <div>
            <p className="label-slash">IRS tool</p>
            <h3 className="mt-2 text-2xl">Check your IRS refund status</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Opens the official IRS refund tracker in a new tab.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-hero-foreground">
            Open tool <ExternalLink className="size-4" />
          </span>
        </a>
      </Container>

      <CtaBand />
    </>
  );
}
