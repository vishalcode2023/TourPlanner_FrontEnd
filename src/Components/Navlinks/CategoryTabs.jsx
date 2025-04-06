import React, { useState } from "react";
import {
  FaHotel,
  FaPlane,
  FaTrain,
  FaBus,
  FaCar,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";

const categories = [
  { name: "trips", icon: <FaHotel />, link: "/trips" },
  { name: "Flights", icon: <FaPlane />, link: "/flights" },
  { name: "Trains", icon: <FaTrain />, link: "/trains" },
  { name: "Bus & Travel", icon: <FaBus />, link: "/bus-travel" },
];

const CategoryTabs = () => {
  const [active, setActive] = useState("Hotels");

  return (
    <div className="p-4 overflow-x-auto whitespace-nowrap flex items-center gap-2 w-full ">
      {/* Search input */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 min-w-[330px] md:min-w-[380px]">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search Flight"
          className="bg-transparent focus:outline-none text-sm w-full"
        />
      </div>

      {/* Category buttons */}
      {categories.map((cat) => (
        <a
          key={cat.name}
          href={cat.link}
          onClick={() => setActive(cat.name)}
          className={` hidden md:flex items-center  gap-2 px-8 py-2 rounded-full text-sm whitespace-nowrap transition-all
            ${
              active === cat.name
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          {cat.icon}
          {cat.name}
        </a>
      ))}
    </div>
  );
};

export default CategoryTabs;