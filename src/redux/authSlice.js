import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginUser: { email: "", access_token: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.loginUser.email = action.payload;
    },
    setToken: (state, action) => {
      state.loginUser.access_token = action.payload;
    },
  },
});

export const { signUp, setToken } = authSlice.actions;

export default authSlice.reducer;
