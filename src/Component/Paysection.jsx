import React from "react";

const Paysection = () => {
  return (
    <>
    <section className="w-full bg-red-50 py-4 rounded-lg">
  <div className="flex flex-col gap-2 sm:flex-row">
    {/* Image Section */}
    <div className="w-full sm:w-5/12">
      <img
        src="https://img.freepik.com/premium-photo/hotel-rooms_739149-550.jpg?w=740"
        alt="Hotel Room"
        className="w-full rounded-md h-full object-cover"
      />
    </div>

    {/* Text Section */}
    <div className="w-full sm:w-7/12 flex flex-col justify-center rounded-md p-6 bg-gradient-to-t from-black text-white via-red-800 to-black">
      <h1 className="sm:text-3xl font-bold text-white mb-4 text-center sm:text-left">
        Discover Comfort and Luxury in Every Stay
      </h1>
      <p className="text-lg text-white leading-relaxed text-center sm:text-left">
        Experience the ultimate comfort and luxury in our elegantly designed hotel rooms. 
        Each room features a cozy king-sized bed, modern amenities, a spacious en-suite 
        bathroom, and breathtaking views of the city. Perfect for both leisure and 
        business travelers, our rooms provide the ideal combination of style, 
        convenience, and relaxation. Book now to make your stay unforgettable!
      </p>
    </div>
  </div>
</section>



    </>
  );
};

export default Paysection;
