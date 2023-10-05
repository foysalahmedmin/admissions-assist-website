import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import profileImg from "@/assets/images/profile.jpg";
import TestimonialCard from "../../../../components/Cards/TestimonialCard/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="lg:pt-24 pt-14" id="testimonials">
      <div className="container mx-auto">
        <SectionTitle
          subtitle={"Our Testimonials"}
          title={`Hear from Our Success Stories`}
          text={`Real experiences shared by students who've found their academic home in the UK with our assistance.`}
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
            className="testimonials-slider"
          >
            {Array.from(Array(9).keys()).map((x, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard
                  data={{
                    name: "Anne Marie",
                    image_url: profileImg,
                    profession: "UI/UX Designer",
                    comment:
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem a Ipsum has been the industry's standard fu dummy text ever since the 1500s, when an know printer took a galley of typ led it to make a type spemen book.",
                    rating: 3.5,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
