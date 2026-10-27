import type { LegalPage } from "@/data/site";
import { Container } from "./primitives";
import { PricingMarquee } from "./PricingMarquee";

/** Shared layout for the Privacy Policy and Terms of Use pages: a light hero, the price strip, then the sections. */
export function LegalPageView({ page }: { page: LegalPage }) {
  return (
    <>
      <section className="bg-linear-to-b from-tint to-background">
        <Container className="max-w-[880px] pt-8 pb-10 sm:pt-10 sm:pb-12">
          <h1 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-primary">
            {page.heading}
          </h1>
          <p className="mt-4 text-lg leading-snug text-muted-foreground">{page.intro}</p>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {page.updated}</p>
        </Container>
      </section>

      <PricingMarquee />

      <Container className="max-w-[880px] py-10 sm:py-14">
        <div className="space-y-8">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-serif text-2xl font-bold text-primary">{s.heading}</h2>
              <div className="mt-3 space-y-3 leading-relaxed text-foreground">
                {s.body.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
