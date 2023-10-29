import { addDays, format, isSameDay } from "date-fns";

const MonthlyView = ({ today, currentDate, setCurrentDate, events }) => {
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const weeks = [];
  let current = startOfMonth;
  let currentWeek = [null, null, null, null, null, null, null];

  while (current <= endOfMonth) {
    currentWeek[current.getDay()] = current;

    if (current.getDay() === 6) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    current = addDays(current, 1);
  }

  // Handle the last week if it's not complete
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

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
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="week w-full grid grid-cols-7">
            {week.map((day, dayIndex) =>
              day ? (
                <div
                  key={dayIndex}
                  className={`${
                    isSameDay(day, today) ? "text-primary" : ""
                  } h-24 px-2 py-2 border text-right`}
                >
                  <h3>{format(day, "d")}</h3>
                  <div className="events">
                    {events
                      .filter((event) => isSameDay(event.start, day))
                      .map((event, index) => (
                        <div key={index} className="event">
                          {event.title}
                        </div>
                      ))}
                  </div>
                </div>
              ) : (
                <div
                  key={dayIndex}
                  className="h-24 px-2 py-2 border text-right"
                ></div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyView;
