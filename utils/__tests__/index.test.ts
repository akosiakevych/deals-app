import { priceFormatter } from "@/utils";

describe("priceFormatter", () => {
  it("is an Intl.NumberFormat configured for USD", () => {
    expect(priceFormatter).toBeInstanceOf(Intl.NumberFormat);
    expect(priceFormatter.resolvedOptions().style).toBe("currency");
    expect(priceFormatter.resolvedOptions().currency).toBe("USD");
    expect(priceFormatter.resolvedOptions().maximumFractionDigits).toBe(0);
  });

  it("formats whole dollar amounts with grouping", () => {
    expect(priceFormatter.format(0)).toBe("$0");
    expect(priceFormatter.format(1)).toBe("$1");
    expect(priceFormatter.format(1234)).toBe("$1,234");
  });

  it("rounds fractional amounts to whole dollars", () => {
    expect(priceFormatter.format(99.4)).toBe("$99");
    expect(priceFormatter.format(99.5)).toBe("$100");
  });
});
