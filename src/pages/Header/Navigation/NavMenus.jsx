/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import ActiveLink from "@/components/ActiveLink/ActiveLink";
import useScrollSpy from "@/hooks/useScrollSpy/useScrollSpy";
import { useLocation } from "react-router-dom";

const NavMenus = () => {
  const auth = JSON.parse(localStorage.getItem("aa_website"));
  const location = useLocation();
  const { activeElementID } = useScrollSpy();
  return (
    <>
      {location.pathname === "/" ? (
        <li className={activeElementID === "home" ? "text-primary-500" : ""}>
          <a href="/#">Home</a>
        </li>
      ) : (
        <ActiveLink to={"/"}>
          <li className="">Home</li>
        </ActiveLink>
      )}
      <li
        className={activeElementID === "how_it_works" ? "text-primary-500" : ""}
      >
        <a href="/#how_it_works">How it works</a>
      </li>
      {!auth?.accessToken && (
        <li
          className={activeElementID === "services" ? "text-primary-500" : ""}
        >
          <a href="/#services">Services</a>
        </li>
      )}

      {auth?.accessToken && (
        <ActiveLink to={"/application"}>
          <li className="">Application</li>
        </ActiveLink>
      )}
      {!auth?.accessToken && (
        <li
          className={
            activeElementID === "testimonials" ? "text-primary-500" : ""
          }
        >
          <a href="/#testimonials">Testimonials</a>
        </li>
      )}
      {/*{auth?.accessToken && (*/}
      {/*  <ActiveLink to={"/points"}>*/}
      {/*    <li className="">Points</li>*/}
      {/*  </ActiveLink>*/}
      {/*)}*/}
      {auth?.accessToken && (
        <ActiveLink to={"/chat_system"}>
          <li className="">Chats</li>
        </ActiveLink>
      )}

      <ActiveLink to={"/contact"}>
        <li className="">Contact</li>
      </ActiveLink>
      {location.pathname === "/" ? (
        <li className={activeElementID === "blogs" ? "text-primary-500" : ""}>
          <a href="/#blogs">Blogs</a>
        </li>
      ) : (
        <ActiveLink to={"/blogs"}>
          <li className="">Blogs</li>
        </ActiveLink>
      )}
    </>
  );
};

export default NavMenus;
