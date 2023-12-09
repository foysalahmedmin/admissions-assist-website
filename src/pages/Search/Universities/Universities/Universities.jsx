import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside/useClickOutside";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import AllUniversities from "../AllUniversities/AllUniversities";
import { useSelector } from "react-redux";

const Universities = () => {
  const [isFilterSideOpen, setIsFilterSideOpen] = useState(false);
  const filterSide = useRef();
  const filterSideToggle = () => setIsFilterSideOpen(!isFilterSideOpen);
  useClickOutside(filterSide, () => setIsFilterSideOpen(false));
  const { total } = useSelector((state) => state.table);
  return (
    <>
      <Sort />
      <main>
        <div className="container mx-auto">
          <div className="flex flex-wrap-reverse items-center justify-around md:justify-between gap-4 py-7">
            <div className="flex items-center gap-4">
              <div className="py-4 px-7 rounded-full shadow-custom title">
                <span>{total}</span> <span>Universities</span>
              </div>
              {/*<div className="py-4 px-7 rounded-full shadow-custom title">*/}
              {/*  <span>{13}</span> <span>Universities </span>*/}
              {/*</div>*/}
            </div>
            <div>
              <h3 className="title text-center text-xl lg:text-2xl">
                <span>{total}</span> <span>Universities</span>
              </h3>
            </div>
          </div>
          <hr />
          <div className="py-7 flex gap-7 lg:gap-12 relative">
            <aside
              ref={filterSide}
              className={`${
                isFilterSideOpen ? "scale-x-100" : "scale-x-0 lg:scale-x-100"
              } bg-white z-10 border rounded-3xl lg:static lg:h-auto absolute origin-left transition-all duration-300`}
            >
              <Filter filterSideToggle={filterSideToggle} />
            </aside>
            <div className="flex-1">
              <AllUniversities filterSideToggle={filterSideToggle} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Universities;
