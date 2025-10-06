import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  outgoing_message: "",
  chat_id: "",
};

const aiChatSlice = createSlice({
  name: "aiChat",
  initialState,
  reducers: {
    setChatId: (state, action) => {
      state.chat_id = action.payload;
    },
    setOutgoingMessage: (state, action) => {
      state.outgoing_message = action.payload;
    },
  },
});

export const { setChatId, setOutgoingMessage } = aiChatSlice.actions;

export default aiChatSlice.reducer;
