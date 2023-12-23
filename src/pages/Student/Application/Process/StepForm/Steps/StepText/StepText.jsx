/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import Table from "@/pages/Student/Application/Process/StepForm/Steps/StepText/Table/Table.jsx";
import Button from "@/components/Buttons/Button.jsx";
import FAQ from "@/pages/Student/Application/Process/StepForm/Steps/FAQ/FAQ.jsx";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {
  fetchStepStatus,
  submitAProcess,
  updateASubmission,
} from "@/pages/Student/Application/requests/applicationApis.js";
import {SetLists} from "@/redux/submissionSlice/submissionSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {Tooltip} from "react-tooltip";

const StepText = ({ info }) => {
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
  const { data: status } = useQuery({
    queryKey: ["step_status", application, processes, sl],
    queryFn: () => fetchStepStatus(application, processes, sl),
    onSuccess: (output) => {
      dispatch(SetLists([]));
    },
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
          <h1 className="title text-2xl">{info?.activity}</h1>
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
          {status?._id ? (
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
          ) : (
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
      </div>
      <FAQ data={info?.faqs} title={info?.name} />
    </div>
  );
};

export default StepText;
