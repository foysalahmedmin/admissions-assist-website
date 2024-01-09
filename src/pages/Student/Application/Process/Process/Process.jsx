<<<<<<< HEAD
import { useState } from "react";
import Selector from "../Selector/Selector";
import StepForm from "../StepForm/StepForm/StepForm";
import StepsList from "../StepsList/StepsList";
const all_steps = [
  {
    serial: 1,
    title: "Contact information",
    status: null,
  },
  {
    serial: 2,
    title: "Basic information",
    status: null,
  },
  {
    serial: 3,
    title: "Additional documents",
    status: null,
  },
  {
    serial: 4,
    title: "Qualifications",
    status: null,
  },
  {
    serial: 5,
    title: "Immigration documents",
    status: null,
  },
  {
    serial: 6,
    title: "Application form",
    status: null,
  },
  {
    serial: 7,
    title: "Student Counselling",
    status: null,
  },
  {
    serial: 8,
    title: "Interview Booked",
    status: null,
  },
  {
    serial: 9,
    title: "Interview Result",
    status: null,
  },
  {
    serial: 10,
    title: "Offer Letter Received",
    status: null,
  },
  {
    serial: 11,
    title: "Student finance date",
    status: null,
  },
  {
    serial: 12,
    title: "Student finance Completed",
    status: null,
  },
  {
    serial: 13,
    title: "Follow up",
    status: null,
  },
];

const Process = () => {
  const [isFormShow, setIsFormShow] = useState(false);
  const [steps, setSteps] = useState(all_steps);
  const [stepTab, setStepTab] = useState({
    serial: 1,
    title: "Contact information",
    status: null,
  });
  console.log(isFormShow);
=======
/*
 * Copyright (c) 2023-2024. This product is copyright by Rian
 */

import {useState} from "react";
import Selector from "../Selector/Selector";
import StepForm from "../StepForm/StepForm/StepForm";
import StepsList from "../StepsList/StepsList";
import {useQuery} from "react-query";
import {fetchApplicationProcesses} from "@/pages/Student/Application/requests/applicationApis.js";
import {useDispatch, useSelector} from "react-redux";
import {SetLastStep, SetStepTab} from "@/redux/processSlice/processSlice.js";
import {SetProcesses, SetSl,} from "@/redux/submissionSlice/submissionSlice.js";

const Process = () => {
  const dispatch = useDispatch();
  const { application } = useSelector((state) => state?.submission);
  const { university } = useSelector((state) => state?.filter);
  const [isFormShow, setIsFormShow] = useState(false);
  const { stepTab } = useSelector((state) => state?.processes);
  const { data: steps } = useQuery({
    queryKey: ["student_steps", university?._id, application],
    queryFn: () => fetchApplicationProcesses(university?._id, application),
    enabled: !!university?._id,
    onSuccess: (output) => {
      if (!stepTab?._id) {
        dispatch(SetStepTab(output?.find((x) => x?.sl === 1)));
        dispatch(SetProcesses(output?.find((x) => x?.sl === 1)?._id));
        dispatch(SetSl(output?.find((x) => x?.sl === 1)?.sl));
      }
      dispatch(SetLastStep(Math.max(...output?.map((x) => x?.sl))));
    },
  });
>>>>>>> update-project/main
  return (
    <section className="lg:py-24 py-14">
      <div className="container mx-auto">
        <div className="rounded-3xl px-7 lg:px-12 py-7 lg:py-14 bg-white shadow-custom mb-7">
          <Selector />
        </div>
<<<<<<< HEAD
        <div className="flex gap-7">
          <div
            className={`${
              !isFormShow ? "" : "hidden lg:block"
            } w-full lg:w-[30rem] px-7 lg:px-12 py-7 lg:py-14 rounded-3xl bg-white shadow-custom`}
          >
            <div className="h-[calc(100vh-8.5rem)] lg:h-auto overflow-y-auto">
              <StepsList
                steps={steps}
                stepTab={stepTab}
                setStepTab={setStepTab}
                setIsFormShow={setIsFormShow}
              />
            </div>
          </div>
          <div
            className={`${
              isFormShow ? "" : "hidden lg:block"
            } flex-1 px-7 lg:px-12 py-7 lg:py-14 rounded-3xl bg-white shadow-custom`}
          >
            <div className="h-6 mb-7 lg:hidden">
              <span
                onClick={() => setIsFormShow(false)}
                className="material-icons-outlined cursor-pointer hover:text-secondary-500"
              >
                arrow_back
              </span>
            </div>
            <div className="h-[calc(100vh-11.25rem)] lg:h-auto overflow-y-auto scroll-hidden">
              <StepForm
                steps={steps}
                setSteps={setSteps}
                stepTab={stepTab}
                setStepTab={setStepTab}
              />
            </div>
          </div>
        </div>
=======
        {steps?.length > 0 && (
          <div className="flex gap-7">
            <div
              className={`${
                !isFormShow ? "" : "hidden lg:block"
              } w-full lg:w-[30rem] px-7 lg:px-12 py-7 lg:py-14 rounded-3xl bg-white shadow-custom`}
            >
              <div className="h-[calc(100vh-8.5rem)] lg:h-auto overflow-y-auto">
                <StepsList steps={steps} setIsFormShow={setIsFormShow} />
              </div>
            </div>
            <div
              className={`${
                isFormShow ? "" : "hidden lg:block"
              } flex-1 px-7 lg:px-12 py-7 lg:py-14 rounded-3xl bg-white shadow-custom`}
            >
              <div className="h-6 mb-7 lg:hidden">
                <span
                  onClick={() => setIsFormShow(false)}
                  className="material-icons-outlined cursor-pointer hover:text-secondary-500"
                >
                  arrow_back
                </span>
              </div>
              <div className="h-[calc(100vh-11.25rem)] lg:h-auto overflow-y-auto scroll-hidden">
                <StepForm />
              </div>
            </div>
          </div>
        )}
>>>>>>> update-project/main
      </div>
    </section>
  );
};

export default Process;
