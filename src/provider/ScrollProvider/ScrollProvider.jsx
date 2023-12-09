import { createContext, useState } from "react";

export const scrollContext = createContext();
const ScrollProvider = ({ children }) => {
  const [elementsArray, setElementArray] = useState([]);
  const [activeElementID, setActiveElementID] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const collections = {
    elementsArray,
    setElementArray,
    activeElementID,
    setActiveElementID,
    isScrolled,
    setIsScrolled,
  };
  return (
    <scrollContext.Provider value={collections}>
      {children}
    </scrollContext.Provider>
  );
};

export default ScrollProvider;
