/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {createSlice} from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search_tab: "universities",
    country: [],
    city: [],
    session: {},
    start_rank: 0,
    end_rank: 0,
  },
  reducers: {
    SetSearchTab: (state, action) => {
      state.search_tab = action.payload;
    },
    SetCountry: (state, { payload }) => {
      let isAdded = state?.country?.some((x) => x?.value === payload?.value);
      if (!isAdded) {
        state.country = [...state.country, payload];
        state.city = state.city?.filter((x) => x?.country !== payload?.value);
      } else {
        state.country = state.country?.filter(
          (x) => x?.value !== payload?.value
        );
        state.city = state.city?.filter((x) => x?.country !== payload?.value);
      }
    },
    SetCity: (state, { payload }) => {
      let isAdded = state?.city?.some((x) => x?.value === payload?.value);
      if (!isAdded) {
        state.city = [...state.city, payload];
      } else {
        state.city = state.city?.filter((x) => x?.value !== payload?.value);
      }
    },
    SetSession: (state, action) => {
      state.session = action.payload;
    },
    SetStartRank: (state, action) => {
      state.start_rank = action.payload;
    },
    SetEndRank: (state, action) => {
      state.end_rank = action.payload;
    },
    SetRemoveCity: (state, { payload }) => {
      state.city = state.city?.filter((x) => x?.value !== payload?.value);
    },
    SetRemoveCountry: (state, { payload }) => {
      state.country = state.country?.filter((x) => x?.value !== payload?.value);
      state.city = state.city?.filter((x) => x?.country !== payload?.value);
    },
    SetRemoveSession: (state) => {
      state.session = {};
    },
    SetRemoveRanking: (state) => {
      state.start_rank = 0;
      state.end_rank = 0;
    },
  },
});
export const {
  SetSearchTab,
  SetCountry,
  SetCity,
  SetSession,
  SetStartRank,
  SetEndRank,
  SetRemoveCountry,
  SetRemoveCity,
  SetRemoveSession,
  SetRemoveRanking,
} = filterSlice.actions;
export default filterSlice.reducer;
