import noCourses from "@/assets/images/no-courses.svg";
import Button from "@/components/Buttons/Button";
import GuidanceStep from "@/pages/Student/Profile/Status/GuidanceStep";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation } from "swiper/modules";
import stepImg from "@/assets/images/guidance-step.png";

import "swiper/css";
import "swiper/css/effect-creative";

const Guidance = () => {
  return (
    <div className="text-center relative -mb-80">
      <div className="text-white mb-7">
        <h1 className="text-3xl lg:text-5xl title text-white mb-4">
          We Provide You Step by Step Guide
        </h1>
        <p>You have 0 assigned application and 0 not assigned applications</p>
      </div>
      <div className="max-w-[50rem] bg-white mx-auto text-center rounded-xl shadow-xl">
        {(
          <div className="relative w-full">
            <Swiper
              navigation={{
                prevEl: ".guidance-slider-prev",
                nextEl: ".guidance-slider-next",
              }}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  origin: "left center",
                  translate: ["-5%", 0, -200],
                  rotate: [0, 100, 0],
                },
                next: {
                  origin: "right center",
                  translate: ["5%", 0, -200],
                  rotate: [0, -100, 0],
                },
              }}
              modules={[EffectCreative, Navigation]}
              className="guidance-slider"
            >
              <SwiperSlide>
                <GuidanceStep image_url={stepImg} />
              </SwiperSlide>
              <SwiperSlide>
                <GuidanceStep image_url={stepImg} />
              </SwiperSlide>

              <div className="absolute z-10 mx-auto right-7 top-7 hidden lg:flex gap-4 items-center">
                <div className="guidance-slider-prev cursor-pointer flex items-center justify-center text-white text-xl h-7 w-7 rounded-full overflow-hidden bg-primary active:scale-95 animate-pop">
                  <span className="material-icons-outlined !text-base">
                    arrow_back_ios
                  </span>
                </div>
                <div className="guidance-slider-next cursor-pointer flex items-center justify-center text-white text-xl h-7 w-7 rounded-full overflow-hidden bg-primary active:scale-95 animate-pop">
                  <span className="material-icons-outlined !text-base">
                    arrow_forward_ios
                  </span>
                </div>
              </div>
            </Swiper>
          </div>
        ) || (
          <div className="p-7">
            <div className="max-w-lg mx-auto mb-7">
              <img className="w-full object-contain" src={noCourses} alt="" />
            </div>
            <div className="mb-4">
              <strong className="text-title mb-2">
                No Courses Applied Yet
              </strong>
              <p>Update your profile and apply to courses</p>
            </div>
            <div>
              <Link>
                <Button
                  text={"Apply Now"}
                  icon={
                    <span className="material-icons-outlined">
                      trending_flat
                    </span>
                  }
                  className={"mx-auto"}
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guidance;
