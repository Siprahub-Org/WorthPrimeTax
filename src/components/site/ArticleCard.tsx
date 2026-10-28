import { type Insight } from "@/data/site";
import { cn } from "@/lib/utils";

export function InsightTag({ tag, className }: { tag: Insight["tag"]; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-[0.6875rem] font-semibold tracking-[0.08em] text-primary uppercase",
        tag === "Compliance" ? "bg-brand-gold/20" : "bg-brand-secondary/10",
        className,
      )}
    >
      {tag}
    </span>
  );
}
