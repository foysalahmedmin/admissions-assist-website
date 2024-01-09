/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchStudentData} from "@/redux/studentSlice/api.js";

export const fetchCommonStudent = createAsyncThunk(
  "student/common",
  async () => {
    return await fetchStudentData();
  }
);

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    student: {},
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommonStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCommonStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchCommonStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const student = (state) => state.student.student;
export default studentSlice.reducer;
