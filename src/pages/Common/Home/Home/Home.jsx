import { useEffect, useRef } from "react";
import useScrollSpy from "@/hooks/useScrollSpy/useScrollSpy";
import Slider from "@/pages/Common/Home/Slider/Slider";
import HowItWorks from "@/pages/Common/Home/HowItWorks/HowItWorks";
import TopUniversities from "@/pages/Common/Home/TopUniversities/TopUniversities";
import Services from "@/pages/Common/Home/Services/Services";
import Categories from "@/pages/Common/Home/Categories/Categories";
import ThemeVideo from "@/pages/Common/Home/ThemeVideo/ThemeVideo";
import Testimonials from "@/pages/Common/Home/Testimonials/Testimonials";
import Executives from "@/pages/Common/Home/Executives/Executives";
import Blogs from "@/pages/Common/Home/Blogs/Blogs";
import SubFooter from "@/pages/Footer/SubFooter/SubFooter";
import AppDownload from "../AppDownload/AppDownload";

const Home = () => {
  const homeRef = useRef(null);
  const { setElementArray } = useScrollSpy();

  useEffect(() => {
    const childrenArray = Array.from(homeRef.current.children);
    setElementArray(childrenArray);
  }, [homeRef]);

  return (
    <main ref={homeRef}>
      <Slider />
      <HowItWorks />
      <TopUniversities />
      <Services />
      <Categories />
      <ThemeVideo />
      <AppDownload />
      <Testimonials />
      <Executives />
      <Blogs />
      <SubFooter />
    </main>
  );
};

export default Home;
