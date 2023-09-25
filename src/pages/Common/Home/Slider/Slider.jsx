import useScrollSpy from "@/hooks/useScrollSpy/useScrollSpy";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

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
      hello
      <motion.div
        className="box bg-red-500 h-[200px] w-[200px]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, transformOrigin: "top left" }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      />
      <section ref={sectionRef} id="home">
        <div className="bg-black bg-opacity-25">
          <div className="w-full h-full relative">
            <Swiper
              pagination={{ clickable: true }}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              loop
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div
                  className={`bg-[url('/homeBanner.png')] bg-no-repeat bg-cover bg-center`}
                >
                  <div className="container py-20 flex justify-center items-center">
                    <div className="min-h-[35rem] max-w-[57rem] flex items-center justify-center mx-auto text-center lg:px-12">
                      <div className="text-white">
                        <h1 className="lg:text-[4rem] text-4xl lg:leading-[4rem] font-bold mb-6">
                          Boost local businesses while enjoying top-notch
                          services through Locality
                        </h1>
                        <p className="mb-7">
                          Bridging the gap between skilled local service
                          providers and those who need them. Discover, hire, and
                          manage local professionals hassle-free.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center justify-center">
                          <button className="flex items-center gap-2 p-3 primary-btn rounded-xl">
                            <span>Fined Services</span>
                          </button>
                          <button className="flex items-center gap-2 p-3 rounded-xl underline">
                            <span>Join as a Professional</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className={`bg-[url('/homeBanner.png')] bg-no-repeat bg-cover bg-center`}
                >
                  <div className="container py-20 flex justify-center items-center">
                    <div className="min-h-[35rem] max-w-[57rem] flex items-center justify-center mx-auto text-center lg:px-12">
                      <div className="text-white">
                        <h1 className="lg:text-[4rem] lg:text-4xl text-3xl lg:leading-[4rem] font-bold mb-6">
                          Discover and engage with your communitys best service
                          providers on Locality
                        </h1>
                        <p className="mb-7">
                          Bridging the gap between skilled local service
                          providers and those who need them. Discover, hire, and
                          manage local professionals hassle-free.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center justify-center">
                          <button className="flex items-center gap-2 p-3 primary-btn rounded-xl">
                            <span>Fined Services</span>
                          </button>
                          <button className="flex items-center gap-2 p-3 rounded-xl underline">
                            <span>Join as a Professional</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="absolute z-10 hidden container left-0 right-0 top-[50%] translate-y-[-50%] w-full lg:flex justify-between items-center">
                <div className="prev cursor-pointer flex items-center justify-center text-white text-xl h-12 w-12 rounded-full overflow-hidden bg-black bg-opacity-30">
                  <span>prev</span>
                </div>
                <div className="next cursor-pointer flex items-center justify-center text-white text-xl h-12 w-12 rounded-full overflow-hidden bg-black bg-opacity-30">
                  <span>next</span>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Slider;
