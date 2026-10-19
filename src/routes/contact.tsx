import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { CONTACT_PAGE, LINKS, OFFICES } from "@/data/site";
import { Reveal, Section, SectionLabel } from "@/components/site/primitives";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PricingMarquee } from "@/components/site/PricingMarquee";
import { WhatsAppIcon } from "@/components/site/ContactCluster";
import advisersImage from "@/assets/worthprime-advisers-blue.jpg";

const CHANNELS = [
  { label: "Phone", value: LINKS.phone, href: LINKS.phoneHref, Icon: Phone, external: false },
  {
    label: "Email",
    value: LINKS.email,
    href: `mailto:${LINKS.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: "WhatsApp",
    value: "Message us on WhatsApp",
    href: LINKS.whatsapp,
    Icon: WhatsAppIcon,
    external: true,
  },
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
      <Section className="bg-hero pb-0 pt-14 text-hero-foreground">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="pb-12 sm:pb-16">
            <SectionLabel className="text-hero-muted!">{CONTACT_PAGE.label}</SectionLabel>
            <h1 className="mt-5 max-w-4xl hero-heading text-hero-foreground">
              {CONTACT_PAGE.heading}{" "}
              <span className="italic text-hero-muted">{CONTACT_PAGE.headingMuted}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hero-muted">
              {CONTACT_PAGE.intro}
            </p>
          </div>
          <img
            src={advisersImage}
            alt="Tax advisers reviewing financial documents"
            width={1408}
            height={1008}
            className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
          />
        </div>
      </Section>

      <PricingMarquee />

      <Section id="contact-form" className="scroll-mt-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Contact details</SectionLabel>
            <div className="mt-8 grid gap-4">
              {CHANNELS.map(({ label, value, href, Icon, external }, i) => (
                <Reveal key={label} delay={i * 80}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                    className="surface-card group flex items-center gap-4 p-5 transition-colors hover:border-primary"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-hero text-hero-foreground">
                      <Icon className="size-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                        {label}
                      </span>
                      <span className="block break-words text-base transition-colors group-hover:text-primary">
                        {value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
          <EnquiryForm />
        </div>
      </Section>

      <Section className="bg-background/40 pt-0 sm:pt-0">
        <SectionLabel>Offices</SectionLabel>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {OFFICES.map((o, i) => (
            <Reveal key={o.label} delay={i * 80}>
              <div className="surface-card h-full p-7">
                <p className="label-slash">{o.region}</p>
                <h3 className="mt-3 text-2xl">{o.label}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{o.address}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
