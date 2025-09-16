import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { email: "", access_token: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user.email = action.payload;
    },
    setToken: (state, action) => {
      state.user.access_token = action.payload;
    },
  },
});

export const { signUp, setToken } = authSlice.actions;

export default authSlice.reducer;
