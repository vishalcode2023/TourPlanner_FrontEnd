import React from "react";
import {
  FaHotel,
  FaCalendarAlt,
  FaUsers,
  FaSearch,
  FaMapMarkerAlt,
  FaMoon,
} from "react-icons/fa";

const HeroSearchSection = () => {
  return (
    <div className="relative w-[96%] m-auto min-h-screen bg-cover bg-center rounded-2xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-opacity-40">
        <img
          className="w-full h-full object-cover object-center"
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Nature"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-start text-left w-full h-full px-6 md:px-40 py-34 gap-8">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug mb-6">
            Where You Get Trapped in the Beauty of the World and Unforgettable Happiness! with Ai
          </h1>
          <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full font-medium hover:opacity-90">
            <FaHotel /> Register Now
          </button>
          <p className="mt-4 font-bold text-sm sm:text-base text-gray-200">
            At TripTrap, we believe that every journey is an opportunity for adventure, discovery, and unforgettable experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSearchSection;
