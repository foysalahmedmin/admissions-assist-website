import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import { BiAward, BiMap, BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <BackgroundLayer image_url={"/background/application-banner.png"}>
        <div>
          <div className="container mx-auto pt-7 text-white">
            <div className="flex items-center gap-4">
              <span className="material-icons-outlined">arrow_back</span>
              <div className="flex items-center gap-2">
                <span>
                  <Link to={"/search"}>Search</Link>
                </span>
                <span>/</span>
                <span>
                  <Link to={"/university"}>University</Link>
                </span>
                :<span>University of Oxford</span>
              </div>
            </div>
            <div className="py-14">
              <div>
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
                          <div className="text-[.5rem] -mt-1 relative">th</div>
                        </div>
                      ) || (
                        <p className="text-sm text-text-100">
                          No information for this filed yet
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <BiMap className="text-xl" />
                    </div>
                    <div>
                      <h5 className="text-sm ">Location</h5>
                      {(
                        <p className="text-sm">
                          Oxford OX1 2JD, United Kingdom
                        </p>
                      ) || (
                        <p className="text-sm text-text-100">
                          No information for this filed yet
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <BiWorld className="text-xl" />
                    </div>
                    <div>
                      <h5 className="text-sm ">Website</h5>
                      {<p className="text-sm">https://www.ox.ac.uk/</p> || (
                        <p className="text-sm text-text-100">
                          No information for this filed yet
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <nav>
                <ul className="w-full flex flex-wrap justify-center lg:justify-start">
                  <li className="border border-b-0 bg-background text-primary-500 hover:bg-white hover:text-primary-500 text-center">
                    <a
                      className={`px-4 py-2 whitespace-nowrap inline-block`}
                      href="#overview"
                    >
                      Overview
                    </a>
                  </li>
                  <li className="border border-b-0 hover:bg-white hover:text-primary-500 text-center">
                    <a
                      className={`px-4 py-2 whitespace-nowrap inline-block`}
                      href="#scholarship"
                    >
                      Scholarship
                    </a>
                  </li>
                  <li className="border border-b-0 hover:bg-white hover:text-primary-500 text-center">
                    <a
                      className={`px-4 py-2 whitespace-nowrap inline-block`}
                      href="#courses"
                    >
                      Courses
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </BackgroundLayer>
    </>
  );
};

export default Banner;
