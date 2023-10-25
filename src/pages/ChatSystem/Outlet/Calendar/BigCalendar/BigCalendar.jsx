import "@/assets/css/react-big-calendar.css";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import Events from "./Events";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  return (
    <div>
      <Calendar
        views={["month", "agenda"]}
        localizer={localizer}
        defaultView="month"
        events={Events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default BigCalendar;
