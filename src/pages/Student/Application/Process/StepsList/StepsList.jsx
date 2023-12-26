/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {useDispatch, useSelector} from "react-redux";
import {SetStepTab} from "@/redux/processSlice/processSlice.js";
import {
    SetAttachment,
    SetAttachmentNew,
    SetDate,
    SetProcesses,
    SetSl,
    SetText,
} from "@/redux/submissionSlice/submissionSlice.js";

// eslint-disable-next-line react/prop-types
const StepsList = ({ steps, setIsFormShow }) => {
  const dispatch = useDispatch();
  const { stepTab } = useSelector((state) => state?.processes);
  return (
    <div>
      <div className="mb-12">
        <h3 className="title text-3xl">Your Steps</h3>
      </div>
      <ul className="flex flex-col gap-4">
        {steps?.length > 0 &&
          steps?.map((step, i) => (
            <li
              key={i}
              onClick={() => {
                // setStepTab(step);
                dispatch(SetStepTab(step));
                dispatch(SetProcesses(step?._id));
                dispatch(SetSl(step?.sl));
                dispatch(SetText(""));
                dispatch(SetDate(""));
                dispatch(SetAttachment(""));
                dispatch(SetAttachmentNew(""));
                // dispatch(SetResetSubmission());
                setIsFormShow(true);
              }}
              className={`${
                step?.sl === stepTab?.sl ? "text-white" : "bg-opacity-5"
              } title p-4 flex items-center gap-7 justify-between rounded bg-primary-500 cursor-pointer`}
            >
              <span>{step?.name}</span>
              {step?.status === "completed" ? (
                <div className="h-7 w-7 bg-white text-primary-500 rounded-full flex items-center justify-center">
                  <span
                    className={`material-icons-outlined !text-base transition-all`}
                  >
                    done
                  </span>
                </div>
              ) : (
                <div className="h-7 w-7 bg-white text-primary-500 rounded-full flex items-center justify-center">
                  <span
                    className={`material-icons-outlined !text-base transition-all`}
                  >
                    arrow_forward_ios
                  </span>
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default StepsList;
