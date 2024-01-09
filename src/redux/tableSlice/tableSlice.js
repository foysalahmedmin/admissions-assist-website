/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {createSlice} from "@reduxjs/toolkit";

export const tableSlice = createSlice({
  name: "table",
  initialState: {
    page: 1,
    limit: 10,
    search: "",
    total: 0,
    sort: -1,
  },
  reducers: {
    SetSearch: (state, { payload }) => {
      state.search = payload;
    },
    SetPage: (state, { payload }) => {
      state.page = payload;
    },
    SetLimit: (state, { payload }) => {
      state.limit = payload;
    },
    SetTotal: (state, { payload }) => {
      state.total = payload;
    },
    SetSort: (state, { payload }) => {
      state.sort = payload;
    },
  },
});
export const { SetSearch, SetPage, SetLimit, SetTotal, SetSort } =
  tableSlice.actions;
export default tableSlice.reducer;
