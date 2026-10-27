/** Grid classes for service card grids: rows of 2 then 3 cards, repeating, on large screens. */
export const SERVICE_GRID = "grid gap-5 sm:grid-cols-2 lg:grid-cols-6";

/** Column span for the card at index i in SERVICE_GRID: the first two of every five span half the row. */
export function serviceCardSpan(i: number) {
  return i % 5 < 2 ? "lg:col-span-3" : "lg:col-span-2";
}
