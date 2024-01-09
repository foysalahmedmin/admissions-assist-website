<<<<<<< HEAD
import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import Button from "@/components/Buttons/Button";
import { LuCalendarCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

const Appointment = () => {
=======
/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import Button from "@/components/Buttons/Button";
import {LuCalendarCheck} from "react-icons/lu";
import ScheduleModal from "@/pages/Student/Profile/Appointment/ScheduleModal.jsx";
import {useState} from "react";

const Appointment = () => {
  const [isScheduleModal, setIsScheduleModal] = useState(false);
>>>>>>> update-project/main
  return (
    <>
      <BackgroundLayer
        bg_position={"bg-right"}
        image_url={"/background/appointment.png"}
        className={"lg:py-24 py-14 bg-black-900"}
      >
        <div className="">
          <div className="container mx-auto text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-7">
              <div className="flex-1">
                <h1 className="text-3xl lg:text-5xl title text-white mb-4">
                  Not Sure! How To Proceed
                </h1>
                <p>
                  Tailored recommendations based on your profile, ensuring the
                  best fit for your academic aspirations.
                </p>
              </div>
              <div>
<<<<<<< HEAD
                <Link to={"/student/book_session"}>
                  <Button
                    className={"ml-auto"}
                    text={"Book a Session"}
                    icon={<LuCalendarCheck className="text-xl" />}
                  />
                </Link>
              </div>
            </div>
          </div>
=======
                <Button
                  onClick={() => setIsScheduleModal(true)}
                  className={"ml-auto"}
                  text={"Book a Session"}
                  icon={<LuCalendarCheck className="text-xl" />}
                />
              </div>
            </div>
          </div>
          <ScheduleModal
            isOpen={isScheduleModal}
            setIsOpen={setIsScheduleModal}
          />
>>>>>>> update-project/main
        </div>
      </BackgroundLayer>
    </>
  );
};

export default Appointment;
