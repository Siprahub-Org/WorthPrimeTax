import { Link } from "@tanstack/react-router";
import { ArrowRight, FileText } from "lucide-react";
import { SERVICES, type Service } from "@/data/services";
import { cn } from "@/lib/utils";
import { SERVICE_ICONS } from "./serviceIcons";

// Only confirmed "From …" prices are shown as figures; everything else stays a placeholder.
function displayPrice(price: string) {
  return price.startsWith("From") ? price : "Price TBC";
}

function PriceTag({ price }: { price: string }) {
  const confirmed = price.startsWith("From");
  return (
    <span
      className={cn(
        "text-sm",
        confirmed
          ? "inline-flex rounded-full bg-brand-gold/15 px-2.5 py-0.5 font-semibold text-primary"
          : "text-muted-foreground",
      )}
    >
      {displayPrice(price)}
    </span>
  );
}

function ServiceIcon({ slug }: { slug: string }) {
  const Icon = SERVICE_ICONS[slug] ?? FileText;
  return (
    <span
      className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-gold/15 text-primary"
      aria-hidden
    >
      <Icon className="size-3.5" strokeWidth={1.7} />
    </span>
  );
}

function ContactButton({ service }: { service: Service }) {
  return (
    <Link
      to="/contact"
      aria-label={`Contact us about ${service.name}`}
      className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-1.5 text-xs font-medium whitespace-nowrap text-primary-foreground transition-opacity hover:opacity-90"
    >
      Contact us
      <ArrowRight className="size-3.5" aria-hidden />
    </Link>
  );
}

function ServiceLink({ service }: { service: Service }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="text-sm font-medium text-primary hover:underline"
    >
      {service.name}
    </Link>
  );
}

const th =
  "px-4 py-3 text-left text-[0.6875rem] font-semibold tracking-[0.16em] text-primary uppercase";

/** Every service with its starting price: a table on large screens, stacked cards below. */
export function PricingTable() {
  return (
    <>
      <div className="hidden overflow-hidden rounded-xl border border-border lg:block">
        <table className="w-full border-collapse">
          <thead className="bg-tint">
            <tr>
              <th scope="col" className={cn(th, "w-14 pl-5")}>
                #
              </th>
              <th scope="col" className={th}>
                Service
              </th>
              <th scope="col" className={cn(th, "w-44")}>
                Starting from
              </th>
              <th scope="col" className={th}>
                What is included
              </th>
              <th scope="col" className={cn(th, "w-36 pr-5 text-center")}>
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {SERVICES.map((s) => (
              <tr key={s.slug}>
                <td className="py-1 pr-2 pl-5 text-sm text-muted-foreground">{s.number}</td>
                <th scope="row" className="border-r border-border px-4 py-1 text-left font-normal">
                  <span className="flex items-center gap-4">
                    <ServiceIcon slug={s.slug} />
                    <ServiceLink service={s} />
                  </span>
                </th>
                <td className="border-r border-border px-4 py-1">
                  <PriceTag price={s.price} />
                </td>
                <td className="px-4 py-1 text-sm text-muted-foreground">{s.included}</td>
                <td className="py-1 pr-4 pl-2 text-right">
                  <ContactButton service={s} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:hidden">
        {SERVICES.map((s) => (
          <li key={s.slug} className="flex flex-col rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">{s.number}</span>
              <ServiceIcon slug={s.slug} />
              <ServiceLink service={s} />
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {s.included}
            </p>
            <div className="mt-4 flex items-center justify-between gap-3">
              <span>
                <span className="sr-only">Starting from </span>
                <PriceTag price={s.price} />
              </span>
              <ContactButton service={s} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
