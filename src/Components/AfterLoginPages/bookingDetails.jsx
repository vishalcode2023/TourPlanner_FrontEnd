import React, { useEffect, useState } from "react";
import instance from "../Axios/Axios";
import { FaRupeeSign } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../LandingPages/Footer";

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [click,setclick] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No token found, user might not be logged in.");
      setLoading(false);
      return;
    }

    const fetchBookings = async () => {
      try {
        const res = await instance.get("/get-details", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Fetched bookings:", res.data);
        setBookings(res.data || []);
      } catch (error) {
        console.error("Failed to fetch booking details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handlecancel = () => {
    setclick(!click);
  };
  

  return (
    <div>
      <Navlinks />
      <div className="min-h-screen py-10 px-4 bg-gray-50">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          🧳 My Bookings
        </h1>

        {loading ? (
          <p className="text-center text-gray-400">Loading bookings...</p>
        ) : bookings.length === 0 ? (
          <p className="text-center text-gray-500">No bookings found.</p>
        ) : (
          <div className="max-w-4xl mx-auto grid gap-6">
            {bookings.map((booking, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <MdLocationOn className="text-red-500" />
                    {booking.place} ({booking.type})
                  </h2>
                  <span className="text-green-600 font-bold text-lg flex items-center gap-1">
                    <FaRupeeSign />
                    {booking.totalPrice}
                  </span>
                </div>
                <div className="text-gray-600 text-sm mb-2">
                  <p><strong>Title:</strong> {booking.title}</p>
                  <p><strong>Adults:</strong> {booking.adults}, <strong>Children:</strong> {booking.children}</p>
                  <p><strong>Seats:</strong> {booking.seats}</p>
                  <p className="flex items-center gap-2">
                    <IoCalendarOutline />
                    <span>{new Date(booking.travelDate).toLocaleDateString()}</span>
                  </p>
                </div>
                <button
                  onClick={handlecancel}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                   {handlecancel ? "Cancel Booking" : "Cancelled"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BookingDetails;
