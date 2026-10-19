import { Link } from "@tanstack/react-router";
import { Container, Reveal } from "./primitives";

export function CtaBand({
  title = "Whatever the next financial decision looks like, make it with perspective.",
}: {
  title?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="surface-card border-hero bg-hero px-6 py-14 text-center text-hero-foreground sm:px-14 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-hero-muted">From setup to success, we're with you</p>
            <h2 className="mx-auto mt-5 max-w-4xl text-[clamp(1.9rem,5vw,4rem)] leading-[1.05] text-hero-foreground">
              {title}
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                hash="contact-form"
                className="rounded-full bg-hero-foreground px-7 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.03]"
              >
                Talk to WorthPrime Tax →
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
