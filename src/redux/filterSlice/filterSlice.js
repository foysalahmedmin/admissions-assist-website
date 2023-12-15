/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {createSlice} from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search_tab: "universities",
    country: [],
    course_types: [],
    city: [],
    session: {},
    start_rank: 0,
    ielts: false,
    score: 0,
    assessment: false,
    level_3: false,
    experience: false,
    isPoint: false,
    point: 0,
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
    SetCourseType: (state, { payload }) => {
      let isAdded = state?.course_types?.some((x) => x?._id === payload?._id);
      if (!isAdded) {
        state.course_types = [...state.course_types, payload];
      } else {
        state.course_types = state.course_types?.filter(
          (x) => x?._id !== payload?._id
        );
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
      if (state.session.value === action.payload.value) {
        state.session = {};
      } else {
        state.session = action.payload;
      }
    },
    SetStartRank: (state, action) => {
      state.start_rank = action.payload;
    },
    SetEndRank: (state, action) => {
      state.end_rank = action.payload;
    },
    SetToggleIelts: (state) => {
      state.ielts = !state.ielts;
      if (!state.ielts) {
        state.score = 0;
      }
    },
    SetScore: (state, action) => {
      state.score = action.payload;
    },
    SetTogglePoint: (state) => {
      state.isPoint = !state.isPoint;
      if (!state.isPoint) {
        state.point = 0;
      }
    },
    SetPoint: (state, action) => {
      state.point = action.payload;
    },
    SetToggleAssessment: (state) => {
      state.assessment = !state.assessment;
    },
    SetToggleLevel3: (state) => {
      state.level_3 = !state.level_3;
    },
    SetToggleExperience: (state) => {
      state.experience = !state.experience;
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
  SetCourseType,
  SetToggleIelts,
  SetScore,
  SetTogglePoint,
  SetPoint,
  SetToggleAssessment,
  SetToggleLevel3,
  SetToggleExperience,
} = filterSlice.actions;
export default filterSlice.reducer;
