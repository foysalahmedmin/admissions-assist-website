import Toaster from "@/components/Toaster/Toaster";
import Footer from "@/pages/Footer/Footer/Footer";
import Header from "@/pages/Header/Header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header navigationClassName={"container mx-auto"} />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};

export default Main;
