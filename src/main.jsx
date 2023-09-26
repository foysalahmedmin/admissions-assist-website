import "./index.css";
import "material-icons/iconfont/material-icons.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/router.jsx";
import SectionProvider from "@/provider/sectionProvider/SectionProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SectionProvider>
      <RouterProvider router={router} />
    </SectionProvider>
  </React.StrictMode>
);
