import { createSlice } from "@reduxjs/toolkit";

export const applicationFormSlice = createSlice({
  name: "application_form",
  initialState: {
    contact_information: {
      name: "",
    },
  },
  reducers: {
    setName: (state, action) => {
      state.contact_information.name = action.payload;
    },
  },
});
export const { setName } = applicationFormSlice.actions;
export default applicationFormSlice.reducer;
