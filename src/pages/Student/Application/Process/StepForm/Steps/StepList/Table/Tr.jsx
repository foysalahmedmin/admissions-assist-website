/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import React, {useState} from "react";
import {LuCheck, LuDownload, LuFileQuestion, LuUpload} from "react-icons/lu";
import Instruction from "@/pages/Student/Application/Process/StepForm/Steps/Instruction/Instruction.jsx";
import {useDispatch, useSelector} from "react-redux";
import {SetLists} from "@/redux/submissionSlice/submissionSlice.js";
import {fileToBase64} from "@/helpers/toBase64.js";
import {useQuery} from "react-query";
import {fetchStepStatus} from "@/pages/Student/Application/requests/applicationApis.js";
import moment from "moment";
import useDownloader from "react-use-downloader";
import {urls} from "@/apis/config/urls.js";

// eslint-disable-next-line react/prop-types
const Tr = ({ data, instruction, index }) => {
  const { download } = useDownloader();
  const dispatch = useDispatch();
  const { application, processes, sl, lists } = useSelector(
    (state) => state?.submission
  );

  const { data: status } = useQuery({
    queryKey: ["step_status", application, processes, sl],
    queryFn: () => fetchStepStatus(application, processes, sl),
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChange = (idx, inputName, newValue) => {
    const updatedProcess = [...lists];
    updatedProcess[idx] = {
      ...updatedProcess[idx],
      [inputName]: newValue,
      sl: data?.sl,
    };
    dispatch(SetLists(updatedProcess));
  };

  const handleFileInputChange = async (idx, e, name) => {
    try {
      const file = await fileToBase64(e.target.files[0]);
      handleChange(idx, name, file);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <tr className="odd:bg-white even:bg-slate-50">
        <td className=" text-left px-4 py-2">
          <span className="w-60">
            {data?.list} {data?.isRequired && `(Required)`}
          </span>
        </td>
        <td className="text-left px-4 py-2">
          <span className="text-primary-500">
            {data?.file_format ? data?.file_format : "-"}
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
            title={data?.list}
            instruction={instruction}
          />
        </td>
        <td className="text-left px-4 py-2">
          <div className="flex gap-2 items-center justify-start">
            {data?.type === "Text" && (
              <textarea
                className="py-1 px-4 text-sm rounded-xl outline-none border focus-within:border-primary-500"
                disabled={status?.is_approved}
                value={lists?.find((x, i) => i === index)?.text}
                onChange={(e) => handleChange(index, "text", e.target.value)}
                rows="2"
                placeholder="Start writing here"
              />
            )}
            {data?.type === "Text with Attachment" && (
              <div className="flex gap-2 items-center justify-center">
                <textarea
                  className="py-1 px-4 text-sm rounded-xl outline-none border focus-within:border-primary-500"
                  disabled={status?.is_approved}
                  value={lists?.find((x, i) => i === index)?.text}
                  onChange={(e) => handleChange(index, "text", e.target.value)}
                  rows="2"
                  placeholder="Start writing here"
                />
                {!status?._id && (
                  <label
                    htmlFor={`attachment_${index}`}
                    className="h-7 w-7 rounded-full flex items-center justify-center bg-green-500 text-white animate-pop active:scale-95"
                  >
                    {!lists?.find((x, i) => i === index)?.attachment ? (
                      <LuUpload />
                    ) : (
                      <LuCheck />
                    )}

                    <input
                      id={`attachment_${index}`}
                      onChange={async (e) =>
                        await handleFileInputChange(index, e, "attachment")
                      }
                      className="hidden"
                      type="file"
                    />
                  </label>
                )}
                {status?._id && (
                  <label
                    htmlFor={`attachment_${index}`}
                    className="h-7 w-7 rounded-full flex items-center justify-center bg-green-500 text-white animate-pop active:scale-95"
                  >
                    {!lists?.find((x, i) => i === index)?.attachment_new ? (
                      <LuUpload />
                    ) : (
                      <LuCheck />
                    )}
                    <input
                      id={`attachment_${index}`}
                      onChange={async (e) =>
                        await handleFileInputChange(index, e, "attachment_new")
                      }
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
                          `${urls?.submission}/${
                            lists?.find((x, i) => i === index)?.attachment
                          }`,
                          lists?.find((x, i) => i === index)?.attachment
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
            {data?.type === "Only Date" && (
              <div className="flex gap-2 items-center justify-center">
                <input
                  className={
                    "flex-1 h-full icon-hidden outline-none p-1 pl-4 pr-4 border rounded-full focus-within:border-primary-500"
                  }
                  disabled={status?.is_approved}
                  type="date"
                  value={moment(
                    new Date(lists?.find((x, i) => i === index)?.date)
                  ).format("yyyy-MM-DD")}
                  onChange={(e) => handleChange(index, "date", e.target.value)}
                />
              </div>
            )}
            {data?.type === "Date With Text" && (
              <div className="flex flex-col gap-2 items-start justify-start">
                <textarea
                  className="py-1 px-4 text-sm rounded-xl outline-none border focus-within:border-primary-500"
                  disabled={status?.is_approved}
                  value={lists?.find((x, i) => i === index)?.text}
                  onChange={(e) => handleChange(index, "text", e.target.value)}
                  rows="2"
                  placeholder="Start writing here"
                />
                <input
                  className={
                    "h-full icon-hidden outline-none p-1 pl-4 pr-4 border rounded-full focus-within:border-primary-500"
                  }
                  type="date"
                  disabled={status?.is_approved}
                  value={moment(
                    new Date(lists?.find((x, i) => i === index)?.date)
                  ).format("yyyy-MM-DD")}
                  onChange={(e) => handleChange(index, "date", e.target.value)}
                />
              </div>
            )}
            {data?.type === "Date With Text and Attachment" && (
              <div className="flex flex-col gap-2 items-start justify-center">
                <textarea
                  className="py-1 px-4 text-sm rounded-xl outline-none border focus-within:border-primary-500"
                  disabled={status?.is_approved}
                  value={lists?.find((x, i) => i === index)?.text}
                  onChange={(e) => handleChange(index, "text", e.target.value)}
                  rows="2"
                  placeholder="Start writing here"
                />
                <div className="flex gap-2 items-center justify-center">
                  <input
                    className={
                      "flex-1 h-full icon-hidden outline-none p-1 pl-4 pr-4 border rounded-full focus-within:border-primary-500"
                    }
                    type="date"
                    disabled={status?.is_approved}
                    value={moment(
                      new Date(lists?.find((x, i) => i === index)?.date)
                    ).format("yyyy-MM-DD")}
                    onChange={(e) =>
                      handleChange(index, "date", e.target.value)
                    }
                  />
                  {!status?._id && (
                    <label
                      htmlFor={`attachment_${index}`}
                      className="h-7 w-7 rounded-full flex items-center justify-center bg-green-500 text-white animate-pop active:scale-95"
                    >
                      {!lists?.find((x, i) => i === index)?.attachment ? (
                        <LuUpload />
                      ) : (
                        <LuCheck />
                      )}
                      <input
                        id={`attachment_${index}`}
                        onChange={(e) =>
                          handleFileInputChange(index, e, "attachment")
                        }
                        className="hidden"
                        type="file"
                      />
                    </label>
                  )}
                  {status?._id && (
                    <label
                      htmlFor={`attachment_${index}`}
                      className="h-7 w-7 rounded-full flex items-center justify-center bg-green-500 text-white animate-pop active:scale-95"
                    >
                      {!lists?.find((x, i) => i === index)?.attachment_new ? (
                        <LuUpload />
                      ) : (
                        <LuCheck />
                      )}
                      <input
                        id={`attachment_${index}`}
                        onChange={(e) =>
                          handleFileInputChange(index, e, "attachment_new")
                        }
                        className="hidden"
                        type="file"
                      />
                    </label>
                  )}
                  {status?._id && (
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          download(
                            `${urls?.submission}/${
                              lists?.find((x, i) => i === index)?.attachment
                            }`,
                            lists?.find((x, i) => i === index)?.attachment
                          )
                        }
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
