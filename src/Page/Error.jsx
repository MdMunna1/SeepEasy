import React from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="flex flex-col justify-center py-20 bg-gradient-to-t from-black via-red-500 to-black  items-center">
        <h1 className="text-4xl py-3 mt-5">
          <MdError />
        </h1>
        <p className="text-7xl py-2 font-bold">404</p>
        <h1 className="font-semibold text-2xl py-4">Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist</p>

        <div className="mt-4">
        <span className="loading text-3xl loading-spinner text-accent"></span>
        </div>
        <button className="bg-blue-500 py-2 px-4 rounded-lg text-white font-bold mt-10">
          <Link to={"/"}>Back To Home</Link>
        </button>
      </section>
    </>
  );
};

export default Error;
