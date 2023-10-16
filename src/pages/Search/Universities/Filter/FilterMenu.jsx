import { useState } from "react";
import FilterMenuOption from "./FilterMenuOption";

const FilterMenu = ({ menu, handleSelect, selectedOptions }) => {
  const { title, options } = menu;
  const [isShowOption, setIsShowOption] = useState(true);
  const [sliceLength, setSliceLength] = useState(3);

  return (
    <div>
      <div
        onClick={() => setIsShowOption(!isShowOption)}
        className="flex items-center justify-between cursor-pointer py-2"
      >
        <h3 className="title">{title}</h3>
        <span
          className={`${
            isShowOption ? "rotate-90" : ""
          } material-icons-outlined !text-base transition-all`}
        >
          arrow_forward_ios
        </span>
      </div>
      <hr className="" />
      <div
        className={`${
          isShowOption ? "pt-2 max-h-screen" : "max-h-0"
        } transition-all overflow-hidden`}
      >
        <ul className="grid grid-cols-1 gap-2">
          {options.slice(0, sliceLength).map((option, i) => (
            <FilterMenuOption
              key={i}
              option={option}
              handleSelect={handleSelect}
              selectedOptions={selectedOptions}
            />
          ))}
        </ul>
        {options?.length > 4 && (
          <div className="mt-2">
            {sliceLength === options?.length ? (
              <button
                onClick={() => setSliceLength(3)}
                className="font-semibold"
                type="button"
              >
                See Less
              </button>
            ) : (
              <button
                onClick={() => setSliceLength(options?.length)}
                className="text-primary font-semibold"
                type="button"
              >
                See More
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterMenu;
