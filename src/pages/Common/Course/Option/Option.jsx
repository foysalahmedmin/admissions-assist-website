/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import Button from "@/components/Buttons/Button";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import moment from "moment";
import {isInternationalStudentQualified, isLocalStudentQualified,} from "@/helpers/requirementStatus.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchCommonStudent} from "@/redux/studentSlice/studentSlice.js";
import {studentType} from "@/helpers/studentType.js";
import {useMutation} from "react-query";
import {submitApplication} from "@/pages/Common/Course/Course/requests/courseApi.js";
import EnrollModal from "@/pages/Common/Course/EnrollRequireModal/EnrollRequireModal.jsx";
import EnrollSuccessModal from "@/pages/Common/Course/EnrollSuccessModal/EnrollSuccessModal.jsx";
import ScheduleModal from "@/pages/Student/Profile/Appointment/ScheduleModal.jsx";

const Option = ({ info }) => {
  const navigate = useNavigate();
  const [student_type, setStudentType] = useState("");
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCommonStudent());
  }, [dispatch]);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isEnrollSuccessModalOpen, setIsEnrollSuccessModalOpen] =
    useState(false);
  const { userInfo } = useSelector((state) => state.student);
  studentType().then((x) => setStudentType(x));
  const auth = JSON.parse(localStorage.getItem("aa_website"));

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
    <BackgroundLayer
      image_url={"/background/courses-details-option-section.png"}
      bg_position={"bg-center"}
      className={"lg:py-24 py-14"}
    >
      <div className="container mx-auto text-center">
        <h1 className="title text-white text-3xl lg:text-5xl mb-12">
          Not Sure How To Proceed <br /> Find a Consultant
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-[25rem] py-4 px-4 lg:px-7 bg-white rounded-xl ">
            <div className="w-full min-h-[8rem] flex items-center justify-center text-center">
              <div className="p-2">
                <strong className="title">
                  Book a Session With Our <br /> Expert Consultant{" "}
                </strong>
                <Button
                  onClick={() => {
                    auth?.accessToken
                      ? setIsScheduleModalOpen(true)
                      : navigate("/authentication/login");
                  }}
                  className={"mt-2 mx-auto"}
                  text={"Book An Appointment"}
                  icon={
                    <span className="material-icons-outlined">
                      trending_flat
                    </span>
                  }
                />
              </div>
            </div>
          </div>
          <div className="h-24 w-24 rounded-full -mt-4 -mb-4 lg:-ml-7 lg:-mr-7 z-10">
            <div className="h-full w-full border-4 border-primary-500 rounded-full">
              <div className="h-full w-full border-4 border-white rounded-full bg-primary-500 flex items-center justify-center">
                <h3 className="title text-white text-3xl">Or</h3>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[25rem] py-4 px-4 lg:px-7 bg-white rounded-xl ">
            <div className="w-full min-h-[8rem] flex items-center justify-center text-center">
              <div className="p-2">
                <strong className="title">Proceed To Application</strong>
                <Button
                  onClick={async () => {
                    if (auth?.accessToken) {
                      await handleApplication();
                      // setIsEnrollModalOpen(true);
                    } else {
                      navigate("/authentication/login");
                    }
                  }}
                  isLoading={isLoading}
                  disabled={isLoading}
                  className={"mt-2 mx-auto"}
                  text={"Enroll Now"}
                  icon={
                    <span className="material-icons-outlined">
                      trending_flat
                    </span>
                  }
                />
              </div>
            </div>
          </div>
        </div>
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
        <ScheduleModal
          isOpen={isScheduleModalOpen}
          setIsOpen={setIsScheduleModalOpen}
        />
      </div>
    </BackgroundLayer>
  );
};

export default Option;
