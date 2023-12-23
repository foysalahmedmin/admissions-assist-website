/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import React, {useState} from "react";
import {LuCheck, LuDownload, LuFileQuestion, LuUpload} from "react-icons/lu";
import Instruction from "@/pages/Student/Application/Process/StepForm/Steps/Instruction/Instruction.jsx";
import {useDispatch, useSelector} from "react-redux";
import {SetAttachment, SetAttachmentNew, SetDate, SetText,} from "@/redux/submissionSlice/submissionSlice.js";
import moment from "moment";
import {useQuery} from "react-query";
import {fetchStepStatus} from "@/pages/Student/Application/requests/applicationApis.js";
import {fileToBase64} from "@/helpers/toBase64.js";
import {urls} from "@/apis/config/urls.js";
import useDownloader from "react-use-downloader";

const Tr = ({ file_format, is_require, activity, type, instruction }) => {
  const { download } = useDownloader();
  const dispatch = useDispatch();
  const { application, processes, sl, text, date, attachment, attachment_new } =
    useSelector((state) => state?.submission);
  const { data: status } = useQuery({
    queryKey: ["step_status", application, processes, sl],
    queryFn: () => fetchStepStatus(application, processes, sl),
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleFileInputChange = async (e, isUpdate) => {
    try {
      const file = await fileToBase64(e.target.files[0]);
      if (isUpdate) {
        dispatch(SetAttachmentNew(file));
      } else {
        dispatch(SetAttachment(file));
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <tr className="odd:bg-white even:bg-slate-50">
        <td className=" text-left px-4 py-2">
          <span className="w-60">
            {activity} {is_require && `(Required)`}
          </span>
        </td>
        <td className="text-left px-4 py-2">
          <span className="text-primary-500">
            {file_format ? file_format : "-"}
          </span>
        </td>
        <td className="text-left px-4 py-2">
          <button
            onClick={() => setIsModalOpen(true)}
            type="button"
            className="h-7 w-7 mx-auto rounded-full flex items-center justify-center bg-navyblue-900 text-white animate-pop active:scale-95"
          >
            <LuFileQuestion />
          </button>
          <Instruction
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            title={activity}
            instruction={instruction}
          />
        </td>
        <td className="text-left px-4 py-2">
          <div className="flex gap-2 items-center justify-start">
            {type === "Text" && (
              <textarea
                className="py-1 px-4 text-sm rounded-xl outline-none border focus-within:border-primary-500"
                value={text || status?.text}
                onChange={(e) => dispatch(SetText(e.target.value))}
                rows="2"
                placeholder="Start writing here"
              />
            )}
            {type === "Text with Attachment" && (
              <div className="flex gap-2 items-center justify-center">
                <textarea
                  className="py-1 px-4 text-sm rounded-xl outline-none border focus-within:border-primary-500"
                  value={text || status?.text}
                  onChange={(e) => dispatch(SetText(e.target.value))}
                  rows="2"
                  placeholder="Start writing here"
                />
                {!status?._id && (
                  <label
                    htmlFor="attachment"
                    className="h-7 w-7 rounded-full flex items-center justify-center bg-green-500 text-white animate-pop active:scale-95"
                  >
                    {!attachment ? <LuUpload /> : <LuCheck />}
                    <input
                      id="attachment"
                      onChange={(e) => handleFileInputChange(e, false)}
                      className="hidden"
                      type="file"
                    />
                  </label>
                )}
                {status?._id && (
                  <label
                    htmlFor="attachment"
                    className="h-7 w-7 rounded-full flex items-center justify-center bg-green-500 text-white animate-pop active:scale-95"
                  >
                    {!attachment_new ? <LuUpload /> : <LuCheck />}
                    <input
                      id="attachment"
                      onChange={(e) => handleFileInputChange(e, true)}
                      className="hidden"
                      type="file"
                    />
                  </label>
                )}
                {status?._id && (
                  <div>
                    <button
                      onClick={() =>
                        download(
                          `${urls?.submission}/${status?.attachment}`,
                          status?.attachment
                        )
                      }
                      type="button"
                      className="h-7 w-7 rounded-full flex items-center justify-center bg-primary-500 text-white animate-pop active:scale-95"
                    >
                      <LuDownload />
                    </button>
                  </div>
                )}
              </div>
            )}
            {type === "Only Date" && (
              <div className="flex gap-2 items-center justify-center">
                <input
                  className={
                    "flex-1 h-full icon-hidden outline-none p-1 pl-4 pr-4 border rounded-full focus-within:border-primary-500"
                  }
                  type="date"
                  value={
                    date
                      ? moment(new Date(date)).format("yyyy-MM-DD")
                      : moment(new Date(status?.date)).format("yyyy-MM-DD")
                  }
                  onChange={(e) => dispatch(SetDate(e.target.value))}
                />
              </div>
            )}
            {type === "Date With Text" && (
              <div className="flex flex-col gap-2 items-start justify-start">
                <textarea
                  className="py-1 px-4 text-sm rounded-xl outline-none border focus-within:border-primary-500"
                  value={text || status?.text}
                  onChange={(e) => dispatch(SetText(e.target.value))}
                  rows="2"
                  placeholder="Start writing here"
                />
                <input
                  className={
                    "h-full icon-hidden outline-none p-1 pl-4 pr-4 border rounded-full focus-within:border-primary-500"
                  }
                  type="date"
                  value={
                    date
                      ? moment(new Date(date)).format("yyyy-MM-DD")
                      : moment(new Date(status?.date)).format("yyyy-MM-DD")
                  }
                  onChange={(e) => dispatch(SetDate(e.target.value))}
                />
              </div>
            )}
            {type === "Date With Text and Attachment" && (
              <div className="flex flex-col gap-2 items-center justify-center">
                <textarea
                  className="py-1 px-4 text-sm rounded-xl outline-none border focus-within:border-primary-500"
                  value={text || status?.text}
                  onChange={(e) => dispatch(SetText(e.target.value))}
                  rows="2"
                  placeholder="Start writing here"
                />
                <div className="flex gap-2 items-center justify-center">
                  <input
                    className={
                      "flex-1 h-full icon-hidden outline-none p-1 pl-4 pr-4 border rounded-full focus-within:border-primary-500"
                    }
                    type="date"
                    value={
                      date
                        ? moment(new Date(date)).format("yyyy-MM-DD")
                        : moment(new Date(status?.date)).format("yyyy-MM-DD")
                    }
                    onChange={(e) => dispatch(SetDate(e.target.value))}
                  />
                  {!status?._id && (
                    <label
                      htmlFor="attachment"
                      className="h-7 w-7 rounded-full flex items-center justify-center bg-green-500 text-white animate-pop active:scale-95"
                    >
                      {!attachment ? <LuUpload /> : <LuCheck />}
                      <input
                        id="attachment"
                        onChange={(e) => handleFileInputChange(e, false)}
                        className="hidden"
                        type="file"
                      />
                    </label>
                  )}
                  {status?._id && (
                    <label
                      htmlFor="attachment"
                      className="h-7 w-7 rounded-full flex items-center justify-center bg-green-500 text-white animate-pop active:scale-95"
                    >
                      {!attachment_new ? <LuUpload /> : <LuCheck />}
                      <input
                        id="attachment"
                        onChange={(e) => handleFileInputChange(e, true)}
                        className="hidden"
                        type="file"
                      />
                    </label>
                  )}
                  {status?._id && (
                    <div>
                      <button
                        onClick={() =>
                          download(
                            `${urls?.submission}/${status?.attachment}`,
                            status?.attachment
                          )
                        }
                        type="button"
                        className="h-7 w-7 rounded-full flex items-center justify-center bg-primary-500 text-white animate-pop active:scale-95"
                      >
                        <LuDownload />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </td>
      </tr>
    </>
  );
};

export default Tr;
