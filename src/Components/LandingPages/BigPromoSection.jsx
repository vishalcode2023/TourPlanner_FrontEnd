import React from "react";
import { ArrowUpRight } from "lucide-react";

const BigPromoSection = () => {
  return (
    <section className="w-full px-6 md:px-20 py-16">
      <div className="flex flex-col lg:flex-row justify-between gap-12 items-start">
        {/* Left Side */}
        <div className="flex flex-col gap-4 max-w-xl">
          <span className="text-sm font-medium text-gray-500">Big Promo</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Tour Planning with AI<br /> Just Got Smarter!
          </h2>
          <p className="text-gray-600">
            Discover unbeatable travel deals and personalized itineraries powered by AI. Let TripTrap create your perfect journey effortlessly.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full w-fit mt-2 hover:opacity-90">
            Book Now
          </button>
        </div>

        {/* Promo Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1688735472397-076a9577c060?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGluZGlhbiUyMHRvdXJpc3R8ZW58MHx8MHx8fDA%3D"
              className="w-full h-full sm:h-48 md:h-52 object-cover"
              alt="Summer Promo"
            />
            <div className="absolute inset-0 bg-black/30 text-white p-4 flex flex-col justify-between">
              <span className="text-sm font-semibold">Summer Promo</span>
              <ArrowUpRight className="self-end bg-white text-black rounded-full p-1 w-6 h-6" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2">Let's Explore Together</h3>
              <p className="text-sm text-gray-600">
                Join us as we explore the wonders of the world and create memories that will last a lifetime.
              </p>
            </div>
            <ArrowUpRight className="mt-4 self-end bg-white text-black rounded-full p-1 w-6 h-6" />
          </div>

          {/* Card 3 */}
          <div className="relative bg-blue-50 rounded-2xl p-6 flex flex-col justify-between">
            <p className="text-sm text-gray-700">
              Enjoy a 50% discount on train tickets. Embrace the spirit of the season with TripTrap.
            </p>
            <div className="flex justify-between items-end mt-4">
              <span className="text-sm font-semibold">Ramadhan Promo</span>
              <ArrowUpRight className="bg-white text-black rounded-full p-1 w-6 h-6" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1597401923609-757b6f11e8ce?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full sm:h-48 md:h-52 object-cover"
              alt="Flight View"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end justify-end p-2">
              <ArrowUpRight className="bg-white text-black rounded-full p-1 w-6 h-6" />
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-orange-100 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2">Adventure Awaits</h3>
              <p className="text-sm text-gray-700">
                Discover thrilling destinations curated for your adrenaline cravings.
              </p>
            </div>
            <ArrowUpRight className="mt-4 self-end bg-white text-black rounded-full p-1 w-6 h-6" />
          </div>

          {/* Card 6 */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1689947674001-f9a8a08f0480?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwdGVtcGxzfGVufDB8fDB8fHww"
              className="w-full h-full sm:h-full md:h-52 object-cover"
              alt="Cultural Trip"
            />
            <div className="absolute inset-0 bg-black/25 text-white p-4 flex flex-col justify-between">
              <span className="text-sm font-semibold">Cultural Discovery</span>
              <ArrowUpRight className="self-end bg-white text-black rounded-full p-1 w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigPromoSection;
