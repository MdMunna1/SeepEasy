import axios from "axios";
import React, { useEffect, useState } from "react";
import Romdesing from "./Romdesing";

const Fitar = () => {
  const [rooms, setrooms] = useState([]);
  useEffect(() => {
    fetchallData();
  }, []);
  const fetchallData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/sixrooms`
    );
    setrooms(data);
  };

  return (
    <>
      <div className="bg-gradient-to-t from-black via-red-400 to-black grid md:grid-cols-3 sm:grid-cols-2 gap-2 py-8">
        {rooms?.map((all) => (
          <Romdesing key={all._id} room={all} />
        ))}
      </div>
    </>
  );
};

export default Fitar;
