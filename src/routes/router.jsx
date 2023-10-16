import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "@/components/Loading/Loading";
import Courses from "@/pages/Search/Courses/Courses/Courses";
const Main = lazy(() => import("@/layout/Main"));
const Search = lazy(() => import("@/layout/Search"));
const Student = lazy(() => import("@/layout/Student"));
const Authentication = lazy(() => import("@/layout/Authentication"));
const Home = lazy(() => import("@/pages/Common/Home/Home/Home"));
const Contact = lazy(() => import("@/pages/Common/Contact/Contact/Contact"));
const Blogs = lazy(() => import("@/pages/Common/Blogs/Blogs/Blogs"));
// const Courses = lazy(() => import("@/pages/Search/Courses/Courses/Courses"));
const Universities = lazy(() =>
  import("@/pages/Search/Universities/Universities/Universities")
);
const CourseDetails = lazy(() =>
  import("@/pages/Common/CourseDetails/CourseDetails/CourseDetails")
);
const UniversityDetails = lazy(() =>
  import("@/pages/Common/UniversityDetails/UniversityDetails/UniversityDetails")
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
            children: [
              {
                path: ":id",
                element: (
                  <Suspense fallback={<Loading />}>
                    <CourseDetails />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "universities",
            element: (
              <Suspense fallback={<Loading />}>
                <Universities />
              </Suspense>
            ),
            children: [
              {
                path: ":id",
                element: (
                  <Suspense fallback={<Loading />}>
                    <UniversityDetails />
                  </Suspense>
                ),
              },
            ],
          },
        ],
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
