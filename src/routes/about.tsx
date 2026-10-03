import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";
import { FOUNDERS, OFFICES } from "@/data/site";
import { Container, CountUp, Reveal, Section, SectionLabel } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { cn } from "@/lib/utils";
import advisersImage from "@/assets/worthprime-advisers-blue.jpg";
import documentsImage from "@/assets/worthprime-documents-blue.jpg";
import credCpa from "@/assets/credentials/cred-cpa.png";
import credEa from "@/assets/credentials/cred-ea.png";
import credAicpa from "@/assets/credentials/cred-aicpa.png";
import credIrs from "@/assets/credentials/cred-irs.png";


const TITLE = "About WorthPrime Tax | Built on Experience";
const DESCRIPTION =
  "Co-founded in 2020, WorthPrime Tax combines Big Four experience across accounting, taxation, audit, payroll, legal and compliance in the U.S., UAE and India.";

const CREDENTIALS = [
  { label: "CPA", src: credCpa },
  { label: "Enrolled Agent", src: credEa },
  { label: "AICPA", src: credAicpa },
  { label: "IRS", src: credIrs },
];


export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section className="bg-navy-deep pb-0 pt-14 text-hero-foreground">
        <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="pb-12 sm:pb-16">
            <SectionLabel index="01">How we started</SectionLabel>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.03]">
              Built on Experience. <span className="italic text-hero-muted">Shaped by Perspective.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-hero-muted">
              Behind every enduring enterprise lies a confluence of sound structure, considered
              decisions and discerning professional counsel. WorthPrime Tax was shaped by precisely
              that philosophy—bringing together the complementary expertise of its co-founders, with
              extensive experience across accounting, taxation, audit, payroll, legal and compliance
              services spanning the U.S., UAE and India.
            </p>
          </div>
          <img src={advisersImage} alt="Tax advisers reviewing financial documents" width={1408} height={1008} className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]" />
        </div>
      </Section>

      <Founders />

      <Section className="bg-navy/40">
        <SectionLabel index="03">Two Perspectives. One Purpose.</SectionLabel>
        <p className="mt-6 max-w-4xl text-[clamp(1.3rem,2.8vw,2.1rem)] leading-snug">
          Together, the co-founders bring a distinctive combination of Big Four experience,
          technical expertise, leadership, entrepreneurial thinking and hands-on knowledge of
          businesses at different stages of growth—from establishing processes at inception to
          addressing complex financial, tax and regulatory requirements.
        </p>
        <p className="mt-6 max-w-3xl text-muted-foreground">
          At WorthPrime Tax, this collective experience is grounded in a simple conviction:
          professional expertise should do more than address obligations. It should bring clarity to
          decisions, strengthen compliance and create a more considered path forward for the
          businesses and individuals we serve.
        </p>
      </Section>

      <Section>
        <SectionLabel index="04">Experience in numbers</SectionLabel>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <Reveal>
            <div className="surface-card h-full p-7">
              <p className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-none text-gold">
                <CountUp value={15} suffix="+" />
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Years of experience per co-founder, across accounting, tax, audit, payroll, legal
                and compliance
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="surface-card h-full p-7">
              <p className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-none text-gold">
                <CountUp value={3} />
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Regions served — U.S., UAE and India
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="surface-card h-full p-7">
              <p className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-none text-gold">
                2020
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                The year WorthPrime Tax was co-founded
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-navy/40">
        <SectionLabel index="05">Leadership and team</SectionLabel>
        <p className="mt-4 text-sm text-muted-foreground">
          [Client to supply names or generic roles]
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="surface-card overflow-hidden">
              <img src={i % 2 === 0 ? advisersImage : documentsImage} alt="WorthPrime team and advisory work" width={1408} height={1008} loading="lazy" className="aspect-square w-full object-cover" />
              <div className="p-5">
                <p className="text-base">[Name]</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-gold">[Role]</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <SectionLabel index="06">Credentials</SectionLabel>
          <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {CREDENTIALS.map((c) => (
              <div key={c.label} className="surface-card flex flex-col items-center p-6">
                <img
                  src={c.src}
                  alt={`${c.label} certification badge`}
                  width={816}
                  height={816}
                  loading="lazy"
                  className="h-24 w-auto object-contain"
                />
                <p className="mt-4 text-center text-xs uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">[Stock badges — client to confirm credentials]</p>
        </div>

      </Section>

      <Section>
        <SectionLabel index="07">Offices</SectionLabel>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {OFFICES.map((o, i) => (
            <Reveal key={o.label} delay={i * 80}>
              <div className="surface-card h-full p-7">
                <p className="label-slash">0{i + 1} / {o.region}</p>
                <h3 className="mt-3 text-2xl">{o.label}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{o.address}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Container>
        <div className="surface-card relative min-h-[320px] overflow-hidden">
          <img src={documentsImage} alt="Financial documents prepared for review" width={1408} height={1008} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/45" aria-hidden />
          <div className="relative grid min-h-[320px] place-items-center gap-3 p-8 text-center">
          <span className="grid size-14 place-items-center rounded-full border border-gold text-gold">
            <Play className="size-5" />
          </span>
          <p className="text-sm text-muted-foreground">
            [Optional one-minute firm video — client to supply]
          </p>
          </div>
        </div>
      </Container>

      <CtaBand />
    </>
  );
}

function Founders() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section className="py-10">
      <SectionLabel index="02">Co-founders</SectionLabel>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {FOUNDERS.map((f, i) => (
          <article
            key={f.name}
            onMouseEnter={() => setOpen(i)}
            onMouseLeave={() => setOpen(null)}
            className="surface-card group relative overflow-hidden"
          >
            <img src={advisersImage} alt="Professional advisers in consultation" width={1408} height={1008} loading="lazy" className={cn("aspect-16/10 w-full object-cover", i === 1 && "object-right")} />
            <div className="p-7">
              <h3 className="text-3xl leading-tight">{f.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">{f.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">{f.credential}</p>
              <button
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
                className="mt-5 text-sm text-gold hover:underline"
              >
                {open === i ? "Hide biography" : "Read biography"}
              </button>
              <div
                className={cn(
                  "grid transition-all duration-500",
                  open === i ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="space-y-4 overflow-hidden text-sm leading-relaxed text-muted-foreground">
                  {f.bio.map((p) => (
                    <p key={p.slice(0, 30)}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
