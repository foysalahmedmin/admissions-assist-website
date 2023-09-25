import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ActiveLink from "@/components/ActiveLink/ActiveLink";
import logo from "@/assets/images/logo.svg";
import NavMenus from "@/pages/Header/Navigation/NavMenus";
import { MenuToggle } from "./MenuToggle";
import useMenuAnimation from "@/hooks/useMenuAnimation/useMenuAnimation";

const Navigation = () => {
  const navigation = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  return (
    <nav ref={scope} className="w-full fixed top-0 z-30">
      <div className="container">
        <div className="h-20 flex justify-between items-center gap-2 lg:gap-4">
          <div className="h-full flex lg:gap-10 gap-4 items-center">
            <div className="lg:hidden pt-2 flex items-center">
              <MenuToggle toggle={() => setIsOpen(!isOpen)} />
            </div>
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
            <div>
              <ul className="lg:flex lg:w-auto lg:scale-x-100 lg:gap-4 lg:items-center lg:transition-all hidden">
                <NavMenus
                  menuActive={menuActive}
                  setMenuActive={setMenuActive}
                />
              </ul>
              <ul className="menu w-[300px] bg-white absolute z-50 top-20 left-0 leading-10 p-5 origin-left scale-x-0 lg:hidden">
                <NavMenus
                  menuActive={menuActive}
                  setMenuActive={setMenuActive}
                />
              </ul>
            </div>
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
      </div>
    </nav>
  );
};

export default Navigation;
