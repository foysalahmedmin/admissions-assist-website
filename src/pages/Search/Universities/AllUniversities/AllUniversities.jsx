import Button from "@/components/Buttons/Button";
import UniversityCard from "@/components/Cards/UniversityCard.jsx/UniversityCard";
import Pagination from "@/components/Pagination/Pagination";
import usePagination from "@/hooks/usePagination/usePagination";
import { useEffect, useState } from "react";
import { LuFilter } from "react-icons/lu";
import cardImg from "@/assets/images/university-slide-1.png";

const AllUniversities = ({
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
          className={"bg-primary flex-shrink-0 lg:hidden"}
          icon={<LuFilter className="text-2xl pt-1" />}
        />
        <span className="py-2 flex-shrink-0 hidden lg:block">Filtered By:</span>
        <div className="flex flex-wrap items-center gap-2 lg:gap-4">
          {selectedOptions?.map((option, i) => (
            <div
              key={i}
              className="py-1 lg:py-2 px-4 lg:px-7 rounded-full border flex items-center gap-2 lg:gap-4 text-sm lg:text-base"
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
            <UniversityCard key={x} data={{
              image_url: cardImg,
              title: "University of Oxford",
              course_quantity: 65,
            }} />
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

export default AllUniversities;
