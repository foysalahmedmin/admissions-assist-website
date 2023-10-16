import React from "react";
import {
  BiAward,
  BiBookOpen,
  BiHistory,
  BiMoney,
  BiTimeFive,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const CourseCard = ({ data, rounded }) => {
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
    class_starts,
    tuition_fee,
    ranking,
  } = data;

  return (
    <>
      {!rounded && (
        <div>
          <div className="h-60 mb-7 relative">
            <img
              className="h-full w-full object-cover object-center"
              src={image}
              alt=""
            />
            {duration && (
              <div className="flex items-center justify-center gap-2 px-4 py-1 bg-secondary text-white rounded absolute top-4 right-4">
                <span>
                  <BiTimeFive />
                </span>
                <span>{duration}</span>
              </div>
            )}
          </div>
          <div className="mb-7">
            <div className="mb-4">
              <h3 className="title text-2xl mb-1">{title}</h3>
              <h3 className="title mb-1">{institution}</h3>
              <p className="text-sm">{bio}</p>
            </div>
            <div className="grid grid-cols-2 gap-7">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary bg-opacity-10 text-primary flex items-center justify-center">
                  <BiHistory />
                </div>
                <div>
                  <h5 className="text-sm text-labels">Session</h5>
                  {session ? (
                    <p className="text-sm text-title">{session}</p>
                  ) : (
                    <p className="text-sm text-placeholder">
                      No information for this field yet
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary bg-opacity-10 text-primary flex items-center justify-center">
                  <BiBookOpen />
                </div>
                <div>
                  <h5 className="text-sm text-labels">Study Mode</h5>
                  {study_mode ? (
                    <p className="text-sm text-title">{study_mode}</p>
                  ) : (
                    <p className="text-sm text-placeholder">
                      No information for this field yet
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary bg-opacity-10 text-primary flex items-center justify-center">
                  <BiAward />
                </div>
                <div>
                  <h5 className="text-sm text-labels">Ranking</h5>
                  {ranking ? (
                    <div className="text-sm text-title flex gap-1">
                      <span>{ranking}</span>
                      <div className="text-[.5rem] -mt-1 relative">th</div>
                    </div>
                  ) : (
                    <p className="text-sm text-placeholder">
                      No information for this field yet
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary bg-opacity-10 text-primary flex items-center justify-center">
                  <BiMoney />
                </div>
                <div>
                  <h5 className="text-sm text-labels">Tuition fee</h5>
                  {tuition_fee ? (
                    <div className="text-sm text-title flex gap-2">
                      <span>£</span>
                      <span className="">{tuition_fee}</span>
                    </div>
                  ) : (
                    <p className="text-sm text-placeholder">
                      No information for this field yet
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link to="/course/01">
              {" "}
              {/* Add the correct destination route */}
              <button className="font-bold text-primary animate-pop active:scale-95">
                View Details +
              </button>
            </Link>
          </div>
        </div>
      )}
      {rounded && (
        <div className="rounded-3xl overflow-hidden">
          <div className="h-60 mb-7 relative">
            <img
              className="h-full w-full object-cover object-center"
              src={image}
              alt=""
            />
            <div className="flex items-center justify-center px-7 bg-title bg-opacity-50 text-white rounded absolute inset-0">
              <div className="text-center">
                <img
                  className="rounded-full mx-auto mb-4"
                  src={institution_image}
                  alt=""
                />
                <div>
                  <strong>{institution}</strong>
                  <p>{bio}</p>
                  <p>Church Street Campus</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-7 mb-7">
            <div className="mb-4">
              <h3 className="title text-2xl">{title}</h3>
            </div>
            <div className="grid grid-cols-2 gap-7">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary bg-opacity-10 text-primary flex items-center justify-center">
                  <BiHistory />
                </div>
                <div>
                  <h5 className="text-sm text-labels">Session</h5>
                  {session ? (
                    <p className="text-sm text-title">{session}</p>
                  ) : (
                    <p className="text-sm text-placeholder">
                      No information for this field yet
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary bg-opacity-10 text-primary flex items-center justify-center">
                  <BiBookOpen />
                </div>
                <div>
                  <h5 className="text-sm text-labels">Study Mode</h5>
                  {study_mode ? (
                    <p className="text-sm text-title">{study_mode}</p>
                  ) : (
                    <p className="text-sm text-placeholder">
                      No information for this field yet
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary bg-opacity-10 text-primary flex items-center justify-center">
                  <BiAward />
                </div>
                <div>
                  <h5 className="text-sm text-labels">Ranking</h5>
                  {ranking ? (
                    <div className="text-sm text-title flex gap-1">
                      <span>{ranking}</span>
                      <div className="text-[.5rem] -mt-1 relative">th</div>
                    </div>
                  ) : (
                    <p className="text-sm text-placeholder">
                      No information for this field yet
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary bg-opacity-10 text-primary flex items-center justify-center">
                  <BiMoney />
                </div>
                <div>
                  <h5 className="text-sm text-labels">Tuition fee</h5>
                  {tuition_fee ? (
                    <div className="text-sm text-title flex gap-2">
                      <span>£</span>
                      <span className="">{tuition_fee}</span>
                    </div>
                  ) : (
                    <p className="text-sm text-placeholder">
                      No information for this field yet
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link to="/course/01">
              <button className="w-full py-4 font-semibold bg-primary text-white animate-pop active:scale-95">
                View Details
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseCard;
