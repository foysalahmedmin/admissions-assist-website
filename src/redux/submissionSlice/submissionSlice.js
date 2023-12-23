/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {createSlice} from "@reduxjs/toolkit";

export const submissionSlice = createSlice({
  name: "submission",
  initialState: {
    processes: "",
    application: "",
    sl: null,
    text: "",
    attachment: "",
    attachment_new: "",
    date: "",
    lists: [],
    updated_lists: [],
  },
  reducers: {
    SetProcesses: (state, action) => {
      state.processes = action.payload;
    },
    SetApplication: (state, action) => {
      state.application = action.payload;
    },
    SetSl: (state, action) => {
      state.sl = action.payload;
    },
    SetText: (state, action) => {
      state.text = action.payload;
    },
    SetAttachment: (state, action) => {
      state.attachment = action.payload;
    },
    SetAttachmentNew: (state, action) => {
      state.attachment_new = action.payload;
    },
    SetDate: (state, action) => {
      state.date = action.payload;
    },
    SetLists: (state, action) => {
      state.lists = action.payload;
    },
    SetUpdatedLists: (state, action) => {
      state.updated_lists = action.payload;
    },
    SetResetSubmission: (state) => {
      state.processes = "";
      state.application = "";
      state.sl = null;
      state.text = "";
      state.attachment = "";
      state.date = "";
      state.lists = [];
      state.updated_lists = [];
    },
  },
});
export const {
  SetProcesses,
  SetApplication,
  SetSl,
  SetText,
  SetAttachment,
  SetAttachmentNew,
  SetDate,
  SetLists,
  SetUpdatedLists,
  SetResetSubmission,
} = submissionSlice.actions;
export default submissionSlice.reducer;
