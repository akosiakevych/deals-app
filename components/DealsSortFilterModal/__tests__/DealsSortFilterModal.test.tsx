import { fireEvent, render, screen } from "@testing-library/react-native";

import DealsSortFilterModal from "..";

jest.mock("@expo/vector-icons", () => ({
  Ionicons: () => null,
}));

describe("DealsSortFilterModal", () => {
  const defaultProps = {
    visible: true,
    onClose: jest.fn(),
    sortMode: "default" as const,
    onSelectSortMode: jest.fn(),
    onlyRefurbedHighestScore: false,
    onToggleOnlyRefurbedHighestScore: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders filter and sort sections with options", () => {
    render(<DealsSortFilterModal {...defaultProps} />);

    expect(screen.getByText("Filter")).toBeTruthy();
    expect(screen.getByText("Sort by")).toBeTruthy();
    expect(screen.getByText("Only show deals with score 10")).toBeTruthy();
    expect(screen.getByText("Price · low to high")).toBeTruthy();
    expect(screen.getByText("Default order")).toBeTruthy();
  });

  it("calls onToggleOnlyRefurbedHighestScore when filter row is pressed", () => {
    const onToggleOnlyRefurbedHighestScore = jest.fn();
    render(
      <DealsSortFilterModal
        {...defaultProps}
        onToggleOnlyRefurbedHighestScore={onToggleOnlyRefurbedHighestScore}
      />,
    );

    fireEvent.press(screen.getByRole("checkbox"));
    expect(onToggleOnlyRefurbedHighestScore).toHaveBeenCalledTimes(1);
  });

  it("marks filter checkbox checked when onlyRefurbedHighestScore is true", () => {
    render(<DealsSortFilterModal {...defaultProps} onlyRefurbedHighestScore />);

    expect(screen.getByRole("checkbox").props.accessibilityState).toEqual({
      checked: true,
    });
  });

  it("calls onSelectSortMode and onClose when a sort option is pressed", () => {
    const onSelectSortMode = jest.fn();
    const onClose = jest.fn();
    render(
      <DealsSortFilterModal
        {...defaultProps}
        onSelectSortMode={onSelectSortMode}
        onClose={onClose}
      />,
    );

    fireEvent.press(screen.getByText("Price · high to low"));
    expect(onSelectSortMode).toHaveBeenCalledWith("price-desc");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when backdrop is pressed", () => {
    const onClose = jest.fn();
    render(<DealsSortFilterModal {...defaultProps} onClose={onClose} />);

    fireEvent.press(screen.getByLabelText("Close sort and filter menu"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
