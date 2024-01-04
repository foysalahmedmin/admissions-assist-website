/*
 * Copyright (c) 2023-2024. This product is copyright by Rian
 */

import Accordion from "@/components/Accordion/Accordion";
import Button from "@/components/Buttons/Button";
import {LuTrash2, LuUploadCloud} from "react-icons/lu";
import {useQuery} from "react-query";
import {fetchFilteredGrades, fetchGroupedDegrees,} from "@/network/common/commonApi.js";
import {useDispatch, useSelector} from "react-redux";
import {SetEducation} from "@/redux/applicationFormSlice/applicationFormSlice.jsx";
import {BiDownload} from "react-icons/bi";
import useDownloader from "react-use-downloader";
import {urls} from "@/apis/config/urls.js";

const EducationalRequirements = () => {
  const { download } = useDownloader();
  const dispatch = useDispatch();
  const { data: degrees } = useQuery({
    queryKey: ["grouped_degrees"],
    queryFn: () => fetchGroupedDegrees(),
  });
  const { data: grades } = useQuery({
    queryKey: ["filtered_grades"],
    queryFn: () => fetchFilteredGrades(),
  });
  const { education } = useSelector((state) => state.application_form);

  console.log({ education });

  const handleInputChange = (
    index,
    inputName,
    newValue,
    isCompound,
    body,
    degree
  ) => {
    const updatedEducation = [...education];
    if (isCompound) {
      updatedEducation[index] = {
        ...updatedEducation[index],
        body: body,
        degree: degree,
      };
      dispatch(SetEducation(updatedEducation));
    } else {
      updatedEducation[index] = {
        ...updatedEducation[index],
        [inputName]: newValue,
      };
      dispatch(SetEducation(updatedEducation));
    }
  };

  const handleDeleteEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    dispatch(SetEducation(updatedEducation));
  };
  return (
    <Accordion
      title={"Educational Requirements"}
      doneStatus={
        education[0]?.degree && education[0]?.institute && education[0]?.grade
      }
    >
      {education?.map((x, index) => (
        <div key={index} className="mb-12">
          <div className="mb-7">
            <div className="flex items-center gap-2 mb-7">
              <input
                value={x?.level_3}
                onChange={(e) =>
                  handleInputChange(index, "level_3", e.target.checked)
                }
                className="h-4 w-4 cursor-pointer"
                type="checkbox"
                name={`job_running_${index}`}
                id={`job_running_${index}`}
              />
              <label
                className="cursor-pointer"
                htmlFor={`job_running_${index}`}
              >
                Do you have level 3 qualification ?
              </label>
            </div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <label
                htmlFor={`educational_qualification_name_${index}`}
                className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900"
              >
                Qualification Name
              </label>
              <button
                onClick={() => handleDeleteEducation(index)}
                className="h-7 w-7 rounded-full flex items-center justify-center bg-input hover:text-primary-500"
              >
                <LuTrash2 />
              </button>
            </div>
            <select
              name={`educational_qualification_name_${index}`}
              value={x?.degree}
              disabled={x?.level_3}
              onChange={(e) => {
                let body =
                  e.target.selectedOptions[0]?.parentNode?.dataset.groupvalue;
                handleInputChange(
                  index,
                  "compound",
                  "",
                  true,
                  body,
                  e.target.value
                );
              }}
              className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
              id={`educational_qualification_name_${index}`}
              required
            >
              <option value="">Select</option>
              {degrees?.map((d, index) => (
                <optgroup
                  key={index}
                  data-groupvalue={d?._id?.id}
                  label={d?._id?.name}
                >
                  {d?.degrees?.map((x) => (
                    <option key={x?._id} value={x?._id}>
                      {x?.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          <div className="mb-7">
            <label
              htmlFor={`educational_institute_name_${index}`}
              className="block mb-4"
            >
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
                Institute Name
              </span>
            </label>
            <input
              name={`educational_institute_name_${index}`}
              className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
              id={`educational_institute_name_${index}`}
              value={x?.institute}
              onChange={(e) =>
                handleInputChange(index, "institute", e.target.value)
              }
              placeholder="Institute Name"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-7 mb-7">
            <div>
              <label
                htmlFor={`graduation_year_${index}`}
                className="block mb-4"
              >
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
                  Passing Year
                </span>
              </label>
              <input
                type="number"
                name={`graduation_year_${index}`}
                className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
                id={`graduation_year_${index}`}
                value={x?.passing_year}
                onChange={(e) =>
                  handleInputChange(
                    index,
                    "passing_year",
                    Number(e.target.value)
                  )
                }
                required
              />
            </div>
            <div>
              <label htmlFor={`result_${index}`} className="block mb-4">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
                  Result
                </span>
              </label>
              <select
                name={`result_${index}`}
                className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
                id={`result_${index}`}
                value={x?.grade}
                onChange={(e) =>
                  handleInputChange(index, "grade", e.target.value)
                }
                required
              >
                <option value="">Select Result</option>
                {grades?.map((g) => (
                  <option key={g?._id} value={g?._id}>
                    {g?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor={`eduction_file_${index}`} className="block mb-4">
              <span className="block text-text-900">Attachment File</span>
            </label>
            <div className="flex gap-2">
              <div>
                <label
                  className="secondary-btn inline-flex"
                  htmlFor={`eduction_file_${index}`}
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
                  name={`eduction_file_${index}`}
                  id={`eduction_file_${index}`}
                />
                {x?.certificate?.name && (
                  <p className="mt-2 ml-2">{x?.certificate?.name}</p>
                )}
              </div>
              <div>
                {x?.certificate && (
                  <Button
                    onClick={() =>
                      download(
                        `${urls?.education}/${x?.certificate}`,
                        x?.certificate
                      )
                    }
                    icon={<BiDownload />}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div>
        <Button
          onClick={() =>
            dispatch(
              SetEducation([
                ...education,
                {
                  level_3: false,
                  body: "",
                  degree: "",
                  institute: "",
                  passing_year: 0,
                  certificate: null,
                  grade: "",
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

export default EducationalRequirements;
