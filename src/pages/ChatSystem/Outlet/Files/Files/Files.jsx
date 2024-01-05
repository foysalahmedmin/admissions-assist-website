/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import {BsFiles} from "react-icons/bs";
import {useQuery} from "react-query";
import {fetchMyFiles} from "@/pages/ChatSystem/requests/chatSystemApis.js";
import moment from "moment";
import useDownloader from "react-use-downloader";
import {urls} from "@/apis/config/urls.js";

const Files = () => {
  const { download } = useDownloader();
  const { data: files } = useQuery({
    queryKey: ["my_files"],
    queryFn: () => fetchMyFiles(),
  });
  return (
    <div>
      <div className="h-14 px-[3.5vw] lg:pl-7 lg:pr-[3.5vw] border-b flex justify-between items-center">
        <div>
          <h3 className="title text-2xl">Files</h3>
        </div>
        {/*<div className="col-span-2 ml-auto">*/}
        {/*  <Button*/}
        {/*    className={"h-8 text-sm px-4"}*/}
        {/*    text={"New"}*/}
        {/*    icon={*/}
        {/*      <span className="material-icons-outlined !text-base">add</span>*/}
        {/*    }*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
      <div className="px-[3.5vw] lg:pl-7 lg:pr-[3.5vw] py-4 grid grid-cols-1 overflow-x-auto">
        <table className="w-full text-text-900">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 font-normal text-text-900">
                Files
              </th>
              <th className="text-left py-2 px-7 font-normal text-text-900">
                Opened
              </th>
              <th className="text-left py-2 font-normal text-text-900">
                Owner
              </th>
            </tr>
          </thead>
          <tbody>
            {files?.map((f, i) => (
              <tr key={i} className="border-b">
                <td className="py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full text-xl bg-input text-secondary-500">
                      <BsFiles />
                    </div>
                    <div
                      onClick={() =>
                        download(`${urls?.message}/${f?.content}`, f?.content)
                      }
                      className="whitespace-nowrap cursor-pointer"
                    >
                      {f?.content}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-7 whitespace-nowrap">
                  {moment(new Date(f?.createdAt)).format("DD MMM, yyyy")}
                </td>
                <td className="py-4 whitespace-nowrap">Me</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Files;
