import useScrollSpy from "@/hooks/useScrollSpy/useScrollSpy";
import { sectionContext } from "@/provider/sectionProvider/SectionProvider";
import { useContext, useEffect, useRef } from "react";

const Slider = () => {
  //   const { sectionRefs } = useContext(sectionContext);
  const { sectionRefs } = useScrollSpy();
  const sectionRef = useRef(null);
  useEffect(() => {
    if (!sectionRefs.current.includes(sectionRef.current)) {
      sectionRefs.current.push(sectionRef.current);
    }
  }, [sectionRefs]);
  return <section ref={sectionRef}></section>;
};

export default Slider;
