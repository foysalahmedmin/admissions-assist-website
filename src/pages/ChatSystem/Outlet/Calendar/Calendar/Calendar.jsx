/*
 * Copyright (c) 2023-2024. This product is copyright by Rian
 */

import Button from "@/components/Buttons/Button";
import FullCalendar from "@/components/Calendar/FullCalendar/FullCalendar";
import {useState} from "react";
import {useQuery} from "react-query";
import {fetchMyWeeklyEvents} from "@/pages/ChatSystem/requests/chatSystemApis.js";
import {parseISO} from "date-fns";
import ScheduleModal from "@/pages/Student/Profile/Appointment/ScheduleModal.jsx";
import {useSelector} from "react-redux";

const Calendar = () => {
  const { date, view } = useSelector((state) => state.calender);
  const { data: events } = useQuery({
    queryKey: ["student_events", date, view],
    queryFn: () => fetchMyWeeklyEvents(date, view),
  });
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
      <div className="px-[3.5vw] lg:pl-7 lg:pr-[3.5vw] py-4 grid grid-cols-1 overflow-x-auto">
        <FullCalendar
          events={events?.map((x) => {
            return {
              _id: x?._id,
              title: x?.title,
              start: parseISO(x?.start),
              end: parseISO(x?.end),
              type: x?.type,
              platform: x?.platform,
              description: x?.description,
              isStarted: x?.isStarted,
            };
          })}
        />
      </div>
    </div>
  );
};

export default Calendar;
