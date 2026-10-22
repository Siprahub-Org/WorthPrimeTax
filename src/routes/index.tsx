import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChartColumnIncreasing,
  ChevronLeft,
  ChevronRight,
  Files,
  MessageSquareQuote,
  Play,
  Quote,
  ShieldCheck,
  Star,
  Users,
  Video,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import {
  CERTIFICATIONS,
  CLIENT_EXPERIENCE,
  FAQS,
  FOUNDERS,
  HOME_PRICING,
  INSIGHTS,
  LINKS,
  PROCESS,
  REASONS,
  STATS,
} from "@/data/site";
import {
  Container,
  CountUp,
  Reveal,
  Section,
  SectionLabel,
  useSnapCarousel,
} from "@/components/site/primitives";
import { ServiceCard } from "@/components/site/ServiceCard";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { InsightCard } from "@/components/site/InsightCard";
import { CtaBand } from "@/components/site/CtaBand";
import { PricingMarquee } from "@/components/site/PricingMarquee";
import { SERVICE_IMAGES } from "@/components/site/serviceImages";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/worthprime-hero-blue.jpg";
import advisersImage from "@/assets/worthprime-advisers-blue.jpg";
import workspaceImage from "@/assets/worthprime-workspace.webp";
import stepTalkImage from "@/assets/process/step-talk.jpg";
import stepScopeImage from "@/assets/process/step-scope.jpg";
import stepWorkImage from "@/assets/process/step-work.jpg";
import stepCompliantImage from "@/assets/process/step-compliant.jpg";
import pricingDeskImage from "@/assets/pricing-desk.jpg";
import credIrsLogo from "@/assets/credentials/cred-irs.png";
import credAicpaLogo from "@/assets/credentials/cred-aicpa.png";
import googleLogo from "@/assets/google-g.svg";

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
    <section className="relative isolate overflow-hidden bg-linear-to-r from-background via-background to-tint/60">
      {/*
       * On extra-large screens the photo fills the whole hero and a white wash on the left keeps the
       * navy copy readable over it, as in the approved design.
       */}
      <div className="absolute inset-0 -z-10 hidden xl:block">
        <img
          src={heroImage}
          alt="Tax advisers reviewing financial documents together"
          width={1264}
          height={848}
          className="h-full w-full object-cover object-[68%_center]"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-background from-16% via-background/70 via-36% to-transparent to-58%"
          aria-hidden
        />
      </div>
      {/* Wider than the standard container, like the reference; the nav widens to match on this page. */}
      <Container className="relative max-w-[1540px] lg:px-10">
        <div className="flex max-w-[900px] flex-col pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-16 xl:min-h-[calc(100svh-4rem)] xl:justify-center xl:pt-[3svh] xl:pb-[5svh]">
          <h1 className="max-w-[36rem] font-serif xl:[text-shadow:0_0_28px_var(--color-background),0_0_10px_var(--color-background)] text-[clamp(2.4rem,4.3vw,4.6rem)] xl:max-w-none xl:text-[clamp(2.25rem,min(4.5vw,7.8svh),4.8rem)] leading-[1.04] font-bold tracking-[-0.02em] text-primary">
            {/* Two lines on wide screens: the break falls after "More Than". */}
            <span className="xl:block xl:whitespace-nowrap">Your Business Is More Than</span>{" "}
            <span className="xl:whitespace-nowrap">
              a Tax Return. <span className="font-semibold text-brand-gold italic">So Are We.</span>
            </span>
          </h1>
          <p className="mt-6 max-w-[37rem] text-base leading-relaxed text-foreground/85 sm:text-lg xl:[text-shadow:0_0_14px_var(--color-background),0_0_6px_var(--color-background)] xl:mt-[clamp(0.75rem,2.6svh,1.5rem)] xl:max-w-none xl:text-[clamp(1rem,2.1svh,1.25rem)]">
            {/* Three set lines on wide screens, as in the approved design. */}
            <span className="xl:block xl:whitespace-nowrap">
              Tax obligations rarely exist in isolation. Entity structure affects taxation.
            </span>{" "}
            <span className="xl:block xl:whitespace-nowrap">
              Accounting shapes financial visibility. Payroll carries its own compliance
            </span>{" "}
            <span className="xl:block xl:whitespace-nowrap">
              responsibilities. And an IRS notice can quickly become a business concern.
            </span>
          </p>
          <div className="mt-8 flex flex-wrap gap-4 xl:mt-[clamp(1rem,3.4svh,2rem)]">
            <Link
              to="/"
              hash="contact-form"
              className="inline-flex items-center gap-2.5 rounded-md bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground xl:px-11 xl:py-[clamp(0.75rem,1.7svh,1rem)] xl:text-lg shadow-[0_14px_30px_-18px] shadow-primary/70 transition-transform hover:scale-[1.03]"
            >
              Contact us <ArrowRight className="size-4" />
            </Link>
            <a
              href={LINKS.phoneHref}
              className="inline-flex items-center gap-2 rounded-md border border-primary/70 bg-background px-8 py-3.5 text-base font-semibold text-primary xl:px-11 xl:py-[clamp(0.75rem,1.7svh,1rem)] xl:text-lg transition-colors hover:bg-tint"
            >
              Connect to us
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 xl:mt-[clamp(1rem,4svh,2.5rem)]">
            <div className="flex items-center gap-1 text-brand-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current xl:size-5" />
              ))}
            </div>
            <p className="text-[0.95rem] text-foreground/85 xl:text-[1.0625rem]">
              <span className="font-semibold text-primary">500 plus</span> satisfied customers
            </p>
          </div>
        </div>
      </Container>

      {/* Below extra-large screens the photo stacks under the text instead of sitting behind it. */}
      <img
        src={heroImage}
        alt=""
        width={1264}
        height={848}
        className="aspect-[16/10] w-full object-cover object-[65%_center] sm:aspect-[16/8] lg:aspect-[16/7] xl:hidden"
      />
    </section>
  );
}

