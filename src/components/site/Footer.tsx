import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { SERVICES } from "@/data/services";
import { LINKS, OFFICES } from "@/data/site";
import { Container } from "./primitives";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-navy-deep pt-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <p className="label-slash">01 / Get in touch</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Questions to resolve. Decisions to make.
            </h2>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              We're here to help—connect with us, we're just a click away.
            </p>
            <div className="mt-6 space-y-1 text-sm">
              <a href={LINKS.phoneHref} className="block transition-colors hover:text-gold">
                {LINKS.phone}
              </a>
              <a href={`mailto:${LINKS.email}`} className="block transition-colors hover:text-gold">
                {LINKS.email}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={LINKS.pay}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep"
              >
                Pay here
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn [placeholder, client to supply]"
                className="grid size-10 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="label-slash">02 / Services</p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {SERVICES.slice(0, 6).map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="transition-colors hover:text-gold"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/services" className="transition-colors hover:text-gold">
                    All services →
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="label-slash">03 / Company</p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                <li>
                  <Link to="/about" className="transition-colors hover:text-gold">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" hash="pricing" className="transition-colors hover:text-gold">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/" hash="insights" className="transition-colors hover:text-gold">
                    Insights
                  </Link>
                </li>
                <li>
                  <a href={LINKS.login} target="_blank" rel="noreferrer noopener" className="transition-colors hover:text-gold">
                    Login / Register
                  </a>
                </li>
                <li>
                  <a href={LINKS.irs} target="_blank" rel="noreferrer noopener" className="transition-colors hover:text-gold">
                    IRS refund status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="label-slash">04 / Offices</p>
              <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
                {OFFICES.map((o) => (
                  <li key={o.label}>
                    <span className="block text-xs uppercase tracking-wider text-foreground/70">
                      {o.label}
                    </span>
                    {o.address}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <p className="select-none whitespace-nowrap font-display text-[clamp(3rem,15vw,12rem)] leading-[0.85] text-foreground/10">
            WorthPrime Tax
          </p>
        </div>
        <div className="flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} WorthPrime Tax. All rights reserved.</p>
          <p>U.S. tax, accounting and compliance · Glastonbury · Dubai · Hyderabad</p>
        </div>
      </Container>
    </footer>
  );
}
