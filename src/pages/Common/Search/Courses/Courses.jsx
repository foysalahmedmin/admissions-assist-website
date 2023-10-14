import Button from "@/components/Buttons/Button";
import CourseCard from "@/components/Cards/CourseCard/CourseCard";
import Pagination from "@/components/Pagination/Pagination";
import usePagination from "@/hooks/usePagination/usePagination";
import { useEffect, useState } from "react";
import { LuFilter } from "react-icons/lu";

const Courses = ({
  filterSideToggle,
  selectedOptions,
  removeSelectedOption,
}) => {
  const [cards, setCards] = useState(Array.from(Array(10).keys()));
  const {
    setTotal,
    setLimit,
    setPageNumber,
    previousHandle,
    nextHandle,
    limit,
    pageQuantity,
    pageNumber,
  } = usePagination();
  useEffect(() => {
    setTotal(cards.length);
  }, [cards]);
  return (
    <div>
      <div className="flex items-center gap-4 mb-7">
        <Button
          onClick={filterSideToggle}
          className={"bg-primary lg:hidden"}
          icon={<LuFilter className="text-2xl pt-1" />}
        />
        <span className="py-3 flex-shrink-0">Filtered By:</span>
        <div className="flex flex-wrap items-center gap-4">
          {selectedOptions?.map((option, i) => (
            <div
              key={i}
              className="py-2 px-7 rounded-full border flex items-center gap-4"
            >
              <span className="capitalize">{option}</span>
              <button
                onClick={() => removeSelectedOption(option)}
                className="hover:text-secondary"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-7 mb-7 lg:mb-12">
        {cards
          .slice(pageNumber * limit, pageNumber * limit + limit)
          .map((x) => (
            <CourseCard key={x} />
          ))}
      </div>
      <div>
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          pageQuantity={pageQuantity}
          previousHandle={previousHandle}
          nextHandle={nextHandle}
        />
      </div>
    </div>
  );
};

export default Courses;
