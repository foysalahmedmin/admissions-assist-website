import { createContext, useRef } from "react";

export const sectionContext = createContext();
const SectionProvider = ({ children }) => {
  const sectionRefs = useRef([]);
  const collections = { sectionRefs };
  return (
    <sectionContext.Provider value={collections}>
      {children}
    </sectionContext.Provider>
  );
};

export default SectionProvider;
