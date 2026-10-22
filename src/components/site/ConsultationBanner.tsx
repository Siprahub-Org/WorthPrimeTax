import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTA_BANNER } from "@/data/site";

/** Navy "talk to our experts" banner with a gold button, used at the foot of content pages. */
export function ConsultationBanner() {
  return (
    <section className="px-4 pt-2 pb-10 sm:px-6 sm:pb-12">
      <div className="mx-auto flex max-w-[1488px] flex-col gap-6 rounded-2xl bg-hero px-6 py-8 text-hero-foreground sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-16 lg:py-9">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-gold uppercase">
            {CTA_BANNER.label}
          </p>
          <h2 className="mt-3 font-serif text-[clamp(1.6rem,2.8vw,2.5rem)] leading-[1.1] font-bold text-hero-foreground">
            {CTA_BANNER.heading}
            <span className="block text-brand-gold">{CTA_BANNER.headingAccent}</span>
          </h2>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-3 lg:items-center">
          <Link
            to="/contact"
            hash="contact-form"
            className="inline-flex items-center gap-3 rounded-lg bg-brand-gold px-10 py-3.5 text-base font-semibold text-primary transition-transform hover:scale-[1.02]"
          >
            {CTA_BANNER.button}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <p className="text-sm text-hero-muted">{CTA_BANNER.caption}</p>
        </div>
      </div>
    </section>
  );
}
