/**
 * Pages whose first section is a full-bleed photo hero, and its tone. On these the bar sits
 * transparent over the hero at the top of the page (the root layout lets the hero run up behind
 * it): navy text over the light home and Services heroes (service pages too: their photos are
 * bright along the top), white text over the navy About hero.
 */
export function heroOverlay(pathname: string): "light" | "dark" | null {
  if (pathname === "/" || pathname === "/services" || pathname.startsWith("/services/")) {
    return "light";
  }
  if (pathname === "/about") return "dark";
  return null;
}
