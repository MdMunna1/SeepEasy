import React, { useState, useEffect } from "react";

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Modal automatically opens when the page loads
  useEffect(() => {
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 2000);
  }, []);

  return (
    // <>
    //   {isOpen && (
    //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    //       <div className="bg-gradient-to-r from-zinc-900 to-red-500 rounded-lg p-6 max-w-md mx-auto shadow-lg text-white relative">
    //         {/* Close Button */}
    //         <button
    //           onClick={() => setIsOpen(false)}
    //           className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
    //         >
    //           ✕
    //         </button>

    //         {/* Modal Content */}
    //         <div className="flex flex-col items-center text-center">
    //           <img
    //             src="https://img.freepik.com/free-vector/room-reservation-online-customer-support-consultation-virtual-reception-office_335657-2488.jpg?t=st=1735033183~exp=1735036783~hmac=f01056b0a81bd9bb8e9172066105e5775feb64571bc1b0e98ae97a94f20bc9b2&w=740"
    //             alt="Special Offer"
    //             className="rounded-md mb-4"
    //           />
    //           <h2 className="text-xl font-bold text-white mb-2">
    //             🎉 Special Offer!
    //           </h2>
    //           <p className="text-white mb-4">
    //             Get up to 50% off on your first purchase. Limited time offer!
    //           </p>
    //           <button
    //             onClick={() => setIsOpen(false)}
    //             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
    //           >
    //             Grab the Offer
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>
    <>
    {isOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-gradient-to-r from-zinc-900 to-red-500 rounded-lg p-4 sm:p-6 max-w-xs sm:max-w-md mx-auto shadow-lg text-white relative">
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
      >
        ✕
      </button>

      {/* Modal Content */}
      <div className="flex flex-col items-center text-center">
        <img
          src="https://img.freepik.com/free-vector/room-reservation-online-customer-support-consultation-virtual-reception-office_335657-2488.jpg?t=st=1735033183~exp=1735036783~hmac=f01056b0a81bd9bb8e9172066105e5775feb64571bc1b0e98ae97a94f20bc9b2&w=740"
          alt="Special Offer"
          className="rounded-md mb-4 w-32 sm:w-48 md:w-64" // Adjusting image size for smaller devices
        />
        <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
          🎉 Special Offer!
        </h2>
        <p className="text-sm sm:text-base text-white mb-4">
          Get up to 50% off on your first purchase. Limited time offer!
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm sm:text-base"
        >
          Grab the Offer
        </button>
      </div>
    </div>
  </div>
)}

    </>
    
  );
};

export default PopUp;
