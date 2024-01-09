<<<<<<< HEAD
import { addDays, addMonths, subDays, subMonths } from "date-fns";
import { useState } from "react";
=======
/*
 * Copyright (c) 2023-2024. This product is copyright by Rian
 */

import {addDays, addMonths, subDays, subMonths} from "date-fns";
>>>>>>> update-project/main
import AgendaView from "./AgendaView/AgendaView";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import DailyView from "./DailyView/DailyView";
import MonthlyView from "./MonthlyView/MonthlyView";
import WeeklyView from "./WeeklyView/WeeklyView";
<<<<<<< HEAD

const Calendar = ({ Events }) => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("monthly");
  const [events, setEvents] = useState(
    Events || [
      {
        start: new Date(2023, 9, 29, 6, 30),
        end: new Date(2023, 9, 29, 9, 0),
        title: "Webinar",
        platform: "zoom",
        type: "meeting",
      },
      {
        start: new Date(2023, 10, 1, 11, 0),
        end: new Date(2023, 10, 3, 12, 0),
        title: "App Development Course",
        platform: null,
        type: "course",
      },
    ]
  );

  const next = () => {
    if (view === "monthly") {
      setCurrentDate(addMonths(currentDate, 1));
    } else if (view === "weekly" || view === "daily") {
      setCurrentDate(addDays(currentDate, 7));
=======
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
>>>>>>> update-project/main
    }
  };

  const prev = () => {
    if (view === "monthly") {
<<<<<<< HEAD
      setCurrentDate(subMonths(currentDate, 1));
    } else if (view === "weekly" || view === "daily") {
      setCurrentDate(subDays(currentDate, 7));
=======
      dispatch(SetCalenderDate(subMonths(date, 1)));
    } else if (view === "weekly" || view === "daily") {
      dispatch(SetCalenderDate(subDays(date, 7)));
>>>>>>> update-project/main
    }
  };

  return (
    <div className="calendar">
      <div>
        <CalendarHeader
          view={view}
<<<<<<< HEAD
          setView={setView}
          today={today}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
=======
          today={today}
>>>>>>> update-project/main
          events={events}
          next={next}
          prev={prev}
        />
      </div>
      <div className="overflow-x-auto">
<<<<<<< HEAD
        {view === "monthly" && (
          <MonthlyView
            today={today}
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            events={events}
          />
        )}
        {view === "weekly" && (
          <WeeklyView
            today={today}
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            events={events}
          />
        )}
        {view === "daily" && (
          <DailyView
            today={today}
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            events={events}
          />
        )}
=======
        {view === "monthly" && <MonthlyView today={today} events={events} />}
        {view === "weekly" && <WeeklyView today={today} events={events} />}
        {view === "daily" && <DailyView today={today} events={events} />}
>>>>>>> update-project/main
        {view === "agenda" && <AgendaView events={events} />}
      </div>
    </div>
  );
};

export default Calendar;
