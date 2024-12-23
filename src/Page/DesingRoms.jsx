import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { motion } from "motion/react";

const DesingRoms = ({ room }) => {
  let navigate = useNavigate();
  // console.log(room);
  let { _id } = room || {};
  const rating = Math.floor(room?.rating);
  return (
    <>
      <Link to={`/details/${room?._id}`}>
        <motion.div
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }} 
          transition={{ duration: 0.2, ease: "easeOut" }} 
          
          className="grid sm:grid-cols-2 gap-4 rounded-lg m-2 shadow-lg shadow-black sm:h-48 w-[100%]"
        >
          <section className="h-44 w-[100%] border ">
            <img
              className="h-full w-full rounded-lg"
              src={room?.roomImage}
              alt=""
            />
          </section>
          <section className="sm:w-[100%] pl-2 rounded-md border flex flex-col justify-evenly text-left">
            <h1 className="py-2 text-red-500 sm:text-xl font-bold">
              {room?.name}
            </h1>
            <h1 className="text-xs">{room?.description}</h1>
            <p className="py-1">Price: {room?.roomPrice}</p>
            <div className="flex">
              {Array.from({ length: rating }).map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
          </section>
        </motion.div>
      </Link>
    </>
  );
};

export default DesingRoms;
