import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import cardImg from "@/assets/images/course-card.png";
import universityImg from "@/assets/images/course-university.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CourseCard from "@/components/Cards/CourseCard/CourseCard";

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
                  <CourseCard
                    rounded={true}
                    data={{
                      title: "Engineering",
                      image: cardImg,
                      institution: "Barnsley College Higher Education",
                      institution_image: universityImg,
                      location:
                        "Barnsley College Higher Education Church Street Campus",
                      bio: "Barnsley College Higher Education Church Street Campus",
                      duration: "2 Years",
                      session: "2024-2025",
                      study_mode: "Full Time",
                      ranking: 103,
                      class_starts: "2 March, 2024",
                      tuition_fee: 18000,
                    }}
                  />
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
