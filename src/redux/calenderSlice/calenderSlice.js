/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {createSlice} from "@reduxjs/toolkit";

export const calenderSlice = createSlice({
  name: "calender",
  initialState: {
    date: new Date(),
    view: "weekly",
  },
  reducers: {
    SetCalenderDate: (state, action) => {
      state.date = action.payload;
    },
    SetCalenderView: (state, action) => {
      state.view = action.payload;
    },
  },
});
export const { SetCalenderDate, SetCalenderView } = calenderSlice.actions;
export default calenderSlice.reducer;
