import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/data/services";

const featuredServices = SERVICES.slice(0, 6);

function PriceItem({ service }: { service: (typeof SERVICES)[number] }) {
  const displayPrice = service.price.startsWith("From") ? service.price : "Price TBC";

  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group flex shrink-0 items-center gap-4 px-7 py-5 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-hero-foreground sm:gap-6 sm:px-10 sm:py-6"
    >
      <span className="text-sm font-semibold text-hero-foreground/80 transition-colors group-hover:text-hero-foreground">
        {service.name}
      </span>
      <span className="text-lg font-bold text-hero-foreground sm:text-xl">{displayPrice}</span>
      <span className="text-hero-foreground/35" aria-hidden>
        •
      </span>
    </Link>
  );
}

export function PricingMarquee() {
  return (
    <section aria-label="Featured service pricing" className="overflow-hidden border-y border-navy-deep bg-navy-deep">
      <div className="marquee-track flex w-max hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
        {[...featuredServices, ...featuredServices].map((service, index) => (
          <PriceItem key={`${service.slug}-${index}`} service={service} />
        ))}
      </div>
    </section>
  );
}