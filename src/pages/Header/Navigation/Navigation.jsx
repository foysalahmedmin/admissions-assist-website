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
import { RiUserLine } from "react-icons/ri";

const Navigation = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const { isScrolled } = useScrollSpy();
  const [menuActive, setMenuActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <nav
      ref={scope}
      className={`w-full z-30 top-0 ${
        location.pathname == "/"
          ? isScrolled
            ? "glass fixed text-white"
            : "fixed text-white"
          : "sticky bg-white"
      }`}
    >
      <div className="container mx-auto">
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
                  location.pathname == "/" ? "glass" : "bg-white"
                }`}
              >
                <NavMenus
                  menuActive={menuActive}
                  setMenuActive={setMenuActive}
                />
              </ul>
            </div>
          </div>
          <div className="flex gap-2 lg:gap-4 items-center">
            <ActiveLink to={"/authentication/login"}>
              <Button
                className={"ghost-btn flex-row-reverse"}
                text={"Log In"}
                icon={<RiUserLine className="text-2xl" />}
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
