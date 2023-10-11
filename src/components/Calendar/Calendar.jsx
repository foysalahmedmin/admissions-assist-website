import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "./style.css";

export default function Example() {
  const [days, setDays] = useState([]);

  return (
    <DayPicker mode="multiple" min={1} selected={days} onSelect={setDays} />
  );
}
