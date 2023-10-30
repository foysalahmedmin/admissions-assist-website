import { addDays, addMonths, subDays, subMonths } from "date-fns";
import { useState } from "react";
import AgendaView from "./AgendaView/AgendaView";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import DailyView from "./DailyView/DailyView";
import MonthlyView from "./MonthlyView/MonthlyView";
import WeeklyView from "./WeeklyView/WeeklyView";

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
    }
  };

  const prev = () => {
    if (view === "monthly") {
      setCurrentDate(subMonths(currentDate, 1));
    } else if (view === "weekly" || view === "daily") {
      setCurrentDate(subDays(currentDate, 7));
    }
  };

  return (
    <div className="calendar">
      <div>
        <CalendarHeader
          view={view}
          setView={setView}
          today={today}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          events={events}
          next={next}
          prev={prev}
        />
      </div>
      <div className="overflow-x-auto">
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
        {view === "agenda" && <AgendaView events={events} />}
      </div>
    </div>
  );
};

export default Calendar;
