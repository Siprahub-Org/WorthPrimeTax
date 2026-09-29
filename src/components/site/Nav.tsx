import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { SERVICES } from "@/data/services";
import { LINKS } from "@/data/site";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/worthprime-logo.jpeg.asset.json";

const NAV_ITEMS = [
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 5200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 px-3 backdrop-blur-xl sm:px-6">
      <nav className="pointer-events-auto mx-auto flex min-h-20 w-full max-w-[1200px] items-center gap-2 px-1 sm:px-2">
        <Link to="/" className="flex shrink-0 items-center pr-3" aria-label="WorthPrime Tax home">
          <span className="flex h-14 w-36 items-center overflow-hidden bg-card px-2">
            <img src={logoAsset.url} alt="WorthPrime Tax" className="h-full w-full object-contain" />
          </span>
        </Link>

        <div className="hidden flex-1 items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={item.to}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-foreground/80 transition-colors hover:text-gold"
                >
                  Services
                  <ChevronDown className="size-3.5" />
                </Link>
                <div
                  className={cn(
                    "absolute left-0 top-full w-[420px] pt-3 transition-all",
                    servicesOpen
                      ? "visible opacity-100"
                      : "invisible -translate-y-1 opacity-0",
                  )}
                >
                  <div className="grid grid-cols-2 gap-1 rounded-lg border border-border bg-popover p-2 shadow-xl">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="rounded-md px-3 py-2 text-xs leading-snug text-foreground/75 transition-colors hover:bg-accent hover:text-foreground"
                      >
                        <span className="mr-1.5 text-gold">{s.number}</span>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="px-3 py-2 text-sm text-foreground/80 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            to="/services"
            hash="pricing"
            className="rounded-full px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            to="/"
            hash="insights"
            className="rounded-full px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
          >
            Insights
          </Link>
          <Link
            to="/"
            hash="contact"
            className="rounded-full px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
          >
            Contact
          </Link>
          <a
            href={LINKS.irs}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-gold"
          >
            IRS refund status
          </a>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={LINKS.pay}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              "rounded-md bg-gold px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]",
              pulse && "pulse-cta",
            )}
          >
            Pay here
          </a>
          <a
            href={LINKS.login}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden text-sm text-foreground/75 transition-colors hover:text-gold lg:inline"
          >
            Login/Register
          </a>
          <Link
            to="/"
            hash="contact"
            className="hidden rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent lg:inline-block"
          >
            Request a quote
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="pointer-events-auto mx-auto mt-2 max-h-[78vh] w-full max-w-[1200px] overflow-y-auto rounded-3xl border border-border bg-popover p-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            <Link to="/" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm">
              Home
            </Link>
            <Link to="/about" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm">
              About
            </Link>
            <Link to="/services" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm">
              Services
            </Link>
            <div className="my-1 grid gap-0.5 border-l border-border pl-3">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-1.5 text-xs text-muted-foreground"
                >
                  <span className="mr-1.5 text-gold">{s.number}</span>
                  {s.name}
                </Link>
              ))}
            </div>
            <Link to="/services" hash="pricing" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm">
              Pricing
            </Link>
            <Link to="/" hash="insights" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm">
              Insights
            </Link>
            <Link to="/" hash="contact" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm">
              Contact
            </Link>
            <a href={LINKS.irs} target="_blank" rel="noreferrer noopener" className="rounded-xl px-3 py-2.5 text-sm">
              IRS refund status
            </a>
            <a href={LINKS.login} target="_blank" rel="noreferrer noopener" className="rounded-xl px-3 py-2.5 text-sm">
              Login/Register
            </a>
            <Link
              to="/"
              hash="contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-border px-4 py-2.5 text-center text-sm"
            >
              Request a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
