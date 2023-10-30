import Accordion from "@/components/Accordion/Accordion";
import Button from "@/components/Buttons/Button";
import { LuCalendar, LuUploadCloud } from "react-icons/lu";

const WorkExperience = () => {
  return (
    <Accordion title={"Educational Requirements"}>
      <div className="mb-7">
        <label htmlFor="job_title" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
            Job title
          </span>
        </label>
        <input
          type="text"
          name="job_title"
          className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
          id="job_title"
          placeholder="Job Title"
          required
        />
      </div>
      <div className="mb-7">
        <label htmlFor="company" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
            Company
          </span>
        </label>
        <input
          type="text"
          name="company"
          className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
          id="company"
          placeholder="Company"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-7 mb-7">
        <div>
          <p className="block mb-4">
            <span className="block text-title">From</span>
          </p>
          <label
            htmlFor="job_start_date"
            className="px-4 flex items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text flex-1"
          >
            <LuCalendar className="text-2xl" />
            <input
              onClick={(e) => e.currentTarget.showPicker()}
              className="py-3 w-full bg-transparent outline-none icon-none"
              type="date"
              name="job_start_date"
              id="job_start_date"
            />
          </label>
        </div>
        <div>
          <p htmlFor="company" className="block mb-4">
            <span className="block text-title">To</span>
          </p>
          <label
            htmlFor="job_end_date"
            className="px-4 flex items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text flex-1"
          >
            <LuCalendar className="text-2xl" />
            <input
              onClick={(e) => e.currentTarget.showPicker()}
              className="py-3 w-full bg-transparent outline-none icon-none"
              type="date"
              name="job_end_date"
              id="job_end_date"
            />
          </label>
        </div>
      </div>
      <div className="mb-7">
        <label htmlFor="eduction_file" className="block mb-4">
          <span className="block text-title">Attachment File</span>
        </label>
        <label className="primary-btn inline-flex" htmlFor="eduction_file">
          <span>Upload file</span>{" "}
          <span>
            <LuUploadCloud className="text-2xl" />
          </span>
        </label>
        <input
          className="hidden"
          type="file"
          name="eduction_file"
          id="eduction_file"
        />
      </div>
      <div>
        <Button
          className={"ghost-btn bg-input w-full rounded"}
          text={"Add More"}
          icon={<span className="material-icons-outlined !text-base">add</span>}
        />
      </div>
    </Accordion>
  );
};

export default WorkExperience;
