// import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "./style.css";

const Calendar = ({days, setDays}) => {

  return (
      <DayPicker mode="multiple" selected={days} onSelect={setDays} />
  );
};

export default Calendar;
