import Accordion from "@/components/Accordion/Accordion";
import Button from "@/components/Buttons/Button";
import { useState } from "react";
import { LuCalendar, LuUploadCloud } from "react-icons/lu";

const Inputs = ({ idIndex }) => {
  const [jobRunning, setJobRunning] = useState(false);
  return (
    <div>
      <div className="mb-7">
        <label htmlFor={`job_title_${idIndex}`} className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
            Job title
          </span>
        </label>
        <input
          type="text"
          name={`job_title_${idIndex}`}
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id={`job_title_${idIndex}`}
          placeholder="Job Title"
          required
        />
      </div>
      <div className="mb-7">
        <label htmlFor={`company_${idIndex}`} className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
            Company
          </span>
        </label>
        <input
          type="text"
          name={`company_${idIndex}`}
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id={`company_${idIndex}`}
          placeholder={`company`}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-7 mb-4">
        <div>
          <p className="block mb-4">
            <span className="block text-text-900">From</span>
          </p>
          <label
            htmlFor={`job_start_date_${idIndex}`}
            className="px-4 flex items-center gap-2 text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 flex-1"
          >
            <LuCalendar className="text-2xl" />
            <input
              onClick={(e) => e.currentTarget.showPicker()}
              className="py-3 w-full bg-transparent outline-none icon-none"
              type="date"
              name={`job_start_date_${idIndex}`}
              id={`job_start_date_${idIndex}`}
            />
          </label>
        </div>
        <div>
          <p className="block mb-4">
            <span className="block text-text-900">To</span>
          </p>
          <label
            htmlFor={`job_end_date_${idIndex}`}
            className="px-4 flex items-center gap-2 text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 flex-1"
          >
            <LuCalendar className="text-2xl" />
            <input
              onClick={(e) => e.currentTarget.showPicker()}
              className="py-3 w-full bg-transparent outline-none icon-none"
              type="date"
              name={`job_end_date_${idIndex}`}
              id={`job_end_date_${idIndex}`}
              disabled={jobRunning}
            />
          </label>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-7">
        <input
          onChange={(e) =>
            e.target.checked ? setJobRunning(true) : setJobRunning(false)
          }
          className="h-4 w-4 cursor-pointer"
          type="checkbox"
          name={`job_running_${idIndex}`}
          id={`job_running_${idIndex}`}
        />
        <label className="cursor-pointer" htmlFor={`job_running_${idIndex}`}>
          Currently working here.
        </label>
      </div>
      <div className="mb-7">
        <label htmlFor={`experience_file_${idIndex}`} className="block mb-4">
          <span className="block text-text-900">Attachment File</span>
        </label>
        <label
          className="secondary-btn inline-flex"
          htmlFor={`experience_file_${idIndex}`}
        >
          <span>Upload file</span>{" "}
          <span>
            <LuUploadCloud className="text-2xl" />
          </span>
        </label>
        <input
          className="hidden"
          type="file"
          name={`experience_file_${idIndex}`}
          id={`experience_file_${idIndex}`}
        />
      </div>
    </div>
  );
};

const WorkExperience = () => {
  const [addInputCount, setAddInputCount] = useState(0);
  return (
    <Accordion title={"Work Experience"}>
      <Inputs idIndex={0} />
      {Array.from(Array(addInputCount).keys()).map((x) => (
        <Inputs key={x} idIndex={x + 1} />
      ))}
      <div>
        <Button
          onClick={() => setAddInputCount(addInputCount + 1)}
          className={"ghost-btn bg-input w-full rounded"}
          text={"Add More"}
          icon={<span className="material-icons-outlined !text-base">add</span>}
        />
      </div>
    </Accordion>
  );
};

export default WorkExperience;
