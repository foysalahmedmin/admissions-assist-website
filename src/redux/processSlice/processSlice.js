/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {createSlice} from "@reduxjs/toolkit";

export const processSlice = createSlice({
  name: "processes",
  initialState: {
    stepTab: {},
    last_step: null,
  },
  reducers: {
    SetStepTab: (state, action) => {
      state.stepTab = action.payload;
    },
    SetLastStep: (state, action) => {
      state.last_step = action.payload;
    },
  },
});
export const { SetStepTab, SetLastStep } = processSlice.actions;
export default processSlice.reducer;
