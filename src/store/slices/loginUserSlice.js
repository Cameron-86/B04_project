import { createSlice } from "@reduxjs/toolkit";
// toolkit에서 return x 불변성 관리 안함

const initialState = {
  loginUserInfo: {},
  loginUserPosts: [],
};

const loginUserSlice = createSlice({
  initialState,
  name: "loginUser",
  reducers: {
    setLoginUserInfo: (state, action) => {
      state.loginUserInfo = action.payload;
    },
    setLoginUserPosts: (state, action) => {
      state.loginUserPosts = action.payload;
    },
  },
});
// get-> select 나한테 내가 쓰기 위해,  set -> 어딘가에 저장하거나 업데이트

export const { setLoginUserInfo, setLoginUserPosts } = loginUserSlice.actions;
export const loginUserReducer = loginUserSlice.reducer;

//return { ...state, loginUserInfo: action.payload }; // 덮어씌워짐 뒤에쓰면
