import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowLeftRight,
  ArrowRight,
  Banknote,
  Building,
  Building2,
  Calculator,
  Check,
  ClipboardCheck,
  FileChartColumn,
  FileCheck,
  FileSearch,
  FileText,
  Globe,
  HeartHandshake,
  IdCard,
  Landmark,
  Laptop,
  Mail,
  Network,
  Phone,
  RotateCcw,
  ShieldCheck,
  TrendingUp,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import { getService, HOW_THE_WORK_MOVES, type Service } from "@/data/services";
import { SERVICE_PAGE_CLOSING, type ServicePage } from "@/data/servicePages";
import { CONTACT_PAGE, LINKS } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container, Reveal } from "./primitives";
import { getServiceThumb, type ServiceDetailMedia } from "./serviceDetailMedia";
import ctaImage from "@/assets/worthprime-advisers-blue.jpg";

// Matched against each capability's text; first match wins, so specific topics come before
// broad ones (an amended 1040 is an amendment, a 1120S is not a 1120).
const CAPABILITY_ICONS: Array<[RegExp, LucideIcon]> = [
  [/amend|-X\b|correction|discrepanc/i, RotateCcw],
  [/planning|strategy/i, TrendingUp],
  [/foreign|international/i, Globe],
  [/payroll|W-2|1099/i, Banknote],
  [/ITIN|W-7/, IdCard],
  [/1040|individual|single owner|single-member/i, User],
  [/1120-?S|S Corp/i, Building2],
  [/1120|C Corp/i, Building],
  [/1065|partnership/i, Users],
  [/990|not for profit|nonprofit/i, HeartHandshake],
  [/audit|SOC 2|internal control/i, ShieldCheck],
  [/correspondence|notice|response/i, Mail],
  [/bank/i, Landmark],
  [/quickbooks|software|setup/i, Laptop],
  [/reconcil/i, ArrowLeftRight],
  [/report|statement|FBAR|FATCA|BOIR/i, FileChartColumn],
  [/document|record|contract|agreement|memorand/i, FileText],
  [/entity|structure/i, Network],
  [/EIN|registration/i, ClipboardCheck],
  [/compliance|requirement/i, FileCheck],
  [/review|analysis/i, FileSearch],
  [/bookkeeping|accounting/i, Calculator],
  [/preparation|filing/i, FileText],
];

function capabilityIcon(text: string) {
  return CAPABILITY_ICONS.find(([pattern]) => pattern.test(text))?.[1] ?? Check;
}

/** "Form 1040 — Individual Tax Returns" → title and subtitle; plain entries have no subtitle. */
function splitCapability(text: string) {
  const [title = text, ...rest] = text.split(/\s+—\s+|:\s+/);
  return { title, detail: rest.join(" ") };
}

function NumberedLabel({
  n,
  children,
  className,
}: {
  n: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[0.6875rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase",
        className,
      )}
    >
      {String(n).padStart(2, "0")} / {children}
    </p>
  );
}

function GoldRule({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("block h-[3px] w-14 rounded-full bg-brand-gold", className)} />
  );
}

const goldButton =
  "inline-flex items-center gap-2 rounded-lg bg-brand-gold px-6 py-3 text-sm font-semibold text-primary shadow-[0_10px_24px_-12px] shadow-brand-gold/70 transition-transform hover:scale-[1.03]";

function SectionIntro({ heading, intro }: { heading: string; intro?: string }) {
  return (
    <>
      {heading && (
        <h2 className="mt-5 max-w-3xl font-serif text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.15] font-semibold text-primary">
          {heading}
        </h2>
      )}
      {intro && <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{intro}</p>}
    </>
  );
}

