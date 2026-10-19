import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceCard({ service }: { service: Service }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-scene group h-[320px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        role="button"
        tabIndex={0}
        aria-label={`${service.name}. Activate to see details.`}
        aria-pressed={flipped}
        onClick={() => setFlipped((v) => !v)}
        onFocus={() => setFlipped(true)}
        onBlur={() => setFlipped(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped((v) => !v);
          }
        }}
        className={cn(
          "flip-inner h-full w-full rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-primary",
        )}
        style={{ transform: flipped ? "rotateY(180deg)" : undefined }}
      >
        {/* Front */}
        <div className="flip-face surface-card flex h-full w-full flex-col justify-between border-hero bg-hero p-6 text-hero-foreground">
          <div className="flex items-start justify-between">
            <span className="font-display text-5xl text-hero-foreground">{service.number}</span>
            <span className="rounded-full border border-hero-border px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-hero-muted">
              {service.audience}
            </span>
          </div>
          <div>
            <h3 className="text-2xl leading-tight text-hero-foreground">{service.name}</h3>
            <p className="mt-2 text-sm font-medium text-hero-muted">{service.tagline}</p>
          </div>
        </div>

        {/* Back */}
        <div className="flip-back surface-card flex h-full w-full flex-col justify-between border-hero bg-hero p-6 text-hero-foreground">
          <div>
            <p className="text-sm text-hero-foreground/90">{service.summary}</p>
            <ul className="mt-4 space-y-1.5 text-xs text-hero-muted">
              {service.capabilities.slice(0, 4).map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-hero-foreground">—</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/services/$slug"
            params={{ slug: service.slug }}
            className="inline-flex items-center gap-1 text-sm font-medium text-hero-foreground hover:underline"
          >
            View service <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
