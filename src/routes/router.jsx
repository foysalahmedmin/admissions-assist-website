import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "@/components/Loading/Loading";
const Main = lazy(() => import("@/layout/Main"));
const Search = lazy(() => import("@/layout/Search"));
const Student = lazy(() => import("@/layout/Student"));
const Authentication = lazy(() => import("@/layout/Authentication"));
const Home = lazy(() => import("@/pages/Common/Home/Home/Home"));
const Contact = lazy(() => import("@/pages/Common/Contact/Contact/Contact"));
const Blogs = lazy(() => import("@/pages/Common/Blogs/Blogs/Blogs"));
const Blog = lazy(() => import("@/pages/Common/Blog/Blog/Blog"));
const Courses = lazy(() => import("@/pages/Search/Courses/Courses/Courses"));
const Universities = lazy(() =>
  import("@/pages/Search/Universities/Universities/Universities")
);
const Course = lazy(() => import("@/pages/Common/Course/Course/Course"));
const University = lazy(() =>
  import("@/pages/Common/University/University/University")
);
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
        path: "/blogs",
        element: (
          <Suspense fallback={<Loading />}>
            <Blogs />
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
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<Loading />}>
                <Courses />
              </Suspense>
            ),
          },
          {
            path: "courses",
            element: (
              <Suspense fallback={<Loading />}>
                <Courses />
              </Suspense>
            ),
          },
          {
            path: "universities",
            element: (
              <Suspense fallback={<Loading />}>
                <Universities />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/blog/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "/course/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <Course />
          </Suspense>
        ),
      },
      {
        path: "/university/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <University />
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
