import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
<<<<<<< HEAD
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
=======
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
>>>>>>> update-project/main
                </span>
                <span>/</span>
                <span>
                  <Link to={"/university"}>University</Link>
                </span>
<<<<<<< HEAD
                :<span>University of Oxford</span>
=======
                :<span>{info?.name}</span>
>>>>>>> update-project/main
              </div>
            </div>
            <div className="py-14">
              <div>
                <h1 className="title text-3xl lg:5xl text-white mb-4">
<<<<<<< HEAD
                  University of Oxford
=======
                  {info?.name}
>>>>>>> update-project/main
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
<<<<<<< HEAD
                          <span>103</span>
=======
                          <span>{info?.ranking}</span>
>>>>>>> update-project/main
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
<<<<<<< HEAD
                      {(
                        <p className="text-sm">
                          Oxford OX1 2JD, United Kingdom
                        </p>
                      ) || (
=======
                      {info?.campuses?.length > 0 ? (
                        info?.campuses?.map((x, i) => (
                          <p key={i} className="text-sm max-w-[300px]">
                            {x?.location}
                          </p>
                        ))
                      ) : (
>>>>>>> update-project/main
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
<<<<<<< HEAD
                      {<p className="text-sm">https://www.ox.ac.uk/</p> || (
                        <p className="text-sm text-text-100">
                          No information for this filed yet
                        </p>
                      )}
=======
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
>>>>>>> update-project/main
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <nav>
<<<<<<< HEAD
                <ul className="w-full flex flex-wrap justify-center lg:justify-start">
                  <li className="border border-b-0 hover:bg-white hover:text-primary-500 text-center">
=======
                <ul className="max-w-[550px] flex flex-wrap justify-center lg:justify-start text-xs md:text-base">
                  <li className="border border-b-0 bg-background text-primary-500 hover:bg-white hover:text-primary-500 text-center flex-1 shrink-0">
>>>>>>> update-project/main
                    <a
                      className={`px-4 py-2 whitespace-nowrap inline-block`}
                      href="#overview"
                    >
                      Overview
                    </a>
                  </li>
<<<<<<< HEAD
                  <li className="border border-b-0 hover:bg-white hover:text-primary-500 text-center">
=======
                  <li className="border border-b-0 text-white hover:bg-white hover:text-primary-500 text-center flex-1 shrink-0">
>>>>>>> update-project/main
                    <a
                      className={`px-4 py-2 whitespace-nowrap inline-block`}
                      href="#scholarship"
                    >
                      Scholarship
                    </a>
                  </li>
<<<<<<< HEAD
                  <li className="border border-b-0 hover:bg-white hover:text-primary-500 text-center">
=======
                  <li className="border border-b-0 text-white hover:bg-white hover:text-primary-500 text-center flex-1 shrink-0">
>>>>>>> update-project/main
                    <a
                      className={`px-4 py-2 whitespace-nowrap inline-block`}
                      href="#courses"
                    >
                      Courses
                    </a>
                  </li>
<<<<<<< HEAD
=======
                  <li className="border border-b-0 text-white hover:bg-white hover:text-primary-500 text-center flex-1 shrink-0">
                    <a
                      className={`px-4 py-2 whitespace-nowrap inline-block`}
                      href="#campuses"
                    >
                      Campuses
                    </a>
                  </li>
>>>>>>> update-project/main
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
