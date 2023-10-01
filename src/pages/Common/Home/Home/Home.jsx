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

const Home = () => {
  const homeRef = useRef(null);
  const { setSectionsArray } = useScrollSpy();

  useEffect(() => {
    const childrenArray = Array.from(homeRef.current.children);
    setSectionsArray(childrenArray);
  }, [homeRef]);

  return (
    <main ref={homeRef}>
      <Slider />
      <HowItWorks />
      <TopUniversities />
      <Services />
      <Categories />
      <ThemeVideo />
      <Testimonials />
      <Executives />
      <Blogs />
    </main>
  );
};

export default Home;
