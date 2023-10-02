import "./index.css";
import "material-icons/iconfont/material-icons.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/router.jsx";
import ScrollProvider from "./provider/ScrollProvider/ScrollProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollProvider>
      <RouterProvider router={router} />
    </ScrollProvider>
  </React.StrictMode>
);