function StatsBand() {
  return (
    <Section className="bg-card py-14 sm:py-20">
      <div className="grid overflow-hidden rounded-[2rem] border border-hero/15 bg-tint sm:grid-cols-2 lg:grid-cols-4">
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
              <p className="font-sans text-[clamp(2.5rem,4vw,4rem)] font-medium leading-none text-brand-secondary">
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
      <SectionLabel>How we started</SectionLabel>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">
            Built on Experience. <span className="italic text-primary">Shaped by Perspective.</span>
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
                <img
                  src={advisersImage}
                  alt="Professional tax advisers in consultation"
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className={cn("aspect-4/5 w-full object-cover", i === 1 && "object-right")}
                />
                <div className="p-5">
                  <h3 className="text-xl leading-tight">{f.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-primary">{f.title}</p>
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

// One icon per entry in REASONS, in the same order.
const REASON_ICONS = [Files, ShieldCheck, ChartColumnIncreasing, Users];

const pad2 = (n: number) => String(n).padStart(2, "0");

function ProofSection() {
  const total = REASONS.length;
  // On narrow screens the cards become a swipeable track; on desktop the controls move the highlight.
  const { active, setActive, goTo, trackRef, itemRefs: cardRefs } = useSnapCarousel(total);

  return (
    <section
      aria-labelledby="why-worthprime-heading"
      className="relative isolate overflow-hidden bg-background py-16 sm:py-24"
    >
      <div
        className="absolute inset-0 -z-10 bg-linear-to-br from-tint via-background to-background"
        aria-hidden
      />
      <div
        className="absolute -top-40 right-0 -z-10 size-[36rem] rounded-full bg-brand-secondary/10 blur-3xl"
        aria-hidden
      />
      <Container>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2" aria-hidden>
            <span className="h-0.5 w-10 rounded-full bg-brand-secondary" />
            <span className="h-0.5 w-5 rounded-full bg-border" />
          </span>
          <SectionLabel>Why WorthPrime Tax</SectionLabel>
        </div>

        <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div className="min-w-0">
            <h2
              id="why-worthprime-heading"
              className="font-serif text-[clamp(2.3rem,4.6vw,3.8rem)] leading-[1.02] font-bold tracking-[-0.02em] text-balance"
            >
              <span className="block text-primary">One Firm.</span>
              <span className="block text-brand-secondary">Every Business Need.</span>
            </h2>
            <p className="mt-6 max-w-[38rem] text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
              Business does not operate in separate compartments. A tax decision can affect
              accounting. Entity structure can influence tax treatment. Payroll creates reporting
              obligations. Financial records determine the quality of tax filings. An IRS issue may
              require both technical analysis and a broader understanding of the underlying
              business.
            </p>
            <p className="mt-4 max-w-[38rem] text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
              WorthPrime Tax brings these disciplines together through a single, integrated
              professional relationship, giving clients a more coherent way to manage their
              financial and compliance responsibilities.
            </p>
          </div>

          <Reveal className="min-w-0">
            <div className="relative overflow-hidden rounded-2xl border border-brand-secondary/20 bg-card shadow-[0_24px_60px_-28px] shadow-primary/35">
              <img
                src={workspaceImage}
                alt="WorthPrime Tax services — tax, accounting, payroll, audit, business formation, compliance and financial planning — connected around a financial dashboard"
                width={1672}
                height={941}
                loading="lazy"
                className="aspect-16/9 w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/5"
                aria-hidden
              />
            </div>
          </Reveal>
        </div>

        <div
          ref={trackRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Why clients choose WorthPrime Tax"
          className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pt-1 pb-4 [scrollbar-width:none] sm:mx-0 sm:mt-14 sm:grid sm:auto-rows-fr sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
        >
          {REASONS.map((r, i) => {
            const Icon = REASON_ICONS[i % REASON_ICONS.length] ?? Files;
            const isActive = active === i;
            return (
              <article
                key={r.title}
                ref={(n) => {
                  cardRefs.current[i] = n;
                }}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActive(i)}
                className={cn(
                  "group relative flex w-[85%] shrink-0 snap-start flex-col rounded-xl border bg-linear-to-b p-6 transition-all duration-300 sm:w-auto sm:p-7",
                  isActive
                    ? "border-brand-secondary/40 from-tint to-card shadow-[0_18px_40px_-22px] shadow-brand-secondary/50"
                    : "border-brand-secondary/20 from-card to-card shadow-[0_10px_30px_-24px] shadow-primary/40 hover:-translate-y-0.5 hover:border-brand-secondary/30",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-serif text-3xl leading-none font-semibold text-primary sm:text-[2.1rem]">
                      {pad2(i + 1)}
                    </span>
                    <span
                      className="mt-4 block h-0.5 w-8 rounded-full bg-brand-secondary/60"
                      aria-hidden
                    />
                  </div>
                  <span
                    className={cn(
                      "grid size-14 shrink-0 place-items-center rounded-full transition-colors sm:size-16",
                      isActive
                        ? "bg-brand-indigo text-brand-indigo-foreground"
                        : "bg-tint text-brand-secondary group-hover:bg-brand-secondary/15",
                    )}
                    aria-hidden
                  >
                    <Icon className="size-6 sm:size-7" strokeWidth={1.75} />
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-xl leading-snug font-bold text-primary sm:text-[1.3rem] lg:min-h-[4.125em]">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                  {r.body}
                </p>
              </article>
            );
          })}
        </div>

        {/* Left-aligned stack on phones so the fixed contact buttons (bottom-right) never cover the arrows. */}
        <div className="mt-4 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            {REASONS.map((r, i) => (
              <button
                key={r.title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show reason ${i + 1}: ${r.title}`}
                aria-current={active === i ? "true" : undefined}
                className="group grid h-6 place-items-center"
              >
                <span
                  className={cn(
                    "block h-1 rounded-full transition-all duration-300",
                    active === i
                      ? "w-11 bg-primary"
                      : "w-8 bg-border group-hover:bg-brand-secondary/50",
                  )}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Previous reason"
              className="grid size-10 place-items-center rounded-full border border-input text-primary transition-colors hover:bg-accent"
            >
              <ChevronLeft className="size-4" />
            </button>
            <span
              className="min-w-[4.5rem] text-center text-sm tabular-nums text-muted-foreground"
              aria-live="polite"
            >
              <span className="text-primary">{pad2(active + 1)}</span> / {pad2(total)}
            </span>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Next reason"
              className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServicesGrid() {
  return (
    <Section id="services">
      <SectionLabel>What we do</SectionLabel>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-3xl text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">
          The Numbers Behind Your Business.{" "}
          <span className="italic text-primary">The Perspective Beyond Them.</span>
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

// Only confirmed prices ("From $5,000") are shown as-is; placeholders read as "Price TBC".
const displayPrice = (price: string) =>
  price.startsWith("From") ? price : HOME_PRICING.pendingPrice;

function PricingPreview() {
  const services = SERVICES;
  const trackRef = useRef<HTMLUListElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [dragging, setDragging] = useState(false);
  // Mouse drag state; touch and trackpads use the browser's native scrolling instead.
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      setAtStart(track.scrollLeft <= 2);
      setAtEnd(track.scrollLeft >= max - 2);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Moves the row by exactly one card (plus the gap), so cards stay aligned after each press.
  const scrollByCard = (dir: -1 | 1) => {
    const track = trackRef.current;
    const card = track?.querySelector("li");
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({
      left: dir * (card.getBoundingClientRect().width + gap),
      behavior: reduced ? "auto" : "smooth",
    });
  };

  const arrow = (dir: -1 | 1) => {
    const disabled = dir < 0 ? atStart : atEnd;
    return (
      <button
        type="button"
        onClick={() => scrollByCard(dir)}
        disabled={disabled}
        aria-label={dir < 0 ? "Previous services" : "Next services"}
        className={cn(
          "grid size-11 place-items-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-35",
          dir < 0
            ? "border-input bg-card text-primary enabled:hover:bg-accent"
            : "border-primary bg-primary text-primary-foreground enabled:hover:bg-primary/90",
        )}
      >
        {dir < 0 ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
      </button>
    );
  };

  return (
    <section
      aria-labelledby="home-pricing-heading"
      className="relative isolate overflow-hidden bg-background py-16 sm:py-24"
    >
      <img
        src={pricingDeskImage}
        alt=""
        width={1054}
        height={436}
        loading="lazy"
        className="absolute top-0 right-0 -z-10 hidden h-[58%] w-[64%] object-cover object-left [mask-image:linear-gradient(to_right,transparent,black_38%),linear-gradient(to_bottom,black_65%,transparent)] [mask-composite:intersect] md:block"
      />
      <Container>
        <div className="flex items-center gap-5">
          <span className="h-0.5 w-12 rounded-full bg-brand-gold" aria-hidden />
          <SectionLabel className="text-primary">{HOME_PRICING.label}</SectionLabel>
        </div>
        <h2
          id="home-pricing-heading"
          className="mt-5 font-serif text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[1.02] font-bold tracking-[-0.02em]"
        >
          <span className="block text-primary">{HOME_PRICING.heading}</span>
          <span className="block font-semibold text-brand-gold italic">
            {HOME_PRICING.headingMuted}
          </span>
        </h2>
        <p className="mt-5 max-w-[37rem] text-base leading-relaxed text-muted-foreground sm:text-lg">
          {HOME_PRICING.intro}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-5">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-3 rounded-lg bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-[0_14px_30px_-16px] shadow-primary/70 transition-transform hover:scale-[1.02]"
          >
            {HOME_PRICING.cta}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <div className="flex items-center gap-3">
            {arrow(-1)}
            {arrow(1)}
          </div>
        </div>

        <div className="relative mt-8">
          <ul
            ref={trackRef}
            tabIndex={0}
            aria-label="Starting prices by service"
            onPointerDown={(e) => {
              if (e.pointerType !== "mouse" || e.button !== 0 || !trackRef.current) return;
              drag.current = { x: e.clientX, left: trackRef.current.scrollLeft, moved: false };
            }}
            onPointerMove={(e) => {
              const track = trackRef.current;
              if (!drag.current || !track) return;
              const dx = e.clientX - drag.current.x;
              if (!drag.current.moved && Math.abs(dx) > 5) {
                drag.current.moved = true;
                setDragging(true);
                track.setPointerCapture(e.pointerId);
              }
              if (drag.current.moved) track.scrollLeft = drag.current.left - dx;
            }}
            onPointerUp={() => {
              // Keep `moved` until the click that follows, so a drag never opens a card.
              setDragging(false);
              if (drag.current && !drag.current.moved) drag.current = null;
            }}
            onPointerCancel={() => {
              drag.current = null;
              setDragging(false);
            }}
            onClickCapture={(e) => {
              if (drag.current?.moved) {
                e.preventDefault();
                e.stopPropagation();
              }
              drag.current = null;
            }}
            className={cn(
              "-mx-5 flex gap-5 overflow-x-auto overscroll-x-contain scroll-px-5 px-5 pt-2 pb-8 outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-primary/30 sm:-mx-8 sm:scroll-px-8 sm:px-8 [&::-webkit-scrollbar]:hidden",
              dragging ? "cursor-grabbing snap-none select-none" : "snap-x snap-mandatory",
              "[@media(pointer:fine)]:cursor-grab",
            )}
          >
            {services.map((s) => {
              const image = SERVICE_IMAGES[s.slug];
              return (
                <li
                  key={s.slug}
                  className="w-[80%] max-w-[19rem] shrink-0 snap-start sm:w-[18.5rem]"
                >
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    draggable={false}
                    className="group flex h-full flex-col rounded-2xl border border-brand-secondary/10 bg-card p-3 shadow-[0_20px_50px_-34px] shadow-primary/45 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-34px]"
                  >
                    <div className="aspect-2/1 overflow-hidden rounded-xl bg-tint">
                      {image && (
                        <img
                          src={image}
                          alt=""
                          draggable={false}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col px-2 pt-5 pb-1.5">
                      <div className="flex items-center gap-4">
                        <span className="text-lg font-semibold text-brand-gold tabular-nums">
                          {s.number}
                        </span>
                        <span className="h-px w-12 bg-brand-gold/50" aria-hidden />
                      </div>
                      <h3 className="mt-3 min-h-[2.4em] font-serif text-[1.4rem] leading-[1.2] font-semibold text-primary">
                        {s.name}
                      </h3>
                      <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                        <div>
                          <p className="text-sm text-muted-foreground">{HOME_PRICING.priceLabel}</p>
                          <p className="mt-0.5 text-xl font-bold text-primary">
                            {displayPrice(s.price)}
                          </p>
                        </div>
                        <span
                          className="grid size-11 shrink-0 place-items-center rounded-full border-[1.5px] border-brand-gold text-brand-gold transition-colors group-hover:bg-brand-gold group-hover:text-primary-foreground"
                          aria-hidden
                        >
                          <ArrowRight className="size-5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Edge fade hinting that more cards are off-screen. */}
          <div
            className={cn(
              "pointer-events-none absolute inset-y-0 -right-5 w-16 bg-linear-to-l from-background to-transparent transition-opacity sm:-right-8",
              atEnd && "opacity-0",
            )}
            aria-hidden
          />
        </div>
      </Container>
    </section>
  );
}

// One illustration per entry in PROCESS, in the same order.
const PROCESS_ART = [
  { src: stepTalkImage, alt: "Speech bubbles representing an initial conversation" },
  { src: stepScopeImage, alt: "Scope and quote checklist with a pen and calculator" },
  { src: stepWorkImage, alt: "Laptop showing a completed tax filing checklist" },
  { src: stepCompliantImage, alt: "Calendar of completed deadlines beside a compliance shield" },
];

// Desktop-only offsets that give the row its gentle wave; equal card heights are kept.
const PROCESS_OFFSETS = ["lg:translate-y-10", "lg:translate-y-16", "lg:translate-y-3", ""];

function HowItWorks() {
  return (
    <Section className="relative isolate overflow-hidden bg-linear-to-b from-background via-tint/40 to-background">
      <SectionLabel>How it works</SectionLabel>
      <h2 className="mt-6 max-w-3xl text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">
        Four steps, <span className="italic text-primary">start to filing.</span>
      </h2>
      <span className="mt-6 block h-0.5 w-16 rounded-full bg-brand-indigo" aria-hidden />

      <div className="relative mt-16 lg:pb-16">
        {/* Dashed route linking the step badges on desktop. */}
        <svg
          className="pointer-events-none absolute inset-x-0 -top-6 -z-10 hidden h-28 w-full text-brand-secondary/45 lg:block"
          viewBox="0 0 1200 110"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M40 70 C 180 0, 330 10, 420 80 S 640 70, 760 40 S 980 20, 1080 30 S 1170 50, 1200 60"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeDasharray="5 6"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <ol className="grid gap-x-5 gap-y-14 sm:auto-rows-fr sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => {
            const art = PROCESS_ART[i % PROCESS_ART.length];
            return (
              <li key={p.title} className={cn("h-full", PROCESS_OFFSETS[i])}>
                <Reveal delay={i * 90} className="h-full">
                  <article className="relative flex h-full flex-col rounded-3xl border border-brand-secondary/15 bg-linear-to-b from-tint/80 via-card to-card px-6 pt-12 pb-5 shadow-[0_24px_50px_-30px] shadow-primary/35 sm:px-7">
                    <span
                      className="absolute -top-8 left-6 grid size-16 place-items-center rounded-full bg-linear-to-br from-primary to-brand-indigo text-xl font-bold text-primary-foreground shadow-[0_10px_24px_-10px] shadow-primary/60 ring-8 ring-tint sm:left-7"
                      aria-hidden
                    >
                      {pad2(i + 1)}
                    </span>
                    <h3 className="text-[1.375rem] leading-tight">
                      <span className="sr-only">Step {i + 1}: </span>
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                    {art && (
                      <div className="mt-auto pt-6">
                        <img
                          src={art.src}
                          alt={art.alt}
                          width={410}
                          height={250}
                          loading="lazy"
                          className="mx-auto aspect-41/25 w-full max-w-[20rem] object-cover mix-blend-multiply [mask-image:radial-gradient(ellipse_72%_70%_at_50%_55%,black_62%,transparent_100%)]"
                        />
                      </div>
                    )}
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

const CREDENTIAL_LOGOS = { irs: credIrsLogo, aicpa: credAicpaLogo };

const formatDuration = (seconds: number) => {
  const total = Math.round(seconds);
  return `${Math.floor(total / 60)}:${pad2(total % 60)}`;
};

function ClientExperience() {
  const { label, heading, headingMuted } = CLIENT_EXPERIENCE;
  return (
    <section
      aria-labelledby="client-experience-heading"
      className="relative isolate overflow-hidden bg-background py-16 sm:py-24"
    >
      <div
        className="absolute inset-0 -z-10 bg-linear-to-b from-tint/70 via-background to-background"
        aria-hidden
      />
      <div
        className="absolute top-16 right-6 -z-10 hidden h-28 w-40 [background-image:radial-gradient(var(--theme-border)_1.5px,transparent_1.5px)] [background-size:18px_18px] md:block"
        aria-hidden
      />
      <Container>
        <div className="flex items-center gap-4">
          <span className="h-0.5 w-10 rounded-full bg-brand-secondary" aria-hidden />
          <SectionLabel>{label}</SectionLabel>
        </div>
        <h2
          id="client-experience-heading"
          className="mt-5 text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em]"
        >
          {heading} <span className="font-serif font-semibold italic">{headingMuted}</span>
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <ReviewsPanel />
          <VideoTestimonial />
        </div>

        <ul className="mt-6 grid gap-4 sm:auto-rows-fr sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {CERTIFICATIONS.map((c) => (
            <li
              key={c.name}
              className="flex items-center gap-4 rounded-2xl border border-brand-secondary/15 bg-card p-5 shadow-[0_16px_40px_-30px] shadow-primary/40"
            >
              {c.logo ? (
                <img
                  src={CREDENTIAL_LOGOS[c.logo]}
                  alt={`${c.issuer} badge`}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="size-16 shrink-0 object-contain"
                />
              ) : (
                <span
                  className="grid size-16 shrink-0 place-items-center rounded-full bg-linear-to-br from-brand-secondary to-brand-indigo text-lg font-bold text-brand-secondary-foreground"
                  aria-hidden
                >
                  {c.monogram}
                </span>
              )}
              <div className="min-w-0">
                <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                  {c.issuer}
                </p>
                <p className="mt-1 leading-snug font-semibold text-primary">{c.name}</p>
                <span
                  className={cn(
                    "mt-2 inline-block rounded-full px-2.5 py-0.5 text-[11px]",
                    c.confirmed
                      ? "bg-tint font-semibold tracking-[0.12em] text-brand-secondary uppercase"
                      : "border border-dashed border-brand-secondary/30 text-muted-foreground",
                  )}
                >
                  {c.confirmed ? c.status : "[client to confirm]"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Five stars; without a rating they render as muted placeholders. */
function Stars({ rating, className }: { rating?: number; className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center gap-0.5",
        rating === undefined ? "text-border" : "text-rating",
      )}
      {...(rating === undefined
        ? { "aria-hidden": true }
        : { role: "img", "aria-label": `${rating} out of 5 stars` })}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            className,
            "fill-current",
            rating !== undefined && i >= Math.round(rating) && "opacity-25",
          )}
          aria-hidden
        />
      ))}
    </span>
  );
}

// Initial-avatar tints, cycled per review card.
const AVATAR_TINTS = [
  "bg-brand-secondary/12 text-brand-secondary",
  "bg-brand-indigo/10 text-brand-indigo",
  "bg-brand-gold/15 text-brand-gold",
];

function ReviewsPanel() {
  const { google, reviews, reviewPlaceholders } = CLIENT_EXPERIENCE;
  const count = reviews.length || reviewPlaceholders;
  const { active, goTo, trackRef, itemRefs } = useSnapCarousel(count);

  const arrow = (dir: -1 | 1, className: string) => (
    <button
      type="button"
      onClick={() => goTo(active + dir)}
      aria-label={dir < 0 ? "Previous review" : "Next review"}
      className={cn(
        "size-12 place-items-center rounded-full bg-card text-primary shadow-[0_10px_28px_-10px] shadow-primary/40 ring-1 ring-brand-secondary/10 transition-transform hover:scale-105",
        className,
      )}
    >
      {dir < 0 ? (
        <ChevronLeft className="size-5" strokeWidth={2.5} />
      ) : (
        <ChevronRight className="size-5" strokeWidth={2.5} />
      )}
    </button>
  );

  return (
    <div className="relative min-w-0 rounded-[1.75rem] border border-brand-secondary/10 bg-card p-5 shadow-[0_24px_60px_-36px] shadow-primary/40 sm:px-8 sm:pt-7 sm:pb-6">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <div className="flex items-center gap-4">
          <span
            className="grid size-16 shrink-0 place-items-center rounded-full bg-card shadow-[0_8px_24px_-10px] shadow-primary/35 ring-1 ring-brand-secondary/10"
            aria-hidden
          >
            <img src={googleLogo} alt="" width={36} height={36} className="size-9" />
          </span>
          <div>
            <h3 className="text-xl leading-tight font-bold">{google.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground sm:text-[0.95rem]">
              {google.subtitle}
            </p>
          </div>
        </div>
        <div className="text-left sm:text-right">
          <div className="flex items-center gap-3 sm:justify-end">
            {google.rating !== null && (
              <span className="text-[2rem] leading-none font-bold text-primary">
                {google.rating.toFixed(1)}
              </span>
            )}
            <Stars
              {...(google.rating !== null ? { rating: google.rating } : {})}
              className="size-6"
            />
          </div>
          {google.rating !== null && google.reviewCount !== null ? (
            <a
              href={google.profileUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-1.5 inline-block text-xs text-muted-foreground underline-offset-4 hover:text-primary hover:underline sm:text-sm"
            >
              Based on {google.reviewCount} {google.reviewCount === 1 ? "review" : "reviews"}
              <span className="sr-only"> (opens Google reviews in a new tab)</span>
            </a>
          ) : (
            <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
              {google.ratingPlaceholder}
            </p>
          )}
        </div>
      </div>

      <div className="relative mt-6">
        <Quote
          className="pointer-events-none absolute -top-3 right-0 size-16 rotate-180 fill-current text-brand-secondary/10"
          strokeWidth={0}
          aria-hidden
        />
        <div
          ref={trackRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client reviews"
          className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {Array.from({ length: count }).map((_, i) => {
            const review = reviews[i];
            return (
              <article
                key={i}
                ref={(n) => {
                  itemRefs.current[i] = n;
                }}
                aria-roledescription="slide"
                aria-label={`Review ${i + 1} of ${count}`}
                className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-brand-secondary/10 bg-card/80 p-5 shadow-[0_12px_30px_-26px] shadow-primary/40 sm:w-[calc((100%-1rem)/2)] xl:w-[calc((100%-2rem)/3)]"
              >
                <Stars {...(review ? { rating: review.rating } : {})} className="size-[1.125rem]" />
                {review && !review.text ? (
                  // Star-only Google ratings: say so plainly rather than inventing a quote.
                  <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground italic">
                    Rated {review.rating} stars on Google.
                  </p>
                ) : (
                  <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground">
                    {review ? `“${review.text}”` : "[Verified Google review, client to supply]"}
                  </p>
                )}
                <div className="mt-5 flex items-center gap-3">
                  <span
                    className={cn(
                      "grid size-11 shrink-0 place-items-center rounded-full text-lg font-semibold",
                      AVATAR_TINTS[i % AVATAR_TINTS.length],
                    )}
                    aria-hidden
                  >
                    {review ? review.name.charAt(0) : "?"}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-primary">
                      {review ? review.name : "[Client name]"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review ? "Verified on Google" : "Review on Google"}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {arrow(-1, "absolute top-1/2 -left-11 z-10 hidden -translate-y-1/2 sm:grid")}
        {arrow(1, "absolute top-1/2 -right-11 z-10 hidden -translate-y-1/2 sm:grid")}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        {arrow(-1, "grid size-10 sm:hidden")}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show review ${i + 1}`}
              aria-current={active === i ? "true" : undefined}
              className="grid size-6 place-items-center"
            >
              <span
                className={cn(
                  "block size-3 rounded-full transition-colors duration-300",
                  active === i ? "bg-brand-secondary" : "bg-brand-secondary/20",
                )}
              />
            </button>
          ))}
        </div>
        {arrow(1, "grid size-10 sm:hidden")}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-brand-secondary/10 pt-5">
        <a
          href={google.profileUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          See all reviews on Google
          <ArrowUpRight className="size-4" aria-hidden />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        <a
          href={google.writeReviewUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/20 bg-card px-4 py-2 text-sm font-semibold text-primary shadow-[0_8px_20px_-14px] shadow-primary/50 transition-colors hover:bg-tint"
        >
          <img src={googleLogo} alt="" width={16} height={16} className="size-4" />
          Write a Google review
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}

function VideoTestimonial() {
  const { video } = CLIENT_EXPERIENCE;
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState<number | null>(null);
  const src = video.src;

  return (
    <div className="flex min-w-0 flex-col rounded-2xl border border-brand-secondary/15 bg-card p-3 shadow-[0_24px_60px_-36px] shadow-primary/40 sm:p-4">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-primary">
        {src && playing ? (
          <video
            src={src}
            controls
            autoPlay
            playsInline
            onEnded={() => setPlaying(false)}
            className="h-full w-full object-cover"
          />
        ) : (
          <>
            <img
              src={advisersImage}
              alt=""
              width={1408}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-primary/60 via-primary/15 to-primary/5"
              aria-hidden
            />
            <button
              type="button"
              disabled={!src}
              onClick={() => setPlaying(true)}
              aria-label={src ? `Play ${video.title}` : `${video.title} (not yet available)`}
              className="absolute top-1/2 left-1/2 grid size-18 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary/85 text-primary-foreground ring-8 ring-primary-foreground/25 backdrop-blur-sm transition-transform enabled:hover:scale-105 disabled:cursor-not-allowed sm:size-20"
            >
              <Play className="ml-1 size-7 fill-current" aria-hidden />
            </button>
            <span className="absolute right-3 bottom-3 rounded-md bg-primary/80 px-2 py-1 text-xs text-primary-foreground tabular-nums">
              {src ? (duration !== null ? formatDuration(duration) : "Video") : video.pendingNote}
            </span>
            {src && (
              // Loads only the metadata so the real duration can be shown before playback.
              <video
                src={src}
                preload="metadata"
                hidden
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
              />
            )}
          </>
        )}
      </div>
      <div className="flex items-start gap-4 px-2 pt-4 pb-2 sm:px-3">
        <span
          className="grid size-12 shrink-0 place-items-center rounded-xl bg-tint text-primary"
          aria-hidden
        >
          <Video className="size-5" />
        </span>
        <div className="min-w-0">
          <h3 className="text-base leading-snug sm:text-lg">{video.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{video.body}</p>
        </div>
      </div>
    </div>
  );
}

function Insights() {
  return (
    <Section id="insights">
      <SectionLabel>Insights</SectionLabel>
      <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">
        Latest from <span className="italic text-primary">WorthPrime Tax</span>
      </h2>
      <p className="mt-4 text-sm text-muted-foreground">
        [These will later be fed from LinkedIn posts]
      </p>
      <Link
        to="/insights"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-hero px-6 py-3 text-sm font-semibold text-hero-foreground transition-transform hover:scale-[1.03]"
      >
        See all insights <ArrowRight className="size-4" />
      </Link>
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {INSIGHTS.map((a, i) => (
          <Reveal key={i} delay={i * 80}>
            <InsightCard insight={a} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section className="bg-background/40">
      <SectionLabel>FAQ</SectionLabel>
      <div className="mt-6 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">
          Questions, <span className="italic text-primary">answered.</span>
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
                    "shrink-0 text-2xl text-primary transition-transform duration-300",
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
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.05]">
            For Individuals. For Businesses.{" "}
            <span className="italic text-primary">For What Comes Next…</span>
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
