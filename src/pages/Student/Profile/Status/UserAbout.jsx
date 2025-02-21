<<<<<<< HEAD
=======
/*
 * Copyright (c) 2023-2024. This product is copyright by Rian
 */

>>>>>>> update-project/main
import badge from "@/assets/images/icons/badge-sky-blue.svg";
import calendar from "@/assets/images/icons/calendar-sky-blue.svg";
import eduCap from "@/assets/images/icons/edu-cap-sky-blue.svg";
import phoneCall from "@/assets/images/icons/phone-call-sky-blue.svg";
import profileUserIcon from "@/assets/images/icons/profile-user.svg";
import Button from "@/components/Buttons/Button";
import ProgressBarCircle from "@/components/ProgressBar/ProgressBarCircle";
import ProgressBarLinear from "@/components/ProgressBar/ProgressBarLinear";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { LuMapPin, LuPenSquare } from "react-icons/lu";
import ProfileUploadModal from "./ProfileUploadModal";
const UserAbout = () => {
  const [imageFile, setImageFile] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  useEffect(() => {
    if (imageFile) {
=======
import {useEffect, useState} from "react";
import {LuMapPin, LuPenSquare} from "react-icons/lu";
import ProfileUploadModal from "./ProfileUploadModal";
import {useMutation, useQuery} from "react-query";
import {fetchStudentData} from "@/redux/studentSlice/api.js";
import moment from "moment";
import {updateStudentPhoto} from "@/pages/Student/Profile/requests/profileApis.js";
import {toast} from "react-toastify";
import {urls} from "@/apis/config/urls.js";
import {useNavigate} from "react-router-dom";

const UserAbout = () => {
  const navigate = useNavigate();
  const { data: student } = useQuery({
    queryKey: ["student_common"],
    queryFn: () => fetchStudentData(),
  });
  const [imageFile, setImageFile] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const { mutateAsync } = useMutation({
    mutationFn: updateStudentPhoto,
  });
  useEffect(() => {
    async function postPhoto() {
      const status = await mutateAsync({ photo: imageFile });
      toast.success(status?.message);
    }

    if (imageFile) {
      postPhoto();
>>>>>>> update-project/main
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
<<<<<<< HEAD
                  (imageFile && URL.createObjectURL(imageFile)) ||
                  profileUserIcon
=======
                  student?.photo
                    ? `${urls?.student}/${student?.photo}`
                    : profileUserIcon
>>>>>>> update-project/main
                }
                alt=""
                loading="lazy"
              />
<<<<<<< HEAD
              <div className="absolute -bottom-1 -right-1 h-8 w-8 flex items-center justify-center border-4 border-white rounded-full bg-secondary-500 text-white">
=======
              <div className="absolute -bottom-1 -right-1 h-8 w-8 flex items-center cursor-pointer justify-center border-4 border-white rounded-full bg-secondary-500 text-white">
>>>>>>> update-project/main
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
<<<<<<< HEAD
                  Musa Zain
                </h1>
                <div className="flex gap-1 items-center">
                  <LuMapPin className="text-xl text-primary-500" />
                  <span className="text-sm">Nikunjo-2, Khilkhet, Dhaka</span>
=======
                  {student?.first_name} {student?.last_name}
                </h1>
                <div className="flex gap-1 items-center">
                  <LuMapPin className="text-xl text-primary-500" />
                  <span className="text-sm">{student?.address}</span>
>>>>>>> update-project/main
                </div>
              </div>
              <div>
                <Button
<<<<<<< HEAD
=======
                  onClick={() => navigate("/authentication/update_profile")}
>>>>>>> update-project/main
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
<<<<<<< HEAD
              percentage={30}
=======
              percentage={student?.profile_complete || 0}
>>>>>>> update-project/main
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
<<<<<<< HEAD
                <h3 className="text-text-900 text-2xl font-bold">{30}%</h3>
=======
                <h3 className="text-text-900 text-2xl font-bold">
                  {student?.profile_complete || 0}%
                </h3>
>>>>>>> update-project/main
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
<<<<<<< HEAD
                {(
                  <p className="text-sm text-text-900">
                    A Level, High School Romania , BA Hons Business
                  </p>
                ) || (
                  <p className="text-sm text-text-100">
                    No information for this filed yet
                  </p>
                )}
=======
                <p className="text-sm text-text-900">
                  {student?.degree}, {student?.grade}, {student?.institute}
                </p>
>>>>>>> update-project/main
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
<<<<<<< HEAD
                {<p className="text-sm text-text-900">+8801678788665</p> || (
=======
                {<p className="text-sm text-text-900">{student?.phone}</p> || (
>>>>>>> update-project/main
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
<<<<<<< HEAD
                <h5 className="font-semibold ">Point/Credit</h5>
                {(
                  <p className="text-sm text-secondary-500 font-bold">243</p>
                ) || (
                  <p className="text-sm text-text-100">
                    No information for this filed yet
                  </p>
                )}
=======
                <h5 className="font-semibold ">Point/Level3</h5>
                <p className="text-sm text-secondary-500 font-bold">
                  {student?.points || 0}/{student?.level_3 ? "true" : "false"}
                </p>
>>>>>>> update-project/main
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
<<<<<<< HEAD
                {<p className="text-sm text-text-900">DOB: 18 Aug, 1998</p> || (
=======
                {(
                  <p className="text-sm text-text-900">
                    DOB: {moment(new Date(student?.dob)).format("yyyy-MM-DD")}
                  </p>
                ) || (
>>>>>>> update-project/main
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
<<<<<<< HEAD
            percentage={30}
=======
            percentage={student?.profile_complete || 0}
>>>>>>> update-project/main
            strokeSize={12}
            size={190}
            className={"text"}
            percentSize={"2rem"}
          >
            <div>
<<<<<<< HEAD
              <h3 className="text-text-900 font-bold text-2xl mb-2">{30}%</h3>
=======
              <h3 className="text-text-900 font-bold text-2xl mb-2">
                {student?.profile_complete || 0}%
              </h3>
>>>>>>> update-project/main
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
