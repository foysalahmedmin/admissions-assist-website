import SingleCall from "./SingleCall";
import { useEffect, useRef } from "react";

const CallsField = ({
  displayCallHistories,
  displayCallHistories_Id,
  currentUser,
  setIsCallHistoryShow,
}) => {
  const callBoxRef = useRef(null);
  useEffect(() => {
    if (callBoxRef.current) {
      callBoxRef.current.scrollTop = callBoxRef.current.scrollHeight;
    }
  }, [displayCallHistories, displayCallHistories_Id]);
  return (
    <div>
      <div className="h-14 px-[3.5vw] lg:pl-7 lg:pr-[3.5vw] border-b flex justify-between items-center">
        <div className="flex items-center gap-2 lg:gap-4">
          <span
            onClick={() => setIsCallHistoryShow(false)}
            className="material-icons-outlined cursor-pointer hover:text-secondary lg:!hidden"
          >
            arrow_back
          </span>
          <div className="flex items-center gap-1">
            <h3 className="title">History</h3>
            <span className="material-icons-outlined mt-1">
              keyboard_arrow_down
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 text-title text-sm">
          <button className="rounded-full h-8 px-4 flex items-center justify-center bg-input hover:bg-primary hover:bg-opacity-10 hover:text-primary">
            <span>All</span>
          </button>
          <button className="rounded-full h-8 px-4 flex items-center justify-center bg-input hover:bg-primary hover:bg-opacity-10 hover:text-primary">
            <span>Audio calls</span>
          </button>
          <button className="rounded-full h-8 px-4 flex items-center justify-center bg-input hover:bg-primary hover:bg-opacity-10 hover:text-primary">
            <span>Video calls</span>
          </button>
        </div>
      </div>
      <div
        ref={callBoxRef}
        className="h-[calc(100vh-8.5rem)] overflow-y-auto px-[3.5vw] lg:pl-7 lg:pr-[3.5vw] py-4"
      >
        {displayCallHistories.map((call, i) => (
          <SingleCall key={i} call={call} currentUser={currentUser} />
        ))}
      </div>
    </div>
  );
};

export default CallsField;
