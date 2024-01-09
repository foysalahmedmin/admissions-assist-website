/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {createSlice} from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chat: {},
    isSelected: false,
    me: {},
  },
  reducers: {
    SetChat: (state, action) => {
      state.chat = action.payload;
    },
    SetMe: (state, action) => {
      state.me = action.payload;
    },
    ToggleSelected: (state, action) => {
      state.isSelected = !state.isSelected;
    },
  },
});
export const { SetChat, SetMe, ToggleSelected } = chatSlice.actions;
export default chatSlice.reducer;
