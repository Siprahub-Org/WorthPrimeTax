/*
 * Background photo for each service card, keyed by service slug.
 *
 * Any image in src/assets/services/ named after a service slug (for example
 * `us-tax-services.jpg`) is picked up automatically at build time. A service
 * without a matching file keeps the plain navy card.
 */
const files = import.meta.glob<string>("../../assets/services/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});

export const SERVICE_IMAGES: Partial<Record<string, string>> = Object.fromEntries(
  Object.entries(files).map(([path, url]) => {
    const slug = path.slice(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
    return [slug, url];
  }),
);
