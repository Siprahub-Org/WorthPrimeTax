import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getService } from "@/data/services";
import { getServicePage } from "@/data/servicePages";
import { Section } from "@/components/site/primitives";
import { ServiceDetailFeature } from "@/components/site/ServiceDetailFeature";
import { getServiceDetailMedia } from "@/components/site/serviceDetailMedia";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found | WorthPrime Tax" },
          { name: "robots", content: "noindex" },
          { property: "og:title", content: "Service not found | WorthPrime Tax" },
          { property: "og:description", content: "The requested WorthPrime Tax service could not be found." },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ],
      };
    }
    const { service } = loaderData;
    const title = `${service.name} | WorthPrime Tax`;
    const description = service.summary;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
  return (
    <Section>
      <h1 className="text-4xl">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-primary hover:underline">
        ← All services
      </Link>
    </Section>
  );
}

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  return (
    <ServiceDetailFeature
      service={service}
      page={getServicePage(service)}
      media={getServiceDetailMedia(service.slug, service.name)}
    />
  );
}
