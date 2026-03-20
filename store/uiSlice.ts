import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { DealSortMode } from "@/utils/sortDeals";

export type UiState = {
  sortBy: DealSortMode;
  onlyRefurbedHighestScore: boolean;
};

const initialState: UiState = {
  sortBy: "default",
  onlyRefurbedHighestScore: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSortBy(state, action: PayloadAction<DealSortMode>) {
      state.sortBy = action.payload;
    },
    toggleOnlyRefurbedHighestScore(state) {
      state.onlyRefurbedHighestScore = !state.onlyRefurbedHighestScore;
    },
  },
});

export const { setSortBy, toggleOnlyRefurbedHighestScore } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;

export default uiSlice;
