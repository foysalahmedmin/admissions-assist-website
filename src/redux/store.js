import { configureStore } from "@reduxjs/toolkit";
import applicationFormReducer from "./applicationFormSlice/applicationFormSlice";

export default configureStore({
    reducer: {
        application_form : applicationFormReducer
    }
});