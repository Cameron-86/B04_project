import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import gameRankReducer from "./slices/gameRankSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    gameRank: gameRankReducer,
  },
});

export default store;
