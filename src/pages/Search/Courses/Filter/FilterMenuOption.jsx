import { useState } from "react";

const FilterMenuOption = ({ option, handleSelect, selectedOptions }) => {
  const [isShowChildren, setIsShowChildren] = useState(false);
  const handleChild = (e) => {
    const checkbox = e.target;
    if (checkbox.checked) {
      setIsShowChildren(true);
    } else {
      setIsShowChildren(false);
    }
  };
  return (
    <li>
      <div className="flex items-center gap-2">
        <input
          onChange={(e) => {
            handleSelect(e);
            handleChild(e);
          }}
          checked={selectedOptions?.includes(option?.title)}
          className="h-4 w-4"
          type="checkbox"
          name={option?.value}
          id={option?.value}
          value={option?.title}
        />
        <label htmlFor={option?.value}>{option?.title}</label>
      </div>
      {option?.options && (
        <ul
          className={`${
            isShowChildren ? "mt-2 max-h-screen" : "max-h-0"
          } transition-all overflow-hidden grid grid-cols-1 gap-2 ml-4`}
        >
          {option?.options.map((option, i) => (
            <FilterMenuOption
              key={i}
              option={option}
              handleSelect={handleSelect}
              selectedOptions={selectedOptions}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default FilterMenuOption;
