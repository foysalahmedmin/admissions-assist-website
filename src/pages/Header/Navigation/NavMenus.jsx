import ActiveLink from "@/components/ActiveLink/ActiveLink";
import useScrollSpy from "@/hooks/useScrollSpy/useScrollSpy";
import { useLocation } from "react-router-dom";

const NavMenus = () => {
  const location = useLocation();
  const { scrollActive } = useScrollSpy();
  return (
    <>
      {location.pathname == "/" ? (
        <li
          className={scrollActive === "home" ? "text-primary" : ""}
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
          scrollActive === "how_it_works" ? "text-primary" : ""
        }
      >
        <a href="/#how_it_works">How it works</a>
      </li>
      <li
        className={
          scrollActive === "services" ? "text-primary" : ""
        }
      >
        <a href="/#services">Services</a>
      </li>
      <li
        className={
          scrollActive === "testimonials" ? "text-primary" : ""
        }
      >
        <a href="/#testimonials">Testimonials</a>
      </li>
      <li
        className={scrollActive === "blogs" ? "text-primary" : ""}
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
