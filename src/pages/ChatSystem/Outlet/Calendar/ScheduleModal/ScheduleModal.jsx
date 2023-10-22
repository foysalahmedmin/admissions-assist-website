import Modal from "@/components/Modal/Modal";
import { useRef } from "react";
import { LuCalendar, LuClock, LuUser2 } from "react-icons/lu";

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
              <div className="px-4 flex items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text">
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
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="w-full flex-1 flex flex-col md:flex-row gap-2">
                  <label
                    htmlFor="meeting_start_date"
                    className="px-4 flex items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
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
                <span className="material-icons-outlined rotate-90 sm:rotate-0">arrow_forward</span>
                <div className="w-full flex-1 flex flex-col md:flex-row gap-2">
                  <label
                    htmlFor="meeting_end_date"
                    className="px-4 flex items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
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
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ScheduleModal;
