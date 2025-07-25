import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
  selectedFilters: Record<string, string>;
};

const initialState: FilterState = {
  selectedFilters: {},
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    
    setFilter: (
      state,
      action: PayloadAction<{ category: string; value: string }>
    ) => {
      const { category, value } = action.payload;
      state.selectedFilters[category] = value;
    },

    removeFilter: (state, action: PayloadAction<string>) => {
      delete state.selectedFilters[action.payload];
    },
    clearFilters: (state) => {
      state.selectedFilters = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilter, removeFilter, clearFilters } = filterSlice.actions;

export default filterSlice.reducer;
