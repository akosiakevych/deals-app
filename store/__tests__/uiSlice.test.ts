import {
  setSortBy,
  toggleOnlyRefurbedHighestScore,
  uiReducer,
} from "@/store/uiSlice";

describe("uiSlice", () => {
  it("starts with default sort and filter off", () => {
    const state = uiReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
      sortBy: "default",
      onlyRefurbedHighestScore: false,
    });
  });

  it("setSortBy updates sortBy", () => {
    const next = uiReducer(undefined, setSortBy("price-desc"));
    expect(next.sortBy).toBe("price-desc");
    expect(next.onlyRefurbedHighestScore).toBe(false);
  });

  it("toggleOnlyRefurbedHighestScore flips the flag", () => {
    const once = uiReducer(undefined, toggleOnlyRefurbedHighestScore());
    expect(once.onlyRefurbedHighestScore).toBe(true);
    const twice = uiReducer(once, toggleOnlyRefurbedHighestScore());
    expect(twice.onlyRefurbedHighestScore).toBe(false);
  });
});
