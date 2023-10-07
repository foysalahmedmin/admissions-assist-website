import ProgressBarCircle from "@/components/ProgressBar/ProgressBarCircle";
import profileUserIcon from "@/assets/images/icons/profile-user.svg";
import { AiOutlineEdit, AiOutlineEnvironment } from "react-icons/ai";
import Button from "@/components/Buttons/Button";
import eduCap from "@/assets/images/icons/edu-cap-sky-blue.svg";
import phoneCall from "@/assets/images/icons/phone-call-sky-blue.svg";
import badge from "@/assets/images/icons/badge-sky-blue.svg";
import calendar from "@/assets/images/icons/calendar-sky-blue.svg";
import ProgressBarLinear from "@/components/ProgressBar/ProgressBarLinear";
const UserAbout = () => {
  return (
    <div className="relative mb-24 lg:-mt-32 -mt-80">
      <div className="rounded-xl bg-white flex items-center justify-between gap-7 p-7 ">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-4 mb-4 lg:mb-7">
            <div className="h-24 w-24 rounded-full border-4 flex-shrink-0">
              <img
                className="h-full w-full object-cover object-center"
                src={profileUserIcon}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex lg:items-center gap-4 lg:gap-7">
              <div>
                <h1 className="text-xl font-bold text-title mb-2">Musa Zain</h1>
                <div className="flex gap-1 items-center">
                  <AiOutlineEnvironment className="text-xl text-primary" />
                  <span className="text-sm">Nikunjo-2, Khilkhet, Dhaka</span>
                </div>
              </div>
              <div>
                <Button
                  className={"hidden lg:flex"}
                  text={"Edit Profile"}
                  icon={<AiOutlineEdit className="text-xl" />}
                />
                <Button
                  className={"lg:hidden rounded-btn-sm"}
                  icon={<AiOutlineEdit className="" />}
                />
              </div>
            </div>
          </div>
          <div className="mb-4 lg:hidden">
            <ProgressBarLinear
              percentage={30}
              strokeSize={8}
              className={"text"}
              percentSize={"2rem"}
            >
              <div className="flex justify-between items-center gap-4 mb-2">
                <div className="">
                  <p className="text-title text-sm font-semibold">
                    Profile Completed
                  </p>
                  <p className="text-primary text-xs underline">Complete Now</p>
                </div>
                <h3 className="text-title text-2xl font-bold">{30}%</h3>
              </div>
            </ProgressBarLinear>
          </div>
          <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-7 w-7 rounded bg-primary bg-opacity-10 flex items-center justify-center">
                <img
                  className="h-5 w-5 object-contain object-center"
                  src={eduCap}
                  alt=""
                />
              </div>
              <div>
                <h5 className="font-semibold ">Education</h5>
                {(
                  <p className="text-sm text-title">
                    A Level, High School Romania , BA Hons Business
                  </p>
                ) || (
                  <p className="text-sm text-placeholder">
                    No information for this filed yet
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-7 w-7 rounded bg-primary bg-opacity-10 flex items-center justify-center">
                <img
                  className="h-5 w-5 object-contain object-center"
                  src={phoneCall}
                  alt=""
                />
              </div>
              <div>
                <h5 className="font-semibold ">Phone Number</h5>
                {<p className="text-sm text-title">+8801678788665</p> || (
                  <p className="text-sm text-placeholder">
                    No information for this filed yet
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-7 w-7 rounded bg-primary bg-opacity-10 flex items-center justify-center">
                <img
                  className="h-5 w-5 object-contain object-center"
                  src={badge}
                  alt=""
                />
              </div>
              <div>
                <h5 className="font-semibold ">Point/Credit</h5>
                {<p className="text-sm text-secondary font-bold">243</p> || (
                  <p className="text-sm text-placeholder">
                    No information for this filed yet
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-7 w-7 rounded bg-primary bg-opacity-10 flex items-center justify-center">
                <img
                  className="h-5 w-5 object-contain object-center"
                  src={calendar}
                  alt=""
                />
              </div>
              <div>
                <h5 className="font-semibold ">Date of Birth</h5>
                {<p className="text-sm text-title">DOB: 18 Aug, 1998</p> || (
                  <p className="text-sm text-placeholder">
                    No information for this filed yet
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <ProgressBarCircle
            percentage={30}
            strokeSize={12}
            size={190}
            className={"text"}
            percentSize={"2rem"}
          >
            <div>
              <h3 className="text-title font-bold text-2xl mb-2">{30}%</h3>
              <div className="text-center">
                <p className="text-title text-sm font-semibold">
                  Profile Completed
                </p>
                <p className="text-primary text-sm underline">Complete Now</p>
              </div>
            </div>
          </ProgressBarCircle>
          <br />
        </div>
      </div>
    </div>
  );
};

export default UserAbout;
