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

  if (!rooms) return <p>loding....</p>;

  return (
    <>
      <section className="py-10 bg-gradient-to-t from-black via-slate-300 to-black flex justify-center ">
        <form onSubmit={handleFilterSubmit} className="sm:flex gap-2">
          <div>
            <label htmlFor="price">Max Price: </label>
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
            className="transition-colors duration-300 ease-in-out hover:bg-red-700 bg-red-500 rounded-md text-white px-2 py-1"
          >
            Filter
          </button>
        </form>
      </section>
      <div className="grid sm:grid-cols-2 bg-slate-100 gap-4">
        {rooms?.map((all) => (
          <DesingRoms key={all._id} room={all} />
        ))}
      </div>
    </>
  );
};

export default Rooms;
