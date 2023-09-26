import { lazy, Suspense } from "react";
import Loading from "@/components/Loading/Loading";
const Main = lazy(() => import("@/layout/Main"));
const Home = lazy(() => import("@/pages/Common/Home/Home/Home"));
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
