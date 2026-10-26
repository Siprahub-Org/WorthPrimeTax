import { INSIGHTS } from "@/data/site";
import advisersImage from "@/assets/worthprime-advisers-blue.webp";
import documentsImage from "@/assets/worthprime-documents-blue.webp";

export function InsightCard({
  insight,
  index,
}: {
  insight: (typeof INSIGHTS)[number];
  index: number;
}) {
  return (
    <article className="surface-card h-full overflow-hidden">
      <img
        src={index % 2 === 1 ? advisersImage : documentsImage}
        alt="Tax planning and advisory"
        width={1408}
        height={1008}
        loading="lazy"
        className="aspect-video w-full object-cover"
      />
      <div className="p-6">
        <p className="label-slash">{insight.tag}</p>
        <h3 className="mt-3 text-lg leading-snug">{insight.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{insight.excerpt}</p>
      </div>
    </article>
  );
}
