/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {BiAward, BiBookOpen, BiHistory, BiMoney, BiTimeFive,} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import Button from "@/components/Buttons/Button.jsx";
import {FaArrowRight} from "react-icons/fa";
import {urls} from "@/apis/config/urls.js";

// eslint-disable-next-line react/prop-types
const CourseCard = ({ data, params, rounded }) => {
  const navigation = useNavigate();
  // const [isAvailableCourseModalOpen, setIsAvailableCourseModalOpen] =
  //   useState(false);
  const {
    title,
    image,
    institution,
    institution_image,
    bio,
    location,
    duration,
    session,
    study_mode,
    tuition_fee,
    ranking,
    course_count,
  } = data;

  return (
    <>
      {!rounded && (
        <div className="bg-white">
          <div className="h-60 mb-7 relative">
            <img
              className="h-full w-full object-cover object-center"
              src={`${urls?.subject}/${image}`}
              alt=""
            />
            {duration && (
              <div className="flex items-center justify-center gap-2 px-4 py-1 bg-secondary-500 text-white rounded absolute top-4 right-4">
                <span>
                  <BiTimeFive />
                </span>
                <span>{duration}</span>
              </div>
            )}
          </div>
          <div className="mb-7">
            <div className="mb-4">
              <h3 className="title text-xl mb-1">{title}</h3>
              <h3 className="title">{institution}</h3>
              <span className="text-sm">{bio}</span>
            </div>
            <div className="mb-4">
              <span
                // onClick={() => setIsAvailableCourseModalOpen(true)}
                className="text-primary-500 underline font-semibold cursor-pointer inline-block"
              >
                {course_count} Course options available
              </span>
              {/*<AvailableCourseModal*/}
              {/*  isOpen={isAvailableCourseModalOpen}*/}
              {/*  setIsOpen={setIsAvailableCourseModalOpen}*/}
              {/*/>*/}
            </div>
            <div className="grid grid-cols-2 gap-7">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary-500 bg-opacity-10 text-primary-500 flex items-center justify-center">
                  <BiHistory />
                </div>
                <div>
                  <h5 className="text-sm text-text-300">Session</h5>
                  {session ? (
                    <p className="text-sm text-text-900">{session}</p>
                  ) : (
                    <p className="text-sm text-text-100">No information</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary-500 bg-opacity-10 text-primary-500 flex items-center justify-center">
                  <BiBookOpen />
                </div>
                <div>
                  <h5 className="text-sm text-text-300">Study Mode</h5>
                  {study_mode ? (
                    <p className="text-sm text-text-900">{study_mode}</p>
                  ) : (
                    <p className="text-sm text-text-100">No information</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary-500 bg-opacity-10 text-primary-500 flex items-center justify-center">
                  <BiAward />
                </div>
                <div>
                  <h5 className="text-sm text-text-300">Ranking</h5>
                  {ranking ? (
                    <div className="text-sm text-text-900 flex gap-1">
                      <span>{ranking}</span>
                      <div className="text-[.5rem] -mt-1 relative">th</div>
                    </div>
                  ) : (
                    <p className="text-sm text-text-100">No information</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary-500 bg-opacity-10 text-primary-500 flex items-center justify-center">
                  <BiMoney />
                </div>
                <div>
                  <h5 className="text-sm text-text-300">Tuition fee</h5>
                  {tuition_fee ? (
                    <div className="text-sm text-text-900 flex gap-2">
                      <span>£</span>
                      <span className="">{tuition_fee}</span>
                    </div>
                  ) : (
                    <p className="text-sm text-text-100">No information</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <Button
              onClick={() =>
                navigation(
                  `/course/${params?.subject}/${params?.requirement}/${params?.university}`
                )
              }
              text={"Details"}
              icon={<FaArrowRight />}
              className="secondary-btn-sm"
            />
          </div>
        </div>
      )}

      {rounded && (
        <div className="rounded-3xl overflow-hidden bg-white">
          <div className="h-60 mb-7 relative">
            <img
              className="h-full w-full object-cover object-center"
              src={image}
              alt=""
            />
            <div className="flex items-center justify-center px-7 bg-black-900 bg-opacity-70 text-white rounded absolute inset-0">
              <div className="text-center">
                <img
                  className="rounded-full h-20 w-20 object-contain mx-auto mb-4"
                  src={institution_image}
                  alt=""
                />
                <div>
                  <strong>{institution}</strong>
                  <p>{location}</p>
                  {/*<p>Church Street Campus</p>*/}
                </div>
              </div>
            </div>
          </div>
          <div className="px-7 mb-7">
            <div className="mb-4">
              <h3 className="title h-14 text-2xl">{title}</h3>
            </div>
            <div className="grid grid-cols-2 gap-7">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary-500 bg-opacity-10 text-primary-500 flex items-center justify-center">
                  <BiHistory />
                </div>
                <div>
                  <h5 className="text-sm text-text-300">Session</h5>
                  {session ? (
                    <p className="text-sm text-text-900">{session}</p>
                  ) : (
                    <p className="text-sm text-text-100">
                      No information for this field yet
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary-500 bg-opacity-10 text-primary-500 flex items-center justify-center">
                  <BiBookOpen />
                </div>
                <div>
                  <h5 className="text-sm text-text-300">Study Mode</h5>
                  {study_mode ? (
                    <p className="text-sm text-text-900">{study_mode}</p>
                  ) : (
                    <p className="text-sm text-text-100">
                      No information for this field yet
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary-500 bg-opacity-10 text-primary-500 flex items-center justify-center">
                  <BiAward />
                </div>
                <div>
                  <h5 className="text-sm text-text-300">Ranking</h5>
                  {ranking ? (
                    <div className="text-sm text-text-900 flex gap-1">
                      <span>{ranking}</span>
                      <div className="text-[.5rem] -mt-1 relative">th</div>
                    </div>
                  ) : (
                    <p className="text-sm text-text-100">
                      No information for this field yet
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary-500 bg-opacity-10 text-primary-500 flex items-center justify-center">
                  <BiMoney />
                </div>
                <div>
                  <h5 className="text-sm text-text-300">Tuition fee</h5>
                  {tuition_fee ? (
                    <div className="text-sm text-text-900 flex gap-2">
                      <span>£</span>
                      <span className="">{tuition_fee}</span>
                    </div>
                  ) : (
                    <p className="text-sm text-text-100">
                      No information for this field yet
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <button
                onClick={() =>
                  navigation(
                    `/course/${params?.subject}/${params?.requirement}/${params?.university}`
                  )
                }
                className="w-full py-4 font-semibold bg-primary-500 text-white animate-pop active:scale-95"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseCard;
