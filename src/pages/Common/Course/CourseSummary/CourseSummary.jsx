<<<<<<< HEAD
import courseImg from "@/assets/images/course-card.png";
import universityImg from "@/assets/images/course-university.svg";
import Button from "@/components/Buttons/Button";
import EnrollModal from "../EnrollModal/EnrollModal";
import { useState } from "react";

const CourseSummary = () => {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
=======
/*
 * Copyright (c) 2023-2024. This product is copyright by Rian
 */

import Button from "@/components/Buttons/Button";
import {useEffect, useState} from "react";
import EnrollModal from "../EnrollRequireModal/EnrollRequireModal";
import EnrollSuccessModal from "../EnrollSuccessModal/EnrollSuccessModal.jsx";
import {urls} from "@/apis/config/urls.js";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCommonStudent} from "@/redux/studentSlice/studentSlice.js";
import {studentType} from "@/helpers/studentType.js";
import {toast} from "react-toastify";
import moment from "moment";
import {isInternationalStudentQualified, isLocalStudentQualified,} from "@/helpers/requirementStatus.js";
import {useMutation} from "react-query";
import {submitApplication} from "@/pages/Common/Course/Course/requests/courseApi.js";

const CourseSummary = ({ info }) => {
  const [student_type, setStudentType] = useState("");
  const navigation = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCommonStudent());
  }, [dispatch]);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isEnrollSuccessModalOpen, setIsEnrollSuccessModalOpen] =
    useState(false);
  const { userInfo } = useSelector((state) => state.student);
  studentType().then((x) => setStudentType(x));
  const status = JSON.parse(localStorage.getItem("aa_website"));

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: submitApplication,
  });
  const handleApplication = async () => {
    try {
      if (!info?.university?.session?._id) {
        return toast.warn("No session currently active");
      }
      let isExpired = moment(info?.university?.session?.end_date).isBefore(
        new Date().toISOString()
      );
      if (isExpired) {
        return toast.warn("Application Deadline Expired");
      }
      if (student_type === "local") {
        let isRequirementMatch = isLocalStudentQualified(
          info?.notRequiredLocal,
          info?.local,
          userInfo
        );
        if (isRequirementMatch) {
          await mutateAsync({
            session: info?.university?.session?._id,
            university: info?.university?._id,
            subject: info?.subject?._id,
            course: info?.isCourse && info?.course_details?._id,
          });
          setIsEnrollSuccessModalOpen(true);
        } else {
          setIsEnrollModalOpen(true);
        }
      } else if (student_type === "international") {
        let isRequirementMatch = isInternationalStudentQualified(
          info?.notRequiredInternational,
          info?.international,
          info?.international_type,
          userInfo
        );
        if (isRequirementMatch) {
          await mutateAsync({
            session: info?.university?.session?._id,
            university: info?.university?._id,
            subject: info?.subject?._id,
            course: info?.isCourse && info?.course_details?._id,
          });
          setIsEnrollSuccessModalOpen(true);
        } else {
          setIsEnrollModalOpen(true);
        }
      }
    } catch (error) {
      if (error?.response?.data?.error?.message?.startsWith("E11000")) {
        return toast.error("you have applied before !");
      }
      toast.error(error?.message);
    }
  };
