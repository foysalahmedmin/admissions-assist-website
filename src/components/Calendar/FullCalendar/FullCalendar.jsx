/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {addDays, addMonths, subDays, subMonths} from "date-fns";
import AgendaView from "./AgendaView/AgendaView";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import DailyView from "./DailyView/DailyView";
import MonthlyView from "./MonthlyView/MonthlyView";
import WeeklyView from "./WeeklyView/WeeklyView";
import {useDispatch, useSelector} from "react-redux";
import {SetCalenderDate} from "@/redux/calenderSlice/calenderSlice.js";

const Calendar = ({ events }) => {
  const dispatch = useDispatch();
  const today = new Date();
  const { date, view } = useSelector((state) => state.calender);
  const next = () => {
    if (view === "monthly") {
      dispatch(SetCalenderDate(addMonths(date, 1)));
    } else if (view === "weekly" || view === "daily") {
      dispatch(SetCalenderDate(addDays(date, 7)));
    }
  };

  const prev = () => {
    if (view === "monthly") {
      dispatch(SetCalenderDate(subMonths(date, 1)));
    } else if (view === "weekly" || view === "daily") {
      dispatch(SetCalenderDate(subDays(date, 7)));
    }
  };

  return (
    <div className="calendar">
      <div>
        <CalendarHeader
          view={view}
          // setView={setView}
          today={today}
          // currentDate={currentDate}
          // setCurrentDate={setCurrentDate}
          events={events}
          next={next}
          prev={prev}
        />
      </div>
      <div className="overflow-x-auto">
        {view === "monthly" && (
          <MonthlyView
            today={today}
            // currentDate={currentDate}
            // setCurrentDate={setCurrentDate}
            events={events}
          />
        )}
        {view === "weekly" && (
          <WeeklyView
            today={today}
            // currentDate={currentDate}
            // setCurrentDate={setCurrentDate}
            events={events}
          />
        )}
        {view === "daily" && (
          <DailyView
            today={today}
            // currentDate={currentDate}
            // setCurrentDate={setCurrentDate}
            events={events}
          />
        )}
        {view === "agenda" && <AgendaView events={events} />}
      </div>
    </div>
  );
};

export default Calendar;
