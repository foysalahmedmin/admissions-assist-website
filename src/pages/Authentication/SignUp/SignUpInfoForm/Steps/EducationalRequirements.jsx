import Accordion from "@/components/Accordion/Accordion";
import Button from "@/components/Buttons/Button";
import { LuUploadCloud } from "react-icons/lu";

const EducationalRequirements = () => {
  return (
    <Accordion title={"Educational Requirements"}>
      <div className="mb-7">
        <label htmlFor="educational_qualification" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
            Qualification Name
          </span>
        </label>
        <select
          type="text"
          name="educational_qualification"
          className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
          id="educational_qualification"
          required
        >
          <option value="">Select Qualification</option>
          <option value="">O level</option>
        </select>
      </div>
      <div className="mb-7">
        <label htmlFor="educational_institute" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
            Institute Name
          </span>
        </label>
        <select
          type="text"
          name="educational_institute"
          className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
          id="educational_institute"
          required
        >
          <option value="">Select Institute</option>
          <option value="">O level</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-7 mb-7">
        <div>
          <label htmlFor="graduation_year" className="block mb-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
              Graduation Year
            </span>
          </label>
          <select
            type="text"
            name="graduation_year"
            className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
            id="graduation_year"
            required
          >
            <option value="">Select Graduation Year</option>
            <option value="">2019</option>
          </select>
        </div>
        <div>
          <label htmlFor="result" className="block mb-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
              Result
            </span>
          </label>
          <select
            type="number"
            name="result"
            className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
            id="result"
            required
          >
            <option value="">Select Result</option>
            <option value="">2019</option>
          </select>
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

export default EducationalRequirements;
