import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
    sortBy: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    resetSearch: (state) => {
      state.searchQuery = "";
      state.sortBy = null;
    },
  },
});

export const { setSearchQuery, setSortBy, resetSearch } = searchSlice.actions;

export default searchSlice.reducer;
