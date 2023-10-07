import { Suspense, lazy } from "react";
import Step_BasicInformation from "../Steps/Step_BasicInformation";
import Step_AdditionalDocuments from "../Steps/Step_AdditionalDocuments";
import Loading from "@/components/Loading/Loading";
import Step_Qualifications from "../Steps/Step_Qualifications";
import Step_ImmigrationDocuments from "../Steps/Step_ImmigrationDocuments";
import Step_ApplicationForm from "../Steps/Step_ApplicationForm";
import Step_StudentFinanceCompleted from "../Steps/Step_StudentFinanceCompleted";
import Step_StudentCounselling from "../Steps/Step_StudentCounselling";
import Step_InterviewBooked from "../Steps/Step_InterviewBooked";
const Step_ContactInformation = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/Step_ContactInformation"
  )
);

const StepForm = ({ steps, setSteps, stepTab, setStepTab }) => {
  return (
    <div>
      <form action="">
        {stepTab?.title === "Contact information" && (
          <Suspense fallback={<Loading />}>
            <Step_ContactInformation />
          </Suspense>
        )}
        {stepTab?.title === "Basic information" && (
          <Suspense fallback={<Loading />}>
            <Step_BasicInformation />
          </Suspense>
        )}
        {stepTab?.title === "Additional documents" && (
          <Suspense fallback={<Loading />}>
            <Step_AdditionalDocuments />
          </Suspense>
        )}
        {stepTab?.title === "Qualifications" && (
          <Suspense fallback={<Loading />}>
            <Step_Qualifications />
          </Suspense>
        )}
        {stepTab?.title === "Immigration documents" && (
          <Suspense fallback={<Loading />}>
            <Step_ImmigrationDocuments />
          </Suspense>
        )}
        {stepTab?.title === "Application form" && (
          <Suspense fallback={<Loading />}>
            <Step_ApplicationForm />
          </Suspense>
        )}
        {stepTab?.title === "Student Counselling" && (
          <Suspense fallback={<Loading />}>
            <Step_StudentCounselling />
          </Suspense>
        )}
        {stepTab?.title === "Interview Booked" && (
          <Suspense fallback={<Loading />}>
            <Step_InterviewBooked />
          </Suspense>
        )}
      </form>
    </div>
  );
};

export default StepForm;
