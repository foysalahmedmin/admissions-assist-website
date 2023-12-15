import { configureStore } from "@reduxjs/toolkit";
import applicationFormReducer from "./applicationFormSlice/applicationFormSlice";
import progressReducer from "./progressSlice/progressSlice.js";
import filterReducer from "./filterSlice/filterSlice.js";
import tableReducer from "./tableSlice/tableSlice.js";
import studentCommonReducer from "./studentSlice/studentSlice.js";

export default configureStore({
  reducer: {
    application_form: applicationFormReducer,
    progress: progressReducer,
    filter: filterReducer,
    table: tableReducer,
    student: studentCommonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
