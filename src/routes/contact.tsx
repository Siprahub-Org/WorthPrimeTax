import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_PAGE, LINKS, OFFICES } from "@/data/site";
import { Container, Reveal } from "@/components/site/primitives";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PricingMarquee } from "@/components/site/PricingMarquee";
import officeGlobeImage from "@/assets/contact-office-globe.jpg";

const DETAILS = [
  { label: "Phone number", value: LINKS.phone, href: LINKS.phoneHref, Icon: Phone },
  { label: "Drop us an email", value: LINKS.email, href: `mailto:${LINKS.email}`, Icon: Mail },
  ...OFFICES.map((o) => ({ label: o.label, value: o.address, href: undefined, Icon: MapPin })),
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: CONTACT_PAGE.title },
      { name: "description", content: CONTACT_PAGE.description },
      { property: "og:title", content: CONTACT_PAGE.title },
      { property: "og:description", content: CONTACT_PAGE.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section
        id="contact-form"
        className="relative isolate scroll-mt-28 overflow-hidden bg-linear-to-b from-tint/70 via-background to-background"
      >
        {/*
         * Blurred globe-and-desk scene in the gap between the text and the form, as in the
         * reference. Its right edge tracks the form's left edge (both sit at ~62% of the width),
         * and it fades out on the text side so copy stays legible.
         */}
        <img
          src={officeGlobeImage}
          alt=""
          width={340}
          height={721}
          className="absolute top-[18%] right-[37%] bottom-0 -z-10 hidden w-[24%] object-cover opacity-70 [mask-image:linear-gradient(to_right,transparent,black_40%,black_88%,transparent),linear-gradient(to_bottom,transparent,black_18%)] [mask-composite:intersect] lg:block xl:opacity-90"
        />

        <Container className="grid max-w-[1760px] items-start gap-12 pt-12 pb-14 sm:pt-16 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:px-10 lg:pt-20 xl:pr-[3%] xl:pl-[5%]">
          <div className="min-w-0">
            <div className="flex items-center gap-5">
              <span className="h-0.5 w-12 rounded-full bg-brand-gold" aria-hidden />
              <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase sm:text-sm">
                {CONTACT_PAGE.label}
              </p>
            </div>
            <h1 className="mt-5 font-serif text-[clamp(2.4rem,4.75vw,5rem)] leading-[1.02] font-bold tracking-[-0.02em]">
              <span className="block text-primary">{CONTACT_PAGE.heading}</span>
              <span className="block font-semibold text-brand-gold italic">
                {CONTACT_PAGE.headingMuted}
              </span>
            </h1>
            <p className="mt-3 max-w-[38rem] text-base leading-[1.45] text-muted-foreground sm:text-lg xl:text-[1.1875rem]">
              {CONTACT_PAGE.intro}
            </p>
            <a
              href={LINKS.phoneHref}
              className="mt-6 inline-flex items-center gap-4 rounded-lg bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-[0_14px_30px_-16px] shadow-primary/70 transition-transform hover:scale-[1.02] sm:text-lg xl:px-9 xl:text-xl"
            >
              {CONTACT_PAGE.cta}
              <ArrowRight className="size-5" aria-hidden />
            </a>

            <div className="mt-7 flex items-center gap-6">
              <h2 className="font-serif text-[clamp(1.75rem,2.2vw,2.15rem)] leading-tight font-bold">
                {CONTACT_PAGE.detailsHeading}
              </h2>
              <span className="h-0.5 w-18 rounded-full bg-brand-gold" aria-hidden />
            </div>
            <ul className="mt-4 space-y-3">
              {DETAILS.map(({ label, value, href, Icon }, i) => {
                const body = (
                  <>
                    <span className="block text-sm text-muted-foreground sm:text-[0.95rem]">
                      {label}
                    </span>
                    <span className="block text-base font-medium break-words text-primary group-hover:underline sm:text-lg xl:text-[1.1875rem]">
                      {value}
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    <Reveal delay={i * 60} className="flex items-center gap-4 sm:gap-7">
                      <span
                        className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-gold/12 text-primary sm:size-15"
                        aria-hidden
                      >
                        <Icon className="size-5 sm:size-6" strokeWidth={1.6} />
                      </span>
                      {href ? (
                        <a href={href} className="group min-w-0">
                          {body}
                        </a>
                      ) : (
                        <address className="max-w-[28rem] min-w-0 not-italic">{body}</address>
                      )}
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>

          <Reveal className="min-w-0 lg:sticky lg:top-28 lg:mt-10">
            <EnquiryForm headingLevel={2} />
          </Reveal>
        </Container>
      </section>

      <PricingMarquee />
    </>
  );
}
