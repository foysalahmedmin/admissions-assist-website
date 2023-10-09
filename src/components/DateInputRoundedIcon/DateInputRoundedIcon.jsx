import { twMerge } from "tailwind-merge";
import "./style.css";

const DateInputRoundedIcon = ({ className }) => {
  return (
    <div>
      <input
        className={twMerge("flex-1 h-full icon-hidden outline-none", className)}
        type="date"
        name=""
        id=""
      />
    </div>
  );
};

export default DateInputRoundedIcon;
