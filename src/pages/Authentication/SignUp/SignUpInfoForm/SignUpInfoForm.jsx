import Button from "@/components/Buttons/Button";
import ProgressBarCircle from "@/components/ProgressBar/ProgressBarCircle";
import ContactAndResidencyDetails from "./Steps/ContactAndResidencyDetails";
import EducationalRequirements from "./Steps/EducationalRequirements";
import FinanceAndFunding from "./Steps/FinanceAndFunding";
import LanguageRequirements from "./Steps/LanguageRequirements";
import NationalityDetails from "./Steps/NationalityDetails";
import PersonalDetails from "./Steps/PersonalDetails";
import WorkExperience from "./Steps/WorkExperience";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { SetRegisterReset } from "@/redux/applicationFormSlice/applicationFormSlice.jsx";
import { useMutation } from "react-query";
import { StudentRegister } from "@/pages/Authentication/requests/auth.js";
import { useNavigate } from "react-router-dom";

const SignUpInfoForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { register } = useSelector((state) => state.progress);
  const {
    user_name,
    email,
    password,
    personal,
    residency,
    nationality,
    english_language,
    finance,
    education,
    experience,
  } = useSelector((state) => state.application_form);

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: StudentRegister,
    onSuccess: () => {
      navigation("/authentication/login");
    },
  });

  const handleSave = async () => {
    try {
      if (!personal?.first_name) {
        return toast.warn(`No ${!personal?.first_name && "first_name"}`);
      }
      const status = await mutateAsync({
        user_name,
        email,
        password,
        personal: {
          first_name: personal?.first_name,
          last_name: personal?.last_name,
          dob: personal?.dob,
          gender: personal?.gender,
          heard_us: personal?.heard_us,
          ...(personal?.agent && { agent: personal?.agent }),
        },
        residency,
        nationality,
        english_language: {
          platform: english_language?.platform,
          score: english_language?.score,
          exam_date: english_language?.exam_date,
          center: english_language?.center,
        },
        finance,
        education: education?.map((e) => {
          return {
            degree: e?.degree,
            institute: e?.institute,
            passing_year: e?.passing_year,
            grade: e?.grade,
          };
        }),
        experience: experience?.map((x) => {
          return {
            title: x?.title,
            company: x?.company,
            working_from: x?.working_from,
            working_to: x?.working_to,
            stillWorking: x?.stillWorking,
          };
        }),
        ielts_certificate: english_language?.certificate,
        education_certificate: education?.map((e) => e?.certificate),
        experience_certificate: experience?.map((e) => e?.certificate),
      });
      toast.success(status?.message);
      dispatch(SetRegisterReset());
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <>
      <div className="flex flex-wrap-reverse items-center justify-between bg-input px-7 py-4">
        <h3 className="title text-3xl">Profile Completeness</h3>
        <ProgressBarCircle percentage={register} size={67}>
          <div>
            <h3 className="text-text-900 font-bold">{register}%</h3>
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
              disabled={isLoading}
              isLoading={isLoading}
              onClick={handleSave}
              className={"mx-auto w-full mb-4"}
              text={"Submit"}
              icon={
                <span className="material-icons-outlined">trending_flat</span>
              }
            />
            <button className="ghost-btn mx-auto" type="button">
              <span className="font-bold text-secondary-500 underline">
                Skip
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpInfoForm;
