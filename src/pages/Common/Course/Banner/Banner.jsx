/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import AvailableCourseModal from "@/components/AvailableCourseModal/AvailableCourseModal";
import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import Button from "@/components/Buttons/Button";
import { useState } from "react";
import { BiAward, BiBookOpen, BiHistory, BiTimeFive } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchFilteredCourses } from "@/pages/Common/Course/Course/requests/courseApi.js";
import { urls } from "@/apis/config/urls.js";
import { FaMoneyBill } from "react-icons/fa";

const Banner = ({ info }) => {
  const [isAvailableCourseModalOpen, setIsAvailableCourseModalOpen] =
    useState(false);
  const { sId, uId } = useParams();
  const { data: courses } = useQuery({
    queryKey: ["filtered_courses", sId],
    queryFn: () => fetchFilteredCourses(sId),
    enabled: !!sId,
  });
  return (
    <>
      <BackgroundLayer
        image_url={`${urls?.subject}/${info?.subject?.photo?.replace(
          / /g,
          "%20"
        )}`}
      >
        <div className="container mx-auto pt-7 text-white">
          <div className="flex items-end gap-7">
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <span className="material-icons-outlined">arrow_back</span>
                <div className="flex items-center gap-2">
                  <span>
                    <Link to={"/search"}>Search</Link>
                  </span>
                  <span>/</span>
                  <span>
                    <Link to={"/course"}>Subject</Link>
                  </span>
                  :<span>{info?.subject?.name}</span>
                </div>
              </div>
              <div className="py-14">
                <div className="mb-12">
                  <h1 className="title text-3xl lg:5xl text-white mb-4">
                    {info?.isCourse
                      ? info?.course_details?.name
                      : info?.subject?.name}
                  </h1>
                  <div className="flex flex-col lg:flex-row  items-start gap-7">
                    <div className="flex gap-2">
                      <div>
                        <BiAward className="text-xl" />
                      </div>
                      <div>
                        <h5 className="text-sm ">Ranking</h5>
                        <div className="text-sm flex gap-1">
                          <span>{info?.university?.ranking}</span>
                          <div className="text-[.5rem] -mt-1 relative">th</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <BiTimeFive className="text-xl" />
                      </div>
                      <div>
                        <h5 className="text-sm ">Duration</h5>
                        <p className="text-sm">
                          {info?.isCourse
                            ? info?.course_details?.duration
                            : info?.subject?.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <BiHistory className="text-xl" />
                      </div>
                      <div>
                        <h5 className="text-sm ">Session</h5>
                        {info?.university?.session?.session ? (
                          <p className="text-sm">
                            {info?.university?.session?.session} (
                            {info?.university?.session?.year})
                          </p>
                        ) : (
                          "No information"
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <BiBookOpen className="text-xl" />
                      </div>
                      <div>
                        <h5 className="text-sm ">Study Mode</h5>
                        <p className="text-sm">
                          {info?.isCourse
                            ? info?.course_details?.study_mode
                            : info?.subject?.study_mode}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <FaMoneyBill className="text-xl" />
                      </div>
                      <div>
                        <h5 className="text-sm ">Fees</h5>
                        <p className="text-sm">
                          $
                          {info?.isCourse
                            ? info?.course_details?.fees
                            : info?.subject?.fees}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Button
                    onClick={() => setIsAvailableCourseModalOpen(true)}
                    text={`${courses?.length || 0} Course options available`}
                  />
                  <AvailableCourseModal
                    isOpen={isAvailableCourseModalOpen}
                    setIsOpen={setIsAvailableCourseModalOpen}
                    courses={courses}
                  />
                </div>
              </div>
              <div>
                <nav>
                  <ul className="w-full flex flex-wrap justify-center lg:justify-start">
                    <li className="border border-b-0 bg-background text-primary-500 hover:bg-white hover:text-primary-500 text-center flex-1 shrink-0">
                      <a
                        className={`px-4 py-2 whitespace-nowrap inline-block`}
                        href="#course_summary"
                      >
                        Course summary
                      </a>
                    </li>
                    <li className="border border-b-0 hover:bg-white hover:text-primary-500 text-center flex-1 shrink-0">
                      <a
                        className={`px-4 py-2 whitespace-nowrap inline-block`}
                        href="#how_to_apply"
                      >
                        How to apply
                      </a>
                    </li>
                    <li className="border border-b-0 hover:bg-white hover:text-primary-500 text-center flex-1 shrink-0">
                      <a
                        className={`px-4 py-2 whitespace-nowrap inline-block`}
                        href="#entry_requirements"
                      >
                        Entry requirements
                      </a>
                    </li>
                    <li className="border border-b-0 hover:bg-white hover:text-primary-500 text-center flex-1 shrink-0">
                      <a
                        className={`px-4 py-2 whitespace-nowrap inline-block`}
                        href="#how_to_apply"
                      >
                        Fees and funding
                      </a>
                    </li>
                    <li className="border border-b-0 hover:bg-white hover:text-primary-500 text-center flex-1 shrink-0">
                      <a
                        className={`px-4 py-2 whitespace-nowrap inline-block`}
                        href="#career_opportunity"
                      >
                        Career opportunity
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-[25rem]"></div>
            </div>
          </div>
        </div>
      </BackgroundLayer>
    </>
  );
};

export default Banner;
