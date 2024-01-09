<<<<<<< HEAD
=======
/*
 * Copyright (c) 2023-2024. This product is copyright by Rian
 */

>>>>>>> update-project/main
import groupTalk from "@/assets/images/icons/group-talk-sky-blue.svg";
import madel from "@/assets/images/icons/madel-sky-blue.svg";
import profileImg from "@/assets/images/profile.jpg";
import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import Button from "@/components/Buttons/Button";
import StarRating from "@/components/StarRating/StarRating";
<<<<<<< HEAD
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from "react-icons/bi";
import { LuCalendarCheck, LuMessageCircle } from "react-icons/lu";
import { Link } from "react-router-dom";

const Banner = () => {
=======
import {BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin,} from "react-icons/bi";
import {LuCalendarCheck, LuMessageCircle} from "react-icons/lu";
import {Link, useNavigate} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchStudentCouncilor} from "@/pages/Student/Application/requests/applicationApis.js";
import {urls} from "@/apis/config/urls.js";
import {useSelector} from "react-redux";
import ScheduleModal from "@/pages/Student/Profile/Appointment/ScheduleModal.jsx";
import {useState} from "react";

const Banner = () => {
  const navigate = useNavigate();
  const [isScheduleModal, setIsScheduleModal] = useState(false);
  const { university } = useSelector((state) => state?.filter);
  const { data: councilor } = useQuery({
    queryKey: ["student_councilor"],
    queryFn: () => fetchStudentCouncilor(),
  });
>>>>>>> update-project/main
  return (
    <BackgroundLayer image_url={"/background/application-banner.png"}>
      <div className="container mx-auto lg:py-24 py-14">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-7 lg:gap-12">
          <div className="text-white text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl title text-white mb-4">
              Application
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="material-icons-outlined">arrow_back</span>
              <div className="flex items-center gap-2">
                <span>
                  <Link to={"/student"}>Home</Link>
                </span>
                <span>/</span>
                <span>
                  <Link to={"/student"}>Application</Link>
                </span>
                {" : "}
<<<<<<< HEAD
                <span> American International University</span>
=======
                <span>
                  {" "}
                  {university?.name ? university?.name : "select a application"}
                </span>
>>>>>>> update-project/main
              </div>
            </div>
          </div>
          <div>
            <div className="py-12 px-7 bg-white rounded-3xl w-full md:w-[35rem] flex gap-7">
              <div className="flex-shrink-0 h-20 w-20 hidden lg:block">
                <img
                  className="h-full w-full object-cover object-center rounded-full"
<<<<<<< HEAD
                  src={profileImg}
=======
                  src={`${urls?.user_photos}/${councilor?.councilor?.photo}`}
>>>>>>> update-project/main
                  alt=""
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-7">
                    <div className="flex-shrink-0 h-20 w-20 lg:hidden">
                      <img
                        className="h-full w-full object-cover object-center rounded-full"
                        src={profileImg}
                        alt=""
                      />
                    </div>
                    <div>
<<<<<<< HEAD
                      <h3 className="title text-2xl mb-2">Musa Zain</h3>
=======
                      <h3 className="title text-2xl mb-2">
                        {councilor?.councilor?.name}
                      </h3>
>>>>>>> update-project/main
                      <button className="py-1 px-4 rounded bg-primary-500 text-white text-sm">
                        <span>Councilor</span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4">
<<<<<<< HEAD
                      <div className="h-7 w-7 rounded border border-text-500-300 hover:border-primary-500 text-text-300 hover:text-primary-500 flex items-center justify-center cursor-pointer">
                        <BiLogoFacebook className="text-xl" />
                      </div>
                      <div className="h-7 w-7 rounded border border-text-500-300 hover:border-primary-500 text-text-300 hover:text-primary-500 flex items-center justify-center cursor-pointer">
                        <BiLogoLinkedin className="text-xl" />
                      </div>
                      <div className="h-7 w-7 rounded border border-text-500-300 hover:border-primary-500 text-text-300 hover:text-primary-500 flex items-center justify-center cursor-pointer">
=======
                      <div
                        onClick={() =>
                          window.open(`${councilor?.councilor?.facebook}`)
                        }
                        className="h-7 w-7 rounded border border-text-500-300 hover:border-primary-500 text-text-300 hover:text-primary-500 flex items-center justify-center cursor-pointer"
                      >
                        <BiLogoFacebook className="text-xl" />
                      </div>
                      <div
                        onClick={() =>
                          window.open(`${councilor?.councilor?.linkedin}`)
                        }
                        className="h-7 w-7 rounded border border-text-500-300 hover:border-primary-500 text-text-300 hover:text-primary-500 flex items-center justify-center cursor-pointer"
                      >
                        <BiLogoLinkedin className="text-xl" />
                      </div>
                      <div
                        onClick={() =>
                          window.open(`${councilor?.councilor?.instagram}`)
                        }
                        className="h-7 w-7 rounded border border-text-500-300 hover:border-primary-500 text-text-300 hover:text-primary-500 flex items-center justify-center cursor-pointer"
                      >
>>>>>>> update-project/main
                        <BiLogoInstagramAlt className="text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-7 w-7 rounded bg-primary-500 bg-opacity-10 flex items-center justify-center">
                      <img
                        className="h-5 w-5 object-contain object-center"
                        src={groupTalk}
                        alt=""
                      />
                    </div>
                    <div>
                      <h5 className="text-sm text-text-300">
                        Students Counselled
                      </h5>
<<<<<<< HEAD
                      {<p className="text-sm text-text-900">12</p> || (
                        <p className="text-sm text-text-100">N/A</p>
                      )}
=======
                      <p className="text-sm text-text-900">
                        {councilor?.councilor?.counselled}
                      </p>
>>>>>>> update-project/main
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-7 w-7 rounded bg-primary-500 bg-opacity-10 flex items-center justify-center">
                      <img
                        className="h-5 w-5 object-contain object-center"
                        src={madel}
                        alt=""
                      />
                    </div>
                    <div>
                      <h5 className="text-sm text-text-300">Rating</h5>
<<<<<<< HEAD
                      {(
                        <div className="flex gap-2 items-center">
                          <StarRating rating={3.5} starSize={20} />{" "}
                          <span>({5})</span>
                        </div>
                      ) || <p className="text-sm text-text-100">N/A</p>}
=======
                      <div className="flex gap-2 items-center">
                        <StarRating
                          out_of={5}
                          rating={councilor?.councilor?.rating}
                          starSize={20}
                        />{" "}
                        <span>({councilor?.councilor?.rating || 0})</span>
                      </div>
>>>>>>> update-project/main
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <Button
<<<<<<< HEAD
=======
                    onClick={() => setIsScheduleModal(true)}
>>>>>>> update-project/main
                    className={"auto"}
                    text={"Book a Session"}
                    icon={<LuCalendarCheck className="text-xl" />}
                  />
                  <Button
<<<<<<< HEAD
=======
                    onClick={() => navigate("/chat_system/calendar")}
>>>>>>> update-project/main
                    className={"auto bg-primary-500"}
                    text={"Chat now"}
                    icon={<LuMessageCircle className="text-xl" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
=======
        <ScheduleModal
          isOpen={isScheduleModal}
          setIsOpen={setIsScheduleModal}
        />
>>>>>>> update-project/main
      </div>
    </BackgroundLayer>
  );
};

export default Banner;
