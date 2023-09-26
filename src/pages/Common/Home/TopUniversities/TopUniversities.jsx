import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "@/assets/images/university-slide-1.png";
import slide2 from "@/assets/images/university-slide-2.png";
import slide3 from "@/assets/images/university-slide-3.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TopUniversities = () => {
  return (
    <section className="lg:py-24 py-14">
      <div className="container">
        <SectionTitle
          subtitle={"Top Ranked Universities"}
          title={"Pioneering Institutions "}
          text={`Explore the best of UK’s higher education, renowned for its quality, research, 
          and global reputation.`}
        />
        <div>
          <div className="w-full relative">
            <div className="lg:px-16">
              <Swiper
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: ".universities-slider-prev",
                  nextEl: ".universities-slider-next",
                }}
                autoplay={{
                  delay: 2500,
                  pauseOnMouseEnter: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                breakpoints={{
                  1024: {
                    spaceBetween: 16,
                    slidesPerView: 3,
                  },
                }}
                className="top-universities-slider"
              >
                <SwiperSlide>
                  <div className="h-[420px] rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={slide1}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[420px] rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={slide2}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[420px] rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={slide3}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[420px] rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={slide2}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="absolute z-10 left-0 right-0 top-[50%] translate-y-[-50%] w-full hidden lg:flex justify-between items-center">
              <div className="universities-slider-prev cursor-pointer flex items-center justify-center text-white text-xl h-12 w-12 rounded-full overflow-hidden bg-black bg-opacity-30">
                <span className="material-icons-outlined">arrow_back_ios</span>
              </div>
              <div className="universities-slider-next cursor-pointer flex items-center justify-center text-white text-xl h-12 w-12 rounded-full overflow-hidden bg-black bg-opacity-30">
                <span className="material-icons-outlined">
                  arrow_forward_ios
                </span>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <button className="primary-btn mx-auto">
              <span>View More</span>{" "}
              <span className="material-icons-outlined">trending_flat</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopUniversities;
