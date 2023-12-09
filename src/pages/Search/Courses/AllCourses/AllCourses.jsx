import cardImg from "@/assets/images/course-card.png";
import Button from "@/components/Buttons/Button";
import CourseCard from "@/components/Cards/CourseCard/CourseCard";
import Pagination from "@/components/Pagination/Pagination";
import usePagination from "@/hooks/usePagination/usePagination";
import { useEffect, useState } from "react";
import { LuFilter } from "react-icons/lu";

const AllCourses = ({
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
          className={"bg-primary-500 flex-shrink-0 lg:hidden"}
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
                className="hover:text-secondary-500"
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
            <CourseCard
              key={x}
              data={{
                title: "Engineering",
                image: cardImg,
                institution: "Barnsley College Higher Education",
                location:
                  "Barnsley College Higher Education Church Street Campus",
                bio: "Barnsley College Higher Education Church Street Campus",
                duration: "2 Years",
                session: "2024-2025",
                study_mode: "Full Time",
                ranking: 103,
                class_starts: "2 March, 2024",
                tuition_fee: 18000,
              }}
            />
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

export default AllCourses;
