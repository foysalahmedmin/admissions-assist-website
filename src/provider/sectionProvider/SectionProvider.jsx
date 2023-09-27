import { createContext, useRef, useState } from "react";

export const sectionContext = createContext();
const SectionProvider = ({ children }) => {
  const [sectionsArray, setSectionsArray] = useState([]);
  const sectionRefs = useRef([]);

  const collections = { sectionRefs, sectionsArray, setSectionsArray };
  return (
    <sectionContext.Provider value={collections}>
      {children}
    </sectionContext.Provider>
  );
};

export default SectionProvider;
