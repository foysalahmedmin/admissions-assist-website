<<<<<<< HEAD
import { addDays, endOfWeek, format, isSameDay, startOfWeek } from "date-fns";

const DailyView = ({ today, currentDate, setCurrentDate, events }) => {
  const dayStart = startOfWeek(currentDate);
  const dayEnd = endOfWeek(currentDate);
=======
/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import { addDays, endOfWeek, format, isSameDay, startOfWeek } from "date-fns";
import { useSelector } from "react-redux";

const DailyView = ({ today, events }) => {
  const { date } = useSelector((state) => state.calender);
  const dayStart = startOfWeek(date);
  const dayEnd = endOfWeek(date);
>>>>>>> update-project/main

  const days = [];
  let current = dayStart;

  while (current <= dayEnd) {
    days.push(
      <div
        key={current}
        className={`day ${isSameDay(current, today) ? "text-primary-500" : ""}`}
      >
        <h3>{format(current, "MMMM d, yyyy")}</h3>
        <div className="time-slots">
          {Array.from({ length: 48 }, (_, i) => {
            const time = `${Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"}`;
            const eventsForTime = events.filter(
              (event) =>
<<<<<<< HEAD
                isSameDay(event.start, currentDate) &&
=======
                isSameDay(event.start, date) &&
>>>>>>> update-project/main
                format(event.start, "H:mm") === time
            );
            return (
              <div key={i} className="time-slot">
                <div className="time">{time}</div>
                <div className="events">
                  {eventsForTime.map((event, index) => (
                    <div key={index} className="event">
                      {event.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );

    current = addDays(current, 1);
  }

  return <div className="daily-view">{days}</div>;
};

export default DailyView;
