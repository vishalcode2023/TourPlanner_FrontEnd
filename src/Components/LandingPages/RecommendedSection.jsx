import React from "react";
import { ArrowRight } from "lucide-react";

const RecommendedSection = () => {
  const places = [
    {
      name: "Houseboat in Alleppey",
      desc: "Cruise through the serene backwaters of Kerala in a traditional houseboat.",
      price: "3000.00",
      image:
        "https://images.unsplash.com/photo-1593417033942-bcdf26b74700?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG91c2Vib2F0JTIwaW4lMjBBbGxlcHBleXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Camel Safari in Jaisalmer",
      desc: "Explore the golden sands of the Thar Desert on a majestic camel ride.",
      price: "3000",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Trekking in Manali",
      desc: "Embrace the Himalayas and hike through scenic pine forests and valleys.",
      price: "4200.00",
      image:
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuYWxpfGVufDB8fDB8fHww",
    },
    {
      name: "Tea Gardens of Munnar",
      desc: "Wander through lush green tea plantations in the hills of Kerala.",
      price: "1500.00",
      image:
        "https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="w-full px-6 md:px-20 py-16 bg-white">
      <div className="flex flex-col gap-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Recommended For You
        </h2>
        <p className="text-gray-500 text-sm">
          We hope you find these travel ideas enjoyable!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {places.map((place, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden relative shadow-lg group hover:scale-[1.01] transition-transform duration-300"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-72 object-cover"
            />
            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
              {place.price}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white text-lg font-semibold">
                {place.name}
              </h3>
              <p className="text-white text-sm mt-1 line-clamp-2">
                {place.desc}
              </p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded-full text-sm flex items-center gap-2">
                Booking Trip <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedSection;
