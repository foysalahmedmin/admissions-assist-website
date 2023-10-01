import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "@/assets/images/university-slide-1.png";
import slide2 from "@/assets/images/university-slide-2.png";
import slide3 from "@/assets/images/university-slide-3.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@/components/Buttons/Button";

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
                    spaceBetween: 28,
                    slidesPerView: 3,
                  },
                }}
                className="top-universities-slider"
              >
                <SwiperSlide>
                  <div className="h-[420px] rounded-xl overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover"
                      src={slide1}
                      alt=""
                    />
                    <div className="absolute bottom-0 left-0 right-0 inset-12 bg-gradient-to-t from-[#121212] text-center text-white p-4 pb-12 flex flex-col ">
                      <div className="mt-auto">
                        <h3 className="text-2xl font-bold">
                          University of Oxford
                        </h3>
                        <p className="font-bold">65 Courses </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[420px] rounded-xl overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover "
                      src={slide2}
                      alt=""
                    />
                    <div className="absolute bottom-0 left-0 right-0 inset-12 bg-gradient-to-t from-[#121212] text-center text-white p-4 pb-12 flex flex-col ">
                      <div className="mt-auto">
                        <h3 className="text-2xl font-bold">
                          University of Essex
                        </h3>
                        <p className="font-bold">75 Courses </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[420px] rounded-xl overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover"
                      src={slide3}
                      alt=""
                    />
                    <div className="absolute bottom-0 left-0 right-0 inset-12 bg-gradient-to-t from-[#121212] text-center text-white p-4 pb-12 flex flex-col ">
                      <div className="mt-auto">
                        <h3 className="text-2xl font-bold">
                          University of Cambridge
                        </h3>
                        <p className="font-bold">38 Courses </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[420px] rounded-xl overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover"
                      src={slide2}
                      alt=""
                    />
                    <div className="absolute bottom-0 left-0 right-0 inset-12 bg-gradient-to-t from-[#121212] text-center text-white p-4 pb-12 flex flex-col ">
                      <div className="mt-auto">
                        <h3 className="text-2xl font-bold">
                          University of Oxford
                        </h3>
                        <p className="font-bold">65 Courses </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="absolute z-10 left-0 right-0 top-[50%] translate-y-[-50%] w-full hidden lg:flex justify-between items-center">
              <div className="universities-slider-prev cursor-pointer flex items-center justify-center text-white text-xl h-12 w-12 rounded-full overflow-hidden bg-black bg-opacity-30 -translate-x-1/2">
                <span className="material-icons-outlined">arrow_back_ios</span>
              </div>
              <div className="universities-slider-next cursor-pointer flex items-center justify-center text-white text-xl h-12 w-12 rounded-full overflow-hidden bg-black bg-opacity-30 translate-x-1/2">
                <span className="material-icons-outlined">
                  arrow_forward_ios
                </span>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Button
              className={"mx-auto"}
              text={"View More"}
              icon={
                <span className="material-icons-outlined">trending_flat</span>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopUniversities;
