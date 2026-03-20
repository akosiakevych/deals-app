import { render, screen } from "@testing-library/react-native";

import { Deal } from "@/types";
import { priceFormatter } from "@/utils";

import DealListItem from "../index";

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
  isBestSeller: false,
  imageUrl: "https://example.com/item.jpg",
};

describe("DealListItem", () => {
  it("renders title, price, discount, and refurbed score", () => {
    render(<DealListItem deal={baseDeal} />);
    expect(screen.getByText("List Item Title")).toBeTruthy();
    expect(screen.getByText(priceFormatter.format(149))).toBeTruthy();
    expect(screen.getByLabelText("18 percent discount")).toBeTruthy();
    expect(screen.getByLabelText("Refurbed score 7 out of 10")).toBeTruthy();
  });

  it("sets row accessibility label without best seller when not a best seller", () => {
    render(<DealListItem deal={baseDeal} />);
    expect(
      screen.getByLabelText(
        "List Item Title, $149, 18 percent off, refurbed score 7 out of 10",
      ),
    ).toBeTruthy();
  });

  it("includes best seller in accessibility label and renders badge when applicable", () => {
    render(<DealListItem deal={{ ...baseDeal, isBestSeller: true }} />);
    expect(
      screen.getByLabelText(
        "List Item Title, $149, 18 percent off, refurbed score 7 out of 10, best seller",
      ),
    ).toBeTruthy();
    expect(screen.getByLabelText("Best seller")).toBeTruthy();
  });
});
