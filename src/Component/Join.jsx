import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"

const Join = () => {
  return<>
   {/* <motion.div
   initial={{ opacity: 0 }} 
   whileInView={{ opacity: 1 }} 
  //  viewport={{ once: true }} 
   transition={{ duration: 1 }} 
    className="flex flex-col gap-2 bg-gradient-to-t from-black via-blue-600 to-black items-center">
      <h1 className="p-6 font-bold text-white text-2xl">Explore Our Rooms</h1>
      <p className="p-2 text-white text-center sm:px-10">
      Step into a world of elegance and comfort with our meticulously designed hotel rooms. Each space is crafted to provide a relaxing retreat, featuring luxurious furnishings, modern amenities, and a serene ambiance. Whether you’re looking for a cozy escape or a spacious suite, our rooms are tailored to meet your every need. Experience the perfect blend of style and convenience—your ideal stay begins here.
      </p>
      <Link
        to={"/rooms"}
        className="bg-blue-500 font-bold mt-4 text-white py-3 px-5 rounded-md"
      >
        Seen All Rooms
      </Link>
      <section className="grid mt-4 sm:grid-cols-2 gap-4 text-center">
        <motion.div

initial={{ opacity: 0, x: -200 }} 
whileInView={{ opacity: 1, x: 0 }} 
transition={{ duration: 1}}
// viewport={{ once: true }}
          data-aos="fade-right"
          className="p-2 rounded-md bg-blue-300 shadow-lg"
        >
          <h1 className="font-bold text-2xl py-3">Why Choose Our Hotel Rooms?</h1>
          <p className="p-2">
          At our hotel, we believe in providing more than just a place to stay. Our rooms are thoughtfully designed to offer the perfect balance of luxury and comfort, ensuring a memorable experience for every guest. From modern amenities to breathtaking views, we go above and beyond to exceed your expectations.
          </p>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: 200 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1}}
        // viewport={{ once: true }}
          data-aos="fade-left"
          className="p-2 rounded-md bg-blue-300 shadow-lg"
        >
          <h1 className="font-bold text-2xl py-3">Experience the Best Stay with Us</h1>
          <p className="p-2">
          Whether you,re traveling for business or leisure, our hotel rooms are tailored to meet your needs. Enjoy a cozy bed, state-of-the-art facilities, and a welcoming ambiance that makes you feel right at home. Your satisfaction is our top priority!
          </p>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 200 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1}}
        // viewport={{ once: true }}
        
        className="p-2 rounded-md bg-blue-300 shadow-lg">
          <h1 className="font-bold text-2xl py-3">Discover the Difference in Comfort and Luxury</h1>
          <p className="p-2">
          Our hotel is committed to delivering an unmatched hospitality experience. With spacious rooms, premium furnishings, and world-class service, we offer everything you need to unwind and relax during your stay.
          </p>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 200 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1}}
        // viewport={{ once: true }}
        
        className="p-2 rounded-md bg-blue-300 shadow-lg">
          <h1 className="font-bold text-2xl py-3">The Perfect Blend of Comfort, Style, and Convenience</h1>
          <p className="p-2">
          Choose us for your next getaway and indulge in the ultimate hotel experience. From top-notch amenities to attentive service, every detail is designed to make your stay unforgettable.
          </p>
        </motion.div>
      </section>
    </motion.div> */}

    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="flex flex-col gap-4 bg-gradient-to-t from-black via-blue-600 to-black items-center px-4 sm:px-6 md:px-10 py-8"
>
  <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl text-center">
    Explore Our Rooms
  </h1>
  <p className="text-white text-center sm:px-8 md:px-12">
    Step into a world of elegance and comfort with our meticulously designed hotel rooms. Each space is crafted to provide a relaxing retreat, featuring luxurious furnishings, modern amenities, and a serene ambiance. Whether you’re looking for a cozy escape or a spacious suite, our rooms are tailored to meet your every need. Experience the perfect blend of style and convenience—your ideal stay begins here.
  </p>
  <Link
    to={"/rooms"}
    className="bg-blue-500 font-bold mt-6 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-all"
  >
    See All Rooms
  </Link>

  <section className="grid gap-6 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {/* First Card */}
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-4 bg-blue-300 shadow-lg rounded-md"
    >
      <h1 className="font-bold text-2xl py-3">Why Choose Our Hotel Rooms?</h1>
      <p>
        At our hotel, we believe in providing more than just a place to stay. Our rooms are thoughtfully designed to offer the perfect balance of luxury and comfort, ensuring a memorable experience for every guest. From modern amenities to breathtaking views, we go above and beyond to exceed your expectations.
      </p>
    </motion.div>

    {/* Second Card */}
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-4 bg-blue-300 shadow-lg rounded-md"
    >
      <h1 className="font-bold text-2xl py-3">Experience the Best Stay with Us</h1>
      <p>
        Whether you’re traveling for business or leisure, our hotel rooms are tailored to meet your needs. Enjoy a cozy bed, state-of-the-art facilities, and a welcoming ambiance that makes you feel right at home. Your satisfaction is our top priority!
      </p>
    </motion.div>

    {/* Third Card */}
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-4 bg-blue-300 shadow-lg rounded-md"
    >
      <h1 className="font-bold text-2xl py-3">Discover the Difference in Comfort and Luxury</h1>
      <p>
        Our hotel is committed to delivering an unmatched hospitality experience. With spacious rooms, premium furnishings, and world-class service, we offer everything you need to unwind and relax during your stay.
      </p>
    </motion.div>

    {/* Fourth Card */}
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-4 bg-blue-300 shadow-lg rounded-md"
    >
      <h1 className="font-bold text-2xl py-3">The Perfect Blend of Comfort, Style, and Convenience</h1>
      <p>
        Choose us for your next getaway and indulge in the ultimate hotel experience. From top-notch amenities to attentive service, every detail is designed to make your stay unforgettable.
      </p>
    </motion.div>
  </section>
</motion.div>



  </>
}

export default Join