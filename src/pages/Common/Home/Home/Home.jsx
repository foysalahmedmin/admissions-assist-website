import { useEffect, useRef } from "react";
import useScrollSpy from "@/hooks/useScrollSpy/useScrollSpy";
import Slider from "@/pages/Common/Home/Slider/Slider";
import HowItWorks from "@/pages/Common/Home/HowItWorks/HowItWorks";
import TopUniversities from "@/pages/Common/Home/TopUniversities/TopUniversities";
import Services from "@/pages/Common/Home/Services/Services";
import Categories from "../Categories/Categories";

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
    </main>
  );
};

export default Home;
