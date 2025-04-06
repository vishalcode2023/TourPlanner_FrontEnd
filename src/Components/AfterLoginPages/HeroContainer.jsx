import React, { useState,useEffect } from "react";
import Navlinks from "../Navlinks/Navlinks";
import instance from "../Axios/Axios";
import { FaSearch } from "react-icons/fa";
import RelatedPackages from "./RelatedPackages";
import Footer from "../LandingPages/Footer";
import { useNavigate } from "react-router-dom";

const HeroContainer = () => {

  const navgation = useNavigate();

  const [place, setPlace] = useState("");
  const [days, setDays] = useState(1);
  const [results, setResults] = useState([]);
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTourPlan = async () => {
    if (!place) return;
    setLoading(true);
    try {
      const res = await instance.get(
        `/get-response?place=${place}&days=${days}`
      );
      setResults(res.data.places);
      setdata(res.data);
    } catch (err) {
      console.error("Failed to fetch tour plan:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navgation("/login");
    }
  }, [navgation]);

  return (
    <div className="w-full min-h-screen">
      <div className="w-[98%] m-auto">
        <Navlinks />
      </div>
      <div className="p-4 max-w-6xl mx-auto">
        {/* Search Panel */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full md:max-w-md">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              placeholder="Enter place (e.g. Bangalore)"
              className="bg-transparent focus:outline-none text-sm w-full"
            />
          </div>
          <input
            type="text"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            placeholder="Days.."
            max={10}
            className="px-4 py-2 rounded-full border border-gray-300 w-20 text-center"
          />
          <button
            onClick={fetchTourPlan}
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all"
          >
            Plan Tour
          </button>
        </div>

        {/* Tour Cards */}
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : results.length === 0 ? (
          <p className="text-center text-gray-500">
            No places yet. Try searching!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {results.map((place, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-64 object-center"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{place.name}</h3>
                  <p className="text-sm text-gray-500">
                    Estimated cost: ₹{place?.cost || place?.estimated_cost}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {!loading && data.places && (
        <RelatedPackages place={place} details={data.places} />
      )}
      <div className="">
        {!loading && data.places && ( <Footer />)}
      </div>
    </div>
  );
};

export default HeroContainer;
