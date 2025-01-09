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
          transition={{ duration: 0.2, ease: "easeOut" }}  className="p-2 flex flex-col justify-between border m-2 bg-gradient-to-t from-black via-red-600 to-black rounded-lg shadow-xl shadow-black">
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
       {/* <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="p-4 flex flex-col justify-between bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border m-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
        <div className="card-body flex flex-col justify-between text-white">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="text-sm">{description}</p>
          </div>
          <div className="flex justify-end">
            <button className="text-white font-bold bg-indigo-600 px-5 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200">
              <Link to={"/rooms"}>Book Now</Link>
            </button>
          </div>
        </div>
        <figure className="w-full mt-4 rounded-lg overflow-hidden">
          <img
            className="w-full object-cover h-60"
            src={roomImage}
            alt="Room"
          />
        </figure>
      </motion.div> */}
    </>
  );
};

export default Romdesing;
