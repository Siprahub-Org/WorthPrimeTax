import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { AUDIENCES, SERVICES, type Audience } from "@/data/services";
import { LINKS } from "@/data/site";
import { Container, Reveal, Section, SectionLabel } from "@/components/site/primitives";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaBand } from "@/components/site/CtaBand";
import { cn } from "@/lib/utils";
import documentsImage from "@/assets/worthprime-documents-blue.jpg";

const TITLE = "Services | WorthPrime Tax";
const DESCRIPTION =
  "Ten U.S. tax, accounting, payroll, audit and compliance services — with a starting-from price chart and guidance on where to begin.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
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
      <Section className="bg-navy-deep pb-0 pt-14 text-hero-foreground">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="pb-12 sm:pb-16">
            <SectionLabel index="01">What we do</SectionLabel>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.03]">
              The Numbers Behind Your Business.{" "}
              <span className="italic text-hero-muted">The Perspective Beyond Them.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-hero-muted">
              From Individual Tax and Form 1040 filings to U.S. business tax, Form 1120, Form 1120S and
              Form 1065, our work is designed around accuracy, compliance and the broader objectives of
              the client. Whether you are forming an LLC, operating a C Corp, S Corp or Partnership,
              managing payroll, maintaining your books through QuickBooks, or responding to an IRS
              Audit, we bring the relevant expertise into sharper focus.
            </p>
          </div>
          <img src={documentsImage} alt="Financial documents ready for tax review" width={1408} height={1008} className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]" />
        </div>

        <div className="flex flex-wrap gap-2 border-t border-hero-border py-7">
          {AUDIENCES.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setFilter(a)}
              aria-pressed={filter === a}
              className={cn(
                "rounded-full border px-5 py-2 text-sm transition-colors",
                filter === a
                  ? "border-gold bg-gold text-navy-deep"
                  : "border-hero-border text-hero-muted hover:bg-hero-foreground/10",
              )}
            >
              {a}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 70}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="pricing" className="scroll-mt-24 bg-navy/40">
        <SectionLabel index="02">Price chart</SectionLabel>
        <h2 className="mt-5 text-[clamp(1.9rem,4.4vw,3.2rem)] leading-tight">
          Starting from, <span className="italic text-gold">before scope.</span>
        </h2>
        <div className="surface-card mt-8 overflow-hidden">
          <div className="hidden grid-cols-[2fr_1fr_2fr_auto] gap-4 border-b border-border px-6 py-4 text-xs uppercase tracking-[0.16em] text-muted-foreground lg:grid">
            <span>Service</span>
            <span>Starting from</span>
            <span>What is included</span>
            <span />
          </div>
          <div className="divide-y divide-border">
            {SERVICES.map((s) => (
              <div
                key={s.slug}
                className="grid gap-3 px-6 py-5 lg:grid-cols-[2fr_1fr_2fr_auto] lg:items-center lg:gap-4"
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm transition-colors hover:text-gold"
                >
                  <span className="mr-2 text-gold">{s.number}</span>
                  {s.name}
                </Link>
                <span
                  className={cn(
                    "text-sm",
                    s.price.startsWith("From") ? "text-gold" : "text-muted-foreground",
                  )}
                >
                  {s.price}
                </span>
                <span className="text-sm text-muted-foreground">{s.included}</span>
                <Link
                  to="/"
                  hash="contact-form"
                  className="justify-self-start rounded-full border border-border px-4 py-2 text-xs transition-colors hover:bg-accent lg:justify-self-end"
                >
                  Contact us

                </Link>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-xs text-muted-foreground">
          Audits are available to clients across U.S. states. Only the audit fee is confirmed; all
          other figures are placeholders. Final fees depend on scope.
        </p>
      </Section>

      <Section>
        <SectionLabel index="03">Not sure where to start?</SectionLabel>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GUIDES.map((g, i) => {
            const service = SERVICES.find((s) => s.slug === g.slug)!;
            return (
              <Reveal key={g.slug} delay={i * 70}>
                <Link
                  to="/services/$slug"
                  params={{ slug: g.slug }}
                  className="surface-card group flex h-full flex-col justify-between p-6 transition-colors hover:border-gold/60"
                >
                  <p className="text-lg leading-snug">{g.situation}</p>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm text-gold">
                    {service.name} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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
          className="surface-card flex flex-wrap items-center justify-between gap-4 bg-navy-soft p-7 transition-colors hover:border-gold/60"
        >
          <div>
            <p className="label-slash">04 / IRS tool</p>
            <h3 className="mt-2 text-2xl">Check your IRS refund status</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Opens the official IRS refund tracker in a new tab.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep">
            Open tool <ExternalLink className="size-4" />
          </span>
        </a>
      </Container>

      <CtaBand />
    </>
  );
}
