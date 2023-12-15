import Button from "@/components/Buttons/Button";
import { useState } from "react";
import EnrollModal from "../EnrollRequireModal/EnrollRequireModal";
import { urls } from "@/apis/config/urls.js";
import { useNavigate } from "react-router-dom";

const CourseSummary = ({ info }) => {
  const navigation = useNavigate();
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const status = JSON.parse(localStorage.getItem("aa_website"));
  console.log(status);
  return (
    <section className="py-7" id="course_summary">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-7 lg:gap-12 mb-7">
          <div className="flex-1 flex items-center">
            <div className="max-w-4xl">
              <h2 className="title text-3xl mb-7">
                {info?.isCourse ? "Course" : "Subject"} Summary
              </h2>
              <p>
                {info?.isCourse
                  ? info?.course_details?.summary
                  : info?.subject?.summary}
              </p>
            </div>
          </div>
          <div>
            <div className="w-full lg:w-[25rem] relative lg:-mt-[15.75rem]">
              <div className="bg-[#F4FAFA] rounded-3xl lg:rounded-t-3xl overflow-hidden shadow-lg lg:p-4">
                <div className="h-52 relative">
                  <img
                    className="h-full w-full object-cover object-center lg:rounded-t-2xl"
                    src={`${urls?.university_cover}/${info?.university?.cover}`}
                    alt=""
                  />
                </div>
                <div className="flex flex-row-reverse flex-wrap lg:flex-col justify-center gap-7 px-7">
                  <div className="flex-shrink-0">
                    <img
                      className="h-40 w-40 rounded-xl object-contain object-center shadow relative mx-auto -mt-20 z-10"
                      src={`${urls?.university_logo}/${info?.university?.logo}`}
                      alt=""
                    />
                  </div>
                  <div className="text-center sm:text-right lg:text-center">
                    <div>
                      <h5 className="title mb-2">{info?.university?.name}</h5>
                      <p>{info?.university?.campuses[0]?.name}</p>
                      <p>{info?.university?.campuses[0]?.location}</p>
                    </div>
                  </div>
                </div>
                <div className="py-7 px-7">
                  <Button
                    onClick={() => {
                      if (status?.accessToken) {
                        setIsEnrollModalOpen(true);
                      } else {
                        navigation("/authentication/sign_up");
                      }
                    }}
                    className={"mx-auto w-full"}
                    text={"Enroll Now"}
                    icon={
                      <span className="material-icons-outlined">
                        trending_flat
                      </span>
                    }
                  />
                  <EnrollModal
                    isOpen={isEnrollModalOpen}
                    setIsOpen={setIsEnrollModalOpen}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-7">
          <h3 className="title text-2xl mb-7">Modules</h3>
          <p className="mb-7">
            {info?.isCourse
              ? info?.course_details?.modules?.title
              : info?.subject?.modules?.title}
          </p>
          <ul className="mb-7">
            {info?.isCourse
              ? info?.course_details?.modules?.items?.map((x, i) => (
                  <li key={i} className="">
                    <span className="text-2xl">●</span> {x}
                  </li>
                ))
              : info?.subject?.modules?.items?.map((x, i) => (
                  <li key={i} className="">
                    <span className="text-2xl">●</span> {x}
                  </li>
                ))}
          </ul>
        </div>
        <div>
          <h3 className="title text-2xl mb-7">Assessment method</h3>
          <ul>
            {info?.isCourse
              ? info?.course_details?.assessment_method?.map((x, i) => (
                  <li key={i} className="">
                    <span className="text-2xl">●</span> {x}
                  </li>
                ))
              : info?.subject?.assessment_method?.map((x, i) => (
                  <li key={i} className="">
                    <span className="text-2xl">●</span> {x}
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseSummary;
