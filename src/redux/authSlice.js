import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginUser: { email: "", access_token: "", refresh_token: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.loginUser.email = action.payload;
    },
    signIn: (state, action) => {
      state.loginUser.email = action.payload;
    },
    setToken: (state, action) => {
      state.loginUser.access_token = action.payload;
    },
    logOut: (state) => {
      state.loginUser = { email: "", access_token: "", refresh_token: "" };
    },
  },
});

export const { signUp, signIn, setToken, logOut } = authSlice.actions;

export default authSlice.reducer;
