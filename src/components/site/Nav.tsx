import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { SERVICES } from "@/data/services";
import { LINKS } from "@/data/site";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/worthprime-logo.webp";

const NAV_ITEMS = [
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);


  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 border-b border-nav-border bg-nav/95 px-3 backdrop-blur-xl sm:px-6">
      <nav className="pointer-events-auto mx-auto flex min-h-20 w-full max-w-[1200px] items-center gap-2 px-1 sm:px-2">
        <Link to="/" className="flex shrink-0 items-center pr-3" aria-label="WorthPrime Tax home">
          <span className="flex h-14 w-36 items-center overflow-hidden px-2">
            <img src={logoImage} alt="WorthPrime Tax" className="h-full w-full object-contain" />
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
                  className="flex items-center gap-1 px-3 py-2 text-sm text-nav-link transition-colors hover:text-nav-link-hover"
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
                  <div className="grid grid-cols-2 gap-1 rounded-lg border border-nav-border bg-nav-menu p-2 shadow-xl">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="rounded-md px-3 py-2 text-xs leading-snug text-foreground/75 transition-colors hover:bg-accent hover:text-foreground"
                      >
                        <span className="mr-1.5 text-primary">{s.number}</span>
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
                className="px-3 py-2 text-sm text-nav-link transition-colors hover:text-nav-link-hover"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            to="/pricing"
            className="rounded-full px-3 py-2 text-sm text-nav-link transition-colors hover:bg-accent hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            to="/insights"
            className="rounded-full px-3 py-2 text-sm text-nav-link transition-colors hover:bg-accent hover:text-foreground"
          >
            Insights
          </Link>
          <Link
            to="/contact"
            className="rounded-full px-3 py-2 text-sm text-nav-link transition-colors hover:bg-accent hover:text-foreground"
          >
            Contact
          </Link>
          <a
            href={LINKS.irs}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-nav-link-hover"
          >
            IRS refund status
          </a>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={LINKS.login}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md bg-button px-4 py-2 text-sm font-semibold text-button-foreground transition-transform hover:scale-[1.03]"
          >
            Log in
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full border border-nav-border lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="pointer-events-auto mx-auto mt-2 max-h-[78vh] w-full max-w-[1200px] overflow-y-auto rounded-3xl border border-nav-border bg-nav-menu p-4 backdrop-blur-xl lg:hidden">
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
            <div className="my-1 grid gap-0.5 border-l border-nav-border pl-3">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-1.5 text-xs text-muted-foreground"
                >
                  <span className="mr-1.5 text-primary">{s.number}</span>
                  {s.name}
                </Link>
              ))}
            </div>
            <Link to="/pricing" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm">
              Pricing
            </Link>
            <Link to="/insights" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm">
              Insights
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm">
              Contact
            </Link>
            <a href={LINKS.irs} target="_blank" rel="noreferrer noopener" className="rounded-xl px-3 py-2.5 text-sm">
              IRS refund status
            </a>
            <a
              href={LINKS.login}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 rounded-full bg-button px-4 py-2.5 text-center text-sm font-semibold text-button-foreground"
            >
              Log in
            </a>

          </div>
        </div>
      )}
    </header>
  );
}
