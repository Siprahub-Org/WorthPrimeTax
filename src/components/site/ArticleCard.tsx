import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { formatInsightDate, type Insight } from "@/data/site";
import { cn } from "@/lib/utils";
import { INSIGHT_IMAGES } from "./insightImages";

export function InsightTag({ tag }: { tag: Insight["tag"] }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-[0.6875rem] font-semibold tracking-[0.08em] text-primary uppercase",
        tag === "Compliance" ? "bg-brand-gold/20" : "bg-brand-secondary/10",
      )}
    >
      {tag}
    </span>
  );
}

/** Article preview card on the insights page: cover photo, tag, date, title, excerpt, link. */
export function ArticleCard({ insight }: { insight: Insight }) {
  const image = INSIGHT_IMAGES[insight.slug];
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[0_18px_40px_-32px] shadow-primary/50">
      {image && (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          className="aspect-[2.6/1] w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col px-5 pt-4 pb-5 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <InsightTag tag={insight.tag} />
          <time dateTime={insight.date} className="text-sm text-muted-foreground">
            {formatInsightDate(insight.date)}
          </time>
        </div>
        <h3 className="mt-3 font-serif text-[1.3rem] leading-[1.2] font-bold text-primary">
          {insight.title}
        </h3>
        <p className="mt-2 flex-1 text-[0.95rem] leading-snug text-muted-foreground">
          {insight.excerpt}
        </p>
        <Link
          to="/insights/$slug"
          params={{ slug: insight.slug }}
          className="mt-4 inline-flex items-center gap-2 self-start text-[0.95rem] font-semibold text-primary underline underline-offset-4"
        >
          Read article
          <span className="sr-only">: {insight.title}</span>
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}
