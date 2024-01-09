<<<<<<< HEAD
import { format } from "date-fns";

const CalendarHeader = ({
  view,
  setView,
  today,
  currentDate,
  setCurrentDate,
  events,
  next,
  prev,
}) => {
  const showMonthlyView = () => setView("monthly");
  const showWeeklyView = () => setView("weekly");
  //   const showDailyView = () => setView("daily");
  const showAgendaView = () => setView("agenda");

  return (
    <div className="flex justify-between items-center gap-7  mb-4">
      <div className="header flex items-center gap-4">
        <label htmlFor="date" className="inline-block">
          <div className="flex items-center gap-2 text-primary-500 font-bold">
            {view === "monthly" ? (
              <h2>{format(currentDate, "MMMM yyyy")}</h2>
            ) : (
              <h2>{format(currentDate, "MMMM d, yyyy")}</h2>
            )}
            <span className="material-icons-outlined">expand_more</span>
            <input
              className="h-0 w-0"
              type={view == "monthly" ? "month" : "date"}
              name="date"
              id="date"
              onChange={(e) => setCurrentDate(new Date(e.target.value))}
              onClick={(e) => e.target.showPicker()}
            />
          </div>
        </label>
        <div className="flex items-center gap-2">
          <button onClick={prev}>
            <span className="material-icons-outlined !text-base">
              arrow_back_ios
            </span>
          </button>
          <button onClick={next}>
            <span className="material-icons-outlined !text-base">
              arrow_forward_ios
            </span>
          </button>
        </div>
      </div>
      <div className="view-buttons flex">
        <button
          className={`${
            view == "monthly"
              ? "border-b-primary-500 text-primary-500 font-bold"
              : "border-b-transparent"
          } border-t border-b border-t-transparent px-2`}
          onClick={showMonthlyView}
        >
          Monthly
        </button>
        <button
          className={`${
            view == "weekly"
              ? "border-b-primary-500 text-primary-500 font-bold"
              : "border-b-transparent"
          } border-t border-b border-t-transparent px-2`}
          onClick={showWeeklyView}
        >
          Weekly
        </button>
        {/* <button className={`${
=======
/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {format} from "date-fns";
import {useDispatch, useSelector} from "react-redux";
import {SetCalenderDate, SetCalenderView} from "@/redux/calenderSlice/calenderSlice.js";

const CalendarHeader = ({
                            today,
                            events,
                            next,
                            prev,
                        }) => {
    const dispatch = useDispatch()
    const {date, view} = useSelector((state) => state.calender);
    const showMonthlyView = () => dispatch(SetCalenderView("monthly"));
    const showWeeklyView = () => dispatch(SetCalenderView("weekly"));
    //   const showDailyView = () => setView("daily");
    const showAgendaView = () => dispatch(SetCalenderView("agenda"));

    return (
        <div className="flex justify-between items-center gap-7  mb-4">
            <div className="header flex items-center gap-4">
                <label htmlFor="date" className="inline-block">
                    <div className="flex items-center gap-2 text-primary-500 font-bold">
                        {view === "monthly" ? (
                            <h2>{format(date, "MMMM yyyy")}</h2>
                        ) : (
                            <h2>{format(date, "MMMM d, yyyy")}</h2>
                        )}
                        <span className="material-icons-outlined">expand_more</span>
                        <input
                            className="h-0 w-0"
                            type={view === "monthly" ? "month" : "date"}
                            name="date"
                            id="date"
                            onChange={(e) => dispatch(SetCalenderDate(new Date(e.target.value)))}
                            onClick={(e) => e.target.showPicker()}
                        />
                    </div>
                </label>
                <div className="flex items-center gap-2">
                    <button onClick={prev}>
            <span className="material-icons-outlined !text-base">
              arrow_back_ios
            </span>
                    </button>
                    <button onClick={next}>
            <span className="material-icons-outlined !text-base">
              arrow_forward_ios
            </span>
                    </button>
                </div>
            </div>
            <div className="view-buttons flex">
                <button
                    className={`${
                        view === "monthly"
                            ? "border-b-primary-500 text-primary-500 font-bold"
                            : "border-b-transparent"
                    } border-t border-b border-t-transparent px-2`}
                    onClick={showMonthlyView}
                >
                    Monthly
                </button>
                <button
                    className={`${
                        view === "weekly"
                            ? "border-b-primary-500 text-primary-500 font-bold"
                            : "border-b-transparent"
                    } border-t border-b border-t-transparent px-2`}
                    onClick={showWeeklyView}
                >
                    Weekly
                </button>
                {/* <button className={`${
>>>>>>> update-project/main
            view == "daily"
              ? "border-b-primary-500 text-primary-500 font-bold"
              : "border-b-transparent"
          } border-t border-b border-t-transparent px-2`} onClick={showDailyView}>Daily</button> */}
<<<<<<< HEAD
        <button
          className={`${
            view == "agenda"
              ? "border-b-primary-500 text-primary-500 font-bold"
              : "border-b-transparent"
          } border-t border-b border-t-transparent px-2`}
          onClick={showAgendaView}
        >
          Agenda
        </button>
      </div>
    </div>
  );
=======
                <button
                    className={`${
                        view === "agenda"
                            ? "border-b-primary-500 text-primary-500 font-bold"
                            : "border-b-transparent"
                    } border-t border-b border-t-transparent px-2`}
                    onClick={showAgendaView}
                >
                    Agenda
                </button>
            </div>
        </div>
    );
>>>>>>> update-project/main
};

export default CalendarHeader;

/*
<h2 className="text-primary-500 font-semibold">
    <select
    className="outline-none"
    value={selectedYear}
    onChange={(e) => setSelectedYear(Number(e.target.value))}
    >
    {Array.from({ length: 10 }, (_, i) => (
        <option key={i} value={currentDate.getFullYear() - 5 + i}>
        {currentDate.getFullYear() - 5 + i}
        </option>
    ))}
    </select>
    <select
    className="outline-none"
    value={selectedMonth}
    onChange={(e) => setSelectedMonth(Number(e.target.value))}
    >
    {Array.from({ length: 12 }, (_, i) => (
        <option key={i} value={i}>
        {format(new Date(currentDate.getFullYear(), i, 1), "MMMM")}
        </option>
    ))}
    </select>
</h2>
*/
