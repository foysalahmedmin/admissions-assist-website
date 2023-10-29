import { addDays, addHours, format, isSameDay, startOfWeek } from "date-fns";
import Time from "./Time";

const WeeklyView = ({ today, currentDate, setCurrentDate, events }) => {
  const days = [];
  const start = startOfWeek(currentDate);
  const times = Array.from({ length: 24 }, (_, i) => addHours(new Date(), i));

  for (let i = 0; i < 7; i++) {
    const day = {};
    const newDay = addDays(start, i);
    day.day = newDay;
    day.times = Array.from({ length: 24 }, (_, i) => addHours(newDay, i));
    days.push(day);
  }

  return (
    <div className="flex">
      <div className="flex-shrink-0 bg-input w-24 text-center">
        <div className="h-14"></div>
        {times.map((time, index) => (
          <div key={index} className="time-slot h-14 px-2 border">
            <div className="time">{format(time, "hh a")}</div>
          </div>
        ))}
      </div>
      <div className="weekly-view flex-1 flex">
        {days?.map((day, i) => (
          <div key={i} className="min-w-[7rem] w-full">
            <div
              className={`${
                isSameDay(day.day, today) ? "text-primary" : ""
              } {isWithinRange(current, { start, end })} px-2 h-14 border`}
            >
              <h3 className="text-xl font-bold">{format(day.day, "d")}</h3>{" "}
              <span className="text-sm">{format(day.day, "EEEE")}</span>
            </div>
            <div className="time-slots">
              {day.times?.map((time, index) => (
                <Time key={index} events={events} day={day?.day} time={time} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WeeklyView;
