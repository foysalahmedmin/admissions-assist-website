import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ActiveLink from "@/components/ActiveLink/ActiveLink";
import logo from "@/assets/images/logo.svg";
import NavMenus from "@/pages/Header/Navigation/NavMenus";

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navigation = useNavigate();

  return (
    <nav className="w-full sticky top-0 bg-white z-30 py-4">
      <div className="container">
        <div className="flex justify-between items-center gap-2 lg:gap-4 relative">
          <div className="flex lg:gap-10 gap-4 items-center">
            <div className="h-10">
              <img
                style={{ cursor: "pointer" }}
                onClick={() => navigation("/")}
                className="h-full"
                src={logo}
                alt="logo"
                loading="lazy"
              />
            </div>
            <NavMenus menuActive={menuActive} setMenuActive={setMenuActive} />
          </div>
          <div className="flex gap-2 lg:gap-4 items-center">
            <ActiveLink to={"/login"}>
              <button className="flex items-center gap-3 2xl:px-7 py-4">
                <span className="font-semibold">Log In</span>
              </button>
            </ActiveLink>
            <Link to={"/user_type"}>
              <button className="primary-btn hidden xl:block">Sign Up</button>
            </Link>
          </div>
        </div>
        <button
          onClick={() => {
            setMenuActive(true);
          }}
          className="text-3xl lg:hidden"
        >
          <span>button</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
