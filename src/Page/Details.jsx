import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { motion } from "motion/react";
import { useContext } from "react";
import { MainContex } from "../Contex/ContexComponent";
import Swal from "sweetalert2";

const RoomDetails = () => {
  let { user } = useContext(MainContex);
  const navigate = useNavigate();
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // * button ar jonno
  const [userRoom, setUserRoom] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, [user]);

  const fetchAllData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/allbokkingRooms`
    );
    setUserRoom(data);
  };

  let oneData = userRoom?.find((all) => all?.roomId === id);

  // * reviw ar jonno
  const [userReviw, setUserReviw] = useState([]);

  useEffect(() => {
    fetchAllData2();
  }, [user]);

  const fetchAllData2 = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/allreview`
    );
    setUserReviw(data);
  };
  let reviwOne = userReviw?.find((all) => all?.roomId === id);
  // console.log(reviwOne)

  useEffect(() => {
    fetchallData();
  }, [id]);
  const fetchallData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/allrooms/${id}`
    );
    setRoom(data);
  };

  const handleBooking = async () => {
    let booking = {
      email: user?.email,
      selectedDate,
      roomName: room?.name,
      roomPrice: room?.roomPrice,
      availability: false,
      roomImage: room?.roomImage,
      roomId: room?._id,
    };
    await axios
      .post(`${import.meta.env.VITE_API_URL}/bookings`, booking)
      .then((res) => {
        Swal.fire("success");
        navigate("/mybooking");
      });

    setShowModal(false);
    console.log("Room booked:", room.name, "on", selectedDate);
  };
  const rating = Math.floor(room?.rating);
  if (!room)
    return <div className="flex justify-center h-screen w-full"> <span className="loading loading-spinner text-neutral"></span></div>;

  return (
    <>
      <section className=" bg-black">
        <div className="p-4 sm:w-9/12 bg-white mx-auto">
          <img
            className="w-full h-64 object-cover mb-4 rounded"
            src={room?.roomImage}
            alt={room?.name}
          />
          <section className="sm:flex justify-between">
            <div className="flex gap-2 flex-col items-start">
              <h1 className="font-bold text-red-600 text-xl">Name: {room?.name}</h1>
              <p className="fo">
                <span className="font-semibold">Room Type</span>:{" "}
                {room?.roomType}
              </p>
              <p>
                <span className="font-semibold">Amenities</span> :
                {room?.amenities}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="flex font-semibold items-center">
                Reting:{" "}
                {Array.from({ length: rating }).map((_, index) => (
                  <FaStar className="text-yellow-500" key={index} />
                ))}
              </h1>
              <p className="font-semibold"> Price: ${room?.roomPrice}</p>
            </div>
          </section>

          <p className="text-left text-xs mt-5">
            <span className="font-semibold">Description</span> :{" "}
            {room?.description}
          </p>

          <div className="mt-6 text-left">
            <h2 className="text-2xl font-semibold">Reviews:</h2>
            {reviwOne ? (
              <ul className="mt-2">
                <li> {reviwOne?.email || "N/A"}</li>
                <li className="my-2"> {reviwOne?.comment || "N/A"}</li>
                <li className="flex items-center">
                  {" "}
                  {Array.from({ length: reviwOne?.rating }).map((_, index) => (
                    <FaStar className="text-yellow-500" key={index} />
                  ))}
                </li>
              </ul>
            ) : (
              <p>No reviews available for this room.</p>
            )}
          </div>
          <div></div>

          {oneData?.roomId ? (
            <p className="text-red-500 font-semibold mt-4">
              This room is not available for booking.
            </p>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-400 my-6 text-white px-4 py-2 rounded "
              onClick={() => {
                if (!user) {
                  return navigate("/login");
                }

                setShowModal(true);
              }}
            >
              Book Now
            </motion.button>
          )}

          {/* মডাল */}
          {showModal && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Booking Summary</h2>
                <p>
                  <strong>Room:</strong> {room.name}
                </p>
                <p>
                  <strong>Price:</strong> ${room?.roomPrice}/night
                </p>

                {/* ডেট পিকার */}
                <div className="mt-4">
                  <label className="font-semibold">Select Booking Date:</label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="border px-2 py-1 rounded w-full mt-2"
                    minDate={new Date()}
                  />
                  <label>
                    <input
                      className="border px-2 py-1 rounded w-full mt-2"
                      type="email"
                      value={user?.email}
                      name="email"
                      id=""
                      readOnly
                    />
                  </label>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={handleBooking}
                    disabled={!selectedDate}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>{" "}
    </>
  );
};

export default RoomDetails;
