<<<<<<< HEAD
import Loading from "@/components/Loading/Loading";
import { Suspense, lazy } from "react";
import { toast } from "react-toastify";

const Step_ContactInformation = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/Step_ContactInformation/Step_ContactInformation"
  )
);
const Step_BasicInformation = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/Step_BasicInformation/Step_BasicInformation"
  )
);
const Step_AdditionalDocuments = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/Step_AdditionalDocuments/Step_AdditionalDocuments"
  )
);
const Step_Qualifications = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/Step_Qualifications/Step_Qualifications"
  )
);
const Step_ImmigrationDocuments = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/Step_ImmigrationDocuments/Step_ImmigrationDocuments"
  )
);
const Step_ApplicationForm = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/Step_ApplicationForm/Step_ApplicationForm"
  )
);
const Step_StudentFinanceCompleted = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/Step_StudentFinanceCompleted/Step_StudentFinanceCompleted"
  )
);
const Step_StudentCounselling = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/Step_StudentCounselling/Step_StudentCounselling"
  )
);
const Step_InterviewBooked = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/Step_InterviewBooked/Step_InterviewBooked"
  )
);
const Step_InterviewResult = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/Step_InterviewResult/Step_InterviewResult"
  )
);
const Step_OfferLetterReceived = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/Step_OfferLetterReceived/Step_OfferLetterReceived"
  )
);
const Step_StudentFinanceDate = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/Step_StudentFinanceDate/Step_StudentFinanceDate"
  )
);
const Step_FollowUp = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/Step_FollowUp/Step_FollowUp"
  )
);

const StepForm = ({ steps, setSteps, stepTab, setStepTab }) => {
  const setStepStatusAndSetTab = () => {
    const index = steps.findIndex((step) => step.title === stepTab.title);
    const updatedSteps = [...steps];
    updatedSteps[index].status = "completed";
    setSteps(updatedSteps);

    const nextStep = steps[index + 1];
    if ([index + 1] < steps.length) {
      setStepTab(nextStep);
    }
    toast.success(stepTab?.title + " " + "saved");
  };
  return (
    <div>
      <div>
        {stepTab?.title === "Contact information" && (
          <Suspense fallback={<Loading />}>
            <Step_ContactInformation
              setStepStatusAndSetTab={setStepStatusAndSetTab}
            />
          </Suspense>
        )}
        {stepTab?.title === "Basic information" && (
          <Suspense fallback={<Loading />}>
            <Step_BasicInformation
              setStepStatusAndSetTab={setStepStatusAndSetTab}
            />
          </Suspense>
        )}
        {stepTab?.title === "Additional documents" && (
          <Suspense fallback={<Loading />}>
            <Step_AdditionalDocuments
              setStepStatusAndSetTab={setStepStatusAndSetTab}
            />
          </Suspense>
        )}
        {stepTab?.title === "Qualifications" && (
          <Suspense fallback={<Loading />}>
            <Step_Qualifications
              setStepStatusAndSetTab={setStepStatusAndSetTab}
            />
          </Suspense>
        )}
        {stepTab?.title === "Immigration documents" && (
          <Suspense fallback={<Loading />}>
            <Step_ImmigrationDocuments
              setStepStatusAndSetTab={setStepStatusAndSetTab}
            />
          </Suspense>
        )}
        {stepTab?.title === "Application form" && (
          <Suspense fallback={<Loading />}>
            <Step_ApplicationForm
              setStepStatusAndSetTab={setStepStatusAndSetTab}
            />
          </Suspense>
        )}
        {stepTab?.title === "Student Counselling" && (
          <Suspense fallback={<Loading />}>
            <Step_StudentCounselling
              setStepStatusAndSetTab={setStepStatusAndSetTab}
            />
          </Suspense>
        )}
        {stepTab?.title === "Interview Booked" && (
          <Suspense fallback={<Loading />}>
            <Step_InterviewBooked
              setStepStatusAndSetTab={setStepStatusAndSetTab}
            />
          </Suspense>
        )}
        {stepTab?.title === "Interview Result" && (
          <Suspense fallback={<Loading />}>
            <Step_InterviewResult
              setStepStatusAndSetTab={setStepStatusAndSetTab}
            />
          </Suspense>
        )}
        {stepTab?.title === "Offer Letter Received" && (
          <Suspense fallback={<Loading />}>
            <Step_OfferLetterReceived
              setStepStatusAndSetTab={setStepStatusAndSetTab}
            />
          </Suspense>
        )}
        {stepTab?.title === "Student finance date" && (
          <Suspense fallback={<Loading />}>
            <Step_StudentFinanceDate
              setStepStatusAndSetTab={setStepStatusAndSetTab}
            />
          </Suspense>
        )}
        {stepTab?.title === "Student finance Completed" && (
          <Suspense fallback={<Loading />}>
            <Step_StudentFinanceCompleted
              setStepStatusAndSetTab={setStepStatusAndSetTab}
            />
          </Suspense>
        )}
        {stepTab?.title === "Follow up" && (
          <Suspense fallback={<Loading />}>
            <Step_FollowUp setStepStatusAndSetTab={setStepStatusAndSetTab} />
=======
/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {lazy, Suspense} from "react";
import {useSelector} from "react-redux";
import {useQuery} from "react-query";
import {fetchOneProcesses} from "@/pages/Student/Application/requests/applicationApis.js";
import Loading from "@/components/Loading/Loading.jsx";

const StepList = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/StepList/StepList.jsx"
  )
);

const StepText = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/StepText/StepText.jsx"
  )
);

const StepForm = () => {
  const { stepTab } = useSelector((state) => state?.processes);
  const { data: currentProcess } = useQuery({
    queryKey: ["one_process", stepTab?._id],
    queryFn: () => fetchOneProcesses(stepTab?._id),
    enabled: !!stepTab?._id,
  });
  return (
    <div>
      <div>
        {currentProcess?.type && currentProcess?.type === "List" && (
          <Suspense fallback={<Loading />}>
            <StepList info={currentProcess} />
          </Suspense>
        )}
        {currentProcess?.type && currentProcess?.type !== "List" && (
          <Suspense fallback={<Loading />}>
            <StepText info={currentProcess} />
>>>>>>> update-project/main
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default StepForm;
