import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";


const Romdesing = ({ room }) => {
  let { roomImage, description } = room || {};
  return (
    <>
      <motion.div  whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }} 
          transition={{ duration: 0.2, ease: "easeOut" }}  className="p-2 flex flex-col justify-between border m-2 rounded-lg shadow-xl shadow-black">
        <div className="card-body">
          <div className="text-left text-white">
            <h2 className="card-title">{room.name}</h2>
            <p className="text-xs">{description}</p>
          </div>
          <div className="flex justify-end mt-2">
            <button className="text-right font-bold bg-white px-3 py-2 rounded-md">
              <Link to={"/rooms"}>Book Now</Link>
            </button>
          </div>
        </div>
        <figure className="w-full">
          <img
            className="w-full object-cover h-52 rounded-lg"
            src={roomImage}
            alt="Room"
          />
        </figure>
      </motion.div>
    </>
  );
};

export default Romdesing;
