import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CourseCard from "./CourseCard";
const Courses = () => {
  return (
    <section className="lg:py-24 py-14" id="courses">
      <div className="container mx-auto">
        <SectionTitle
          subtitle={"Top Courses"}
          title={"Top Courses of the University"}
        />
        <div>
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              1024: {
                spaceBetween: 28,
                slidesPerView: 3,
              },
            }}
            className="courses-slider"
          >
            {Array.from(Array(9).keys()).map((x, i) => (
              <SwiperSlide key={i}>
                <div className="mb-14">
                  <CourseCard rounded={true} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Courses;
