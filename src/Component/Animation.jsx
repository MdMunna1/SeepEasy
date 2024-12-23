import axios from "axios";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Animation = () => {
  const [rooms, setrooms] = useState([]);

  useEffect(() => {
    fetchallData();
  }, []);

  const fetchallData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/allrooms`
      );
      setrooms(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!rooms.length) return <p>Loading....</p>;

  return (
    <Marquee className="py-10 bg-black">
      {rooms?.map((room) => (
        <section className="flex relative justify-around" key={room.id}>
          <div>
            <div>
              <img
                className=" w-48 h-36 rounded-lg  mx-9"
                src={room?.roomImage}
                alt="room"
              />
            </div>
            <div className="text-left mx-9 text-white">
              <p>{room?.name}</p>
              <p className="flex items-center">
                {" "}
                {Array.from({ length: room?.rating }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </p>
            </div>
          </div>
        </section>
      ))}
    </Marquee>
  );
};

export default Animation;
