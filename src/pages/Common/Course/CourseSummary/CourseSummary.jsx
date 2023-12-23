/*
 * Copyright (c) 2023. This product is copyright by Rian
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
      toast.error(error?.message);
    }
  };
  return (
    <section className="py-7" id="course_summary">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-7 lg:gap-12 mb-7">
          <div className="flex-1 flex items-center">
            <div className="max-w-4xl">
              <h2 className="title text-3xl mb-7">
                {info?.isCourse ? "Course" : "Subject"} Summary
              </h2>
              <p>
                {info?.isCourse
                  ? info?.course_details?.summary
                  : info?.subject?.summary}
              </p>
            </div>
          </div>
          <div>
            <div className="w-full lg:w-[25rem] relative lg:-mt-[15.75rem]">
              <div className="bg-[#F4FAFA] rounded-3xl lg:rounded-t-3xl overflow-hidden shadow-lg lg:p-4">
                <div className="h-52 relative">
                  <img
                    className="h-full w-full object-cover object-center lg:rounded-t-2xl"
                    src={`${urls?.university_cover}/${info?.university?.cover}`}
                    alt=""
                  />
                </div>
                <div className="flex flex-row-reverse flex-wrap lg:flex-col justify-center gap-7 px-7">
                  <div className="flex-shrink-0">
                    <img
                      className="h-40 w-40 rounded-xl object-contain object-center shadow relative mx-auto -mt-20 z-10"
                      src={`${urls?.university_logo}/${info?.university?.logo}`}
                      alt=""
                    />
                  </div>
                  <div className="text-center sm:text-right lg:text-center">
                    <div>
                      <h5 className="title mb-2">{info?.university?.name}</h5>
                      <p>{info?.university?.campuses[0]?.name}</p>
                      <p>{info?.university?.campuses[0]?.location}</p>
                    </div>
                  </div>
                </div>
                <div className="py-7 px-7">
                  <Button
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
                    points={userInfo?.points}
                    ielts={userInfo?.ielts}
                    experience={userInfo?.experience}
                    level_3={userInfo?.level_3}
                    student_type={student_type}
                  />
                  <EnrollSuccessModal
                    isOpen={isEnrollSuccessModalOpen}
                    setIsOpen={setIsEnrollSuccessModalOpen}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-7">
          <h3 className="title text-2xl mb-7">Modules</h3>
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
        </div>
        <div>
          <h3 className="title text-2xl mb-7">Assessment method</h3>
          <ul>
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
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseSummary;
