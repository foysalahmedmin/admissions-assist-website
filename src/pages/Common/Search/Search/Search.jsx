import { useRef, useState } from "react";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import Courses from "../Courses/Courses";
import { useClickOutside } from "@/hooks/useClickOutside/useClickOutside";

const Search = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isFilterSideOpen, setIsFilterSideOpen] = useState(false);
  const filterSide = useRef();

  const filterSideToggle = () => setIsFilterSideOpen(!isFilterSideOpen);
  useClickOutside(filterSide, () => setIsFilterSideOpen(false));

  const addSelectedOption = (optionValue) => {
    if (!selectedOptions.includes(optionValue)) {
      setSelectedOptions([...selectedOptions, optionValue]);
    }
  };
  const removeSelectedOption = (optionValue) => {
    setSelectedOptions(
      selectedOptions.filter((option) => option !== optionValue)
    );
  };
  const handleSelect = (e) => {
    const checkbox = e.target;
    if (checkbox.checked) {
      addSelectedOption(checkbox.value);
    } else {
      removeSelectedOption(checkbox.value);
    }
  };
  return (
    <>
      <Sort />
      <main>
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-7">
            <div className="flex items-center gap-4">
              <div className="py-4 px-7 rounded-full shadow-custom title">
                <span>{7285}</span> <span>Courses</span>
              </div>
              <div className="py-4 px-7 rounded-full shadow-custom title">
                <span>{13}</span> <span>Universities </span>
              </div>
            </div>
            <div>
              <h3 className="title text-2xl">
                <span>{2825}</span> <span>Courses</span>
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
              <Filter
                handleSelect={handleSelect}
                selectedOptions={selectedOptions}
                filterSideToggle={filterSideToggle}
              />
            </aside>
            <div className="flex-1">
              <Courses
                filterSideToggle={filterSideToggle}
                selectedOptions={selectedOptions}
                removeSelectedOption={removeSelectedOption}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Search;
