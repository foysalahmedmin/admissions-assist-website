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
          className={scrollActive === "home" ? "text-primary" : "lg:text-white"}
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
          scrollActive === "how_it_works" ? "text-primary" : "lg:text-white"
        }
      >
        <a href="/#how_it_works">How it works</a>
      </li>
      <li
        className={
          scrollActive === "services" ? "text-primary" : "lg:text-white"
        }
      >
        <a href="/#services">Services</a>
      </li>
      <li
        className={
          scrollActive === "testimonials" ? "text-primary" : "lg:text-white"
        }
      >
        <a href="/#testimonials">Testimonials</a>
      </li>
      <li
        className={scrollActive === "blogs" ? "text-primary" : "lg:text-white"}
      >
        <a href="/#blogs">Blogs</a>
      </li>
      <ActiveLink to={"/contact"}>
        <li className="lg:text-white">Contact</li>
      </ActiveLink>
    </>
  );
};

export default NavMenus;
