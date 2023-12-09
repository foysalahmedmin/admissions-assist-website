/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {createSlice} from "@reduxjs/toolkit";

export const progressSlice = createSlice({
  name: "progress",
  initialState: {
    register: 0,
  },
  reducers: {
    SetRegister: (state, action) => {
      state.register = action.payload;
    },
  },
});
export const { SetRegister } = progressSlice.actions;
export default progressSlice.reducer;
