import noCourses from "@/assets/images/no-courses.svg";
import Button from "@/components/Buttons/Button";
import { Link } from "react-router-dom";

const Guidance = () => {
  return (
    <div className="text-center relative -mb-24">
      <div className="text-white mb-7">
        <h1 className="text-3xl font-bold mb-4">
          We Provide You Step by Step Guide
        </h1>
        <p>You have 0 assigned application and 0 not assigned applications</p>
      </div>
      <div>
        <div className="max-w-[50rem] mx-auto bg-white text-center rounded-xl lg:p-7">
          <div className="max-w-lg mx-auto mb-7">
            <img className="w-full object-contain" src={noCourses} alt="" />
          </div>
          <div className="mb-4">
            <strong className="text-title mb-2">No Courses Applied Yet</strong>
            <p>Update your profile and apply to courses</p>
          </div>
          <div>
            <Link>
              <Button
                text={"Apply Now"}
                icon={
                  <span className="material-icons-outlined">trending_flat</span>
                }
                className={"mx-auto"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidance;
