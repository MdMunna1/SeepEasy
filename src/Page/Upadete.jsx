// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { MainContex } from "../Contex/ContexComponent";

// const Upadete = () => {
//     let {user}=useContext(MainContex)
//   let { id } = useParams();
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     fetchAllData();
//   }, [user]);

//   const fetchAllData = async () => {
//     if (user?.email) {
//       const { data } = await axios.get(
//         `${import.meta.env.VITE_API_URL}/getupdate/${id}`
//       );
//       setRooms(data);
//     }
//   };

//   return (
//     <>
//       <div>
//         <form>

//         </form>
//       </div>
//     </>
//   );
// };

// export default Upadete;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"; // Import react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS
import Swal from "sweetalert2";

const Upadete = () => {
  const { id } = useParams(); // Get the room ID from the URL
  const navigate = useNavigate(); // For navigating after the update

  const [newDate, setNewDate] = useState(null);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(newDate);
    let selectedDate = newDate;
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/updateBooking/${id}`, {
        selectedDate,
      });
      Swal.fire("Date Update success");
      navigate("/mybooking");
    } catch (error) {
      console.error("Error updating date:", error);
    //   alert("Error updating date. Please try again.");
    }
  };

  //   if (!room) return <p>Loading...</p>;

  return (
    <div className="container bg-red-400 mx-auto py-20 p-6">
      <h2 className="text-2xl font-semibold mb-6">Update Booking Date</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Select New Date
          </label>
          <DatePicker
            selected={newDate}
            onChange={setNewDate}
            minDate={new Date()} // Set minimum date to today's date
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            dateFormat="yyyy/MM/dd"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Update Date
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upadete;
