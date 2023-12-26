/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import Table from "@/pages/Student/Application/Process/StepForm/Steps/StepText/Table/Table.jsx";
import Button from "@/components/Buttons/Button.jsx";
import FAQ from "@/pages/Student/Application/Process/StepForm/Steps/FAQ/FAQ.jsx";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {
  fetchOneApplicationFeedback,
  fetchStepStatus,
  submitAProcess,
  updateASubmission,
} from "@/pages/Student/Application/requests/applicationApis.js";
import {SetLists} from "@/redux/submissionSlice/submissionSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {Tooltip} from "react-tooltip";
import {LuFlag} from "react-icons/lu";
import {useState} from "react";
import FeedbackModal from "@/pages/Student/Application/Process/Feedback/FeedbackModal.jsx";

// eslint-disable-next-line react/prop-types
const StepText = ({ info }) => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const {
    application,
    processes,
    sl,
    text,
    attachment,
    attachment_new,
    date,
    lists,
  } = useSelector((state) => state?.submission);
  const { last_step } = useSelector((state) => state.processes);
  const { data: status } = useQuery({
    queryKey: ["step_status", application, processes, sl],
    queryFn: () => fetchStepStatus(application, processes, sl),
    onSuccess: () => {
      dispatch(SetLists([]));
    },
  });
  const { data: feedback } = useQuery({
    queryKey: ["one_feedback", application],
    queryFn: () => fetchOneApplicationFeedback(application),
    enabled: !!application,
  });
  const { isLoading, mutateAsync } = useMutation({
    mutationFn: submitAProcess,
    onSuccess: () => {
      queryClient.invalidateQueries("step_status");
    },
  });
  const { isLoading: updateLoading, mutateAsync: updateMutate } = useMutation({
    mutationFn: updateASubmission,
    onSuccess: () => {
      queryClient.invalidateQueries("step_status");
    },
  });
  const handleSave = async () => {
    try {
      if (!application || !processes || !sl) {
        return toast.error(
          `${
            (!application && "No application found!") ||
            (!processes && "Please select a process!") ||
            (lists?.filter(
              (x) => x?.sl && (x?.text || x?.date || x?.attachment)
            )?.length !== info?.lists?.length &&
              "please fill up all requirements from this process")
          }`
        );
      }
      const status = await mutateAsync({
        application,
        processes,
        sl,
        text,
        attachment,
        date,
        lists: [],
      });
      toast.success(status?.message);
      // dispatch(SetResetSubmission());
    } catch (error) {
      toast.error(error?.response?.data?.error?.message);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await updateMutate({
        id: status?._id,
        application,
        processes,
        sl,
        text: text || status?.text,
        attachment: attachment || status?.attachment,
        attachment_new,
        date: date || status?.date,
      });
      toast.success(response?.message);
      // dispatch(SetResetSubmission());
    } catch (error) {
      toast.error(error?.response?.data?.error?.message);
    }
  };
  return (
    <div>
      <div>
        <div>
          <div className="flex flex-wrap gap-4 items-center">
            <h1 className="title text-2xl max-w-[24rem]">{info?.activity}</h1>
            {status?.is_declined && (
              <p className="bg-[#FFDEDE] text-[#FF2222] inline-flex items-center gap-2 px-4 py-1 rounded-full">
                <LuFlag />
                <span>{status?.declined_reason}</span>
              </p>
            )}
          </div>
        </div>
        <hr className="mt-4 mb-7" />
        <div className="mb-7">
          <Table
            type={info?.type}
            activity={info?.activity}
            file_format={info?.file_format}
            is_require={info?.is_require}
            instruction={info?.instructions}
          />
        </div>
        <div>
          {!status?._id && (
            <Button
              disabled={isLoading || status?.is_approved}
              isLoading={isLoading}
              onClick={handleSave}
              type={"submit"}
              text={"Save"}
              data-tooltip-id="save-my-tooltip"
              icon={
                <span className="material-icons-outlined">trending_flat</span>
              }
            />
          )}
          {status?._id && !status?.is_approved && (
            <Button
              disabled={updateLoading || status?.is_approved}
              isLoading={updateLoading}
              onClick={handleUpdate}
              type={"submit"}
              text={"Update"}
              data-tooltip-id="update-my-tooltip"
              icon={
                <span className="material-icons-outlined">trending_flat</span>
              }
            />
          )}
          {status?._id &&
            status?.is_approved &&
            last_step === status?.sl &&
            !feedback?._id && (
              <div className="ml-5">
                <span>you have completed all steps, please give us </span>
                <span
                  onClick={() => setIsFeedbackModalOpen(true)}
                  className="text-secondary-500 cursor-pointer"
                >
                  Feedback
                </span>
              </div>
            )}
          {status?._id &&
            status?.is_approved &&
            last_step === status?.sl &&
            feedback?._id && (
              <div className="ml-5">
                <span>Thanks for your valuable </span>
                <span className="text-secondary-500">Feedback</span>
              </div>
            )}
        </div>
        <Tooltip
          id="save-my-tooltip"
          place="right"
          variant="warning"
          content={status?.is_approved && "a councilor approved your documents"}
        />
        <Tooltip
          id="update-my-tooltip"
          place="right"
          variant="warning"
          content={
            status?._id &&
            !status?.is_approved &&
            "waiting for councilor approval, min time you can edit"
          }
        />
        <FeedbackModal
          isOpen={isFeedbackModalOpen}
          setIsOpen={setIsFeedbackModalOpen}
        />
      </div>
      <FAQ data={info?.faqs} title={info?.name} />
    </div>
  );
};

export default StepText;
