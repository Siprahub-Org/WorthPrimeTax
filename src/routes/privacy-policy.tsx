import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PRIVACY_PAGE } from "@/data/site";
import { LegalPageView } from "@/components/site/LegalPageView";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    seoHead({
      title: PRIVACY_PAGE.title,
      description: PRIVACY_PAGE.description,
      path: "/privacy-policy",
    }),
  component: () => <LegalPageView page={PRIVACY_PAGE} />,
});
