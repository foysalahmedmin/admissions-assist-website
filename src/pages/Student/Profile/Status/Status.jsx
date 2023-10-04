import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import ProgressBarCircle from "@/components/ProgressBar/ProgressBarCircle";
import profileUserIcon from "@/assets/images/icons/profile-user.svg";
import { AiOutlineEdit, AiOutlineEnvironment } from "react-icons/ai";
import Button from "@/components/Buttons/Button";
import eduCap from "@/assets/images/icons/edu-cap.svg";
import phoneCall from "@/assets/images/icons/phone-call.svg";
import badge from "@/assets/images/icons/badge.svg";
import calendar from "@/assets/images/icons/calendar.svg";
import Guidance from "./Guidance";

const Status = () => {
  return (
    <section>
      <BackgroundLayer image_url={"/background/student-status.svg"}>
        <div className="container mx-auto">
          <div className="pt-7 relative mb-24">
            <div className="rounded-xl bg-white flex p-7 justify-between gap-4 -mt-36">
              <div className="flex-1">
                <div className="flex items-center gap-12 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-24 w-24 rounded-full border-4">
                      <img
                        className="h-full w-full object-cover object-center"
                        src={profileUserIcon}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-title mb-2">
                        Musa Zain
                      </h1>
                      <div className="flex gap-1 items-center">
                        <AiOutlineEnvironment className="text-xl text-primary" />
                        <span className="text-sm">
                          Nikunjo-2, Khilkhet, Dhaka
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button
                      text={"Edit Profile"}
                      icon={<AiOutlineEdit className="text-xl" />}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-7 w-7 rounded bg-primary bg-opacity-10 flex items-center justify-center">
                      <img
                        className="h-5 w-5 object-contain object-center"
                        src={eduCap}
                        alt=""
                      />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Education</h5>
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
                      <h5 className="font-semibold mb-1">Phone Number</h5>
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
                      <h5 className="font-semibold mb-1">Point/Credit</h5>
                      {(
                        <p className="text-sm text-secondary font-bold">243</p>
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
                        src={calendar}
                        alt=""
                      />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Date of Birth</h5>
                      {(
                        <p className="text-sm text-title">DOB: 18 Aug, 1998</p>
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
                <ProgressBarCircle
                  percentage={30}
                  strokeSize={12}
                  size={"170"}
                  className={"text"}
                  percentSize={"2rem"}
                  text={
                    <div className="text-center">
                      <p className="text-title text-sm font-semibold">
                        Profile Completed
                      </p>
                      <p className="text-primary text-sm underline">
                        Complete Now
                      </p>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          <Guidance />
        </div>
      </BackgroundLayer>
    </section>
  );
};

export default Status;
