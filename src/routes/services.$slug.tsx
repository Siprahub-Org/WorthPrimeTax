import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, Check, Landmark, Users, type LucideIcon } from "lucide-react";
import { getService, HOW_THE_WORK_MOVES, SERVICES } from "@/data/services";
import { LINKS } from "@/data/site";
import { Container, Reveal, Section, SectionLabel } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { PricingMarquee } from "@/components/site/PricingMarquee";
import advisersImage from "@/assets/worthprime-advisers-blue.jpg";
import documentsImage from "@/assets/worthprime-documents-blue.jpg";
import heroImage from "@/assets/worthprime-hero-blue.jpg";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found | WorthPrime Tax" },
          { name: "robots", content: "noindex" },
          { property: "og:title", content: "Service not found | WorthPrime Tax" },
          { property: "og:description", content: "The requested WorthPrime Tax service could not be found." },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ],
      };
    }
    const { service } = loaderData;
    const title = `${service.name} | WorthPrime Tax`;
    const description = service.summary;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
  return (
    <Section>
      <h1 className="text-4xl">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-primary hover:underline">
        ← All services
      </Link>
    </Section>
  );
}

function RuledLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <SectionLabel>{children}</SectionLabel>
      <span aria-hidden className="h-px w-16 bg-primary/30" />
    </div>
  );
}

function IconBadge({ Icon }: { Icon: LucideIcon }) {
  return (
    <span className="mt-8 grid size-14 place-items-center rounded-full border border-primary/30 text-primary">
      <Icon className="size-6" />
    </span>
  );
}

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-hero text-hero-foreground">
        <img
          src={heroImage}
          alt=""
          width={1264}
          height={848}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-r from-hero via-hero/85 to-hero/40"
        />
        <Container className="relative pb-20 pt-12 sm:pb-28 lg:pb-36">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-hero-muted transition-colors hover:text-hero-foreground"
          >
            <ArrowLeft className="size-4" /> All services
          </Link>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="font-display text-[clamp(3.5rem,10vw,7rem)] leading-none text-hero-muted">
                  {service.number}
                </span>
                <span className="rounded-full border border-hero-border px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-hero-muted">
                  {service.audience}
                </span>
              </div>
              <h1 className="mt-4 hero-heading text-hero-foreground">{service.name}</h1>
              <p className="mt-4 font-display text-2xl italic text-hero-muted">{service.tagline}</p>
            </div>

            <div className="border border-hero-border bg-hero/80 p-7 backdrop-blur-sm">
              <p className="label-slash text-hero-muted!">Start here</p>
              <p className="mt-3 text-lg leading-snug">{service.cta}</p>
              <p className="mt-3 text-sm text-hero-muted">
                Starting from{" "}
                <span
                  className={
                    service.price.startsWith("From") ? "font-semibold text-hero-foreground" : ""
                  }
                >
                  {service.price}
                </span>
                . Final fees depend on scope.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-hero-foreground px-5 py-2.5 text-sm font-semibold text-primary transition-transform hover:scale-[1.03]"
                >
                  Contact us <ArrowRight className="size-4" />
                </Link>
                <a
                  href={LINKS.phoneHref}
                  className="rounded-full border border-hero-border px-5 py-2.5 text-sm transition-colors hover:bg-hero-foreground/10"
                >
                  Call us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <PricingMarquee />

      <Section className="bg-tint py-16">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <RuledLabel>Overview</RuledLabel>
            <IconBadge Icon={Landmark} />
          </div>
          <div className="space-y-5">
            {service.overview.map((p) => (
              <p key={p.slice(0, 30)} className="text-lg leading-relaxed text-foreground/85">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <RuledLabel>What this can include</RuledLabel>
            <p className="mt-4 text-lg">{service.capabilitiesLabel}:</p>
            <img
              src={documentsImage}
              alt="Tax and accounting documents prepared for review"
              width={1408}
              height={1008}
              loading="lazy"
              className="mt-8 hidden aspect-[4/5] w-full rounded-lg object-cover lg:block"
            />
          </div>
          <ul className="grid content-start gap-3 sm:grid-cols-2">
            {service.capabilities.map((c, i) => (
              <Reveal key={c} delay={(i % 2) * 60}>
                <li className="surface-card flex h-full items-center gap-3 bg-tint p-4 text-sm">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-primary/40 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  <span>{c}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-tint">
        <Container className="relative grid gap-10 py-16 lg:min-h-[420px] lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-10">
            <RuledLabel>Who it is for</RuledLabel>
            <IconBadge Icon={Users} />
            <p className="mt-6 text-[clamp(1.4rem,3vw,2.2rem)] leading-snug">{service.whoFor}</p>
          </div>
          <img
            src={advisersImage}
            alt="WorthPrime advisers meeting with a client"
            width={1408}
            height={1008}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-lg object-cover lg:hidden"
          />
        </Container>
        <div aria-hidden className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <img
            src={advisersImage}
            alt=""
            width={1408}
            height={1008}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-tint to-transparent to-40%" />
        </div>
      </section>

      <Section className="py-16">
        <SectionLabel>How the work moves</SectionLabel>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {HOW_THE_WORK_MOVES.map((s, i) => (
            <Reveal key={s.step} delay={i * 80}>
              <div className="surface-card h-full p-6">
                <span className="font-display text-5xl text-primary/70">{s.step}</span>
                <h3 className="mt-3 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="py-10">
        <SectionLabel>Related services</SectionLabel>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="surface-card group flex items-center justify-between gap-3 p-5 text-sm transition-colors hover:border-primary/60"
            >
              <span>
                <span className="mr-2 text-primary">{s.number}</span>
                {s.name}
              </span>
              <ArrowRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
