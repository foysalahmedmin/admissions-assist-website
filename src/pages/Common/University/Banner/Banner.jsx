import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import {BiAward, BiMap, BiTime, BiWorld} from "react-icons/bi";
import {Link, useNavigate} from "react-router-dom";
import {urls} from "@/apis/config/urls.js";

// eslint-disable-next-line react/prop-types
const Banner = ({ info }) => {
  const navigation = useNavigate();
  return (
    <>
      <BackgroundLayer
        image_url={`${urls?.university_cover}/${info?.cover?.replace(
          / /g,
          "%20"
        )}`}
      >
        <div>
          <div className="container mx-auto pt-7 text-white">
            <div className="flex items-center gap-4">
              <span
                onClick={() => navigation("/search/universities")}
                className="material-icons-outlined cursor-pointer"
              >
                arrow_back
              </span>
              <div className="flex items-center gap-2">
                <span>
                  <Link to={"/search/universities"}>Search</Link>
                </span>
                <span>/</span>
                <span>
                  <Link to={"/university"}>University</Link>
                </span>
                :<span>{info?.name}</span>
              </div>
            </div>
            <div className="py-14">
              <div>
                <h1 className="title text-3xl lg:5xl text-white mb-4">
                  {info?.name}
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
                          <span>{info?.ranking}</span>
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
                      {info?.campuses?.length > 0 ? (
                        info?.campuses?.map((x, i) => (
                          <p key={i} className="text-sm max-w-[300px]">
                            {x?.location}
                          </p>
                        ))
                      ) : (
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
                      <p className="text-sm">{info?.website}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <BiTime className="text-xl" />
                    </div>
                    <div>
                      <h5 className="text-sm ">Session</h5>
                      <p className="text-sm">
                        {info?.session?.session} ({info?.session?.year})
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <nav>
                <ul className="max-w-[550px] flex flex-wrap justify-center lg:justify-start text-xs md:text-base">
                  <li className="border border-b-0 bg-background text-primary-500 hover:bg-white hover:text-primary-500 text-center flex-1 shrink-0">
                    <a
                      className={`px-4 py-2 whitespace-nowrap inline-block`}
                      href="#overview"
                    >
                      Overview
                    </a>
                  </li>
                  <li className="border border-b-0 text-white hover:bg-white hover:text-primary-500 text-center flex-1 shrink-0">
                    <a
                      className={`px-4 py-2 whitespace-nowrap inline-block`}
                      href="#scholarship"
                    >
                      Scholarship
                    </a>
                  </li>
                  <li className="border border-b-0 text-white hover:bg-white hover:text-primary-500 text-center flex-1 shrink-0">
                    <a
                      className={`px-4 py-2 whitespace-nowrap inline-block`}
                      href="#courses"
                    >
                      Courses
                    </a>
                  </li>
                  <li className="border border-b-0 text-white hover:bg-white hover:text-primary-500 text-center flex-1 shrink-0">
                    <a
                      className={`px-4 py-2 whitespace-nowrap inline-block`}
                      href="#campuses"
                    >
                      Campuses
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
