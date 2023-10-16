import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import Button from "@/components/Buttons/Button";
import { BiAward, BiBookOpen, BiHistory, BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import AvailableCourseModal from "../AvailableCourseModal/AvailableCourseModal";
import { useState } from "react";

const Banner = () => {
  const [isAvailableCourseModalOpen, setIsAvailableCourseModalOpen] =
    useState(false);
  return (
    <>
      <BackgroundLayer image_url={"/background/application-banner.png"}>
        <div className="container mx-auto pt-7 text-white">
          <div className="flex items-end gap-7">
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <span className="material-icons-outlined">arrow_back</span>
                <div className="flex items-center gap-2">
                  <span>
                    <Link to={"/search"}>Search</Link>
                  </span>
                  <span>/</span>
                  <span>
                    <Link to={"/course"}>Course</Link>
                  </span>
                  :<span>Engineering</span>
                </div>
              </div>
              <div className="py-14">
                <div className="mb-12">
                  <h1 className="title text-3xl lg:5xl text-white mb-4">
                    University of Oxford
                  </h1>
                  <div className="flex flex-col lg:flex-row  items-start gap-7">
                    <div className="flex gap-2">
                      <div>
                        <BiAward className="text-xl" />
                      </div>
                      <div>
                        <h5 className="text-sm ">Ranking</h5>
                        {(
                          <div className="text-sm flex gap-1">
                            <span>103</span>
                            <div className="text-[.5rem] -mt-1 relative">
                              th
                            </div>
                          </div>
                        ) || (
                          <p className="text-sm text-placeholder">
                            No information for this filed yet
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <BiTimeFive className="text-xl" />
                      </div>
                      <div>
                        <h5 className="text-sm ">Duration</h5>
                        {<p className="text-sm">2 Years</p> || (
                          <p className="text-sm text-placeholder">
                            No information for this filed yet
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <BiHistory className="text-xl" />
                      </div>
                      <div>
                        <h5 className="text-sm ">Session</h5>
                        {<p className="text-sm">2024-2025</p> || (
                          <p className="text-sm text-placeholder">
                            No information for this filed yet
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <BiBookOpen className="text-xl" />
                      </div>
                      <div>
                        <h5 className="text-sm ">Study Mode</h5>
                        {<p className="text-sm">Full Time</p> || (
                          <p className="text-sm text-placeholder">
                            No information for this filed yet
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Button
                    onClick={() =>
                      setIsAvailableCourseModalOpen(true)
                    }
                    text={"2 Course options available"}
                  />
                  <AvailableCourseModal
                    isOpen={isAvailableCourseModalOpen}
                    setIsOpen={setIsAvailableCourseModalOpen}
                  />
                </div>
              </div>
              <div>
                <nav>
                  <ul className="w-full flex flex-wrap justify-center lg:justify-start">
                    <li className="border border-b-0 hover:bg-white hover:text-primary text-center flex-1 shrink-0">
                      <a
                        className={`px-4 py-2 whitespace-nowrap inline-block`}
                        href="#course_summary"
                      >
                        Course summary
                      </a>
                    </li>
                    <li className="border border-b-0 hover:bg-white hover:text-primary text-center flex-1 shrink-0">
                      <a
                        className={`px-4 py-2 whitespace-nowrap inline-block`}
                        href="#how_to_apply"
                      >
                        How to apply
                      </a>
                    </li>
                    <li className="border border-b-0 hover:bg-white hover:text-primary text-center flex-1 shrink-0">
                      <a
                        className={`px-4 py-2 whitespace-nowrap inline-block`}
                        href="#entry_requirements"
                      >
                        Entry requirements
                      </a>
                    </li>
                    <li className="border border-b-0 hover:bg-white hover:text-primary text-center flex-1 shrink-0">
                      <a
                        className={`px-4 py-2 whitespace-nowrap inline-block`}
                        href="#fees_and_funding"
                      >
                        Fees and funding
                      </a>
                    </li>
                    <li className="border border-b-0 hover:bg-white hover:text-primary text-center flex-1 shrink-0">
                      <a
                        className={`px-4 py-2 whitespace-nowrap inline-block`}
                        href="#career_opportunity "
                      >
                        Career opportunity
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-[25rem]"></div>
            </div>
          </div>
        </div>
      </BackgroundLayer>
    </>
  );
};

export default Banner;
