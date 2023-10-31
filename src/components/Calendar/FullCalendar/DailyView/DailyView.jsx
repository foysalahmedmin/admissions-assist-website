import { addDays, endOfWeek, format, isSameDay, startOfWeek } from "date-fns";

const DailyView = ({ today, currentDate, setCurrentDate, events }) => {
  const dayStart = startOfWeek(currentDate);
  const dayEnd = endOfWeek(currentDate);

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
                isSameDay(event.start, currentDate) &&
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
