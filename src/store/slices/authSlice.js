import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  isModalOpen: false,
  user: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setUser: (state, payload) => {
      state.user = payload;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = authSlice.actions;
export const authReducer = authSlice.reducer;
