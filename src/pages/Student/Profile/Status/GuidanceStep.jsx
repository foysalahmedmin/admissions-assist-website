/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import Button from "@/components/Buttons/Button";
import ProgressBarLinear from "@/components/ProgressBar/ProgressBarLinear";
import {LuFlag} from "react-icons/lu";
import {useNavigate} from "react-router-dom";

const GuidanceStep = ({ data, image_url }) => {
  const navigation = useNavigate();
  return (
    <div className="bg-white p-7 rounded-xl">
      <div className="w-full flex flex-col lg:flex-row items-center gap-7">
        <div className="w-full lg:w-80 h-80 lg:h-[30rem]">
          <img
            className="h-full w-full object-cover object-center rounded-xl"
            src={image_url}
            alt=""
          />
        </div>
        <div className="flex-1 text-left">
          <div className="mb-7">
            <h1 className="title text-2xl mb-2">
              {data?.university?.name} (
              {data?.course?._id ? data?.course?.name : data?.subject?.name})
            </h1>
            <p>{data?.university?.overview?.slice(0, 200) + "...."}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-7">
            <div>
              <h3 className="title text-2xl text-primary-500 mb-2">
                Next Step
              </h3>
              <p>
                {data?.processes?.name} ({data?.processes?.activity})
              </p>
            </div>
            <div>
              <div className="">
                <ProgressBarLinear
                  percentage={data?.percentage || 0}
                  strokeSize={8}
                  className={"text"}
                  percentSize={"2rem"}
                >
                  <div className="sm:text-right mb-4">
                    <h3 className="title text-2xl">{data?.percentage || 0}%</h3>
                    <strong className="title text-sm">
                      Application Completed
                    </strong>
                  </div>
                </ProgressBarLinear>
              </div>
            </div>
          </div>
          <div className="mb-7">
            {data?.processes?.is_declined && (
              <p className="bg-[#FFDEDE] text-[#FF2222] inline-flex items-center gap-2 px-4 py-1 rounded-full">
                <LuFlag />
                <span>{data?.processes?.declined_reason}</span>
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              text={"Proceed"}
              onClick={() => {
                navigation("/application");
              }}
              icon={
                <span className="material-icons-outlined">trending_flat</span>
              }
              className={"mx-auto"}
            />
            <Button
              onClick={() => {
                navigation("/chat_system/chat");
              }}
              text={"Contact Councilor"}
              icon={
                <span className="material-icons-outlined">trending_flat</span>
              }
              className={"secondary-btn-outline mx-auto"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidanceStep;
