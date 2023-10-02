import ActiveLink from "@/components/ActiveLink/ActiveLink";
import useScrollSpy from "@/hooks/useScrollSpy/useScrollSpy";
import { useLocation } from "react-router-dom";

const NavMenus = () => {
  const location = useLocation();
  const { activeElementID } = useScrollSpy();
  return (
    <>
      {location.pathname == "/" ? (
        <li
          className={activeElementID === "home" ? "text-primary" : ""}
        >
          <a href="/#">Home</a>
        </li>
      ) : (
        <li onClick={() => navigation("/")} className="">
          Home
        </li>
      )}
      <li
        className={
          activeElementID === "how_it_works" ? "text-primary" : ""
        }
      >
        <a href="/#how_it_works">How it works</a>
      </li>
      <li
        className={
          activeElementID === "services" ? "text-primary" : ""
        }
      >
        <a href="/#services">Services</a>
      </li>
      <li
        className={
          activeElementID === "testimonials" ? "text-primary" : ""
        }
      >
        <a href="/#testimonials">Testimonials</a>
      </li>
      <li
        className={activeElementID === "blogs" ? "text-primary" : ""}
      >
        <a href="/#blogs">Blogs</a>
      </li>
      <ActiveLink to={"/contact"}>
        <li className="">Contact</li>
      </ActiveLink>
    </>
  );
};

export default NavMenus;
