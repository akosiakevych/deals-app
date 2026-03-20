import { Deal } from "@/types";

export type DealSortMode =
  | "default"
  | "price-asc"
  | "price-desc"
  | "refurbedScore-asc"
  | "refurbedScore-desc";

export function sortDeals(deals: Deal[], mode: DealSortMode): Deal[] {
  if (mode === "default") {
    return deals;
  }
  const copy = [...deals];
  const byId = (a: Deal, b: Deal) => a.id.localeCompare(b.id, undefined, { numeric: true });

  switch (mode) {
    case "price-asc":
      return copy.sort((a, b) => (a.price !== b.price ? a.price - b.price : byId(a, b)));
    case "price-desc":
      return copy.sort((a, b) => (a.price !== b.price ? b.price - a.price : byId(a, b)));
    case "refurbedScore-asc":
      return copy.sort((a, b) =>
        a.refurbedScore !== b.refurbedScore
          ? a.refurbedScore - b.refurbedScore
          : byId(a, b),
      );
    case "refurbedScore-desc":
      return copy.sort((a, b) =>
        a.refurbedScore !== b.refurbedScore
          ? b.refurbedScore - a.refurbedScore
          : byId(a, b),
      );
    default:
      return deals;
  }
}

export const DEAL_SORT_OPTIONS: { mode: DealSortMode; label: string }[] = [
  { mode: "price-asc", label: "Price · low to high" },
  { mode: "price-desc", label: "Price · high to low" },
  { mode: "refurbedScore-asc", label: "Refurbed score · low to high" },
  { mode: "refurbedScore-desc", label: "Refurbed score · high to low" },
  { mode: "default", label: "Default order" },
];