>>>>>>> update-project/main
  return (
    <section className="py-7" id="course_summary">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-7 lg:gap-12 mb-7">
          <div className="flex-1 flex items-center">
            <div className="max-w-4xl">
<<<<<<< HEAD
              <h2 className="title text-3xl mb-7">Course Summary</h2>
              <p>
                The Pearson BTEC Level 5 Higher National Diploma in Engineering
                offers students seven pathways, designed to support progression
                into relevant occupational areas or onto degree-level study.
                These pathways are linked to Professional Body standards (where
                appropriate) and can provide progression towards professional
                status or entry to the later stages of an appropriate degree.
                You will develop a sound understanding of the principles in your
                field of study, and learn how to apply those principles more
                widely. You will learn how to evaluate the appropriateness of
                different approaches to solving problems and be able to perform
                effectively in your chosen field. You will have the qualities
                necessary for employment in situations requiring the exercise of
                personal responsibility and decision-making.
=======
              <h2 className="title text-3xl mb-7">
                {info?.isCourse ? "Course" : "Subject"} Summary
              </h2>
              <p>
                {info?.isCourse
                  ? info?.course_details?.summary
                  : info?.subject?.summary}
>>>>>>> update-project/main
              </p>
            </div>
          </div>
          <div>
            <div className="w-full lg:w-[25rem] relative lg:-mt-[15.75rem]">
              <div className="bg-[#F4FAFA] rounded-3xl lg:rounded-t-3xl overflow-hidden shadow-lg lg:p-4">
                <div className="h-52 relative">
                  <img
                    className="h-full w-full object-cover object-center lg:rounded-t-2xl"
<<<<<<< HEAD
                    src={courseImg}
=======
                    src={`${urls?.university_cover}/${info?.university?.cover}`}
>>>>>>> update-project/main
                    alt=""
                  />
                </div>
                <div className="flex flex-row-reverse flex-wrap lg:flex-col justify-center gap-7 px-7">
                  <div className="flex-shrink-0">
                    <img
<<<<<<< HEAD
                      className="h-40 w-40 rounded-xl object-cover object-center shadow relative mx-auto -mt-20 z-10"
                      src={universityImg}
=======
                      className="h-40 w-40 rounded-xl object-contain object-center shadow relative mx-auto -mt-20 z-10"
                      src={`${urls?.university_logo}/${info?.university?.logo}`}
>>>>>>> update-project/main
                      alt=""
                    />
                  </div>
                  <div className="text-center sm:text-right lg:text-center">
                    <div>
<<<<<<< HEAD
                      <h5 className="title mb-2">
                        American International University
                      </h5>
                      <p>Barnsley College Higher Education</p>
                      <p>Church Street Campus</p>
=======
                      <h5 className="title mb-2">{info?.university?.name}</h5>
                      <p>{info?.university?.campuses[0]?.name}</p>
                      <p>{info?.university?.campuses[0]?.location}</p>
>>>>>>> update-project/main
                    </div>
                  </div>
                </div>
                <div className="py-7 px-7">
                  <Button
<<<<<<< HEAD
                    onClick={() => setIsEnrollModalOpen(true)}
=======
                    onClick={async () => {
                      if (status?.accessToken) {
                        await handleApplication();
                        // setIsEnrollModalOpen(true);
                      } else {
                        navigation("/authentication/sign_up");
                      }
                    }}
                    isLoading={isLoading}
                    disabled={isLoading}
>>>>>>> update-project/main
                    className={"mx-auto w-full"}
                    text={"Enroll Now"}
                    icon={
                      <span className="material-icons-outlined">
                        trending_flat
                      </span>
                    }
                  />
                  <EnrollModal
                    isOpen={isEnrollModalOpen}
                    setIsOpen={setIsEnrollModalOpen}
<<<<<<< HEAD
=======
                    points={userInfo?.points}
                    ielts={userInfo?.ielts}
                    experience={userInfo?.experience}
                    level_3={userInfo?.level_3}
                    student_type={student_type}
                  />
                  <EnrollSuccessModal
                    isOpen={isEnrollSuccessModalOpen}
                    setIsOpen={setIsEnrollSuccessModalOpen}
>>>>>>> update-project/main
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-7">
          <h3 className="title text-2xl mb-7">Modules</h3>
<<<<<<< HEAD
          <p className="mb-7">The two mandatory core units at Level 5 are: </p>
          <ul className="mb-7">
            <li className="">
              <span className="text-2xl">●</span> Unit 34: Research Project
            </li>
            <li className="">
              <span className="text-2xl">●</span> Unit 35: Professional
              Engineering Management*. *(Unit 35: Professional Engineering
              Management is also the Pearson-set assignment unit)
            </li>
          </ul>
          <p>
            For the General Engineering pathway, students take the two mandatory
            core units
          </p>
=======
          <p className="mb-7">
            {info?.isCourse
              ? info?.course_details?.modules?.title
              : info?.subject?.modules?.title}
          </p>
          <ul className="mb-7">
            {info?.isCourse
              ? info?.course_details?.modules?.items?.map((x, i) => (
                  <li key={i} className="">
                    <span className="text-2xl">●</span> {x}
                  </li>
                ))
              : info?.subject?.modules?.items?.map((x, i) => (
                  <li key={i} className="">
                    <span className="text-2xl">●</span> {x}
                  </li>
                ))}
          </ul>
>>>>>>> update-project/main
        </div>
        <div>
          <h3 className="title text-2xl mb-7">Assessment method</h3>
          <ul>
<<<<<<< HEAD
            <li className="">
              <span className="text-2xl">●</span> Internally assessed
              centre-devised internal assignments
            </li>
            <li className="">
              <span className="text-2xl">●</span> Internally assessed
              Pearson-set Units
            </li>
=======
            {info?.isCourse
              ? info?.course_details?.assessment_method?.map((x, i) => (
                  <li key={i} className="">
                    <span className="text-2xl">●</span> {x}
                  </li>
                ))
              : info?.subject?.assessment_method?.map((x, i) => (
                  <li key={i} className="">
                    <span className="text-2xl">●</span> {x}
                  </li>
                ))}
>>>>>>> update-project/main
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseSummary;
