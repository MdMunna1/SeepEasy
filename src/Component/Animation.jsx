import React from "react";
import Marquee from "react-fast-marquee";
// import img1 from "../assets/img-1.png";

const Animation = () => {
  // console.log(img1)
  return (
    <>
      <Marquee className="py-10 bg-black">
        <section className="flex justify-around">
          <div>
            <img
              className="w-48 h-36 mx-9"
              src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg"
              alt="room"
            />
          </div>
        </section>
      </Marquee>
    </>
  );
};

export default Animation;
