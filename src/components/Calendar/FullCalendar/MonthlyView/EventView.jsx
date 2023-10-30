import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import EventModal from "../EventModal/EventModal";

const EventView = ({ event, day }) => {
  const [gap, setGap] = useState({});
  const [dayBlockWidth, setDayBlockWidth] = useState(96);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const dayBlockRef = useRef(null);
  useEffect(() => {
    const eventGapMeasureHandle = () => {
      let gap = { horizontal: 0 };
      let hours = Math.ceil((event.end - event.start) / 3600000) || 0;
      const days = Math.ceil(hours / 24);
      console.log(days);
      if (6 - day.getDay() < days) {
        gap.horizontal = 6 - day.getDay();
      } else {
        gap.horizontal = days;
      }
      //
      setGap(gap);
    };
    eventGapMeasureHandle();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (dayBlockRef && dayBlockRef.current) {
        setDayBlockWidth(dayBlockRef.current.offsetWidth);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dayBlockRef]);
  return (
    <div ref={dayBlockRef} className="flex-1 relative">
      <div
        onClick={() => setIsEventModalOpen(true)}
        style={{
          width: `${dayBlockWidth * gap?.horizontal - 16}px`,
        }}
        className="absolute left-2 top-0 bottom-2 text-left px-2 py-1 text-white rounded-lg bg-primary"
      >
        <div className="flex items-center gap-2">
          <h5>{event.title}</h5>
          <div className="text-xs">
            {gap.horizontal > 1 ? (
              <>
                <span>{format(event.start, "d EE")}</span> -{" "}
                <span>{format(event.end, "d EE")}</span>
              </>
            ) : (
              <span>{format(event.start, "d EE")}</span>
            )}
          </div>
        </div>
      </div>
      <EventModal
        isOpen={isEventModalOpen}
        setIsOpen={setIsEventModalOpen}
        event={event}
      />
    </div>
  );
};

export default EventView;
