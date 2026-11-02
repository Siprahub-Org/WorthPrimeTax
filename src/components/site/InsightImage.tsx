import type { Insight } from "@/data/site";
import { cn } from "@/lib/utils";
import { insightImage } from "@/components/site/insightImages";

/**
 * An article's cover in any image slot. Posts without an image of their own get a navy WorthPrime
 * cover (sized with container units so it reads at thumbnail and full width) rather than a stock
 * photo. `decorative` slots, such as the featured card that already sits on navy, render nothing.
 */
export function InsightImage({
  insight,
  className,
  alt,
  lazy = false,
  decorative = false,
}: {
  insight: Insight;
  className?: string;
  /** Overrides the image's alt text; "" marks it as decorative for screen readers. */
  alt?: string;
  lazy?: boolean;
  decorative?: boolean;
}) {
  const image = insightImage(insight);

  if (image) {
    return (
      <img
        src={image.src}
        alt={alt ?? image.alt}
        width={image.width}
        height={image.height}
        loading={lazy ? "lazy" : undefined}
        className={className}
      />
    );
  }
  if (decorative) return null;

  return (
    <div
      aria-hidden
      className={cn("@container grid place-items-center bg-hero text-hero-foreground", className)}
    >
      <div className="px-[8cqw] text-center">
        <p className="text-[max(0.4375rem,4.5cqw)] font-semibold tracking-[0.18em] text-hero-foreground/75 uppercase">
          {insight.tag}
        </p>
        <p className="mt-[2cqw] font-serif text-[max(0.6875rem,9cqw)] leading-tight font-bold">
          WorthPrime Tax
        </p>
      </div>
    </div>
  );
}
