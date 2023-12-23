/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import Button from "@/components/Buttons/Button";
import UniversityCard from "@/components/Cards/UniversityCard.jsx/UniversityCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {useQuery} from "react-query";
import {fetchTopUniversities} from "@/network/common/commonApi.js";

const TopUniversities = () => {
  const { data: universities } = useQuery({
    queryKey: ["top_universities"],
    queryFn: () => fetchTopUniversities(),
  });
  return (
    <section className="lg:py-24 py-14">
      <div className="container mx-auto">
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
                {universities?.map((data, i) => (
                  <SwiperSlide key={i}>
                    <UniversityCard
                      data={{
                        _id: data?._id,
                        image_url: data?.cover,
                        title: data?.name,
                        course_quantity: data?.courses,
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="absolute z-10 left-0 right-0 top-[50%] translate-y-[-50%] w-full hidden lg:flex justify-between items-center">
              <div className="universities-slider-prev cursor-pointer flex items-center justify-center text-white text-xl h-12 w-12 rounded-full overflow-hidden bg-black-900 bg-opacity-30 active:scale-95 animate-pop">
                <span className="material-icons-outlined">arrow_back_ios</span>
              </div>
              <div className="universities-slider-next cursor-pointer flex items-center justify-center text-white text-xl h-12 w-12 rounded-full overflow-hidden bg-black-900 bg-opacity-30 active:scale-95 animate-pop">
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
