import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getService, HOW_THE_WORK_MOVES, SERVICES } from "@/data/services";
import { LINKS } from "@/data/site";
import { Reveal, Section, SectionLabel } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import documentsImage from "@/assets/worthprime-documents.jpg";

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
      <Link to="/services" className="mt-6 inline-block text-gold hover:underline">
        ← All services
      </Link>
    </Section>
  );
}

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Section className="pb-10 pt-12">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
        >
          <ArrowLeft className="size-4" /> All services
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-display text-[clamp(3.5rem,10vw,7rem)] leading-none text-gold">
                {service.number}
              </span>
              <span className="rounded-full border border-border px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {service.audience}
              </span>
            </div>
            <h1 className="mt-4 text-[clamp(2.2rem,5.4vw,4.2rem)] leading-[1.03]">
              {service.name}
            </h1>
            <p className="mt-4 font-display text-2xl italic text-gold">{service.tagline}</p>
          </div>

          <div className="surface-card flex flex-col justify-between bg-navy-soft p-7">
            <div>
              <p className="label-slash">Start here</p>
              <p className="mt-3 text-lg leading-snug">{service.cta}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Starting from{" "}
                <span className={service.price.startsWith("From") ? "text-gold" : ""}>
                  {service.price}
                </span>
                . Final fees depend on scope.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/"
                hash="contact-form"
                className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep"
              >
                Request a quote
              </Link>
              <a
                href={LINKS.phoneHref}
                className="rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:bg-accent"
              >
                Call us
              </a>
            </div>
          </div>
        </div>
        <img src={documentsImage} alt="Tax and accounting documents prepared for review" width={1408} height={1008} className="mt-10 aspect-[16/5] w-full rounded-lg object-cover" />
      </Section>

      <Section className="bg-navy/40 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
          <SectionLabel index="01">Overview</SectionLabel>
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
            <SectionLabel index="02">What this can include</SectionLabel>
            <p className="mt-4 text-sm text-muted-foreground">{service.capabilitiesLabel}.</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.capabilities.map((c, i) => (
              <Reveal key={c} delay={(i % 2) * 60}>
                <li className="surface-card flex h-full items-start gap-3 p-4 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>{c}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-navy/40 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
          <SectionLabel index="03">Who it is for</SectionLabel>
          <p className="text-[clamp(1.4rem,3vw,2.2rem)] leading-snug">{service.whoFor}</p>
        </div>
      </Section>

      <Section className="py-16">
        <SectionLabel index="04">How the work moves</SectionLabel>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {HOW_THE_WORK_MOVES.map((s, i) => (
            <Reveal key={s.step} delay={i * 80}>
              <div className="surface-card h-full p-6">
                <span className="font-display text-5xl text-gold/70">{s.step}</span>
                <h3 className="mt-3 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="py-10">
        <SectionLabel index="05">Related services</SectionLabel>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="surface-card group flex items-center justify-between gap-3 p-5 text-sm transition-colors hover:border-gold/60"
            >
              <span>
                <span className="mr-2 text-gold">{s.number}</span>
                {s.name}
              </span>
              <ArrowRight className="size-4 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand secondaryLabel="Request a quote" />
    </>
  );
}
