import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { SERVICES } from "@/data/services";
import { LINKS } from "@/data/site";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/worthprime-logo.webp";
import { heroOverlay } from "./heroOverlay";

const WIDE_NAV: Record<string, string> = {
  "/": "max-w-[1492px]",
  "/contact": "max-w-[1492px]",
  "/pricing": "max-w-[1392px]",
};

// Active page gets a thin gold underline (TanStack Link sets data-status="active").
const navLink =
  "relative px-3 py-2 text-sm transition-colors after:pointer-events-none after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand-gold after:opacity-0 after:transition-opacity data-[status=active]:font-semibold data-[status=active]:after:opacity-100";

const NAV_ITEMS = [
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Pages with a wider layout (home hero and contact 1540px, pricing 1440px) widen the bar to match; minus the
  // header padding, this lines the logo and Log in button up with their content edges.
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const wideWidth = WIDE_NAV[pathname];
  // Transparent only while at the top of a dark-hero page with the mobile menu closed.
  const tone = scrolled || open ? null : heroOverlay(pathname);
  const transparent = tone !== null;
  // White text and logo only over a navy hero.
  const overlay = tone === "dark";
  const linkColor = overlay
    ? "text-hero-foreground/90 hover:text-hero-foreground"
    : "text-nav-link hover:text-nav-link-hover";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-50 border-b px-3 transition-[background-color,border-color,box-shadow] duration-300 sm:px-6",
        transparent
          ? "border-transparent bg-transparent"
          : scrolled
            ? "border-nav-border/60 bg-nav/65 shadow-[0_8px_30px_-20px] shadow-primary/40 backdrop-blur-xl"
            : "border-nav-border bg-nav/95 backdrop-blur-xl",
      )}
    >
      <nav
        className={cn(
          "pointer-events-auto mx-auto flex w-full items-center gap-2 px-1 transition-[min-height] duration-300 sm:px-2",
          wideWidth ? cn(wideWidth, "sm:pr-4") : "max-w-[1200px]",
          scrolled ? "min-h-14" : "min-h-16",
        )}
      >
        <Link to="/" className="flex shrink-0 items-center pr-3" aria-label="WorthPrime Tax home">
          <span
            className={cn(
              "flex w-28 items-center overflow-hidden px-2 transition-[height] duration-300",
              scrolled ? "h-10" : "h-12",
            )}
          >
            <img
              src={logoImage}
              alt="WorthPrime Tax"
              className={cn(
                "h-full w-full object-contain transition-[filter] duration-300",
                wideWidth && "object-left",
                // White logo over the navy hero.
                overlay && "brightness-0 invert",
              )}
            />
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
                <Link to={item.to} className={cn(navLink, linkColor, "flex items-center gap-1")}>
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
              <Link key={item.label} to={item.to} className={cn(navLink, linkColor)}>
                {item.label}
              </Link>
            ),
          )}
          <Link to="/pricing" className={cn(navLink, linkColor)}>
            Pricing
          </Link>
          <Link to="/insights" className={cn(navLink, linkColor)}>
            Insights
          </Link>
          <Link to="/contact" className={cn(navLink, linkColor)}>
            Contact
          </Link>
          <a
            href={LINKS.irs}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              "px-3 py-2 text-xs transition-colors",
              overlay
                ? "text-hero-foreground/80 hover:text-hero-foreground"
                : "text-muted-foreground hover:text-nav-link-hover",
            )}
          >
            IRS refund status
          </a>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={LINKS.login}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              "rounded-md bg-button px-4 py-2 text-sm font-semibold text-button-foreground transition-transform hover:scale-[1.03]",
              overlay && "ring-1 ring-hero-foreground/25",
            )}
          >
            Log in
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid size-9 place-items-center rounded-full border transition-colors lg:hidden",
              overlay ? "border-hero-foreground/40 text-hero-foreground" : "border-nav-border",
            )}
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
