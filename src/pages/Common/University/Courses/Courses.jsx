import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CourseCard from "@/components/Cards/CourseCard/CourseCard";
import {urls} from "@/apis/config/urls.js";

// eslint-disable-next-line react/prop-types
const Courses = ({ courses }) => {
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
            {courses?.requirements?.map((x, i) => (
              <SwiperSlide key={i}>
                <div className="mb-14">
                  <CourseCard
                    rounded={true}
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
