import { createSlice } from "@reduxjs/toolkit";
// toolkit에서 return x 불변성 관리 안함

const initialState = {
  loginUserId: JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")).id : null,
  loginUserInfo: {},
  loginUserPosts: [],
};

const loginUserReducer = createSlice({
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

export const { setLoginUserInfo, setLoginUserPosts } = loginUserReducer.actions;
export default loginUserReducer.reducer;

//return { ...state, loginUserInfo: action.payload }; // 덮어씌워짐 뒤에쓰면
