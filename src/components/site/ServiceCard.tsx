import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";
import { SERVICE_IMAGES } from "./serviceImages";

/** `photoOnly` (Services page) shows the whole photo on the front with no navy panel or fade. */
export function ServiceCard({
  service,
  photoOnly = false,
}: {
  service: Service;
  photoOnly?: boolean;
}) {
  const [flipped, setFlipped] = useState(false);
  const image = SERVICE_IMAGES[service.slug];

  return (
    <div
      className="flip-scene group h-[280px]"
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
        <div
          className={cn(
            "flip-face surface-card relative isolate flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl p-6 text-hero-foreground",
            photoOnly && "justify-end",
            image ? "border-transparent bg-transparent" : "border-hero bg-hero",
          )}
        >
          {image && (
            // The photo fills the whole card, with no navy panel.
            <img
              src={image}
              alt=""
              width={1400}
              height={788}
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )}
          {image && !photoOnly && (
            // Soft dark shade behind the white number and title so they read on any photo.
            <span
              className="absolute inset-0 -z-10 bg-linear-to-t from-foreground/80 via-foreground/10 to-foreground/30"
              aria-hidden
            />
          )}
          {/* On a bare photo (Services page) the card shows just the name and tagline, on a frosted
              white panel so they read on light and dark photos alike; no number or audience tag. */}
          {!photoOnly && (
            <div className="flex items-start justify-between">
              <span className="font-display text-5xl text-hero-foreground">{service.number}</span>
              <span className="rounded-full border border-hero-border bg-hero/40 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-hero-muted backdrop-blur-sm">
                {service.audience}
              </span>
            </div>
          )}
          <div
            className={cn(photoOnly && "rounded-2xl bg-background/85 px-4 py-3 backdrop-blur-sm")}
          >
            <h3
              className={cn(
                "text-2xl leading-tight",
                photoOnly ? "text-xl font-bold text-primary" : "text-hero-foreground",
              )}
            >
              {service.name}
            </h3>
            <p
              className={cn(
                "mt-2 text-sm font-medium",
                photoOnly ? "mt-1 text-foreground/80" : "text-hero-muted",
              )}
            >
              {service.tagline}
            </p>
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
