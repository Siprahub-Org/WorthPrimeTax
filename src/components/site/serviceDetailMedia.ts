import { SERVICE_IMAGES } from "./serviceImages";
import fallbackHero from "@/assets/worthprime-hero-blue.jpg";
import fallbackIncluded from "@/assets/worthprime-documents-blue.jpg";
import fallbackWhoFor from "@/assets/worthprime-advisers-blue.jpg";
import fallbackOverview from "@/assets/worthprime-workspace.webp";
import stepUnderstand from "@/assets/service-pages/steps/understand.jpg";
import stepPrepare from "@/assets/service-pages/steps/prepare.jpg";
import stepDeliver from "@/assets/service-pages/steps/deliver.jpg";

/*
 * Service detail page photography. Drop files into src/assets/service-pages/<service-slug>/
 * named by slot — hero, overview, included, who-for, thumb (.jpg, .png or .webp) — and the
 * page picks them up. Missing slots fall back to the shared brand photos below.
 */
const files = import.meta.glob<string>("../../assets/service-pages/*/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});

const SLOTS = ["hero", "overview", "included", "who-for", "thumb"] as const;
type Slot = (typeof SLOTS)[number];

const BY_SERVICE: Record<string, Partial<Record<Slot, string>>> = {};
for (const [path, url] of Object.entries(files)) {
  const match = /service-pages\/([^/]+)\/([^/.]+)\.\w+$/.exec(path);
  const slug = match?.[1];
  const slot = SLOTS.find((s) => s === match?.[2]);
  if (!slug || !slot) continue;
  (BY_SERVICE[slug] ??= {})[slot] = url;
}

// Descriptions for client-supplied photos; fallbacks get generic text from the service name.
const ALT_TEXT: Record<string, Partial<Record<Exclude<Slot, "hero" | "thumb">, string>>> = {
  "us-tax-services": {
    overview:
      "Laptop showing a U.S. tax services dashboard with filing status for Forms 1040, 1120, 1120S and 1065",
    included:
      "Tax filings checklist on a desk beside U.S. tax law books and labelled return folders",
    "who-for":
      "Clients WorthPrime Tax works with: individuals, businesses, corporations, C Corps, S Corps and partnerships",
  },
};

type Image = { src: string; alt: string };

export type ServiceDetailMedia = {
  hero: string;
  overview: Image;
  included: Image;
  whoFor: Image;
  /** One per HOW_THE_WORK_MOVES step, shared by every service. */
  steps: [string, string, string];
};

export function getServiceDetailMedia(slug: string, name: string): ServiceDetailMedia {
  const own = BY_SERVICE[slug] ?? {};
  const alt = ALT_TEXT[slug] ?? {};
  return {
    hero: own.hero ?? fallbackHero,
    overview: {
      src: own.overview ?? SERVICE_IMAGES[slug] ?? fallbackOverview,
      alt: alt.overview ?? `${name} at WorthPrime Tax`,
    },
    included: {
      src: own.included ?? fallbackIncluded,
      alt: alt.included ?? `Documents prepared for ${name.toLowerCase()} work`,
    },
    whoFor: {
      src: own["who-for"] ?? fallbackWhoFor,
      alt: alt["who-for"] ?? "WorthPrime Tax advisers meeting with a client",
    },
    steps: [stepUnderstand, stepPrepare, stepDeliver],
  };
}

/** Thumbnail for a service's related-service card. */
export function getServiceThumb(slug: string): string | undefined {
  return BY_SERVICE[slug]?.thumb ?? SERVICE_IMAGES[slug];
}
