import { sectionContext } from "@/provider/sectionProvider/SectionProvider";
import { useContext, useEffect, useState } from "react";

const useScrollSpy = () => {
  
  const { sectionRefs, sectionsArray, setSectionsArray } =
    useContext(sectionContext);
  const [scrollActive, setScrollActive] = useState("");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {

    // const handleScroll = () => {
    //   const scrollY = window.scrollY;
    //   setScrollY(scrollY);
    //   for (const sectionRef of sectionRefs?.current) {
    //     if (sectionRef) {
    //       const sectionTop = sectionRef.offsetTop - 100;
    //       const sectionHeight = sectionRef.offsetHeight;
    //       if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
    //         setScrollActive(sectionRef.id);
    //         break;
    //       } else {
    //         setScrollActive("");
    //       }
    //     }
    //   }
    // };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollY(scrollY);
      for (const section of sectionsArray) {
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setScrollActive(section.id);
            break;
          } else {
            setScrollActive("");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs, sectionsArray]);

  return {
    sectionRefs,
    sectionsArray,
    setSectionsArray,
    scrollActive,
    scrollY,
  };
};

export default useScrollSpy;
