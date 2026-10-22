/**
 * Pages whose first section is a full-bleed photo hero, and its tone. On these the bar sits
 * transparent over the hero at the top of the page (the root layout lets the hero run up behind
 * it): navy text over the light home hero, white text over the navy heroes.
 */
export function heroOverlay(pathname: string): "light" | "dark" | null {
  if (pathname === "/") return "light";
  if (pathname === "/about" || pathname === "/services" || pathname.startsWith("/services/")) {
    return "dark";
  }
  return null;
}
