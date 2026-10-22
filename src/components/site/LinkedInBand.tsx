import { ArrowRight, Linkedin } from "lucide-react";
import { INSIGHTS_PAGE, LINKS } from "@/data/site";

/** "Get new insights on LinkedIn" strip on the insights pages. */
export function LinkedInBand() {
  return (
    <div className="flex flex-col gap-5 rounded-xl border border-border bg-tint px-5 py-5 sm:px-7 lg:flex-row lg:items-center lg:gap-8">
      <div className="flex items-center gap-5 lg:shrink-0">
        <span
          className="grid size-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"
          aria-hidden
        >
          <Linkedin className="size-5" />
        </span>
        <div>
          <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-primary uppercase">
            Follow us
          </p>
          <h2 className="mt-1 font-serif text-[clamp(1.35rem,2vw,1.6rem)] leading-tight font-bold text-primary">
            {INSIGHTS_PAGE.linkedinHeading}
          </h2>
        </div>
      </div>
      <p className="text-[0.95rem] leading-snug text-muted-foreground lg:flex-1 lg:border-l lg:border-border lg:pl-8">
        {INSIGHTS_PAGE.linkedinText}
      </p>
      <a
        href={LINKS.linkedin}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center justify-center gap-2.5 self-start rounded-lg bg-primary px-6 py-3 text-sm font-semibold whitespace-nowrap text-primary-foreground transition-opacity hover:opacity-90 lg:self-auto"
      >
        <Linkedin className="size-4" aria-hidden />
        {INSIGHTS_PAGE.linkedinCta}
        <ArrowRight className="size-4" aria-hidden />
      </a>
    </div>
  );
}
