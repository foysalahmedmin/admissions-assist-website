import Button from "@/components/Buttons/Button";
import ProgressBarCircle from "@/components/ProgressBar/ProgressBarCircle";
import ContactAndResidencyDetails from "./Steps/ContactAndResidencyDetails";
import EducationalRequirements from "./Steps/EducationalRequirements";
import FinanceAndFunding from "./Steps/FinanceAndFunding";
import LanguageRequirements from "./Steps/LanguageRequirements";
import NationalityDetails from "./Steps/NationalityDetails";
import PersonalDetails from "./Steps/PersonalDetails";
import WorkExperience from "./Steps/WorkExperience";

const SignUpInfoForm = () => {
  return (
    <>
      <div className="flex flex-wrap-reverse items-center justify-between bg-input px-7 py-4">
        <h3 className="title text-3xl">Profile Completeness</h3>
        <ProgressBarCircle percentage={45} size={67}>
          <div>
            <h3 className="text-title font-bold">{45}%</h3>
          </div>
        </ProgressBarCircle>
      </div>
      <div className="p-7">
        <form action="">
          <div className="grid grid-cols-1 gap-4 mb-12">
            <PersonalDetails />
            <ContactAndResidencyDetails />
            <NationalityDetails />
            <LanguageRequirements />
            <FinanceAndFunding />
            <EducationalRequirements />
            <WorkExperience />
          </div>
          <div className="text-center">
            <Button
              type={"submit"}
              className={"mx-auto w-full mb-4"}
              text={"Submit"}
              icon={
                <span className="material-icons-outlined">trending_flat</span>
              }
            />
            <button className="ghost-btn mx-auto" type="button">
              <span className="font-bold text-secondary underline">Skip</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpInfoForm;
