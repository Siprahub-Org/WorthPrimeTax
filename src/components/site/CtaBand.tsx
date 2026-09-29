import { Link } from "@tanstack/react-router";
import { LINKS } from "@/data/site";
import { Container, Reveal } from "./primitives";

export function CtaBand({
  title = "Whatever the next financial decision looks like, make it with perspective.",
  secondaryLabel = "Talk to WorthPrime Tax",
}: {
  title?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="surface-card bg-navy-soft px-6 py-14 text-center sm:px-14 sm:py-20">
            <p className="label-slash">From setup to success, we're with you</p>
            <h2 className="mx-auto mt-5 max-w-4xl text-[clamp(1.9rem,5vw,4rem)] leading-[1.05]">
              {title}
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={LINKS.pay}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy-deep transition-transform hover:scale-[1.03]"
              >
                Pay here
              </a>
              <Link
                to="/"
                hash="contact-form"
                className="rounded-full border border-border px-7 py-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                {secondaryLabel} →
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
