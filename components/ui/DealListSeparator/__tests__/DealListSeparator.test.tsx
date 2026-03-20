import { render } from "@testing-library/react-native";

import DealListSeparator from "../index";

describe("DealListSeparator", () => {
  it("renders outer view with inner line view", () => {
    const { toJSON } = render(<DealListSeparator />);
    const root = toJSON();
    expect(root).toMatchObject({ type: "View" });
    const line = Array.isArray(root?.children) ? root?.children[0] : root?.children;
    expect(line).toMatchObject({ type: "View" });
  });
});
