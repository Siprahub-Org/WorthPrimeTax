import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { TERMS_PAGE } from "@/data/site";
import { LegalPageView } from "@/components/site/LegalPageView";

export const Route = createFileRoute("/terms-of-use")({
  head: () =>
    seoHead({
      title: TERMS_PAGE.title,
      description: TERMS_PAGE.description,
      path: "/terms-of-use",
    }),
  component: () => <LegalPageView page={TERMS_PAGE} />,
});
