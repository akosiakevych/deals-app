import { useMemo } from "react";

import type { DealSortMode } from "@/utils/sortDeals";
import { sortDeals } from "@/utils/sortDeals";

import { mockedDeals } from "./__mocks__";

export type UseDealsOptions = {
  sortBy?: DealSortMode;
  onlyRefurbedHighestScore?: boolean;
};

export const useDeals = (options?: UseDealsOptions) => {
  const sortBy = options?.sortBy ?? "default";
  const onlyRefurbedHighestScore = options?.onlyRefurbedHighestScore ?? false;

  return useMemo(() => {
    let list = mockedDeals;
    if (onlyRefurbedHighestScore) {
      const maxScore = Math.max(
        0,
        ...mockedDeals.map((deal) => deal.refurbedScore),
      );
      list = list.filter((deal) => deal.refurbedScore === maxScore);
    }
    return sortDeals(list, sortBy);
  }, [sortBy, onlyRefurbedHighestScore]);
};

export const useDeal = (id: string) => {
  return useMemo(() => mockedDeals.find((deal) => deal.id === id), [id]);
};
