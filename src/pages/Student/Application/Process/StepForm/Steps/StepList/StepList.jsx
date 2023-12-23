/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import Table from "@/pages/Student/Application/Process/StepForm/Steps/StepList/Table/Table.jsx";
import Button from "@/components/Buttons/Button.jsx";
import FAQ from "@/pages/Student/Application/Process/StepForm/Steps/FAQ/FAQ.jsx";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {
  fetchStepStatus,
  submitAProcess,
  updateASubmission,
} from "@/pages/Student/Application/requests/applicationApis.js";
import {SetLists} from "@/redux/submissionSlice/submissionSlice.js";
import {Tooltip} from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const StepList = ({ info }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { application, processes, sl, text, attachment, date, lists } =
    useSelector((state) => state?.submission);

  const { data: status } = useQuery({
    queryKey: ["step_status", application, processes, sl],
    queryFn: () => fetchStepStatus(application, processes, sl),
    onSuccess: (output) => {
      if (
        application === output?.application &&
        processes === output?.processes &&
        sl === output?.sl &&
        lists?.length === 0
      ) {
        dispatch(SetLists(output?.lists));
      } else if (
        application !== output?.application &&
        processes !== output?.processes &&
        sl !== output?.sl
      ) {
        dispatch(SetLists(output?.lists));
      }
      // dispatch(SetLists(output?.lists));
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
      if (
        !application ||
        !processes ||
        !sl ||
        lists?.filter((x) => x?.sl && (x?.text || x?.date || x?.attachment))
          ?.length !== info?.lists?.length
      ) {
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
        lists: lists?.filter(
          (x) => x?.sl && (x?.text || x?.date || x?.attachment)
        ),
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
        text,
        attachment,
        date,
        lists: lists
          ?.filter(
            (x) =>
              x?.sl &&
              (x?.text || x?.date || x?.attachment || x?.attachment_new)
          )
          ?.map((f) => {
            return {
              _id: f?._id,
              sl: f?.sl,
              ...(f?.text && { text: f?.text }),
              ...(f?.date && { date: f?.date }),
              ...(f?.attachment_new && { attachment_new: f?.attachment_new }),
              ...(f?.attachment && { attachment: f?.attachment }),
            };
          }),
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
          <Table lists={info?.lists} instruction={info?.instructions} />
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

export default StepList;
