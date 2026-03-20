import { render, screen } from "@testing-library/react-native";

import DiscountBadge from "../index";

describe("DiscountBadge", () => {
  it("renders discount text and accessibility label for the given percentage", () => {
    render(<DiscountBadge percentage={15} />);
    expect(screen.getByLabelText("15 percent discount")).toBeTruthy();
    expect(screen.getByText("−15%")).toBeTruthy();
  });
});
