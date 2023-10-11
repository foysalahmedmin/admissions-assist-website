import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "@/components/Loading/Loading";
const Main = lazy(() => import("@/layout/Main"));
const Student = lazy(() => import("@/layout/Student"));
const Authentication = lazy(() => import("@/layout/Authentication"));
const Home = lazy(() => import("@/pages/Common/Home/Home/Home"));
const Contact = lazy(() => import("@/pages/Common/Contact/Contact/Contact"));
const Search = lazy(() => import("@/pages/Common/Search/Search/Search"));
const Login = lazy(() => import("@/pages/Authentication/Login/Login/Login"));
const SignUp = lazy(() =>
  import("@/pages/Authentication/SignUp/SignUp/SignUp")
);
const Profile = lazy(() => import("@/pages/Student/Profile/Profile/Profile"));
const Application = lazy(() =>
  import("@/pages/Student/Application/Application/Application")
);
const BookSession = lazy(() =>
  import("@/pages/Student/BookSession/BookSession/BookSession")
);

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
        path: "/contact",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<Loading />}>
            <Search />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/student",
    element: (
      <Suspense fallback={<Loading />}>
        <Student />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "application",
        element: (
          <Suspense fallback={<Loading />}>
            <Application />
          </Suspense>
        ),
      },
      {
        path: "book_session",
        element: (
          <Suspense fallback={<Loading />}>
            <BookSession />
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
