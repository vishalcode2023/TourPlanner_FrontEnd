import React, { useState } from "react";
import instance from "../Axios/Axios";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { HiOutlineBanknotes } from "react-icons/hi2";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../LandingPages/Footer";

const RazorpayCheckout = ({ amount = 500, currency = "INR" }) => {
  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    const isLoaded = await loadRazorpayScript();

    if (!isLoaded) {
      alert("Razorpay SDK failed to load. Check your internet connection.");
      setLoading(false);
      return;
    }

    try {
      const res = await instance.post("/payment/create-order", {
        amount,
        currency,
      });
      const { order } = res.data;

      const options = {
        // key: ,
        amount: order.amount,
        currency: order.currency,
        name: "TripTrap",
        description: "Secure Tour Booking",
        image: "https://yourdomain.com/logo.png",
        order_id: order.id,
        handler: function (response) {
          alert("Payment successful!");
          console.log("Payment Success:", response);
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#0d6efd",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
        <Navlinks/>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="w-full max-w-md p-6 bg-white rounded-3xl shadow-2xl text-center space-y-6 sm:p-10">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700">
              TripTrap Checkout
            </h2>
            <p className="text-4xl font-extrabold text-gray-900 mt-1 flex justify-center items-center gap-1">
              <FaRupeeSign className="text-2xl" />
              {amount}{" "}
              <span className="text-base font-medium text-gray-500">
                {currency}
              </span>
            </p>
            <p className="text-sm text-gray-400 mt-2 italic">
              Adventure begins with one click
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-2xl text-left space-y-3">
            <p className="text-sm font-semibold text-gray-700">
              Select Payment Method
            </p>

            <div className="flex items-center gap-3 p-3 bg-white border rounded-xl hover:shadow transition cursor-pointer">
              <div className="w-10 h-10 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full">
                <MdOutlineSecurity size={22} />
              </div>
              <div className="text-sm">
                <p className="font-semibold">Pay with Razorpay</p>
                <p className="text-gray-500 text-xs">
                  Fast & secure payment gateway
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white border rounded-xl hover:shadow transition cursor-pointer">
              <div className="w-10 h-10 bg-green-100 text-green-600 flex items-center justify-center rounded-full">
                <HiOutlineBanknotes size={22} />
              </div>
              <div className="text-sm">
                <p className="font-semibold">Bank Transfer</p>
                <p className="text-gray-500 text-xs">
                  Manual payment option available
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-white text-lg transition-all duration-300 shadow-md hover:shadow-xl ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800"
            }`}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            ) : (
              <>Checkout & Pay ₹{amount}</>
            )}
          </button>

          <p className="text-xs text-gray-400">
            By proceeding, you agree to our{" "}
            <span className="underline cursor-pointer">Terms</span> and{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default RazorpayCheckout;
