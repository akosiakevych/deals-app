import { useMemo } from "react";

import { mockedDeals } from "./__mocks__";

export const useDeals = () => {
  return useMemo(() => mockedDeals, []);
};
