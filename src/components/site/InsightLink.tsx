import type { ComponentPropsWithoutRef } from "react";
import { Link } from "@tanstack/react-router";
import type { Insight } from "@/data/site";

type AnchorProps = Omit<ComponentPropsWithoutRef<"a">, "href" | "target" | "rel">;

/**
 * Link to an article: LinkedIn posts open the original post in a new tab; hand-written fallback
 * articles open their page on this site.
 */
export function InsightLink({ insight, ...props }: AnchorProps & { insight: Insight }) {
  if (insight.sourceUrl) {
    return <a href={insight.sourceUrl} target="_blank" rel="noreferrer noopener" {...props} />;
  }
  return <Link to="/insights/$slug" params={{ slug: insight.slug }} {...props} />;
}
