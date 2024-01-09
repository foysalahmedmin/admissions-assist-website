import { Outlet } from "react-router-dom";
import logo from "@/assets/images/logo.svg";
<<<<<<< HEAD
import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import Toaster from "@/components/Toaster/Toaster";
=======
import Toaster from "@/components/Toaster/Toaster";
import BackgroundLayerAuth from "@/components/BackgroundLayer/BackgroundLayerAuth.jsx";
>>>>>>> update-project/main

const Authentication = () => {
  return (
    <>
      <main>
<<<<<<< HEAD
        <BackgroundLayer bg_position={"bg-top bg-fixed"}>
=======
        <BackgroundLayerAuth bg_position={"bg-top bg-fixed"}>
>>>>>>> update-project/main
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
<<<<<<< HEAD
        </BackgroundLayer>
=======
        </BackgroundLayerAuth>
>>>>>>> update-project/main
      </main>
      <Toaster />
    </>
  );
};

export default Authentication;
