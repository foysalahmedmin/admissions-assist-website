import { useState } from "react";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import Courses from "../Courses/Courses";

const Search = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log(selectedOptions);

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
          <div className="py-7 flex gap-7 lg:gap-12">
            <aside className="border rounded-3xl">
              <Filter handleSelect={handleSelect} selectedOptions={selectedOptions} />
            </aside>
            <div>
              <Courses
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
