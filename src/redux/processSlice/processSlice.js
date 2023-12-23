/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {createSlice} from "@reduxjs/toolkit";

export const processSlice = createSlice({
  name: "processes",
  initialState: {
    stepTab: {},
  },
  reducers: {
    SetStepTab: (state, action) => {
      state.stepTab = action.payload;
    },
  },
});
export const { SetStepTab } = processSlice.actions;
export default processSlice.reducer;
