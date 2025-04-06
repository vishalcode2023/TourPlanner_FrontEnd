import React from "react";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../LandingPages/Footer";

const Support = () => {
  return (
    <div>
      <Navlinks />
      <div className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
            💬 Support & Help Center
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Contact Us</h2>
              <p className="text-gray-600 mb-2">📧 Email: <a href="mailto:support@tourai.com" className="text-indigo-500 underline">support@tourai.com</a></p>
              <p className="text-gray-600 mb-2">📞 Phone: <a href="tel:+919999999999" className="text-indigo-500 underline">+91 99999 99999</a></p>
              <p className="text-gray-600 mb-4">🕐 Support Hours: 9 AM – 6 PM (Mon–Sat)</p>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Common Issues:</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Payment issues</li>
                  <li>Booking not showing</li>
                  <li>Need to reschedule</li>
                  <li>Account/login problems</li>
                </ul>
              </div>
            </div>

            {/* Support Form */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Send a Message</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <textarea
                  rows="4"
                  placeholder="Describe your issue..."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
