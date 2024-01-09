import SectionTitle from "@/components/SectionTitle/SectionTitle";
<<<<<<< HEAD
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import cardImg from "@/assets/images/course-card.png";
import universityImg from "@/assets/images/course-university.svg";
=======
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
>>>>>>> update-project/main

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CourseCard from "@/components/Cards/CourseCard/CourseCard";
<<<<<<< HEAD

const Courses = () => {
=======
import {urls} from "@/apis/config/urls.js";

// eslint-disable-next-line react/prop-types
const Courses = ({ courses }) => {
>>>>>>> update-project/main
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
<<<<<<< HEAD
            {Array.from(Array(9).keys()).map((x, i) => (
=======
            {courses?.requirements?.map((x, i) => (
>>>>>>> update-project/main
              <SwiperSlide key={i}>
                <div className="mb-14">
                  <CourseCard
                    rounded={true}
<<<<<<< HEAD
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
=======
                    params={{
                      university: courses?._id,
                      subject: x?.subject?._id,
                      requirement: x?._id,
                    }}
                    data={{
                      title: x?.subject?.name,
                      image: `${urls?.university_cover}/${courses?.cover}`,
                      institution: courses?.name,
                      institution_image: `${urls?.university_logo}/${courses?.logo}`,
                      location: courses?.campuses[0]?.location,
                      bio: "Barnsley College Higher Education Church Street Campus",
                      duration: x?.isCourse
                        ? x?.course?.study_mode
                        : x?.subject?.study_mode,
                      session: `${courses?.session?.session} (${courses?.session?.year})`,
                      study_mode: x?.isCourse
                        ? x?.course?.study_mode
                        : x?.subject?.study_mode,
                      ranking: courses?.ranking,
                      tuition_fee: x?.isCourse
                        ? x?.course?.fees
                        : x?.subject?.fees,
>>>>>>> update-project/main
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
