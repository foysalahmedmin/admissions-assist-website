/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {addDays, endOfMonth, endOfWeek, startOfMonth, startOfWeek, subDays,} from "date-fns";
import {useEffect, useState} from "react";
import Day from "./Day";
import {useSelector} from "react-redux";

const MonthlyView = ({ today, events }) => {
  const { date } = useSelector((state) => state.calender);
  const [calendarDates, setCalendarDates] = useState([]);

  useEffect(() => {
    const start = startOfWeek(startOfMonth(date), { weekStartsOn: 0 });
    const end = endOfWeek(endOfMonth(date), { weekStartsOn: 0 });

    const dates = [];
    let current = start;

    while (current <= end) {
      dates.push(current);
      current = addDays(current, 1);
    }

    // Add dates from the previous month as needed
    let prev = start;
    while (prev.getDay() !== 0) {
      prev = subDays(prev, 1);
      dates.unshift(prev);
    }

    // Add dates from the next month as needed
    let next = end;
    while (next.getDay() !== 6) {
      next = addDays(next, 1);
      dates.push(next);
    }

    setCalendarDates(dates);
  }, [date]);

  return (
    <div className="monthly-view">
      <div className="week-names grid grid-cols-7 bg-input py-3">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="day px-2">
            {day}
          </div>
        ))}
      </div>
      <div className="month-days">
        <div className="week w-full grid grid-cols-7">
          {calendarDates?.map((day, dayIndex) => (
            <Day
              key={dayIndex}
              day={day}
              currentDate={date}
              today={today}
              events={events}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthlyView;
