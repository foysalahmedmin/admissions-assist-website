import { scrollContext } from "@/provider/ScrollProvider/ScrollProvider";
import { useContext, useEffect } from "react";

const useScrollSpy = () => {
  const {
    elementsArray,
    setElementArray,
    activeElementID,
    setActiveElementID,
    isScrolled,
    setIsScrolled,
  } = useContext(scrollContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollY > 120
        ? !isScrolled && setIsScrolled(true)
        : setIsScrolled(false);

      for (const element of elementsArray) {
        if (element) {
          const elementTop = element.offsetTop - 100;
          const elementHeight = element.offsetHeight;
          if (scrollY >= elementTop && scrollY < elementTop + elementHeight) {
            activeElementID !== element.id && setActiveElementID(element.id);
            break;
          } else {
            activeElementID !== "" && setActiveElementID("");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementsArray]);

  return {
    elementsArray,
    setElementArray,
    activeElementID,
    isScrolled,
  };
};

export default useScrollSpy;
