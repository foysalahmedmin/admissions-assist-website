import Accordion from "@/components/Accordion/Accordion";
import Button from "@/components/Buttons/Button";
import { useState } from "react";
import { LuTrash2, LuUploadCloud } from "react-icons/lu";

const Inputs = ({ idIndex }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between gap-4 pb-2 border-b mb-4">
        <h3 className="title font-semibold">Platform - {idIndex}</h3>
        <button className="h-7 w-7 rounded-full flex items-center justify-center bg-input hover:text-primary-500">
          <LuTrash2 />
        </button>
      </div>
      <div className="mb-7">
        <label
          htmlFor={`educational_qualification_name_${idIndex}`}
          className="block mb-4"
        >
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
            Qualification Name
          </span>
        </label>
        <select
          type="text"
          name={`educational_qualification_name_${idIndex}`}
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id={`educational_qualification_name_${idIndex}`}
          required
        >
          <option value="">Select Qualification</option>
          <option value="">O level</option>
        </select>
      </div>
      <div className="mb-7">
        <label
          htmlFor={`educational_institute_name_${idIndex}`}
          className="block mb-4"
        >
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
            Institute Name
          </span>
        </label>
        <select
          type="text"
          name={`educational_institute_name_${idIndex}`}
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id={`educational_institute_name_${idIndex}`}
          required
        >
          <option value="">Select Institute</option>
          <option value="">O level</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-7 mb-7">
        <div>
          <label htmlFor={`graduation_year_${idIndex}`} className="block mb-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
              Graduation Year
            </span>
          </label>
          <select
            type="text"
            name={`graduation_year_${idIndex}`}
            className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
            id={`graduation_year_${idIndex}`}
            required
          >
            <option value="">Select Graduation Year</option>
            <option value="">2019</option>
          </select>
        </div>
        <div>
          <label htmlFor={`result_${idIndex}`} className="block mb-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
              Result
            </span>
          </label>
          <select
            type="number"
            name={`result_${idIndex}`}
            className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
            id={`result_${idIndex}`}
            required
          >
            <option value="">Select Result</option>
            <option value="">2019</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor={`eduction_file_${idIndex}`} className="block mb-4">
          <span className="block text-text-900">Attachment File</span>
        </label>
        <label
          className="secondary-btn inline-flex"
          htmlFor={`eduction_file_${idIndex}`}
        >
          <span>Upload file</span>{" "}
          <span>
            <LuUploadCloud className="text-2xl" />
          </span>
        </label>
        <input
          className="hidden"
          type="file"
          name={`eduction_file_${idIndex}`}
          id={`eduction_file_${idIndex}`}
        />
      </div>
    </div>
  );
};

const EducationalRequirements = () => {
  const [addInputCount, setAddInputCount] = useState(1);
  return (
    <Accordion title={"Educational Requirements"}>
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

export default EducationalRequirements;
