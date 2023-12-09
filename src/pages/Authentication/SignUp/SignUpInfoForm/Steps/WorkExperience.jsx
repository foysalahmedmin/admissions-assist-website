import Accordion from "@/components/Accordion/Accordion";
import Button from "@/components/Buttons/Button";
import { LuCalendar, LuTrash2, LuUploadCloud } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { SetExperience } from "@/redux/applicationFormSlice/applicationFormSlice.jsx";
import { useEffect } from "react";
import { SetRegister } from "@/redux/progressSlice/progressSlice.js";

const WorkExperience = () => {
  const dispatch = useDispatch();
  const { experience } = useSelector((state) => state.application_form);
  const { register } = useSelector((state) => state.progress);
  useEffect(() => {
    if (
      experience[0]?.title &&
      experience[0]?.company &&
      experience[0]?.working_from
    ) {
      dispatch(SetRegister(register + 20));
    }
  }, [experience[0]?.title]);

  const handleInputChange = (index, inputName, newValue) => {
    const updatedExperience = [...experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [inputName]: newValue,
    };
    dispatch(SetExperience(updatedExperience));
  };

  const handleDeleteExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    dispatch(SetExperience(updatedExperience));
  };
  return (
    <Accordion
      title={"Work Experience"}
      doneStatus={
        experience[0]?.title &&
        experience[0]?.company &&
        experience[0]?.working_from
      }
    >
      {experience?.map((x, index) => (
        <div key={index} className="mb-12">
          <div className="mb-7">
            <div className="flex items-center justify-between gap-4 mb-4">
              <label
                htmlFor={`job_title_${index}`}
                className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900"
              >
                Job title
              </label>
              <button
                onClick={() => handleDeleteExperience(index)}
                className="h-7 w-7 rounded-full flex items-center justify-center bg-input hover:text-primary-500"
              >
                <LuTrash2 />
              </button>
            </div>
            <input
              type="text"
              name={`job_title_${index}`}
              value={x?.title}
              onChange={(e) =>
                handleInputChange(index, "title", e.target.value)
              }
              className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
              id={`job_title_${index}`}
              placeholder="Job Title"
              required
            />
          </div>
          <div className="mb-7">
            <label htmlFor={`company_${index}`} className="block mb-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
                Company
              </span>
            </label>
            <input
              type="text"
              name={`company_${index}`}
              value={x?.company}
              onChange={(e) =>
                handleInputChange(index, "company", e.target.value)
              }
              className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
              id={`company_${index}`}
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
                htmlFor={`job_start_date_${index}`}
                className="px-4 flex items-center gap-2 text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 flex-1"
              >
                <LuCalendar className="text-2xl" />
                <input
                  onClick={(e) => e.currentTarget.showPicker()}
                  className="py-3 w-full bg-transparent outline-none icon-none"
                  value={x?.working_from}
                  onChange={(e) =>
                    handleInputChange(index, "working_from", e.target.value)
                  }
                  type="date"
                  name={`job_start_date_${index}`}
                  id={`job_start_date_${index}`}
                />
              </label>
            </div>
            <div>
              <p className="block mb-4">
                <span className="block text-text-900">To</span>
              </p>
              <label
                htmlFor={`job_end_date_${index}`}
                className="px-4 flex items-center gap-2 text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 flex-1"
              >
                <LuCalendar className="text-2xl" />
                <input
                  onClick={(e) => e.currentTarget.showPicker()}
                  className="py-3 w-full bg-transparent outline-none icon-none"
                  type="date"
                  value={x?.working_to}
                  onChange={(e) =>
                    handleInputChange(index, "working_to", e.target.value)
                  }
                  name={`job_end_date_${index}`}
                  id={`job_end_date_${index}`}
                  disabled={x?.stillWorking}
                />
              </label>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-7">
            <input
              value={x?.stillWorking}
              onChange={(e) =>
                handleInputChange(index, "stillWorking", e.target.checked)
              }
              className="h-4 w-4 cursor-pointer"
              type="checkbox"
              name={`job_running_${index}`}
              id={`job_running_${index}`}
            />
            <label className="cursor-pointer" htmlFor={`job_running_${index}`}>
              Currently working here.
            </label>
          </div>
          <div>
            <label htmlFor={`experience_file_${index}`} className="block mb-4">
              <span className="block text-text-900">Attachment File</span>
            </label>
            <label
              className="secondary-btn inline-flex"
              htmlFor={`experience_file_${index}`}
            >
              <span>Upload file</span>{" "}
              <span>
                <LuUploadCloud className="text-2xl" />
              </span>
            </label>
            <input
              className="hidden"
              type="file"
              onChange={(e) =>
                handleInputChange(index, "certificate", e.target.files[0])
              }
              name={`experience_file_${index}`}
              id={`experience_file_${index}`}
            />
            {x?.certificate?.name && (
              <p className="mt-2 ml-2">{x?.certificate?.name}</p>
            )}
          </div>
        </div>
      ))}
      <div>
        <Button
          onClick={() =>
            dispatch(
              SetExperience([
                ...experience,
                {
                  title: "",
                  company: "",
                  working_from: "",
                  working_to: "",
                  stillWorking: false,
                  certificate: null,
                },
              ])
            )
          }
          className={"ghost-btn bg-input w-full rounded"}
          text={"Add More"}
          icon={<span className="material-icons-outlined !text-base">add</span>}
        />
      </div>
    </Accordion>
  );
};

export default WorkExperience;
