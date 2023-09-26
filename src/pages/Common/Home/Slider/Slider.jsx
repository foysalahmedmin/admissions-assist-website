import useScrollSpy from "@/hooks/useScrollSpy/useScrollSpy";
import Slide from "@/pages/Common/Home/Slider/Slide";
import Search from "@/components/Search/Search";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const { sectionRefs } = useScrollSpy();
  const sectionRef = useRef(null);
  useEffect(() => {
    if (!sectionRefs.current.includes(sectionRef.current)) {
      sectionRefs.current.push(sectionRef.current);
    }
  }, [sectionRefs]);
  return (
    <section ref={sectionRef} id="home">
      <div className="bg-black bg-opacity-25">
        <div className="w-full relative">
          <Swiper
            loop
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Slide>
                <div className="mb-12">
                  <h1 className="lg:text-5xl text-3xl lg:leading-[4rem] font-bold mb-6">
                    Discover Your Perfect University Match in the UK
                  </h1>
                  <p>
                    Bridging the gap between skilled local service providers and
                    those who need them. Discover, hire, and manage local
                    professionals hassle-free.
                  </p>
                </div>
                <Search />
              </Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide>
                <div className="mb-12">
                  <h1 className="lg:text-5xl text-3xl font-bold mb-6">
                    Discover Your Perfect University Match in the UK
                  </h1>
                  <p>
                    Bridging the gap between skilled local service providers and
                    those who need them. Discover, hire, and manage local
                    professionals hassle-free.
                  </p>
                </div>
                <Search />
              </Slide>
            </SwiperSlide>
            <div className="absolute z-10 container left-0 right-0 top-[50%] translate-y-[-50%] w-full hidden lg:flex justify-between items-center">
              <div className="prev cursor-pointer flex items-center justify-center text-white text-xl h-12 w-12 rounded-full overflow-hidden bg-black bg-opacity-30">
                <span className="material-icons-outlined">arrow_back_ios</span>
              </div>
              <div className="next cursor-pointer flex items-center justify-center text-white text-xl h-12 w-12 rounded-full overflow-hidden bg-black bg-opacity-30">
                <span className="material-icons-outlined">
                  arrow_forward_ios
                </span>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;
