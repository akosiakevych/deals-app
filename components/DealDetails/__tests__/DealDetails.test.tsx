import { render, screen } from "@testing-library/react-native";
import { useLocalSearchParams } from "expo-router";

import { mockedDeals } from "@/api/hooks/deals/__mocks__";
import { useDeal } from "@/api/hooks/deals/queryHooks";
import { priceFormatter } from "@/utils";

import DealDetailsComponent from "../index";

jest.mock("expo-router", () => ({
  useLocalSearchParams: jest.fn(),
}));

jest.mock("@/api/hooks/deals/queryHooks", () => ({
  useDeal: jest.fn(),
}));

type MockedDeal = (typeof mockedDeals)[number];

const mockDeal: MockedDeal = {
  id: "deal-42",
  title: "Mock Deal Title",
  price: 199,
  discountPercentage: 12,
  refurbedScore: 9,
  category: "Books",
  rating: 4.2,
  imageUrl: "https://example.com/deal.jpg",
};

describe("DealDetailsComponent", () => {
  beforeEach(() => {
    jest.mocked(useLocalSearchParams).mockReturnValue({ id: "deal-42" });
    jest.mocked(useDeal).mockReturnValue(mockDeal);
  });

  it("renders nothing when there is no deal", () => {
    jest.mocked(useDeal).mockReturnValue(undefined);
    const { toJSON } = render(<DealDetailsComponent />);
    expect(toJSON()).toBeNull();
  });

  it("renders header, description, price, and discount badge from the deal", () => {
    render(<DealDetailsComponent />);
    expect(screen.getByText("Mock Deal Title")).toBeTruthy();
    expect(
      screen.getByText("Rated 4.2 out of 5 · Save 12% off retail."),
    ).toBeTruthy();
    expect(screen.getAllByText(priceFormatter.format(199)).length).toBe(2);
    expect(screen.getByLabelText("12 percent discount")).toBeTruthy();
    expect(
      screen.queryByLabelText("Refurbed score 9 out of 10"),
    ).toBeNull();
  });

  it("renders detail rows", () => {
    render(<DealDetailsComponent />);
    expect(screen.getByText("Category")).toBeTruthy();
    expect(screen.getByText("Books")).toBeTruthy();
    expect(screen.getByText("Listing ID")).toBeTruthy();
    expect(screen.getByText("deal-42")).toBeTruthy();
    expect(screen.getByText("4.2 / 5")).toBeTruthy();
    expect(screen.getByText("12%")).toBeTruthy();
    expect(screen.getByText("Refurbed score")).toBeTruthy();
    expect(screen.getByText("9 / 10")).toBeTruthy();
  });
});
