import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { email: "", password: "" },
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
      state.isAuthenticated = true;
    },
  },
});

export const { signUp } = authSlice.actions;

export default authSlice.reducer;
