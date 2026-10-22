import { createFileRoute } from "@tanstack/react-router";
import { Info, ShieldCheck, UsersRound, Globe } from "lucide-react";
import { PRICING_PAGE } from "@/data/site";
import { Container } from "@/components/site/primitives";
import { PricingTable } from "@/components/site/PricingTable";
import { ConsultationBanner } from "@/components/site/ConsultationBanner";
import pricingDeskImage from "@/assets/pricing-desk.jpg";

const HIGHLIGHT_ICONS = [ShieldCheck, UsersRound, Globe];

// Wider than the standard 1200px container so the ten-row table has room, as in the approved layout.
const WIDE = "max-w-[1440px] lg:px-10";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: PRICING_PAGE.title },
      { name: "description", content: PRICING_PAGE.description },
      { property: "og:title", content: PRICING_PAGE.title },
      { property: "og:description", content: PRICING_PAGE.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-linear-to-b from-tint to-background lg:pb-28">
        {/*
         * Desk photo filling the right of the hero behind a gold diagonal edge: the outer layer is
         * the gold, the photo sits a few pixels in with the same slant.
         */}
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 -z-10 hidden w-[52%] bg-brand-gold [clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)] lg:block"
        >
          <img
            src={pricingDeskImage}
            alt=""
            width={1054}
            height={436}
            className="absolute inset-y-0 right-0 left-1.5 h-full w-[calc(100%-0.375rem)] object-cover [clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]"
          />
        </div>

        <Container className={`${WIDE} pt-5 pb-8 sm:pt-6 lg:pt-6 lg:pb-6`}>
          <div className="max-w-[40rem] lg:max-w-[47%]">
            <h1 className="font-serif text-[clamp(2.25rem,3.9vw,3.6rem)] leading-[1.02] font-bold tracking-[-0.02em]">
              <span className="block text-primary">{PRICING_PAGE.heading}</span>
              <span className="block font-semibold text-brand-gold italic">
                {PRICING_PAGE.headingMuted}
              </span>
            </h1>
            <p className="mt-3 max-w-[34rem] text-base leading-snug text-muted-foreground sm:text-[1.0625rem]">
              {PRICING_PAGE.intro}
            </p>

            <ul className="mt-5 grid gap-4 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border">
              {PRICING_PAGE.highlights.map((h, i) => {
                const Icon = HIGHLIGHT_ICONS[i] ?? Globe;
                return (
                  <li key={h.title} className="flex items-center gap-2.5 sm:px-3 sm:first:pl-0">
                    <span
                      className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-gold/15 text-primary"
                      aria-hidden
                    >
                      <Icon className="size-5.5" strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.8125rem] font-semibold whitespace-nowrap text-primary">
                        {h.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{h.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <img
            src={pricingDeskImage}
            alt=""
            width={1054}
            height={436}
            className="mt-8 aspect-[16/7] w-full rounded-xl object-cover lg:hidden"
          />
        </Container>
      </section>

      <section aria-labelledby="price-table" className="relative z-10 pb-4 lg:-mt-24">
        <Container className={WIDE}>
          <h2 id="price-table" className="sr-only">
            Starting prices by service
          </h2>
          <div className="rounded-2xl border border-border bg-card p-2 shadow-[0_24px_60px_-36px] shadow-primary/40 sm:p-3">
            <PricingTable />
          </div>
          <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
            <Info className="mt-px size-4 shrink-0 text-primary" aria-hidden />
            {PRICING_PAGE.chartNote}
          </p>
        </Container>
      </section>

      <ConsultationBanner />
    </>
  );
}
