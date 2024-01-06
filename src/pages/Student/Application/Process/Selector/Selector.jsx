/*
 * Copyright (c) 2023-2024. This product is copyright by Rian
 */

import ProgressBarLinear from "@/components/ProgressBar/ProgressBarLinear";
import {LuDownload} from "react-icons/lu";
import {useQuery} from "react-query";
import {
    fetchApplicationPercentage,
    fetchAppliedUniversities,
    fetchMyIag,
} from "@/pages/Student/Application/requests/applicationApis.js";
import {useDispatch, useSelector} from "react-redux";
import {SetCourse, SetSubject, SetUniversity,} from "@/redux/filterSlice/filterSlice.js";
import {SetApplication} from "@/redux/submissionSlice/submissionSlice.js";

const Selector = () => {
  const dispatch = useDispatch();
  const { application } = useSelector((state) => state?.submission);
  const { subject, course } = useSelector((state) => state?.filter);
  const { data: universities } = useQuery({
    queryKey: ["applied_universities"],
    queryFn: () => fetchAppliedUniversities(),
  });
  const { data: percentage } = useQuery({
    queryKey: ["application_percentage", application],
    queryFn: () => fetchApplicationPercentage(application),
    enabled: !!application,
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-7">
      <div>
        <h3 className="title text-2xl mb-4">Select A university to proceed</h3>
        <div>
          <select
            name="graduation_year"
            onChange={(e) => {
              let university =
                e.target.selectedOptions[0]?.parentNode?.dataset?.university;
              let university_name =
                e.target.selectedOptions[0]?.parentNode?.dataset
                  ?.university_name;
              let subject =
                e.target.selectedOptions[0]?.parentNode?.dataset?.subject;
              let application =
                e.target.selectedOptions[0]?.parentNode?.dataset?.application;
              let course = e.target.value;
              dispatch(
                SetUniversity({ _id: university, name: university_name })
              );
              dispatch(SetSubject(subject ? subject : course));
              dispatch(SetCourse(course));
              dispatch(SetApplication(application));
            }}
            className="px-7 py-4 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
            id="graduation_year"
            required
          >
            <option value="">Select Application</option>
            {universities?.map((x, i) => (
              <optgroup
                key={i}
                data-application={x?._id}
                data-university_name={x?.university?.name}
                data-university={x?.university?._id}
                data-subject={x?.course?._id ? x?.subject?._id : ""}
                label={x?.university?.name}
              >
                {x?.course?._id ? (
                  <option value={x?.course?._id || course}>
                    {x?.course?.name}
                  </option>
                ) : (
                  <option value={x?.subject?._id || subject}>
                    {x?.subject?.name}
                  </option>
                )}
              </optgroup>
            ))}
          </select>
        </div>
      </div>
      <div className="lg:ml-auto lg:text-center">
        <h3 className="title text-2xl mb-4">Downloadable</h3>
        <div
          onClick={async () => {
            const blob = await fetchMyIag();
            const blobUrl = window.URL.createObjectURL(blob);
            window.open(blobUrl, "_blank");
          }}
          className="inline-flex items-center gap-4 text-[#2170E7] cursor-pointer"
        >
          <span className="cursor-pointer">IAG_FORM</span> <LuDownload />
        </div>
      </div>
      <div>
        <div className="lg:max-w-[12rem] lg:ml-auto lg:text-center">
          <ProgressBarLinear
            percentage={percentage?.percentage || 0}
            strokeSize={8}
            className={"text"}
            percentSize={"2rem"}
          >
            <div className="mb-4">
              <h3 className="title text-2xl">{percentage?.percentage || 0}%</h3>
              <strong className="title text-sm">Application Completed</strong>
            </div>
          </ProgressBarLinear>
        </div>
      </div>
    </div>
  );
};

export default Selector;
