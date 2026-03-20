import { useMemo } from "react";

import { mockedDeals } from "./__mocks__";

export const useDeals = () => {
  return useMemo(() => mockedDeals, []);
};

export const useDeal = (id: string) => {
  return useMemo(() => mockedDeals.find((deal) => deal.id === id), [id]);
};
