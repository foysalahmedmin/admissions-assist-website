import courseImg1 from "@/assets/images/calendar-course-1.png";
import courseImg2 from "@/assets/images/calendar-course-2.png";
import courseImg from "@/assets/images/calendar-course.png";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { BiLogoZoom } from "react-icons/bi";

const EventView = ({ event }) => {
  const [gap, setGap] = useState({});
  const [timeBlockWidth, setTimeBlockWidth] = useState(96);
  const timeBlockRef = useRef(null);
  console.log(timeBlockWidth);
  useEffect(() => {
    const eventGapMeasureHandle = () => {
      let gap = { days: 0, hours: 0 };
      let gap_hours = Math.ceil((event.end - event.start) / 3600000) || 0;
      while (gap_hours > 0) {
        if (gap_hours > 24) {
          gap.days = gap.days + 1;
          gap_hours -= 24;
        } else {
          gap.hours = gap_hours;
          gap_hours = 0;
        }
      }
      setGap(gap);
    };
    eventGapMeasureHandle();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (timeBlockRef && timeBlockRef.current) {
        setTimeBlockWidth(timeBlockRef.current.offsetWidth);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [timeBlockRef]);

  return (
    <div ref={timeBlockRef} className="relative flex-1">
      {event?.type == "course" ? (
        <div
          style={{
            height: `${3.5 * (gap?.hours + 1) - 1}rem`,
            width: `${timeBlockWidth * (gap?.days + 1) - 16}px`,
          }}
          className="absolute top-2 left-2 right-2 bg-[#0177FB] text-white rounded-2xl py-4 px-2 lg:px-4 flex items-center gap-4"
        >
          <div>
            <img className="rounded-xl" src={courseImg} alt="" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h5 className="title text-sm text-white md:text-base mb-2">
                {event.title}
              </h5>
              <div className="flex items-center">
                <img
                  className="rounded-full border-white border"
                  src={courseImg1}
                  alt=""
                />
                <img
                  className="rounded-full border-white border relative -ml-2"
                  src={courseImg2}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-auto flex items-center justify-between">
              <span className="block font-semibold text-sm">
                {format(event.start, "EEE")}
              </span>
              <div className="text-xs">
                <span>{format(event.start, "hh:mm a")}</span> -{" "}
                <span>{format(event.end, "hh:mm a")}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            height: `${3.5 * (gap?.hours + 1) - 1}rem`,
            width: `${timeBlockWidth * (gap?.days + 1) - 16}px`,
          }}
          className="absolute top-2 left-2 right-2 bg-[#01D7DF] rounded-2xl py-4 px-2 lg:px-4 flex flex-col"
        >
          <div>
            <h5 className="title text-sm md:text-base mb-2">{event.title}</h5>
            {event?.platform && (
              <div className="inline-flex flex-wrap gap-2 items-center justify-center p-2 rounded-xl bg-white bg-opacity-40">
                <div className="h-5 w-5 rounded bg-[#4087FC] text-white flex items-center justify-center">
                  <BiLogoZoom />
                </div>
                <span className="text-xs text-title capitalize">
                  {event?.platform}
                </span>
              </div>
            )}
          </div>
          <div className="mt-auto">
            <span className="block text-title font-semibold text-sm">
              {format(event.start, "EEE")}
            </span>
            <div className="text-xs">
              <span>{format(event.start, "hh:mm a")}</span> -{" "}
              <span>{format(event.end, "hh:mm a")}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventView;
