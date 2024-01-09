<<<<<<< HEAD
=======
/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

>>>>>>> update-project/main
import slide1 from "@/assets/images/university-slide-1.png";
import slide2 from "@/assets/images/university-slide-2.png";
import slide3 from "@/assets/images/university-slide-3.png";
import Button from "@/components/Buttons/Button";
import UniversityCard from "@/components/Cards/UniversityCard.jsx/UniversityCard";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
<<<<<<< HEAD
=======
import { useQuery } from "react-query";
import { fetchTopUniversities } from "@/network/common/commonApi.js";
>>>>>>> update-project/main

const card_data = [
  {
    image_url: slide1,
    title: "University of Oxford",
    course_quantity: 65,
  },
  {
    image_url: slide2,
    title: "University of Essex",
    course_quantity: 75,
  },
  {
    image_url: slide3,
    title: "University of Cambridge",
    course_quantity: 37,
  },
  {
    image_url: slide2,
    title: "University of Essex",
    course_quantity: 75,
  },
];

const TopUniversities = () => {
<<<<<<< HEAD
=======
  const { data: universities } = useQuery({
    queryKey: ["top_universities"],
    queryFn: () => fetchTopUniversities(),
  });
>>>>>>> update-project/main
  return (
    <section className="lg:py-24 py-14">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-5xl title mb-4">
            We Provide You Step by Step Guide
          </h1>
          <p>You have 0 assigned application and 0 not assigned applications</p>
        </div>
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
<<<<<<< HEAD
                {card_data.map((data, i) => (
                  <SwiperSlide key={i}>
                    <UniversityCard data={data} />
=======
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
>>>>>>> update-project/main
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="absolute z-10 left-0 right-0 top-[50%] translate-y-[-50%] w-full hidden lg:flex justify-between items-center">
              <div className="universities-slider-prev cursor-pointer flex items-center justify-center text-white text-xl h-12 w-12 rounded-full overflow-hidden bg-black-900 bg-opacity-30 active:scale-95 animate-pop ">
                <span className="material-icons-outlined">arrow_back_ios</span>
              </div>
              <div className="universities-slider-next cursor-pointer flex items-center justify-center text-white text-xl h-12 w-12 rounded-full overflow-hidden bg-black-900 bg-opacity-30 active:scale-95 animate-pop ">
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
