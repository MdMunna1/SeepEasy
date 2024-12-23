import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { MainContex } from "../Contex/ContexComponent";
import Swal from "sweetalert2"; // SweetAlert2 import
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  let { user } = useContext(MainContex);
  let nagigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, [user]);

  const fetchAllData = async () => {
    if (user?.email) {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/myaddRooms/${user?.email}`
      );
      setRooms(data);
    }
  };
  // console.log(rooms);

  const handleCancelBooking = async (deletid, time) => {
    console.log(deletid, time);

    const today = new Date();
    const bookingDate = new Date(time);
    const oneDayBeforeBooking = new Date(bookingDate);
    oneDayBeforeBooking.setDate(bookingDate.getDate() - 1);

    if (today > oneDayBeforeBooking) {
      Swal.fire({
        title: "Cannot Cancel Booking",
        text: "You can only cancel your booking at least one day before the booking date.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // const today = new Date();

        await axios
          .delete(`${import.meta.env.VITE_API_URL}/cancelBooking/${deletid}`)
          .then((res) => {
            console.log(res);

            setRooms(rooms?.filter((room) => room._id !== deletid));
            Swal.fire(
              "Cancelled!",
              "Your booking has been cancelled.",
              "success"
            );
          });
      }
    });
  };

  const handleReviewSubmit = async (roomId) => {
    Swal.fire({
      title: "Give Review",
      html: `
        <input id="rating" type="number" min="1" max="5" class="swal2-input" placeholder="Rating (1-5)" />
        <textarea id="comment" class="swal2-textarea" placeholder="Your Comment"></textarea>
      `,
      focusConfirm: false,
      preConfirm: () => {
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;
        if (rating && comment) {
          return { rating, comment };
        }
        return false;
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { rating, comment } = result.value;
        let deta = {
          rating,
          comment,
          roomId,
          email: user?.email,
        };
        // console.log(data)
        try {
          await axios
            .post(`${import.meta.env.VITE_API_URL}/addReview`, deta)
            .then((res) => {
              console.log(res);
              Swal.fire("Success", "Reviw add success.", "Success");
            });
        } catch (error) {
          console.error("Error submitting review:", error);
          Swal.fire(
            "Error",
            "Failed to submit review. Please try again.",
            "error"
          );
        }
      }
    });
  };

  if (!rooms.length)
    return <span className="loading loading-spinner text-neutral"></span>;

  return (
    <div className=" w-full text-xs sm:text-sm py-6">
      <table className="min-w-full bg-white border border-gray-300 table-auto sm:table-fixed">
        <thead>
          <tr className="">
            <th className="py-2 px-4 border-b text-left">Room Image</th>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Price</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-center sm:text-left">
                <img
                  src={room?.roomImage}
                  alt={room.name || "N?A"}
                  className="sm:w-24 sm:h-24 w-12 h-12 object-cover mx-auto sm:mx-0"
                />
              </td>
              <td className="py-2 px-4 border-b text-center sm:text-left">
                {room?.roomName}
              </td>
              <td className="py-2 px-4 border-b text-center sm:text-left">
                {room?.roomPrice}
              </td>
              <td className="py-2 px-4 border-b text-center sm:text-left">
                <button
                  className="text-green-500 sm:font-semibold p-2 duration-300 hover:bg-black hover:rounded-lg hover:text-red-500 mr-2 block sm:inline-block"
                  onClick={() => {
                    nagigate(`/update/${room?._id}`);
                    // handleUpdateDate(room?._id);
                  }}
                >
                  Update Date
                </button>
                <button
                  className="text-green-500 sm:font-semibold p-2 duration-300  hover:bg-black hover:rounded-lg hover:text-red-500 mr-2 block sm:inline-block"
                  onClick={() =>
                    handleCancelBooking(room?._id, room?.selectedDate)
                  }
                >
                  Cancel
                </button>
                <button
                  className="text-green-500 sm:font-semibold p-2 duration-300 hover:bg-black hover:rounded-lg hover:text-red-500 block sm:inline-block"
                  onClick={() => handleReviewSubmit(room?.roomId)}
                >
                  Give Review
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
