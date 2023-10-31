import ActiveLink from "@/components/ActiveLink/ActiveLink";
import useScrollSpy from "@/hooks/useScrollSpy/useScrollSpy";
import { useLocation } from "react-router-dom";

const NavMenus = () => {
  const location = useLocation();
  const { activeElementID } = useScrollSpy();
  return (
    <>
      {location.pathname == "/" ? (
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
      <li className={activeElementID === "services" ? "text-primary-500" : ""}>
        <a href="/#services">Services</a>
      </li>
      <li
        className={activeElementID === "testimonials" ? "text-primary-500" : ""}
      >
        <a href="/#testimonials">Testimonials</a>
      </li>
      <li className={activeElementID === "blogs" ? "text-primary-500" : ""}>
        <a href="/#blogs">Blogs</a>
      </li>
      <ActiveLink to={"/contact"}>
        <li className="">Contact</li>
      </ActiveLink>
    </>
  );
};

export default NavMenus;
