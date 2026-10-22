import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { AUDIENCES, SERVICES, type Audience } from "@/data/services";
import { LINKS } from "@/data/site";
import { Container, Reveal, Section, SectionLabel } from "@/components/site/primitives";
import { ServiceCard } from "@/components/site/ServiceCard";
import { PriceChart } from "@/components/site/PriceChart";
import { CtaBand } from "@/components/site/CtaBand";
import { PricingMarquee } from "@/components/site/PricingMarquee";
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
      {/*
       * Same treatment as the home hero: the photo fills the section and a white wash on the left
       * keeps the copy readable. This photo is busier on the left, so the wash is a little stronger.
       */}
      <section className="relative isolate overflow-hidden bg-background text-foreground">
        <div className="absolute inset-0 -z-10">
          <img
            src={documentsImage}
            alt="Financial documents ready for tax review"
            width={1200}
            height={896}
            className="h-full w-full object-cover object-[70%_center]"
          />
          <div
            className="absolute inset-0 bg-background/45 lg:bg-transparent lg:bg-linear-to-r lg:from-background/55 lg:from-25% lg:via-background/38 lg:via-50% lg:to-transparent lg:to-75%"
            aria-hidden
          />
        </div>
        <Container className="relative max-w-[1540px] lg:px-10">
          <div className="flex max-w-[860px] flex-col pt-16 pb-20 sm:pt-20 sm:pb-24 lg:min-h-[calc(100svh-4rem)] lg:justify-center lg:pt-[3svh] lg:pb-[5svh]">
            <h1 className="font-serif text-[clamp(2.4rem,4.3vw,4.6rem)] leading-[1.08] font-bold tracking-[-0.02em] text-primary xl:text-[clamp(2.25rem,min(4.3vw,8svh),4.6rem)]">
              The Numbers Behind Your Business.{" "}
              <span className="font-semibold italic">The Perspective Beyond Them.</span>
            </h1>
            <p className="mt-5 -mx-3 max-w-[44rem] rounded-2xl bg-background/70 px-3 py-3 text-base leading-relaxed text-foreground/85 backdrop-blur-sm sm:-mx-4 sm:px-4 sm:py-4 sm:text-lg xl:text-[clamp(1rem,2.1svh,1.25rem)]">
              From Individual Tax and Form 1040 filings to U.S. business tax, Form 1120, Form 1120S
              and Form 1065, our work is designed around accuracy, compliance and the broader
              objectives of the client. Whether you are forming an LLC, operating a C Corp, S Corp
              or Partnership, managing payroll, maintaining your books through QuickBooks, or
              responding to an IRS Audit, we bring the relevant expertise into sharper focus.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 xl:mt-[clamp(1rem,3.4svh,2rem)]">
              <Link
                to="/contact"
                hash="contact-form"
                className="inline-flex items-center gap-2.5 rounded-md bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground xl:px-11 xl:py-[clamp(0.75rem,1.9svh,1.1rem)] xl:text-lg transition-transform hover:scale-[1.03]"
              >
                Contact us <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <PricingMarquee />

      <Section className="pt-10 sm:pt-14">
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
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="pricing" className="scroll-mt-24 bg-background/40">
        <SectionLabel>Price chart</SectionLabel>
        <h2 className="mt-5 text-[clamp(1.9rem,4.4vw,3.2rem)] leading-tight">
          Starting from, <span className="italic text-primary">before scope.</span>
        </h2>
        <PriceChart />
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
