import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slidesData = [
  {
    id: 1,
    image:
      "https://t4.ftcdn.net/jpg/08/44/17/17/240_F_844171735_z88EFmKty8yjfNQDfMZQpP44AiBJjJUc.jpg",
    header: "Simple Process For Student Visas",
    sort: "Start your study journey abroad with the simplest and most efficient student visa process.",
  },
  {
    id: 2,
    image:
      "https://as2.ftcdn.net/v2/jpg/08/51/13/33/1000_F_851133333_OsXwDnvB555vjMKhBuCw73t3HJIVrGbn.jpg",
    header: "Best Solution to All Migration Matters",
    sort: "We understand that every migration journey is unique. Whether you're a student looking to study abroad, a professional seeking new opportunities, or a family member trying to reunite with loved ones, we are here to help. ",
  },
  {
    id: 3,
    image:
      "https://as1.ftcdn.net/v2/jpg/08/51/14/62/1000_F_851146222_eBcIH4GMIKh1lh28AsGB5S7XpARGWKcw.jpg",
    header: "Best Immigration & Visa Consultations",
    sort: " Get expert advice on immigration, visa processes, and consultation from the best in the industry.",
  },
];

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="w-full"
    >
      {slidesData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="hero h-[280px] md:h-[500px] md:my-8 my-4 bg-cover bg-no-repeat"
            style={{
              backgroundImage: ` url(${slide.image})`,
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className=" w-[90%]">
                <h1 className="mb-5 md:text-5xl font-bold text-blue-700">
                  {slide.header}
                </h1>
                <p className="mb-5 text-xs sm:text-xl text-white">
                  {slide.sort}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
