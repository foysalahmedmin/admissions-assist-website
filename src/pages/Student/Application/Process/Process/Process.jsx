import { useState } from "react";
import Selector from "../Selector/Selector";
import StepsList from "../StepsList/StepsList";
import StepForm from "../StepForm/StepForm/StepForm";
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
  const [steps, setSteps] = useState(all_steps);
  const [stepTab, setStepTab] = useState({
    serial: 1,
    title: "Contact information",
    status: null,
  });
  return (
    <section>
      <div className="container mx-auto lg:py-24 py-14">
        <div className="rounded-3xl px-12 py-14 shadow-custom mb-7">
          <Selector />
        </div>
        <div className="flex gap-7">
          <div className="w-[30rem] px-12 py-14 rounded-3xl shadow-custom">
            <StepsList
              steps={steps}
              stepTab={stepTab}
              setStepTab={setStepTab}
            />
          </div>
          <div className="flex-1 px-12 py-14 rounded-3xl shadow-custom">
            <StepForm
              steps={steps}
              setSteps={setSteps}
              stepTab={stepTab}
              setStepTab={setStepTab}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
