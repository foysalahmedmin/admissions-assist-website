import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import { Link } from "react-router-dom";
import profileImg from "@/assets/images/profile.jpg";
import Button from "@/components/Buttons/Button";
import { RiCalendarCheckLine } from "react-icons/ri";
import chat from "@/assets/images/icons/chat-sky-blue.svg";
import madel from "@/assets/images/icons/madel-sky-blue.svg";
import StarRating from "@/components/StarRating/StarRating";

const Banner = () => {
  return (
    <BackgroundLayer image_url={"/background/application-banner.png"}>
      <div className="container mx-auto lg:py-24 py-14">
        <div className="flex items-center justify-between gap-7 lg:gap-12">
          <div className="text-white">
            <h1 className="text-3xl lg:text-5xl title text-white mb-4">
              Application
            </h1>
            <div className="flex items-center gap-4">
              <span className="material-icons-outlined">arrow_back</span>
              <div className="flex items-center gap-2">
                <span>
                  <Link to={"/student"}>Home</Link>
                </span>
                <span>/</span>
                <span>
                  <Link to={"/student"}>Application</Link>
                </span>
                {" : "}
                <span> American International University</span>
              </div>
            </div>
          </div>
          <div>
            <div className="py-12 px-7 bg-white rounded-3xl">
              <div className="flex gap-7">
                <div className="flex-shrink-0 h-20 w-20">
                  <img
                    className="h-full w-full object-cover object-center rounded-full"
                    src={profileImg}
                    alt=""
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-4 mb-7">
                    <div>
                      <h3 className="title text-2xl mb-2">Musa Zain</h3>
                      <button className="py-1 px-4 rounded bg-primary text-white text-sm">
                        <span>Councilor</span>
                      </button>
                    </div>
                    <div>
                      <Button
                        className={"ml-auto"}
                        text={"Book a Session"}
                        icon={<RiCalendarCheckLine className="text-xl" />}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-7 w-7 rounded bg-primary bg-opacity-10 flex items-center justify-center">
                        <img
                          className="h-5 w-5 object-contain object-center"
                          src={chat}
                          alt=""
                        />
                      </div>
                      <div>
                        <h5 className="font-semibold">Students Counselled</h5>
                        {<p className="text-sm text-title">12</p> || (
                          <p className="text-sm text-placeholder">N/A</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-7 w-7 rounded bg-primary bg-opacity-10 flex items-center justify-center">
                        <img
                          className="h-5 w-5 object-contain object-center"
                          src={madel}
                          alt=""
                        />
                      </div>
                      <div>
                        <h5 className="font-semibold">Rating</h5>
                        {(
                          <div className="flex gap-2 items-center">
                            <StarRating rating={3.5} starSize={20} />{" "}
                            <span>({5})</span>
                          </div>
                        ) || <p className="text-sm text-placeholder">N/A</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundLayer>
  );
};

export default Banner;
