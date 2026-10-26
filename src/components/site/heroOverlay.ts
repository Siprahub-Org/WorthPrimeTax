/**
 * Tone of each page's first section. On every page the bar sits transparent over that section at
 * the top of the page (the root layout lets it run up behind the bar): white text over the navy
 * About hero, navy text over the light first section everywhere else.
 */
export function heroOverlay(pathname: string): "light" | "dark" {
  if (pathname === "/about") return "dark";
  return "light";
}
