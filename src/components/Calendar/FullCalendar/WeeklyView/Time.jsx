import { isSameDay } from "date-fns";
import EventView from "./EventView";

const Time = ({ events, day, time }) => {
  const filteredEvents = events?.filter(
    (event) =>
      isSameDay(event.start, day) &&
      event.start >= time &&
      event.start <= new Date(time).setMinutes(59)
  );
  return (
    <div className="time-slot h-14 min-w-[7rem] border">
      <div className="flex justify-around">
        {filteredEvents?.map((event, index) => (
          <EventView key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Time;
