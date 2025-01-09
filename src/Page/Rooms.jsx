import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import DesingRoms from "./DesingRoms";
import { MainContex } from "../Contex/ContexComponent";

const Rooms = () => {
  const [price, setPrice] = useState(0);
  const [rooms, setrooms] = useState([]);
  useEffect(() => {
    fetchallData();
  }, []);
  const fetchallData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/allrooms`
    );
    setrooms(data);
  };

  const handleFilterSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/allrooms?price=${price}`
      );
      if (data && data?.length > 0) {
        setrooms(data);
      } else {
      }
    } catch (error) {
      console.error("Error fetching filtered rooms:", error);
    }
  };

  if (!rooms)
    return (
      <>
        {" "}
        <p className="text-center h-screen w-full">loding....</p>{" "}
      </>
    );

  return (
    <>
      <section className="py-10 bg-gradient-to-t from-black via-red-800 to-black flex justify-center ">
        <form onSubmit={handleFilterSubmit} className="sm:flex gap-2">
          <div>
            <label className="text-white font-semibold" htmlFor="price">Max Price: </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border p-1  sm:p-2"
            />
          </div>
          <button
            type="submit"
            className="transition-colors duration-300 ease-in-out hover:bg-red-700 bg-black rounded-md text-white px-3 py-1"
          >
            Filter
          </button>
        </form>
      </section>
      


      <div className="grid sm:grid-cols-2 min-h-screen pr-2 py-6 gap-2 bg-gradient-to-t from-black via-red-500 to-black">
        {rooms ? (
          rooms?.map((all) => <DesingRoms key={all._id} room={all} />)
        ) : (
          <div className="text-center h-screen w-full">loding...</div>
        )}
      </div>
    </>
  );
};

export default Rooms;
