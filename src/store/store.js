import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import loginUserReducer from "./slices/loginUserSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    loginUser: loginUserReducer,
  },
});

export default store;
