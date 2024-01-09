<<<<<<< HEAD
import cardImg from "@/assets/images/course-card.png";
import Button from "@/components/Buttons/Button";
import CourseCard from "@/components/Cards/CourseCard/CourseCard";
import Pagination from "@/components/Pagination/Pagination";
import usePagination from "@/hooks/usePagination/usePagination";
import { useEffect, useState } from "react";
import { LuFilter } from "react-icons/lu";
=======
/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import Button from "@/components/Buttons/Button";
import CourseCard from "@/components/Cards/CourseCard/CourseCard";
import Pagination from "@/components/Pagination/Pagination";
import {LuFilter} from "react-icons/lu";
import {useDispatch, useSelector} from "react-redux";
import {useQuery} from "react-query";
import {getSearchedSubjects} from "@/pages/Search/requests/search.js";
import {SetTotal} from "@/redux/tableSlice/tableSlice.js";
>>>>>>> update-project/main

const AllCourses = ({
  filterSideToggle,
  selectedOptions,
  removeSelectedOption,
}) => {
<<<<<<< HEAD
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
=======
  const dispatch = useDispatch();
  const { page, limit, search } = useSelector((state) => state.table);
  const {
    course_types,
    country,
    city,
    session,
    isPoint,
    point,
    experience,
    level_3,
    assessment,
    ielts,
    score,
    start_rank,
    end_rank,
  } = useSelector((state) => state.filter);
  const { isLoading, data: subjects } = useQuery({
    queryKey: [
      "searched_subjects",
      page,
      limit,
      search,
      course_types,
      country,
      city,
      session,
      isPoint,
      point,
      experience,
      level_3,
      assessment,
      ielts,
      score,
      start_rank,
      end_rank,
    ],
    queryFn: () =>
      getSearchedSubjects({
        page,
        limit,
        search,
        course_types: course_types?.map((c) => c?._id),
        country: country?.map((c) => c?.value),
        city: city?.map((c) => c?.value),
        session: session?.value,
        isPoint,
        point,
        experience,
        level_3,
        assessment,
        ielts,
        score,
        start_rank,
        end_rank,
      }),
    onSuccess: (output) => {
      dispatch(SetTotal(output?.total));
    },
  });
  console.log(subjects);
>>>>>>> update-project/main
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
<<<<<<< HEAD
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
=======
        {subjects?.data?.map((x, i) => (
          <CourseCard
            key={i}
            params={{
              subject: x?.subject?._id,
              requirement: x?._id,
              university: x?.university?._id,
            }}
            data={{
              title: x?.subject?.name,
              image: x?.subject?.photo,
              institution: x?.university?.name,
              location: x?.university?.campuses?.location,
              bio: x?.university?.campuses?.location,
              duration: x?.isCourse
                ? x?.course?.duration
                : x?.subject?.duration,
              session:
                x?.university?.session?.session &&
                `${x?.university?.session?.session} (${x?.university?.session?.year})`,
              study_mode: x?.isCourse
                ? x?.course?.study_mode
                : x?.subject?.study_mode,
              ranking: x?.university?.ranking,
              tuition_fee: x?.isCourse ? x?.course?.fees : x?.subject?.fees,
              course_count: x?.course_count,
            }}
          />
        ))}
      </div>
      <div>
        <Pagination />
>>>>>>> update-project/main
      </div>
    </div>
  );
};

export default AllCourses;
