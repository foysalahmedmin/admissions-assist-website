<<<<<<< HEAD
=======
/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

>>>>>>> update-project/main
import "./index.css";
import "material-icons/iconfont/material-icons.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "@/routes/router.jsx";
import store from "@/redux/store";
import ScrollProvider from "@/provider/ScrollProvider/ScrollProvider";
<<<<<<< HEAD

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
=======
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
>>>>>>> update-project/main
    <Provider store={store}>
      <ScrollProvider>
        <RouterProvider router={router} />
      </ScrollProvider>
    </Provider>
<<<<<<< HEAD
  </React.StrictMode>
=======
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  // </React.StrictMode>
>>>>>>> update-project/main
);
