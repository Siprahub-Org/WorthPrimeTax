import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  ChartColumn,
  ChevronRight,
  FileSearch,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import { LINKS, OFFICES } from "@/data/site";
import { Container } from "./primitives";
import logoImage from "@/assets/worthprime-logo.webp";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "us-tax-services": FileText,
  "business-formation-entity-structuring": Building2,
  "accounting-bookkeeping": ChartColumn,
  "us-payroll-services": Users,
  "audit-financial-assurance": ShieldCheck,
  "irs-audit-notice-resolution": FileSearch,
};

const focusRing =
  "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

function ColumnHeading({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-footer-heading">
        {children}
      </h2>
      <span aria-hidden className="mt-3 block h-0.5 w-12 bg-tint" />
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-footer">
      {/* Extra right padding below lg keeps text clear of the fixed contact buttons. */}
      <Container className="pr-20 sm:pr-20 lg:pr-8">
        <div className="grid gap-12 pb-12 pt-16 md:grid-cols-2 lg:grid-cols-[1.25fr_1.15fr_0.8fr_1.15fr] lg:gap-10">
          <div>
            <Link to="/" aria-label="WorthPrime Tax home" className={`inline-block ${focusRing}`}>
              <img
                src={logoImage}
                alt="WorthPrime Tax"
                width={1438}
                height={1094}
                loading="lazy"
                className="h-24 w-auto object-contain"
              />
            </Link>
            <span aria-hidden className="mt-6 block h-px w-40 bg-border" />
            <h2 className="mt-6 text-[1.7rem] leading-tight text-footer-heading">
              Questions to resolve.
              <br />
              Decisions to make.
            </h2>
            <p className="mt-3 max-w-xs text-muted-foreground">
              We're here to help—connect with us, we're just a click away.
            </p>

            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={LINKS.phoneHref}
                  className={`group inline-flex items-center gap-4 ${focusRing}`}
                >
                  <span className="grid shrink-0 place-items-center text-footer-heading">
                    <Phone className="size-6.5" strokeWidth={1.5} />
                  </span>
                  <span className="font-semibold text-footer-heading group-hover:underline">
                    {LINKS.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${LINKS.email}`}
                  className={`group inline-flex items-center gap-4 ${focusRing}`}
                >
                  <span className="grid shrink-0 place-items-center text-footer-heading">
                    <Mail className="size-6.5" strokeWidth={1.5} />
                  </span>
                  <span className="text-sm text-footer-heading group-hover:underline sm:text-base">
                    {LINKS.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Services">
            <ColumnHeading>Services</ColumnHeading>
            <ul className="mt-6 space-y-4">
              {SERVICES.slice(0, 6).map((s) => {
                const Icon = SERVICE_ICONS[s.slug] ?? FileText;
                return (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className={`group flex items-start gap-4 text-footer-link transition-colors hover:text-footer-link-hover ${focusRing}`}
                    >
                      <Icon
                        aria-hidden
                        className="mt-0.5 size-5 shrink-0 text-footer-heading"
                        strokeWidth={1.5}
                      />
                      <span className="leading-snug group-hover:underline">{s.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              to="/services"
              className={`group mt-6 inline-flex items-center gap-2 font-semibold text-link-accent transition-colors hover:text-footer-link-hover ${focusRing}`}
            >
              All services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </nav>

          <nav aria-label="Company">
            <ColumnHeading>Company</ColumnHeading>
            <ul className="mt-4 max-w-64">
              <FooterRowLink to="/about">About</FooterRowLink>
              <FooterRowLink to="/pricing">Pricing</FooterRowLink>
              <FooterRowLink to="/insights">Insights</FooterRowLink>
              <FooterRowLink to="/contact">Contact</FooterRowLink>
              <FooterRowLink href={LINKS.login}>Log in</FooterRowLink>
              <FooterRowLink href={LINKS.irs}>IRS refund status</FooterRowLink>
            </ul>
          </nav>

          <div>
            <ColumnHeading>Offices</ColumnHeading>
            <ul className="mt-4 divide-y divide-border">
              {OFFICES.map((o) => (
                <li key={o.label} className="flex gap-4 py-5 first:pt-2 last:pb-0">
                  <span className="grid shrink-0 place-items-center text-footer-heading">
                    <MapPin aria-hidden className="size-6.5" strokeWidth={1.5} />
                  </span>
                  <address className="min-w-0 not-italic">
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-footer-heading">
                      {o.label}
                    </span>
                    <span className="mt-1.5 block leading-relaxed text-footer-link">
                      {o.address}
                    </span>
                  </address>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WorthPrime Tax. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterRowLink({
  children,
  to,
  href,
}: {
  children: ReactNode;
  to?: "/about" | "/pricing" | "/insights" | "/contact";
  href?: string;
}) {
  const className = `group flex items-center justify-between gap-4 py-2.5 text-footer-link transition-colors hover:text-footer-link-hover ${focusRing}`;
  const content = (
    <>
      <span className="group-hover:underline">{children}</span>
      <ChevronRight
        aria-hidden
        className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-footer-link-hover"
      />
    </>
  );
  return (
    <li>
      {to ? (
        <Link to={to} className={className}>
          {content}
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
          {content}
        </a>
      )}
    </li>
  );
}
