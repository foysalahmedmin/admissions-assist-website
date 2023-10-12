import { useState } from "react";

const FilterMenuOption = ({ option, handleSelect }) => {
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
          className="h-4 w-4"
          type="checkbox"
          name={option?.value}
          id={option?.value}
          value={option?.title}
        />
        <label htmlFor={option?.value}>{option?.title}</label>
      </div>
      {option?.options && isShowChildren && (
        <ul className="grid grid-cols-1 gap-2 ml-4 mt-2">
          {option?.options.map((option, i) => (
            <FilterMenuOption
              key={i}
              option={option}
              handleSelect={handleSelect}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default FilterMenuOption;
