import Footer from "@/pages/Footer/Footer/Footer";
import Header from "@/pages/Header/Header/Header";
import { Outlet } from "react-router-dom";

const Student = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Student;
