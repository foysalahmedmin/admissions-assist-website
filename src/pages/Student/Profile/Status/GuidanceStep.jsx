<<<<<<< HEAD
import Button from "@/components/Buttons/Button";
import ProgressBarLinear from "@/components/ProgressBar/ProgressBarLinear";
import { LuFlag } from "react-icons/lu";
import { Link } from "react-router-dom";

const GuidanceStep = ({ image_url }) => {
=======
/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import Button from "@/components/Buttons/Button";
import ProgressBarLinear from "@/components/ProgressBar/ProgressBarLinear";
import {LuFlag} from "react-icons/lu";
import {useNavigate} from "react-router-dom";

const GuidanceStep = ({ data, image_url }) => {
  const navigation = useNavigate();
>>>>>>> update-project/main
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
<<<<<<< HEAD
              American International University
            </h1>
            <p>
              You have updated your personals information. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem a Ipsum
              has been the industry's standard fu dummy text ever since the
              1500s.
            </p>
=======
              {data?.university?.name} (
              {data?.course?._id ? data?.course?.name : data?.subject?.name})
            </h1>
            <p>{data?.university?.overview?.slice(0, 200) + "...."}</p>
>>>>>>> update-project/main
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-7">
            <div>
              <h3 className="title text-2xl text-primary-500 mb-2">
                Next Step
              </h3>
<<<<<<< HEAD
              <p>Upload English proficiency certificate</p>
=======
              <p>
                {data?.processes?.name} ({data?.processes?.activity})
              </p>
>>>>>>> update-project/main
            </div>
            <div>
              <div className="">
                <ProgressBarLinear
<<<<<<< HEAD
                  percentage={45}
=======
                  percentage={data?.percentage || 0}
>>>>>>> update-project/main
                  strokeSize={8}
                  className={"text"}
                  percentSize={"2rem"}
                >
                  <div className="sm:text-right mb-4">
<<<<<<< HEAD
                    <h3 className="title text-2xl">{45}%</h3>
=======
                    <h3 className="title text-2xl">{data?.percentage || 0}%</h3>
>>>>>>> update-project/main
                    <strong className="title text-sm">
                      Application Completed
                    </strong>
                  </div>
                </ProgressBarLinear>
              </div>
            </div>
          </div>
          <div className="mb-7">
<<<<<<< HEAD
            <p className="bg-[#FFDEDE] text-[#FF2222] inline-flex items-center gap-2 px-4 py-1 rounded-full">
              <LuFlag />
              <span>Passport was not properly uploated</span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link>
              <Button
                text={"Proceed"}
                icon={
                  <span className="material-icons-outlined">trending_flat</span>
                }
                className={"mx-auto"}
              />
            </Link>
            <Link>
              <Button
                text={"Contact Councilor"}
                icon={
                  <span className="material-icons-outlined">trending_flat</span>
                }
                className={"secondary-btn-outline mx-auto"}
              />
            </Link>
=======
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
>>>>>>> update-project/main
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidanceStep;