function CapabilityList({ items }: { items: string[] }) {
  // In the three-column grid, stretch the final row so it never ends with a gap.
  const lastRow = items.length % 3;
  return (
    <ul className="grid gap-3 sm:grid-cols-2 xl:auto-rows-fr xl:grid-cols-6">
      {items.map((c, i) => {
        const Icon = capabilityIcon(c);
        const { title, detail } = splitCapability(c);
        const inLastRow = i >= items.length - lastRow;
        return (
          <li
            key={c}
            className={cn(
              "flex min-h-[4.75rem] items-center gap-4 rounded-xl border border-border bg-card px-4 py-3.5 shadow-[0_12px_30px_-28px] shadow-primary/50 xl:col-span-2",
              items.length % 2 === 1 && i === items.length - 1 && "sm:col-span-2",
              inLastRow && lastRow === 2 && "xl:col-span-3",
              inLastRow && lastRow === 1 && "xl:col-span-6",
            )}
          >
            <Icon className="size-8 shrink-0 text-primary" strokeWidth={1.4} aria-hidden />
            <span className="min-w-0 leading-snug">
              <span className="block font-serif text-[0.95rem] font-semibold text-primary">
                {title}
              </span>
              {detail && <span className="block text-xs text-muted-foreground">{detail}</span>}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/** Full-width service detail layout: hero, overview, capabilities, audiences, process, related. */
export function ServiceDetailFeature({
  service,
  page,
  media,
}: {
  service: Service;
  page: ServicePage;
  media: ServiceDetailMedia;
}) {
  const related = page.related.items.flatMap((item) => {
    const s = getService(item.slug);
    return s ? [{ service: s, body: item.body }] : [];
  });
  const audiences = page.whoFor.audiences;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-hero text-hero-foreground">
        <img
          src={media.hero}
          alt=""
          width={1600}
          height={900}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center] lg:left-auto lg:w-[64%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-hero/85 lg:bg-transparent lg:bg-linear-to-r lg:from-hero lg:from-36% lg:via-hero/75 lg:via-48% lg:to-transparent lg:to-70%"
        />
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-xl">
            <NumberedLabel n={Number(service.number)} className="text-hero-muted">
              {page.label}
            </NumberedLabel>
            <nav aria-label="Breadcrumb" className="mt-5">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-hero-border px-4 py-1.5 text-[0.6875rem] font-medium tracking-[0.16em] text-hero-foreground/85 uppercase transition-colors hover:bg-hero-foreground/10"
              >
                <ArrowLeft className="size-3.5" aria-hidden />
                All services
              </Link>
            </nav>
            <h1 className="mt-6 font-serif text-[clamp(2.4rem,5.2vw,4.25rem)] leading-[1.04] font-semibold text-hero-foreground">
              {page.heading}
            </h1>
            <p className="mt-3 font-serif text-[clamp(1.2rem,2.2vw,1.6rem)] text-hero-foreground/85 italic">
              {page.tagline}
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-hero-foreground/80">
              {page.intro}
            </p>
            <GoldRule className="mt-6" />
            <p className="mt-7 text-xs font-medium text-hero-muted">Start here</p>
            <p className="mt-2 font-serif text-[clamp(1.25rem,2vw,1.6rem)] leading-snug">
              {page.start.heading}
            </p>
            {page.start.body && (
              <p className="mt-2 text-sm leading-relaxed text-hero-foreground/80">
                {page.start.body}
              </p>
            )}
            <p className="mt-3 text-sm text-hero-muted">
              Starting from{" "}
              <span className="font-semibold text-hero-foreground">{service.price}</span>. Final
              fees depend on scope.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" hash="contact-form" className={goldButton}>
                Contact us <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a
                href={LINKS.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-hero-foreground/60 px-6 py-3 text-sm font-semibold transition-colors hover:bg-hero-foreground/10"
              >
                <Phone className="size-4" aria-hidden /> Call us
                <span className="sr-only">on {LINKS.phone}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <NumberedLabel n={1}>Overview</NumberedLabel>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,3.4vw,2.7rem)] leading-[1.12] font-semibold text-primary">
              {page.overview.heading}
            </h2>
            <GoldRule className="mt-6" />
            <div className="mt-6 space-y-4">
              {page.overview.paragraphs.map((p) => (
                <p key={p.slice(0, 30)} className="leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={media.overview.src}
              alt={media.overview.alt}
              width={1200}
              height={543}
              loading="lazy"
              className="aspect-[2.2/1] w-full rounded-2xl object-cover shadow-[0_30px_60px_-36px] shadow-primary/50"
            />
          </Reveal>
        </Container>
      </section>

      {/* What this can include */}
      <section className="bg-tint py-16 sm:py-20">
        <Container>
          <NumberedLabel n={2}>What this can include</NumberedLabel>
          <SectionIntro heading={page.included.heading} intro={page.included.intro} />
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            <img
              src={media.included.src}
              alt={media.included.alt}
              width={1400}
              height={747}
              loading="lazy"
              className="aspect-[16/10] h-full max-h-[52rem] w-full rounded-2xl object-cover lg:aspect-auto"
            />
            <div className="space-y-6">
              {page.included.groups.map((group) => (
                <div key={group.title || "all"}>
                  {group.title && (
                    <h3 className="mb-3 text-[0.75rem] font-semibold tracking-[0.14em] text-primary uppercase">
                      {group.title}
                    </h3>
                  )}
                  <CapabilityList items={group.items} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Who it is for */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <Reveal>
              <NumberedLabel n={3}>Who it is for</NumberedLabel>
              <h2 className="mt-5 font-serif text-[clamp(1.7rem,2.8vw,2.3rem)] leading-[1.18] font-semibold text-primary">
                {page.whoFor.heading}
              </h2>
              {page.whoFor.intro && (
                <p className="mt-4 leading-relaxed text-muted-foreground">{page.whoFor.intro}</p>
              )}
              <GoldRule className="mt-6" />
            </Reveal>
            <Reveal delay={100}>
              <img
                src={media.whoFor.src}
                alt={media.whoFor.alt}
                width={1600}
                height={411}
                loading="lazy"
                className="aspect-[16/7] w-full rounded-2xl object-cover object-[center_30%] sm:aspect-[1600/500]"
              />
            </Reveal>
          </div>
          {audiences.length > 0 && (
            <ul
              className={cn(
                "mt-10 grid gap-4 sm:grid-cols-2",
                audiences.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
              )}
            >
              {audiences.map((a, i) => (
                <li key={a.title}>
                  <Reveal delay={i * 60} className="h-full">
                    <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-[0_16px_36px_-30px] shadow-primary/50">
                      <span aria-hidden className="block h-[3px] w-8 rounded-full bg-brand-gold" />
                      <h3 className="mt-4 font-serif text-lg leading-snug font-semibold text-primary">
                        {a.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      {/* How the work moves */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <NumberedLabel n={4}>How the work moves</NumberedLabel>
          <SectionIntro heading={page.process.heading || "How the work moves"} />
          <ol className="mt-8 grid gap-5 sm:grid-cols-3">
            {HOW_THE_WORK_MOVES.map((s, i) => (
              <li key={s.step}>
                <Reveal delay={i * 80} className="h-full">
                  <div className="relative overflow-hidden rounded-2xl bg-hero shadow-[0_24px_50px_-30px] shadow-primary/70">
                    <img
                      src={media.steps[i]}
                      alt={`${s.title}: ${s.points.join(", ")}`}
                      width={880}
                      height={555}
                      loading="lazy"
                      className="aspect-[880/555] w-full object-cover"
                    />
                    <span
                      aria-hidden
                      className="absolute top-3 left-4 font-serif text-3xl font-semibold text-brand-gold sm:text-2xl lg:text-3xl"
                    >
                      {s.step}
                    </span>
                  </div>
                  <h3 className="sr-only">
                    {s.step} {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {page.process.steps[i] ?? s.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Related services */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <NumberedLabel n={5}>Related services</NumberedLabel>
          <SectionIntro
            heading={page.related.heading || "Related services"}
            intro={page.related.intro}
          />
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map(({ service: s, body }, i) => {
              const thumb = getServiceThumb(s.slug);
              return (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_16px_36px_-30px] shadow-primary/50 transition-[border-color,box-shadow] hover:border-brand-gold/60 hover:shadow-primary/70"
                  >
                    {thumb && (
                      <span className="block overflow-hidden">
                        <img
                          src={thumb}
                          alt=""
                          width={720}
                          height={679}
                          loading="lazy"
                          className="aspect-[2/1] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      </span>
                    )}
                    <span className="flex flex-1 flex-col p-5">
                      <span className="text-[0.6875rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-1 block font-serif text-lg leading-snug font-semibold text-primary">
                        {s.name}
                      </span>
                      <span className="mt-2 block flex-1 text-sm leading-relaxed text-muted-foreground">
                        {body}
                      </span>
                      <ArrowRight
                        className="mt-4 size-5 text-brand-gold transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="relative isolate overflow-hidden bg-hero text-hero-foreground">
        <img
          src={ctaImage}
          alt=""
          width={1408}
          height={1008}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[75%_30%] lg:left-auto lg:w-[55%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-hero/85 lg:bg-transparent lg:bg-linear-to-r lg:from-hero lg:from-45% lg:via-hero/70 lg:via-58% lg:to-hero/10"
        />
        <Container className="py-14 sm:py-16">
          <Reveal className="max-w-2xl">
            <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-hero-muted uppercase">
              {SERVICE_PAGE_CLOSING.label}
            </p>
            <h2 className="mt-4 font-serif text-[clamp(1.75rem,3.4vw,2.6rem)] leading-[1.15] font-semibold text-hero-foreground">
              {SERVICE_PAGE_CLOSING.heading}
            </h2>
            {page.closing && (
              <p className="mt-4 leading-relaxed text-hero-foreground/80">{page.closing}</p>
            )}
            <Link to="/contact" hash="contact-form" className={cn(goldButton, "mt-7")}>
              {CONTACT_PAGE.cta} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
