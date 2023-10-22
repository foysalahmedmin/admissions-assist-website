import Button from "@/components/Buttons/Button";
import { useState } from "react";
import ScheduleModal from "../ScheduleModal/ScheduleModal";

const Calendar = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  return (
    <div>
      <div className="h-14 px-[3.5vw] lg:pl-7 lg:pr-[3.5vw] border-b flex justify-between items-center">
        <div>
          <h3 className="title text-2xl">Files</h3>
        </div>
        <div className="col-span-2 ml-auto">
          <Button
            onClick={() => setIsScheduleModalOpen(true)}
            className={"h-8 text-sm px-4"}
            text={"New Meeting"}
            icon={
              <span className="material-icons-outlined !text-base">add</span>
            }
          />
          <ScheduleModal
            isOpen={isScheduleModalOpen}
            setIsOpen={setIsScheduleModalOpen}
          />
        </div>
      </div>
      <div className="px-[3.5vw] lg:pl-7 lg:pr-[3.5vw] py-4 grid grid-cols-1 overflow-x-auto"></div>
    </div>
  );
};

export default Calendar;
