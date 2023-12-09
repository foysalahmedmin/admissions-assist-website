import { format, isSameDay } from "date-fns";
import EventView from "./EventView";

const Day = ({ day, currentDate, today, events }) => {
  const filteredEvents = events?.filter((event) => isSameDay(event.start, day));
  return (
    <div
      className={`${
        isSameDay(day, today) ? "text-primary-500 font-bold" : ""
      } ${
        format(day, "MM") !== format(currentDate, "MM") ? "bg-slate-100" : ""
      } h-24 border flex flex-col`}
    >
      <h3 className="px-2 py-2 text-right">{format(day, "d")}</h3>
      <div className="flex-1 flex flex-col">
        {filteredEvents?.map((event, index) => (
          <EventView key={index} event={event} day={day} />
        ))}
      </div>
    </div>
  );
};

export default Day;
