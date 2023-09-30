import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ActiveLink from "@/components/ActiveLink/ActiveLink";
import logo from "@/assets/images/logo.svg";
import NavMenus from "@/pages/Header/Navigation/NavMenus";
import { MenuToggle } from "@/pages/Header/Navigation/MenuToggle";
import useMenuAnimation from "@/hooks/useMenuAnimation/useMenuAnimation";
import useScrollSpy from "@/hooks/useScrollSpy/useScrollSpy";
import Button from "@/components/Buttons/Button";
import { FiUser } from "react-icons/fi";

const Navigation = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const { scrollY } = useScrollSpy();
  const [menuActive, setMenuActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  return (
    <nav
      ref={scope}
      className={`w-full z-30 top-0 ${
        location.pathname == "/"
          ? scrollY > 120
            ? "glass fixed text-white"
            : "fixed text-white"
          : "sticky bg-white"
      }`}
    >
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
              <ul
                className={`menu w-[300px] min-h-[calc(100vh-5rem)] absolute z-50 top-20 left-0 leading-10 p-5 origin-left scale-x-0 lg:hidden ${
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
            <ActiveLink to={"/login"}>
              <Button
                className={"ghost-btn flex-row-reverse"}
                text={"Log In"}
                icon={<FiUser className="text-2xl" />}
              />
            </ActiveLink>
            <Link to={"/user_type"} className="hidden lg:block">
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
