/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import Modal from "@/components/Modal/Modal";
import {useState} from "react";
import {LuCalendar, LuCalendarCheck, LuClock, LuMapPin} from "react-icons/lu";
import {toast} from "react-toastify";
import {useMutation} from "react-query";
import {createStudentMeeting} from "@/pages/Student/Profile/requests/profileApis.js";
import Button from "@/components/Buttons/Button.jsx";
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ScheduleModal = ({ isOpen, setIsOpen }) => {
  const navigation = useNavigate();
  const [title, setTitle] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [start_time, setStartTime] = useState("");
  const [end_time, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [isOnline, setIsOnline] = useState(false);
  const [description, setDescription] = useState("");
  const { isLoading, mutateAsync } = useMutation({
    mutationFn: createStudentMeeting,
    onSuccess: () => {
      setIsOpen(false);
      navigation("/chat_system/calendar");
    },
  });
  const handleSave = async () => {
    try {
      if (!title || !start_date || !end_date || !start_time || !end_time) {
        return toast.warn(
          `No ${
            (!title && "title") ||
            (!title && "title") ||
            (!start_date && "start_date") ||
            (!end_date && "end_date") ||
            (!start_time && "start_time") ||
            (!end_time && "end_time")
          }`
        );
      }
      const status = await mutateAsync({
        title,
        start_date: new Date(start_date + " " + start_time).toISOString(),
        end_date: new Date(end_date + " " + end_time).toISOString(),
        location,
        isOnline,
        description,
      });
      toast.success(status?.message);
      setTitle("");
      setStartDate("");
      setEndDate("");
      setStartTime("");
      setEndTime("");
      setLocation("");
      setIsOnline(false);
      setDescription("");
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isCloseBtn={false}
        className={"w-full lg:w-[50rem] bg-white"}
      >
        <div>
          <div className="w-full bg-primary-500 text-white px-7 py-4">
            <h3 className="title text-white text-2xl">New Schedule</h3>
          </div>
          <div className="bg-white px-7 py-7">
            <div className="mb-4">
              <label
                className="text-text-900 block mb-4"
                htmlFor="meeting_title"
              >
                Add Title
              </label>
              <div className="px-4 flex items-center gap-2 text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 text-sm">
                <input
                  className="py-3 w-full bg-transparent outline-none"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  name="meeting_title"
                  id="meeting_title"
                  placeholder="Enter meeting title"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <span
                className="text-text-900 block mb-4"
                htmlFor="meeting_title"
              >
                Select Preferable Time
              </span>
              <div className="flex flex-col sm:flex-row gap-4 items-center text-sm">
                <div className="w-full flex-1 flex flex-col md:flex-row gap-2">
                  <label
                    htmlFor="meeting_start_date"
                    className="px-4 flex items-center gap-2 text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 flex-1"
                  >
                    <LuCalendar className="text-2xl" />
                    <input
                      onClick={(e) => e.currentTarget.showPicker()}
                      value={start_date}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="py-3 w-full bg-transparent outline-none icon-none"
                      type="date"
                      name="meeting_start_date"
                      id="meeting_start_date"
                      required
                    />
                  </label>
                  <label
                    htmlFor="meeting_start_time"
                    className="px-4 flex items-center gap-2 text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
                  >
                    <input
                      onClick={(e) => e.currentTarget.showPicker()}
                      value={start_time}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="py-3 w-full bg-transparent outline-none icon-none"
                      type="time"
                      name="meeting_start_time"
                      id="meeting_start_time"
                      required
                    />
                    <LuClock className="text-2xl" />
                  </label>
                </div>
                <span className="material-icons-outlined rotate-90 sm:rotate-0">
                  arrow_forward
                </span>
                <div className="w-full flex-1 flex flex-col md:flex-row gap-2">
                  <label
                    htmlFor="meeting_end_date"
                    className="px-4 flex items-center gap-2 text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 flex-1"
                  >
                    <LuCalendar className="text-2xl" />
                    <input
                      onClick={(e) => e.currentTarget.showPicker()}
                      value={end_date}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="py-3 w-full bg-transparent outline-none icon-none"
                      type="date"
                      name="meeting_end_date"
                      id="meeting_end_date"
                      required
                    />
                  </label>
                  <label
                    htmlFor="meeting_end_time"
                    className="px-4 flex items-center gap-2 text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
                  >
                    <input
                      onClick={(e) => e.currentTarget.showPicker()}
                      value={end_time}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="py-3 w-full bg-transparent outline-none icon-none"
                      type="time"
                      name="meeting_end_time"
                      id="meeting_end_time"
                      required
                    />
                    <LuClock className="text-2xl" />
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="text-text-900 block mb-4" htmlFor="location">
                Add Location
              </label>
              <div className="px-4 py-2 sm:py-0 flex flex-col sm:flex-row items-center gap-2 text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 text-sm">
                <div className="flex-1 w-full sm:w-auto flex items-center gap-2">
                  <LuMapPin className="text-2xl flex-shrink-0" />
                  <input
                    className="sm:py-3 w-full bg-transparent outline-none"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    name="location"
                    id="location"
                    placeholder="Enter meeting location"
                    required
                  />
                </div>
                <hr className="w-full sm:hidden" />
                <div className="w-full sm:w-auto flex items-center justify-between gap-4">
                  <label
                    htmlFor="online_meeting_witch"
                    className="sm:py-3 whitespace-nowrap"
                  >
                    Online meeting
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isOnline}
                      onChange={(e) => setIsOnline(e.target.checked)}
                      value=""
                      className="sr-only peer"
                      id="online_meeting_witch"
                    />
                    <div className="w-12 h-6 bg-gray-200 outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="text-text-900 block mb-4"
                htmlFor="meeting_details"
              >
                Meeting details
              </label>
              <div className="px-4 flex items-center gap-2 text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 text-sm">
                <textarea
                  className="py-3 w-full bg-transparent outline-none resize-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  name="meeting_details"
                  id="meeting_details"
                  placeholder="Start writing here"
                  cols={30}
                  required
                ></textarea>
              </div>
            </div>
            <Button
              onClick={handleSave}
              isLoading={isLoading}
              disabled={isLoading}
              className={"ml-auto bg-primary-500"}
              text={"Book a Session"}
              icon={<LuCalendarCheck className="text-xl text-sm" />}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ScheduleModal;
