import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "@/components/Loading/Loading";
const Main = lazy(() => import("@/layout/Main"));
const Authentication = lazy(() => import("@/layout/Authentication"));
const Home = lazy(() => import("@/pages/Common/Home/Home/Home"));
const Login = lazy(() => import("@/pages/Authentication/Login/Login/Login"));
const SignUp = lazy(() =>
  import("@/pages/Authentication/SignUp/SignUp/SignUp")
);
const Profile = lazy(() => import("@/pages/Student/Profile/Profile/Profile"));

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
      {
        path: "/student",
        element: (
          <Suspense fallback={<Loading />}>
            <Profile />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/authentication",
    element: (
      <Suspense fallback={<Loading />}>
        <Authentication />
      </Suspense>
    ),
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "sign_up",
        element: (
          <Suspense fallback={<Loading />}>
            <SignUp />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
