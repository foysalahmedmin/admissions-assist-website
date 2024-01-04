/*
 * Copyright (c) 2023-2024. This product is copyright by Rian
 */

import Button from "@/components/Buttons/Button";
import ProgressBarCircle from "@/components/ProgressBar/ProgressBarCircle";
import ContactAndResidencyDetails from "./Steps/ContactAndResidencyDetails";
import EducationalRequirements from "./Steps/EducationalRequirements";
import FinanceAndFunding from "./Steps/FinanceAndFunding";
import LanguageRequirements from "./Steps/LanguageRequirements";
import NationalityDetails from "./Steps/NationalityDetails";
import PersonalDetails from "./Steps/PersonalDetails";
import WorkExperience from "./Steps/WorkExperience";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {
  SetAddress,
  SetAgent,
  SetBirthAddress,
  SetBirthCountry,
  SetCenter,
  SetCertificate,
  SetDob,
  SetEducation,
  SetEmail,
  SetExamDate,
  SetExperience,
  SetFirstName,
  SetGender,
  SetHeardUs,
  SetIsBirthPlaceSame,
  SetLastName,
  SetNationality,
  SetPhone,
  SetPlatform,
  SetRegisterReset,
  SetScore,
  SetSourceFund,
  SetUserName,
} from "@/redux/applicationFormSlice/applicationFormSlice.jsx";
import {useMutation, useQuery} from "react-query";
import {fetchOneStudent, StudentUpdate,} from "@/pages/Authentication/requests/auth.js";

const SignUpUpdateForm = () => {
  const dispatch = useDispatch();
  const {
    english_language: engLang,
    education: edu,
    experience: exp,
  } = useSelector((state) => state.application_form);
  const { data: me, refetch } = useQuery({
    queryKey: ["me"],
    queryFn: () => fetchOneStudent(),
    onSuccess: (output) => {
      dispatch(SetUserName(output?.user_name));
      dispatch(SetEmail(output?.email));
      dispatch(SetFirstName(output?.personal?.first_name));
      dispatch(SetLastName(output?.personal?.last_name));
      dispatch(SetDob(output?.personal?.dob));
      dispatch(SetGender(output?.personal?.gender));
      dispatch(SetHeardUs(output?.personal?.heard_us));
      dispatch(SetAgent(output?.personal?.agent));
      //
      dispatch(SetAddress(output?.residency?.address));
      dispatch(SetPhone(output?.residency?.phone));
      //
      dispatch(SetBirthCountry(output?.nationality?.birth_country));
      dispatch(SetIsBirthPlaceSame(output?.nationality?.is_birth_place_same));
      dispatch(SetBirthAddress(output?.nationality?.birth_address));
      dispatch(SetNationality(output?.nationality?.nationality));
      //
      dispatch(SetPlatform(output?.english_language?.platform));
      dispatch(SetScore(output?.english_language?.score));
      dispatch(SetExamDate(output?.english_language?.exam_date));
      dispatch(SetCenter(output?.english_language?.center));
      if (!engLang?.certificate?.name) {
        dispatch(SetCertificate(output?.english_language?.certificate));
      }
      //
      dispatch(SetSourceFund(output?.finance?.source_of_fund));
      //
      if (!edu?.find((x) => x?.institute)?.institute) {
        dispatch(SetEducation(output?.education));
      }
      //
      if (!exp?.length || !exp?.find((e) => e?.title)?.title) {
        dispatch(SetExperience(output?.experience));
      }
    },
  });
  const {
    personal,
    residency,
    nationality,
    english_language,
    finance,
    education,
    experience,
  } = useSelector((state) => state.application_form);

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: StudentUpdate,
    onSuccess: () => {
      refetch();
    },
  });

  const handleSave = async () => {
    try {
      if (!personal?.first_name) {
        return toast.warn(`No ${!personal?.first_name && "first_name"}`);
      }
      const status = await mutateAsync({
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
            level_3: e?.level_3,
            ...(e?.body && { body: e?.body }),
            ...(e?.degree && { degree: e?.degree }),
            institute: e?.institute,
            passing_year: e?.passing_year,
            grade: e?.grade,
          };
        }),
        experience: experience
          ?.filter((f) => f?.title && f?.company)
          ?.map((x) => {
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
        <ProgressBarCircle percentage={me?.profile_complete || 0} size={67}>
          <div>
            <h3 className="text-text-900 font-bold">
              {me?.profile_complete || 0}%
            </h3>
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
              type={"button"}
              disabled={isLoading}
              isLoading={isLoading}
              onClick={handleSave}
              className={"mx-auto w-full mb-4"}
              text={"Update"}
              icon={
                <span className="material-icons-outlined">trending_flat</span>
              }
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpUpdateForm;
