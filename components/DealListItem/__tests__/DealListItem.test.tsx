import { fireEvent, render, screen } from "@testing-library/react-native";

import { AnalyticsEventName, trackEvent } from "@/analytics";
import { Deal } from "@/types";
import { priceFormatter } from "@/utils";

import DealListItem from "../index";

jest.mock("@/analytics", () => ({
  ...jest.requireActual<typeof import("@/analytics")>("@/analytics"),
  trackEvent: jest.fn(),
}));

jest.mock("expo-router", () => ({
  Link: ({ children }: { children: React.ReactElement }) => children,
}));

const baseDeal: Deal = {
  id: "item-1",
  title: "List Item Title",
  price: 149,
  discountPercentage: 18,
  refurbedScore: 7,
  category: "Electronics",
  rating: 4,
  imageUrl: "https://example.com/item.jpg",
};

describe("DealListItem", () => {
  beforeEach(() => {
    jest.mocked(trackEvent).mockClear();
  });

  it("tracks deal click when row is pressed", () => {
    render(<DealListItem deal={baseDeal} />);
    fireEvent.press(screen.getByRole("button"));
    expect(trackEvent).toHaveBeenCalledTimes(1);
    expect(trackEvent).toHaveBeenCalledWith(AnalyticsEventName.DealClicked, {
      dealId: "item-1",
    });
  });

  it("renders title, price, discount, and refurbed score", () => {
    render(<DealListItem deal={baseDeal} />);
    expect(screen.getByText("List Item Title")).toBeTruthy();
    expect(screen.getByText(priceFormatter.format(149))).toBeTruthy();
    expect(screen.getByLabelText("18 percent discount")).toBeTruthy();
    expect(screen.getByLabelText("Refurbed score 7 out of 10")).toBeTruthy();
  });

  it("sets row accessibility label with title, price, discount, and score", () => {
    render(<DealListItem deal={baseDeal} />);
    expect(
      screen.getByLabelText(
        "List Item Title, $149, 18 percent off, refurbed score 7 out of 10",
      ),
    ).toBeTruthy();
  });
});
