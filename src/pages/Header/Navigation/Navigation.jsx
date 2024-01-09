<<<<<<< HEAD
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MenuToggle } from "@/pages/Header/Navigation/MenuToggle";
import ActiveLink from "@/components/ActiveLink/ActiveLink";
import logo from "@/assets/images/logo.svg";
import logoDark from "@/assets/images/logo-dark.svg";
import NavMenus from "@/pages/Header/Navigation/NavMenus";
import useMenuAnimation from "@/hooks/useMenuAnimation/useMenuAnimation";
import useScrollSpy from "@/hooks/useScrollSpy/useScrollSpy";
import Button from "@/components/Buttons/Button";
import { LuUser2 } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

const Navigation = ({className}) => {
=======
/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import avatar from "@/assets/images/icons/profile-user.svg";
import logoDark from "@/assets/images/logo-dark.svg";
import logo from "@/assets/images/logo.svg";
import ActiveLink from "@/components/ActiveLink/ActiveLink";
import Button from "@/components/Buttons/Button";
import useMenuAnimation from "@/hooks/useMenuAnimation/useMenuAnimation";
import useScrollSpy from "@/hooks/useScrollSpy/useScrollSpy";
import {MenuToggle} from "@/pages/Header/Navigation/MenuToggle";
import NavMenus from "@/pages/Header/Navigation/NavMenus";
import {useState} from "react";
import {LuArrowRightFromLine, LuBell, LuUser2} from "react-icons/lu";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {twMerge} from "tailwind-merge";
import {useMutation, useQuery} from "react-query";
import {fetchNotificationCount} from "@/network/notification.js";
import {fetchStudentData} from "@/redux/studentSlice/api.js";
import {urls} from "@/apis/config/urls.js";
import {MakeLogout} from "@/pages/Authentication/requests/auth.js";
import {toast} from "react-toastify";

// eslint-disable-next-line react/prop-types
const Navigation = ({ className }) => {
  const auth = JSON.parse(localStorage.getItem("aa_website"));
  const { data: student } = useQuery({
    queryKey: ["common_student"],
    queryFn: () => fetchStudentData(),
  });
>>>>>>> update-project/main
  const navigation = useNavigate();
  const location = useLocation();
  const { isScrolled } = useScrollSpy();
  const [menuActive, setMenuActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

<<<<<<< HEAD
=======
  const { data: count } = useQuery({
    queryKey: ["my_count"],
    queryFn: () => fetchNotificationCount(),
  });

  const { mutateAsync } = useMutation({
    mutationFn: MakeLogout,
    onSuccess: () => {
      localStorage.removeItem("aa_website");
      navigation("/authentication/login");
    },
  });

>>>>>>> update-project/main
  return (
    <nav
      ref={scope}
      className={`w-full z-30 top-0 ${
<<<<<<< HEAD
        location.pathname == "/"
=======
        location.pathname === "/"
>>>>>>> update-project/main
          ? isScrolled
            ? "glass fixed text-white"
            : "fixed text-white"
          : "sticky bg-white"
      }`}
    >
<<<<<<< HEAD
      <div className={twMerge('mx-auto', className)}>
        <div className="h-20 flex justify-between items-center gap-2 lg:gap-4">
          <div className="h-full flex lg:gap-10 gap-4 items-center">
            <div className="lg:hidden pt-2 flex items-center">
              <MenuToggle color={location.pathname === "/" ? 'white' : '#555F64'} toggle={() => setIsOpen(!isOpen)} />
=======
      <div className={twMerge("mx-auto", className)}>
        <div className="h-20 flex justify-between items-center gap-2 lg:gap-4">
          <div className="h-full flex lg:gap-10 gap-4 items-center">
            <div className="lg:hidden pt-2 flex items-center">
              <MenuToggle
                color={location.pathname === "/" ? "white" : "#555F64"}
                toggle={() => setIsOpen(!isOpen)}
              />
>>>>>>> update-project/main
            </div>
            <div className="h-10">
              <img
                style={{ cursor: "pointer" }}
                onClick={() => navigation("/")}
                className="h-full"
                src={location.pathname === "/" ? logo : logoDark}
                alt="logo"
                loading="lazy"
              />
            </div>
            <div>
              <ul className="lg:flex lg:w-auto lg:scale-x-100 lg:gap-4 lg:items-center lg:transition-all hidden">
                <NavMenus
                  menuActive={menuActive}
                  setMenuActive={setMenuActive}
                />
              </ul>
              <ul
                className={`menu w-[300px] min-h-screen-less-20 absolute z-50 top-20 left-0 leading-10 p-5 origin-left scale-x-0 lg:hidden ${
<<<<<<< HEAD
                  location.pathname == "/" ? "glass" : "bg-white"
=======
                  location.pathname === "/" ? "glass" : "bg-white"
>>>>>>> update-project/main
                }`}
              >
                <NavMenus
                  menuActive={menuActive}
                  setMenuActive={setMenuActive}
                />
              </ul>
            </div>
          </div>
<<<<<<< HEAD
          <div className="flex gap-2 lg:gap-4 items-center">
            <ActiveLink to={"/authentication/login"}>
              <Button
                className={"ghost-btn flex-row-reverse"}
                text={"Log In"}
                icon={<LuUser2 className="text-2xl" />}
              />
            </ActiveLink>
            <Link to={"/authentication/sign_up"} className="hidden lg:block">
              <Button
                text={"Sign Up"}
                icon={
                  <span className="material-icons-outlined">trending_flat</span>
                }
              />
            </Link>
=======
          <div>
            {!auth?.accessToken ? (
              <div className="flex gap-2 lg:gap-4 items-center">
                <ActiveLink to={"/authentication/login"}>
                  <Button
                    className={"ghost-btn flex-row-reverse"}
                    text={"Log In"}
                    icon={<LuUser2 className="text-2xl" />}
                  />
                </ActiveLink>
                <Link
                  to={"/authentication/sign_up"}
                  className="hidden lg:block"
                >
                  <Button
                    text={"Sign Up"}
                    icon={
                      <span className="material-icons-outlined">
                        trending_flat
                      </span>
                    }
                  />
                </Link>
              </div>
            ) : (
              <div className="flex gap-4 lg:gap-7 items-center">
                <div className="relative">
                  <ActiveLink to={"/authentication/login"}>
                    <Button
                      className={"bg-primary-500 h-10 w-10"}
                      icon={<LuBell className="text-2xl" />}
                    />
                  </ActiveLink>
                  <span className="h-4 w-4 flex items-center justify-center rounded-full bg-secondary-500 text-white text-xs absolute top-0 right-0">
                    {count?.count}
                  </span>
                </div>
                <div className="relative group">
                  <img
                    src={
                      student?.photo
                        ? `${urls?.student}/${student?.photo}`
                        : avatar
                    }
                    className="h-10 w-10 rounded-full peer cursor-pointer"
                    alt=""
                  />
                  <div className="absolute w-60 border rounded right-0 top-16 bg-white text-text-500 transition-all origin-top-right scale-0 group-hover:scale-100 overflow-hidden">
                    <Link
                      to="/profile"
                      className="flex items-center gap-4 justify-between px-7 py-4 hover:bg-background cursor-pointer"
                    >
                      <span>View Profile</span> <LuUser2 />
                    </Link>
                    <span
                      onClick={async () => {
                        const status = await mutateAsync({
                          refreshToken: auth?.refreshToken,
                        });
                        toast.success(status?.message);
                      }}
                      className="flex items-center gap-4 justify-between px-7 p-4 hover:bg-background cursor-pointer"
                    >
                      <span>Logout</span> <LuArrowRightFromLine />
                    </span>
                  </div>
                </div>
              </div>
            )}
>>>>>>> update-project/main
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
