import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/data/services";
import { PRICING_PAGE } from "@/data/site";
import { cn } from "@/lib/utils";

export function PriceChart() {
  return (
    <>
      <div className="surface-card mt-8 overflow-hidden">
        <div className="hidden grid-cols-[2fr_1fr_2fr_auto] gap-4 border-b border-border px-6 py-4 text-xs uppercase tracking-[0.16em] text-muted-foreground lg:grid">
          <span>Service</span>
          <span>Starting from</span>
          <span>What is included</span>
          <span />
        </div>
        <div className="divide-y divide-border">
          {SERVICES.map((s) => (
            <div
              key={s.slug}
              className="grid gap-3 px-6 py-5 lg:grid-cols-[2fr_1fr_2fr_auto] lg:items-center lg:gap-4"
            >
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="text-sm transition-colors hover:text-primary"
              >
                <span className="mr-2 text-primary">{s.number}</span>
                {s.name}
              </Link>
              <span
                className={cn(
                  "text-sm",
                  s.price.startsWith("From") ? "text-primary" : "text-muted-foreground",
                )}
              >
                {s.price}
              </span>
              <span className="text-sm text-muted-foreground">{s.included}</span>
              <Link
                to="/contact"
                className="justify-self-start rounded-full border border-border px-4 py-2 text-xs transition-colors hover:bg-accent lg:justify-self-end"
              >
                Contact us
              </Link>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 max-w-2xl text-xs text-muted-foreground">{PRICING_PAGE.chartNote}</p>
    </>
  );
}
