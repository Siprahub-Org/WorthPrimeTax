import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Star } from "lucide-react";
import { SERVICES } from "@/data/services";
import {
  FAQS,
  FOUNDERS,
  INSIGHTS,
  LINKS,
  PROCESS,
  REASONS,
  STATS,
} from "@/data/site";
import { Container, CountUp, Reveal, Section, SectionLabel } from "@/components/site/primitives";
import { ServiceCard } from "@/components/site/ServiceCard";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { CtaBand } from "@/components/site/CtaBand";
import { PricingMarquee } from "@/components/site/PricingMarquee";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/worthprime-hero-blue.jpg";
import advisersImage from "@/assets/worthprime-advisers-blue.jpg";
import documentsImage from "@/assets/worthprime-documents-blue.jpg";

const TITLE = "WorthPrime Tax | U.S. Tax, Accounting & Compliance";
const DESCRIPTION =
  "WorthPrime Tax brings U.S. tax, accounting, payroll, audit and IRS compliance together through a single, integrated professional relationship.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <PricingMarquee />
      <StatsBand />
      <WhoWeAre />
      <ProofSection />
      <ServicesGrid />
      <PricingPreview />
      <HowItWorks />
      <ClientExperience />
      <Insights />
      <Faq />
      <CtaBand />
      <ContactBlock />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-navy-deep pb-0">
      <Container>
        <div className="relative min-h-[650px] overflow-hidden sm:min-h-[720px]">
          <img src={heroImage} alt="Tax advisers reviewing financial documents together" width={1600} height={1056} className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-75 sm:object-center" />
          <div className="absolute inset-0 bg-linear-to-r from-navy-deep via-navy-deep/90 to-navy-deep/25" aria-hidden />
          <div className="absolute inset-0 bg-linear-to-t from-navy-deep/75 via-transparent to-transparent sm:hidden" aria-hidden />
          <div className="relative flex min-h-[650px] max-w-3xl flex-col justify-center px-1 py-14 sm:min-h-[720px] sm:px-10 sm:py-16 lg:px-14">
            <SectionLabel index="01">Explore</SectionLabel>
            <h1 className="mt-5 text-[clamp(2.7rem,6.4vw,5.4rem)] leading-[1.01] text-hero-foreground">
              Your Business Is More Than a Tax Return.{" "}
              <span className="italic text-hero-muted">So Are We.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-hero-muted">
              Tax obligations rarely exist in isolation. Entity structure affects taxation.
              Accounting shapes financial visibility. Payroll carries its own compliance
              responsibilities. And an IRS notice can quickly become a business concern.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/"
                hash="contact-form"
                className="inline-flex items-center gap-2 rounded-md bg-hero-foreground px-6 py-3 text-sm font-semibold text-navy-deep transition-transform hover:scale-[1.03]"
              >
                Contact us <ArrowRight className="size-4" />
              </Link>
              <a
                href={LINKS.phoneHref}
                className="inline-flex items-center gap-2 rounded-md border border-hero-border bg-navy-deep/35 px-6 py-3 text-sm text-hero-foreground transition-colors hover:bg-hero-foreground/10"
              >
                Connect to us
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div>
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-hero-muted">
                  <span className="text-hero-foreground">500 plus</span> satisfied customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function StatsBand() {
  return (
    <Section className="bg-navy-soft py-14 sm:py-20">
      <div className="grid overflow-hidden rounded-[2rem] border border-border sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div
              className={cn(
                "h-full p-7 sm:p-9",
                i < STATS.length - 1 && "border-b border-border",
                (i === 0 || i === 2) && "sm:border-r",
                i < 2 && "sm:border-b",
                i < STATS.length - 1 && "lg:border-r",
                "lg:border-b-0",
              )}
            >
              <p className="font-sans text-[clamp(2.5rem,4vw,4rem)] font-medium leading-none text-foreground">
                <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm leading-snug text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function WhoWeAre() {
  return (
    <Section>
      <SectionLabel index="03">How we started</SectionLabel>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">
            Built on Experience. <span className="italic text-gold">Shaped by Perspective.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Behind every enduring enterprise lies a confluence of sound structure, considered
            decisions and discerning professional counsel. WorthPrime Tax was shaped by precisely
            that philosophy—bringing together the complementary expertise of its co-founders, with
            extensive experience across accounting, taxation, audit, payroll, legal and compliance
            services spanning the U.S., UAE and India.
          </p>
          <Link
            to="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:bg-accent"
          >
            More about us <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 100}>
              <article className="surface-card overflow-hidden">
                <img src={advisersImage} alt="Professional tax advisers in consultation" width={1408} height={1008} loading="lazy" className={cn("aspect-4/5 w-full object-cover", i === 1 && "object-right")} />
                <div className="p-5">
                  <h3 className="text-xl leading-tight">{f.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-gold">{f.title}</p>
                  <p className="mt-3 text-xs text-muted-foreground">{f.credential}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProofSection() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = refs.current.findIndex((n) => n === e.target);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((n) => n && observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <Section className="bg-navy/40">
      <SectionLabel index="04">Why WorthPrime Tax</SectionLabel>
      <div className="mt-6 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">
            One Firm. <span className="italic text-gold">Every Business Need.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Business does not operate in separate compartments. A tax decision can affect
            accounting. Entity structure can influence tax treatment. Payroll creates reporting
            obligations. Financial records determine the quality of tax filings. An IRS issue may
            require both technical analysis and a broader understanding of the underlying business.
          </p>
          <p className="mt-4 text-muted-foreground">
            WorthPrime Tax brings these disciplines together through a single, integrated
            professional relationship, giving clients a more coherent way to manage their financial
            and compliance responsibilities.
          </p>
          <p className="mt-8 font-display text-3xl text-gold">
            0{active + 1} <span className="text-foreground/30">/ 0{REASONS.length}</span>
          </p>
        </div>

        <div className="space-y-5">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              ref={(n) => {
                refs.current[i] = n;
              }}
              className={cn(
                "surface-card p-7 transition-all duration-500",
                active === i
                  ? "border-gold/60 bg-navy-soft opacity-100"
                  : "opacity-55 hover:opacity-80",
              )}
            >
              <span className="font-display text-4xl text-gold">0{i + 1}</span>
              <h3 className="mt-3 text-2xl leading-tight">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ServicesGrid() {
  return (
    <Section id="services">
      <SectionLabel index="05">What we do</SectionLabel>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-3xl text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">
          The Numbers Behind Your Business.{" "}
          <span className="italic text-gold">The Perspective Beyond Them.</span>
        </h2>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:bg-accent"
        >
          All services <ArrowRight className="size-4" />
        </Link>
      </div>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        The right financial partner should understand what sits behind the numbers. WorthPrime Tax
        works with businesses and individuals across a broad spectrum of U.S. tax and compliance
        requirements, combining technical knowledge with a practical understanding of how financial
        decisions affect the wider business.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) * 80}>
            <ServiceCard service={s} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function PricingPreview() {
  const rows = SERVICES.slice(0, 5);
  return (
    <Section className="bg-navy/40">
      <SectionLabel index="06">Pricing</SectionLabel>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-5">
        <h2 className="text-[clamp(1.8rem,4vw,3rem)] leading-tight">Starting from</h2>
        <Link to="/services" hash="pricing" className="text-sm text-gold hover:underline">
          See the full price chart →
        </Link>
      </div>
      <div className="surface-card mt-8 divide-y divide-border overflow-hidden">
        {rows.map((s) => (
          <div key={s.slug} className="flex items-center justify-between gap-4 px-6 py-4">
            <span className="text-sm">{s.name}</span>
            <span
              className={cn(
                "shrink-0 text-sm",
                s.price.startsWith("From") ? "text-gold" : "text-muted-foreground",
              )}
            >
              {s.price}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Final fees depend on scope. Audits cover clients across U.S. states.
      </p>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section>
      <SectionLabel index="07">How it works</SectionLabel>
      <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">
        Four steps, <span className="italic text-gold">start to filing.</span>
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <div className="surface-card h-full p-6">
              <span className="font-display text-6xl leading-none text-gold/70">0{i + 1}</span>
              <h3 className="mt-4 text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ClientExperience() {
  return (
    <Section className="bg-navy/40">
      <SectionLabel index="08">Client experience</SectionLabel>
      <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">
        What clients <span className="italic text-gold">say.</span>
      </h2>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="surface-card grid min-h-[260px] place-items-center p-8 text-center text-sm text-muted-foreground">
          [Google reviews widget]
        </div>
        <div className="surface-card grid min-h-[260px] place-items-center gap-3 p-8 text-center">
          <span className="grid size-14 place-items-center rounded-full border border-gold text-gold">
            <Play className="size-5" />
          </span>
          <p className="text-sm text-muted-foreground">
            [One-minute video testimonial — client to supply]
          </p>
        </div>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="grid h-24 place-items-center rounded-2xl border border-dashed border-border text-xs text-muted-foreground"
          >
            [Certification badge]
          </div>
        ))}
      </div>
    </Section>
  );
}

function Insights() {
  return (
    <Section id="insights">
      <SectionLabel index="09">Insights</SectionLabel>
      <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">
        Latest from <span className="italic text-gold">WorthPrime Tax</span>
      </h2>
      <p className="mt-4 text-sm text-muted-foreground">
        [These will later be fed from LinkedIn posts]
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {INSIGHTS.map((a, i) => (
          <Reveal key={i} delay={i * 80}>
            <article className="surface-card h-full overflow-hidden">
               <img src={i === 1 ? advisersImage : documentsImage} alt="Tax planning and advisory" width={1408} height={1008} loading="lazy" className="aspect-video w-full object-cover" />
              <div className="p-6">
                <p className="label-slash">0{i + 1} / {a.tag}</p>
                <h3 className="mt-3 text-lg leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section className="bg-navy/40">
      <SectionLabel index="10">FAQ</SectionLabel>
      <div className="mt-6 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">
          Questions, <span className="italic text-gold">answered.</span>
        </h2>
        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((f, i) => (
            <div key={f.q}>
              <button
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="text-base sm:text-lg">{f.q}</span>
                <span
                  className={cn(
                    "shrink-0 text-2xl text-gold transition-transform duration-300",
                    open === i && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  open === i ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ContactBlock() {
  return (
    <Section id="contact-form" className="scroll-mt-28 pb-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionLabel index="11">Contact</SectionLabel>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.05]">
            For Individuals. For Businesses.{" "}
            <span className="italic text-gold">For What Comes Next…</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Your financial obligations change as your circumstances change. A new business requires
            the right structure. A growing company needs reliable books and payroll. Tax season
            calls for accurate filings. International activity can create additional reporting
            requirements. And when the IRS raises a question, the response needs to be deliberate.
          </p>
        </div>
        <EnquiryForm />
      </div>
    </Section>
  );
}
