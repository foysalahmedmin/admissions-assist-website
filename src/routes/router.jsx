<<<<<<< HEAD
import Loading from "@/components/Loading/Loading";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

/* Layouts */
const Main = lazy(() => import("@/layout/Main"));
const Search = lazy(() => import("@/layout/Search"));
=======
/*
 * Copyright (c) 2023-2024. This product is copyright by Rian
 */

import Loading from "@/components/Loading/Loading";
import {lazy, Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";
import SignUpUpdate from "@/pages/Authentication/Update/SignUp/SignUpUpdate.jsx";

/* Layouts */
const SignUpInfoForm = lazy(() =>
  import("@/pages/Authentication/Update/SignUpInfoForm/SignUpUpdateForm.jsx")
);
const Main = lazy(() => import("@/layout/Main"));
const Search = lazy(() => import("@/layout/Search"));
const Meet = lazy(() => import("@/layout/Meet.jsx"));
const MeetBody = lazy(() => import("@/pages/ChatSystem/Meet/Meet.jsx"));
>>>>>>> update-project/main
// const Student = lazy(() => import("@/layout/Student"));
const ChatSystem = lazy(() => import("@/layout/ChatSystem"));
const Authentication = lazy(() => import("@/layout/Authentication"));
/* Main Layout's Pages */
const Home = lazy(() => import("@/pages/Common/Home/Home/Home"));
const Contact = lazy(() => import("@/pages/Common/Contact/Contact/Contact"));
const Notifications = lazy(() =>
  import("@/pages/Common/Notifications/Notifications/Notifications")
);
const PrivacyPolicy = lazy(() =>
  import("@/pages/Common/PrivacyPolicy/PrivacyPolicy/PrivacyPolicy")
);
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
/* Authentication Layout's Pages */
const Login = lazy(() => import("@/pages/Authentication/Login/Login/Login"));
const SignUp = lazy(() =>
  import("@/pages/Authentication/SignUp/SignUp/SignUp")
);
/* Student Layout's Pages */
const Profile = lazy(() => import("@/pages/Student/Profile/Profile/Profile"));
const Application = lazy(() =>
  import("@/pages/Student/Application/Application/Application")
);
const BookSession = lazy(() =>
  import("@/pages/Student/BookSession/BookSession/BookSession")
);
/* Chat system Layout's Pages */
const MoveToChat = lazy(() => import("@/pages/ChatSystem/Outlet/MoveToChat"));
const Chat = lazy(() => import("@/pages/ChatSystem/Outlet/Chat/Chat/Chat"));
const Files = lazy(() => import("@/pages/ChatSystem/Outlet/Files/Files/Files"));
const Calendar = lazy(() =>
  import("@/pages/ChatSystem/Outlet/Calendar/Calendar/Calendar")
);
const Calls = lazy(() => import("@/pages/ChatSystem/Outlet/Calls/Calls/Calls"));

const router = createBrowserRouter([
  {
    path: "/",
<<<<<<< HEAD
=======
    //no_need
>>>>>>> update-project/main
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        path: "/",
<<<<<<< HEAD
=======
        //no_need
>>>>>>> update-project/main
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/contact",
<<<<<<< HEAD
=======
        //done
>>>>>>> update-project/main
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
<<<<<<< HEAD
=======
        path: "/meet",
        element: (
          <Suspense fallback={<Loading />}>
            <Meet />
          </Suspense>
        ),
      },
      {
>>>>>>> update-project/main
        path: "/notifications",
        element: (
          <Suspense fallback={<Loading />}>
            <Notifications />
          </Suspense>
        ),
      },
      {
        path: "/privacy_policy",
        element: (
          <Suspense fallback={<Loading />}>
            <PrivacyPolicy />
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
<<<<<<< HEAD
=======
        //no_need
>>>>>>> update-project/main
        element: (
          <Suspense fallback={<Loading />}>
            <Search />
          </Suspense>
        ),
        children: [
          {
            path: "",
<<<<<<< HEAD
=======
            //no_need
>>>>>>> update-project/main
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
<<<<<<< HEAD
=======
            //done
>>>>>>> update-project/main
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
<<<<<<< HEAD
        path: "/course/:id",
=======
        path: "/course/:sId/:rId/:uId",
        //done
>>>>>>> update-project/main
        element: (
          <Suspense fallback={<Loading />}>
            <Course />
          </Suspense>
        ),
      },
      {
        path: "/university/:id",
<<<<<<< HEAD
=======
        //done
>>>>>>> update-project/main
        element: (
          <Suspense fallback={<Loading />}>
            <University />
          </Suspense>
        ),
      },
      {
        path: "profile",
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
<<<<<<< HEAD
  // {
  //   path: "/student",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Student />
  //     </Suspense>
  //   ),
  //   children: [],
  // },
  {
    path: "/chat_system",
=======
  {
    path: "/chat_system",
    //no_need
>>>>>>> update-project/main
    element: (
      <Suspense fallback={<Loading />}>
        <ChatSystem />
      </Suspense>
    ),
    children: [
      {
        path: "",
<<<<<<< HEAD
=======
        //no_need
>>>>>>> update-project/main
        element: (
          <Suspense fallback={<Loading />}>
            <MoveToChat />
          </Suspense>
        ),
      },
      {
        path: "chat",
        element: (
          <Suspense fallback={<Loading />}>
            <Chat />
          </Suspense>
        ),
      },
      {
        path: "files",
        element: (
          <Suspense fallback={<Loading />}>
            <Files />
          </Suspense>
        ),
      },
      {
        path: "calendar",
        element: (
          <Suspense fallback={<Loading />}>
            <Calendar />
          </Suspense>
        ),
      },
      {
        path: "calls",
        element: (
          <Suspense fallback={<Loading />}>
            <Calls />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/authentication",
<<<<<<< HEAD
=======
    //no_need
>>>>>>> update-project/main
    element: (
      <Suspense fallback={<Loading />}>
        <Authentication />
      </Suspense>
    ),
    children: [
      {
        path: "login",
<<<<<<< HEAD
=======
        //done
>>>>>>> update-project/main
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "sign_up",
<<<<<<< HEAD
=======
        //done
>>>>>>> update-project/main
        element: (
          <Suspense fallback={<Loading />}>
            <SignUp />
          </Suspense>
        ),
      },
<<<<<<< HEAD
=======
      {
        path: "update_profile",
        //done
        element: (
          <Suspense fallback={<Loading />}>
            <SignUpUpdate />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/meet/:id/:title",
    //no_need
    element: (
      <Suspense fallback={<Loading />}>
        <Meet />
      </Suspense>
    ),
    children: [
      {
        path: "",
        //done
        element: (
          <Suspense fallback={<Loading />}>
            <MeetBody />
          </Suspense>
        ),
      },
>>>>>>> update-project/main
    ],
  },
]);

export default router;
