import { useState } from "react";

const Accordion = ({ openStatus, doneStatus, title, children }) => {
  const [isOpen, setIsOpen] = useState(openStatus || false);
  return (
    <div className="transition-all rounded overflow-hidden">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer bg-input p-4 flex items-center justify-between"
        type="button"
      >
        <h1 className="text-title font-semibold">{title}</h1>
        <div
          className={`${
            doneStatus ? "bg-primary text-white" : "bg-white text-primary"
          } h-7 w-7 rounded-full flex-shrink-0 flex items-center justify-center`}
        >
          {doneStatus ? (
            <span
              className={`material-icons-outlined !text-base transition-all`}
            >
              done
            </span>
          ) : (
            <span
              style={{ transform: isOpen ? "rotate(90deg)" : "" }}
              className={`material-icons-outlined !text-base transition-all`}
            >
              arrow_forward_ios
            </span>
          )}
        </div>
      </div>
      <div
        className={`h-0 px-4 text-start overflow-hidden transition-all ${
          isOpen ? "h-auto py-4" : "h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
