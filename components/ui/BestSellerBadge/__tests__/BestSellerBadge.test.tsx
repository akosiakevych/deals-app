import { render, screen } from "@testing-library/react-native";

import BestSellerBadge from "../index";

describe("BestSellerBadge", () => {
  it("renders nothing when visible is false", () => {
    const { toJSON } = render(<BestSellerBadge visible={false} />);
    expect(toJSON()).toBeNull();
  });

  it("renders badge with accessibility label and copy when visible", () => {
    render(<BestSellerBadge visible />);
    expect(screen.getByLabelText("Best seller")).toBeTruthy();
    expect(screen.getByText("Best seller")).toBeTruthy();
  });
});
