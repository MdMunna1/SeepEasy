import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const ReviwShow = () => {
  const [userReviw, setUserReviw] = useState([]);

  useEffect(() => {
    fetchAllData2();
  }, []);

  const fetchAllData2 = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/letestreviw`
    );
    setUserReviw(data);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <section className="sm:h-[240px] h-auto bg-gradient-to-r from-black via-red-400  to-black">
        <div className="w-full h-[250px]  sm:max-w-3xl mx-auto mt-4">
          <h2 className="text-center text-2xl font-bold py-2 text-white mb-6">User Reviwes</h2>
          <Slider {...settings}>
            {userReviw?.map((all) => (
              <div
                key={all?._id}
                className="p-4 bg-white h-[10%] shadow-md rounded-lg text-center"
              >
                <h3 className="text-lg font-semibold">{all?.email}</h3>
                <p className="text-sm text-gray-500">{all?.comment}</p>
                <p className="mt-4 flex justify-center text-gray-700">
                  {" "}
                  {Array.from({ length: all?.rating }).map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </section>{" "}
    </>
  );
};

export default ReviwShow;
