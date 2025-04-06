import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-16">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex-1">
          <h1 className="text-6xl font-bold leading-none">TripTrap<span className="text-primary">.</span></h1>
          <p className="text-sm mt-4 text-gray-400 max-w-xs">
            At TripTrap, we believe that every journey is an opportunity for adventure, discovery, and unforgettable experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-10 mt-10 lg:mt-0">
          <div>
            <h4 className="font-semibold text-lg mb-2">Navigation</h4>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>Deals</li>
              <li>Support</li>
              <li>Bookings</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Tools</h4>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>Visual Sales</li>
              <li>Trend Analysis</li>
              <li>Customer Segmentation</li>
              <li>Real-Time Dashboard</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Address</h4>
            <p className="text-gray-400 text-sm">Mysore<br />570016</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Contact</h4>
            <p className="text-gray-400 text-sm">Hello@greenify.com<br />+32(2) 322 918 9484</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-12 text-gray-500 text-xs">
        <p>&copy; TripTrap 2023</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <span>Privacy Policy</span>
          <span>Terms Of Use</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
