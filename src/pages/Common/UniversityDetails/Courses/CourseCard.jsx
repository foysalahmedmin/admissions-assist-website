import {
  BiAward,
  BiBookOpen,
  BiHistory,
  BiMoney,
  BiTimeFive,
} from "react-icons/bi";
import cardImg from "@/assets/images/course-card.png";
import universityImg from "@/assets/images/course-university.svg";
import { Link } from "react-router-dom";

const CourseCard = () => {
  return (
    <div className="rounded-3xl overflow-hidden">
      <div className="h-60 mb-7 relative">
        <img
          className="h-full w-full object-cover object-center"
          src={cardImg}
          alt=""
        />
        <div className="flex items-center justify-center px-7 bg-title bg-opacity-50 text-white rounded absolute inset-0">
          <div className="text-center">
            <img
              className="rounded-full mx-auto mb-4"
              src={universityImg}
              alt=""
            />
            <div>
              <strong>Barnsley College Higher Education</strong>
              <p>Barnsley College Higher Education</p>
              <p>Church Street Campus</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-7 px-7">
        <div className="mb-4">
          <h3 className="title text-2xl ">Engineering</h3>
        </div>
        <div className="grid grid-cols-2 gap-7">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary bg-opacity-10 text-primary flex items-center justify-center">
              <BiHistory />
            </div>
            <div>
              <h5 className="text-sm text-labels">Session</h5>
              {<p className="text-sm text-title">2024-2025</p> || (
                <p className="text-sm text-placeholder">
                  No information for this filed yet
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
              {<p className="text-sm text-title">Full Time</p> || (
                <p className="text-sm text-placeholder">
                  No information for this filed yet
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
              {(
                <div className="text-sm text-title flex gap-1">
                  <span>103</span>
                  <div className="text-[.5rem] -mt-1 relative">th</div>
                </div>
              ) || (
                <p className="text-sm text-placeholder">
                  No information for this filed yet
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
              {(
                <div className="text-sm text-title flex gap-2">
                  <span>£</span>
                  <span className="">18,000</span>
                </div>
              ) || (
                <p className="text-sm text-placeholder">
                  No information for this filed yet
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link>
          <button className="w-full py-4 font-semibold bg-primary text-white animate-pop active:scale-95">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
