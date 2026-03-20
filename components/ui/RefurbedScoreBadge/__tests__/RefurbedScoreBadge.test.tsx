import { render, screen } from "@testing-library/react-native";

import RefurbedScoreBadge from "../index";

describe("RefurbedScoreBadge", () => {
  it("renders label, score, and accessibility label for the given score", () => {
    render(<RefurbedScoreBadge score={8} />);
    expect(screen.getByLabelText("Refurbed score 8 out of 10")).toBeTruthy();
    expect(screen.getByText("Refurbed")).toBeTruthy();
    expect(screen.getByText("8/10")).toBeTruthy();
  });
});
