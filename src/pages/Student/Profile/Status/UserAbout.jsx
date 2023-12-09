import badge from "@/assets/images/icons/badge-sky-blue.svg";
import calendar from "@/assets/images/icons/calendar-sky-blue.svg";
import eduCap from "@/assets/images/icons/edu-cap-sky-blue.svg";
import phoneCall from "@/assets/images/icons/phone-call-sky-blue.svg";
import profileUserIcon from "@/assets/images/icons/profile-user.svg";
import Button from "@/components/Buttons/Button";
import ProgressBarCircle from "@/components/ProgressBar/ProgressBarCircle";
import ProgressBarLinear from "@/components/ProgressBar/ProgressBarLinear";
import { useEffect, useState } from "react";
import { LuMapPin, LuPenSquare } from "react-icons/lu";
import ProfileUploadModal from "./ProfileUploadModal";
const UserAbout = () => {
  const [imageFile, setImageFile] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  useEffect(() => {
    if (imageFile) {
      setIsProfileModalOpen(false);
    }
  }, [imageFile]);
  return (
    <div className="relative mb-24 lg:-mt-32 -mt-80">
      <div className="rounded-xl bg-white flex items-center justify-between gap-7 p-7 ">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-4 mb-4 lg:mb-7">
            <div
              onClick={() => setIsProfileModalOpen(true)}
              className="h-24 w-24 rounded-full border-4 flex-shrink-0 relative"
            >
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src={
                  (imageFile && URL.createObjectURL(imageFile)) ||
                  profileUserIcon
                }
                alt=""
                loading="lazy"
              />
              <div className="absolute -bottom-1 -right-1 h-8 w-8 flex items-center justify-center border-4 border-white rounded-full bg-secondary-500 text-white">
                <span className="material-icons-outlined">add</span>
              </div>
            </div>
            <ProfileUploadModal
              isOpen={isProfileModalOpen}
              setIsOpen={setIsProfileModalOpen}
              setImageFile={setImageFile}
            />
            <div className="flex lg:items-center gap-4 lg:gap-7">
              <div>
                <h1 className="text-xl font-bold text-text-900 mb-2">
                  Musa Zain
                </h1>
                <div className="flex gap-1 items-center">
                  <LuMapPin className="text-xl text-primary-500" />
                  <span className="text-sm">Nikunjo-2, Khilkhet, Dhaka</span>
                </div>
              </div>
              <div>
                <Button
                  className={"hidden lg:flex"}
                  text={"Edit Profile"}
                  icon={<LuPenSquare className="text-xl" />}
                />
                <Button
                  className={"lg:hidden rounded-btn-sm"}
                  icon={<LuPenSquare />}
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
                  <p className="text-text-900 text-sm font-semibold">
                    Profile Completed
                  </p>
                  <p className="text-primary-500 text-xs underline">
                    Complete Now
                  </p>
                </div>
                <h3 className="text-text-900 text-2xl font-bold">{30}%</h3>
              </div>
            </ProgressBarLinear>
          </div>
          <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-7 w-7 rounded bg-primary-500 bg-opacity-10 flex items-center justify-center">
                <img
                  className="h-5 w-5 object-contain object-center"
                  src={eduCap}
                  alt=""
                />
              </div>
              <div>
                <h5 className="font-semibold ">Education</h5>
                {(
                  <p className="text-sm text-text-900">
                    A Level, High School Romania , BA Hons Business
                  </p>
                ) || (
                  <p className="text-sm text-text-100">
                    No information for this filed yet
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-7 w-7 rounded bg-primary-500 bg-opacity-10 flex items-center justify-center">
                <img
                  className="h-5 w-5 object-contain object-center"
                  src={phoneCall}
                  alt=""
                />
              </div>
              <div>
                <h5 className="font-semibold ">Phone Number</h5>
                {<p className="text-sm text-text-900">+8801678788665</p> || (
                  <p className="text-sm text-text-100">
                    No information for this filed yet
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-7 w-7 rounded bg-primary-500 bg-opacity-10 flex items-center justify-center">
                <img
                  className="h-5 w-5 object-contain object-center"
                  src={badge}
                  alt=""
                />
              </div>
              <div>
                <h5 className="font-semibold ">Point/Credit</h5>
                {(
                  <p className="text-sm text-secondary-500 font-bold">243</p>
                ) || (
                  <p className="text-sm text-text-100">
                    No information for this filed yet
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-7 w-7 rounded bg-primary-500 bg-opacity-10 flex items-center justify-center">
                <img
                  className="h-5 w-5 object-contain object-center"
                  src={calendar}
                  alt=""
                />
              </div>
              <div>
                <h5 className="font-semibold ">Date of Birth</h5>
                {<p className="text-sm text-text-900">DOB: 18 Aug, 1998</p> || (
                  <p className="text-sm text-text-100">
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
              <h3 className="text-text-900 font-bold text-2xl mb-2">{30}%</h3>
              <div className="text-center">
                <p className="text-text-900 text-sm font-semibold">
                  Profile Completed
                </p>
                <p className="text-primary-500 text-sm underline">
                  Complete Now
                </p>
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
