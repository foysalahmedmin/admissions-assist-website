import "./index.css";
import "material-icons/iconfont/material-icons.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "@/routes/router.jsx";
import store from "@/redux/store";
import ScrollProvider from "@/provider/ScrollProvider/ScrollProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ScrollProvider>
        <RouterProvider router={router} />
      </ScrollProvider>
    </Provider>
  </React.StrictMode>
);
