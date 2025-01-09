import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const slidesData = [
  {
    id: 1,
    image:
      "https://t4.ftcdn.net/jpg/08/44/17/17/240_F_844171735_z88EFmKty8yjfNQDfMZQpP44AiBJjJUc.jpg",
    header: "Smart Booking for Modern Travelers",
    sort: "Enjoy competitive pricing and instant booking confirmation. Our platform offers personalized recommendations to make your stay unforgettable.",
  },
  {
    id: 2,
    image:
      "https://as2.ftcdn.net/v2/jpg/08/51/13/33/1000_F_851133333_OsXwDnvB555vjMKhBuCw73t3HJIVrGbn.jpg",
    header: "Your Dream Stay Awaits",
    sort: "Explore a wide range of hotels, from budget options to luxury resorts. Book your next vacation or business trip hassle-free.",
  },
  {
    id: 3,
    image:
      "https://as1.ftcdn.net/v2/jpg/08/51/14/62/1000_F_851146222_eBcIH4GMIKh1lh28AsGB5S7XpARGWKcw.jpg",
    header: "Effortless Hotel Booking Experience",
    sort: " Discover and book the perfect room with ease. Our platform ensures a smooth, fast, and secure booking process.",
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
            className="hero h-[250px] md:h-[460px] bg-cover object-cover bg-no-repeat"
            style={{
              backgroundImage: ` url(${slide.image})`,
            }}
          >
            <div className="hero-overlay bg-opacity-40 bg-gradient-to-b from-black/30 to-black/80"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className=" w-[90%]">
                <h1 className="mb-5 md:text-5xl font-bold text-red-400">
                  {slide.header}
                </h1>
                <p className="mb-5 text-xs sm:text-sm text-white">
                  {slide.sort}
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }} className="bg-red-400 text-black font-extrabold py-3 px-5 mt-4 rounded-lg">
                  <Link to={"/rooms"}>ROOMS</Link>
                </motion.button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
