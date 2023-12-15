import { Outlet } from "react-router-dom";
import logo from "@/assets/images/logo.svg";
import Toaster from "@/components/Toaster/Toaster";
import BackgroundLayerAuth from "@/components/BackgroundLayer/BackgroundLayerAuth.jsx";

const Authentication = () => {
  return (
    <>
      <main>
        <BackgroundLayerAuth bg_position={"bg-top bg-fixed"}>
          <div className="container mx-auto">
            <div className="min-h-screen py-14 flex items-center justify-center">
              <div>
                <div className="h-14 text-center mb-12">
                  <img
                    className="h-full object-contain object-center mx-auto"
                    src={logo}
                    alt=""
                  />
                </div>
                <div>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </BackgroundLayerAuth>
      </main>
      <Toaster />
    </>
  );
};

export default Authentication;
