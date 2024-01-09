<<<<<<< HEAD
=======
/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import AvailableCourseModal from "@/components/AvailableCourseModal/AvailableCourseModal";
>>>>>>> update-project/main
import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import Button from "@/components/Buttons/Button";
import { useState } from "react";
import { BiAward, BiBookOpen, BiHistory, BiTimeFive } from "react-icons/bi";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import AvailableCourseModal from "../AvailableCourseModal/AvailableCourseModal";

const Banner = () => {
  const [isAvailableCourseModalOpen, setIsAvailableCourseModalOpen] =
    useState(false);
  return (
    <>
      <BackgroundLayer image_url={"/background/application-banner.png"}>
=======
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
>>>>>>> update-project/main
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
<<<<<<< HEAD
                    <Link to={"/course"}>Course</Link>
                  </span>
                  :<span>Engineering</span>
=======
                    <Link to={"/course"}>Subject</Link>
                  </span>
                  :<span>{info?.subject?.name}</span>
>>>>>>> update-project/main
                </div>
              </div>
              <div className="py-14">
                <div className="mb-12">
                  <h1 className="title text-3xl lg:5xl text-white mb-4">
<<<<<<< HEAD
                    University of Oxford
=======
                    {info?.isCourse
                      ? info?.course_details?.name
                      : info?.subject?.name}
>>>>>>> update-project/main
                  </h1>
                  <div className="flex flex-col lg:flex-row  items-start gap-7">
                    <div className="flex gap-2">
                      <div>
                        <BiAward className="text-xl" />
                      </div>
                      <div>
                        <h5 className="text-sm ">Ranking</h5>
<<<<<<< HEAD
                        {(
                          <div className="text-sm flex gap-1">
                            <span>103</span>
                            <div className="text-[.5rem] -mt-1 relative">
                              th
                            </div>
                          </div>
                        ) || (
                          <p className="text-sm text-text-100">
                            No information for this filed yet
                          </p>
                        )}
=======
                        <div className="text-sm flex gap-1">
                          <span>{info?.university?.ranking}</span>
                          <div className="text-[.5rem] -mt-1 relative">th</div>
                        </div>
>>>>>>> update-project/main
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <BiTimeFive className="text-xl" />
                      </div>
                      <div>
                        <h5 className="text-sm ">Duration</h5>
<<<<<<< HEAD
                        {<p className="text-sm">2 Years</p> || (
                          <p className="text-sm text-text-100">
                            No information for this filed yet
                          </p>
                        )}
=======
                        <p className="text-sm">
                          {info?.isCourse
                            ? info?.course_details?.duration
                            : info?.subject?.duration}
                        </p>
>>>>>>> update-project/main
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <BiHistory className="text-xl" />
                      </div>
                      <div>
                        <h5 className="text-sm ">Session</h5>
<<<<<<< HEAD
                        {<p className="text-sm">2024-2025</p> || (
                          <p className="text-sm text-text-100">
                            No information for this filed yet
                          </p>
=======
                        {info?.university?.session?.session ? (
                          <p className="text-sm">
                            {info?.university?.session?.session} (
                            {info?.university?.session?.year})
                          </p>
                        ) : (
                          "No information"
>>>>>>> update-project/main
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <BiBookOpen className="text-xl" />
                      </div>
                      <div>
                        <h5 className="text-sm ">Study Mode</h5>
<<<<<<< HEAD
                        {<p className="text-sm">Full Time</p> || (
                          <p className="text-sm text-text-100">
                            No information for this filed yet
                          </p>
                        )}
=======
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
>>>>>>> update-project/main
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Button
                    onClick={() => setIsAvailableCourseModalOpen(true)}
<<<<<<< HEAD
                    text={"2 Course options available"}
=======
                    text={`${courses?.length || 0} Course options available`}
>>>>>>> update-project/main
                  />
                  <AvailableCourseModal
                    isOpen={isAvailableCourseModalOpen}
                    setIsOpen={setIsAvailableCourseModalOpen}
<<<<<<< HEAD
=======
                    courses={courses}
>>>>>>> update-project/main
                  />
                </div>
              </div>
              <div>
                <nav>
                  <ul className="w-full flex flex-wrap justify-center lg:justify-start">
<<<<<<< HEAD
                    <li className="border border-b-0 hover:bg-white hover:text-primary-500 text-center flex-1 shrink-0">
=======
                    <li className="border border-b-0 bg-background text-primary-500 hover:bg-white hover:text-primary-500 text-center flex-1 shrink-0">
>>>>>>> update-project/main
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
<<<<<<< HEAD
                        href="#fees_and_funding"
=======
                        href="#how_to_apply"
>>>>>>> update-project/main
                      >
                        Fees and funding
                      </a>
                    </li>
                    <li className="border border-b-0 hover:bg-white hover:text-primary-500 text-center flex-1 shrink-0">
                      <a
                        className={`px-4 py-2 whitespace-nowrap inline-block`}
<<<<<<< HEAD
                        href="#career_opportunity "
=======
                        href="#career_opportunity"
>>>>>>> update-project/main
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
