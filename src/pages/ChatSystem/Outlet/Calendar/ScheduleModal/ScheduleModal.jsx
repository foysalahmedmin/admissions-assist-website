import Modal from "@/components/Modal/Modal";
import { useRef } from "react";
import { LuCalendar, LuClock, LuMapPin, LuUser2 } from "react-icons/lu";

const ScheduleModal = ({ isOpen, setIsOpen }) => {
  const dateInput = useRef(null);
  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isCloseBtn={false}
        className={"w-full lg:w-[50rem] bg-white"}
      >
        <div>
          <div className="w-full bg-primary text-white px-7 py-4">
            <h3 className="title text-white text-2xl">New Meeting</h3>
          </div>
          <div className="bg-white px-7 py-7">
            <div className="mb-4">
              <label className="text-title block mb-4" htmlFor="meeting_title">
                Add Title
              </label>
              <div className="px-4 flex items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text text-sm">
                <input
                  className="py-3 w-full bg-transparent outline-none"
                  type="text"
                  name="meeting_title"
                  id="meeting_title"
                  placeholder="Enter meeting title"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <span className="text-title block mb-4" htmlFor="meeting_title">
                Select Preferable Time
              </span>
              <div className="flex flex-col sm:flex-row gap-4 items-center text-sm">
                <div className="w-full flex-1 flex flex-col md:flex-row gap-2">
                  <label
                    htmlFor="meeting_start_date"
                    className="px-4 flex items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text flex-1"
                  >
                    <LuCalendar className="text-2xl" />
                    <input
                      onClick={(e) => e.currentTarget.showPicker()}
                      className="py-3 w-full bg-transparent outline-none icon-none"
                      type="date"
                      name="meeting_start_date"
                      id="meeting_start_date"
                      required
                    />
                  </label>
                  <label
                    htmlFor="meeting_start_time"
                    className="px-4 flex items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                  >
                    <input
                      onClick={(e) => e.currentTarget.showPicker()}
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
                    className="px-4 flex items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text flex-1"
                  >
                    <LuCalendar className="text-2xl" />
                    <input
                      onClick={(e) => e.currentTarget.showPicker()}
                      className="py-3 w-full bg-transparent outline-none icon-none"
                      type="date"
                      name="meeting_end_date"
                      id="meeting_end_date"
                      required
                    />
                  </label>
                  <label
                    htmlFor="meeting_end_time"
                    className="px-4 flex items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                  >
                    <input
                      onClick={(e) => e.currentTarget.showPicker()}
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
              <label className="text-title block mb-4" htmlFor="location">
                Add Location
              </label>
              <div className="px-4 py-2 sm:py-0 flex flex-col sm:flex-row items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text text-sm">
                <div className="flex-1 w-full sm:w-auto flex items-center gap-2">
                  <LuMapPin className="text-2xl flex-shrink-0" />
                  <input
                    className="sm:py-3 w-full bg-transparent outline-none"
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Enter meeting title"
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
                className="text-title block mb-4"
                htmlFor="meeting_details"
              >
                Meeting details
              </label>
              <div className="px-4 flex items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text text-sm">
                <textarea
                  className="py-3 w-full bg-transparent outline-none resize-none"
                  type="text"
                  name="meeting_details"
                  id="meeting_details"
                  placeholder="Start writing here"
                  cols={30}
                  required
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ScheduleModal;
