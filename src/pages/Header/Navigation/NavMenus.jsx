import ActiveLink from "@/components/ActiveLink/ActiveLink";
import useScrollSpy from "@/hooks/useScrollSpy/useScrollSpy";
import { useLocation } from "react-router-dom";

const NavMenus = ({ menuActive }) => {
  const location = useLocation();
  const { scrollActive, setMenuActive } = useScrollSpy();
  return (
    <>
      <ul
        className={`
          lg:static
          lg:flex
          lg:w-auto
          lg:scale-x-100
          z-50
          gap-4 
          items-center
          absolute
          text-right
          w-[50%]
          p-5 
          mp-[2.5%]
          top-20
          right-0
          bg-white
          rounded-md
          leading-10 
          transition-all
          origin-right
          
          ${menuActive ? "scale-x-100 " : "scale-x-0"}
          `}
      >
        <div className="text-right">
          {menuActive && (
            <button
              onClick={() => setMenuActive(false)}
              className="text-3xl ml-auto lg:hidden"
            ></button>
          )}
        </div>
        {location.pathname == "/" ? (
          <li className={scrollActive === "home" ? "text-primary" : ""}>
            <a href="/#">Home</a>
          </li>
        ) : (
          <Link to={"/"}>
            <li className="">Home</li>
          </Link>
        )}
        <li className={scrollActive === "shortAbout" ? "text-primary" : ""}>
          <a href="/#shortAbout">About us</a>
        </li>
        <li className={scrollActive === "services" ? "text-primary" : ""}>
          <a href="/#services">Services</a>
        </li>
        <li className={scrollActive === "app" ? "text-primary" : ""}>
          <a href="/#app">Download App</a>
        </li>
        <ActiveLink to={"/contact"}>
          <li className="">Contact</li>
        </ActiveLink>
      </ul>
    </>
  );
};

export default NavMenus;
