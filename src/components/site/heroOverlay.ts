/**
 * Tone of each page's first section. On every page the bar sits transparent over that section at
 * the top of the page (the root layout lets it run up behind the bar) with navy text, since every
 * first section is light. "dark" (white text) stays available for a future navy hero.
 */
export function heroOverlay(_pathname: string): "light" | "dark" {
  return "light";
}
