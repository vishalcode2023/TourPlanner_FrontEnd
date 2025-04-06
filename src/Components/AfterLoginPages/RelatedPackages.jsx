// components/RelatedPackages.jsx
import React, { useState } from "react";
import { FaBus, FaPlane, FaUsers, FaSyncAlt } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import instance from "../Axios/Axios"
import { useNavigate } from "react-router-dom";

const imagePool = {
  bus: [
    "https://images.unsplash.com/photo-1698925914102-633f2924d17c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZvbHZvJTIwYnVzfGVufDB8fDB8fHww",
    "https://imgs.search.brave.com/n-03wCl19aZYtFc80xAlSTWlm8IkMPYvbigb1VsP-J4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDg5NzAx/NTEuanBn",
    "https://imgs.search.brave.com/SDOcZyrw-1gGAmfyIxxGNJHuqL0vo8rUmI0NubUAfRw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRjL0tTUlRDLUFp/cmF2YXQtQ2x1Yi1D/bGFzcy1Wb2x2by1C/OVIuanBn",
    "https://imgs.search.brave.com/0X_JemuELh-xMWPTr5eDwglOwYFkVJ542kVLZxT5ynw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQ1LzkxLzcz/LzM2MF9GXzU0NTkx/NzMzOV9kcFEzYVZ1/SVpjaXNSamNYQXFz/WUlLNUFHeDViVmR3/ZC5qcGc",
    "https://imgs.search.brave.com/c4i7nehs8ObCBQyiBb0xgfJLlQYLxH7UrzEmQ2SQSPU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRjLzIx/L2RjLzRjMjFkY2Ez/MzQ1MDJhM2M5NGYz/ODQ0MDYzZWEwOGUz/LmpwZw",
    "https://imgs.search.brave.com/KMNvAJdfFTm1LVSsWZeSNTWfop3XVHIaQNcdkSTkz3I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YxL2Ix/L2VkL2YxYjFlZDk4/MGViZWYxZWMxODM0/MmYwNjFiNmMzZDk0/LmpwZw",
    "https://imgs.search.brave.com/6FN2-JMBxqosHv8rzEyz6cYJxKetdb9VPuxsYXN2_YA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2MwLzA3/L2M1L2MwMDdjNWIw/OWViMDBlYTIwYWY3/ZGY1NDk0ODlkMDE4/LmpwZw",
  ],
  flight: [
    "https://images.unsplash.com/photo-1571838217166-dad4e3a65554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbmVzJTIwaW5kaWFuJTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1726424601630-6f3bb6339f90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbmVzJTIwaW5kaWFuJTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1718197028321-a78a5cf60b36?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1655747676101-49762c45306c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxhbmVzJTIwaW5kaWFuJTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1558718755-54e3257a5820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYW5lcyUyMGluZGlhbiUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
    "hhttps://images.unsplash.com/photo-1740297550993-de747562fd92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBsYW5lcyUyMGluZGlhbiUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1547032441-77b6b09dc934?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1722927154683-045ef16c79fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBsYW5lcyUyMGluZGlhbiUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1624562150448-3db6afa30b05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHBsYW5lcyUyMGluZGlhbiUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
  ],
};

const RelatedPackages = ({ place, details,data }) => {

  const navigate = useNavigate();

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState(1);
  const [travelDate, setTravelDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [refreshCounter, setRefreshCounter] = useState(0);
  const [dynamicPrice, setDynamicPrice] = useState(null);


  console.log(" data from rr" + data);

  const generatePrice = (base, i) => base + Math.floor(Math.random() * 500 + i * 100);
  const getImageFromPool = (type, index) => {
    const pool = imagePool[type.toLowerCase()];
    const idx = (index + refreshCounter) % pool.length;
    return `${pool[idx]}?refresh=${refreshCounter}`;
  };

  const busPackages = Array.from({ length: 5 }).map((_, i) => {
    const price = generatePrice(999, i);
    return {
      type: "Bus",
      image: getImageFromPool("bus", i),
      title: `Luxury Bus to ${place}`,
      description: `Direct AC sleeper bus to ${place}, Includes water & Wi-Fi`,
      price,
      seats: 30 - i * 2,
    };
  });

  const flightPackages = Array.from({ length: 5 }).map((_, i) => {
    const price = generatePrice(3499, i);
    return {
      type: "Flight",
      image: getImageFromPool("flight", i),
      title: `Flight to ${place}`,
      description: `Fastest direct flight with in-flight meals and entertainment`,
      price,
      seats: 20 - i,
    };
  });

  const allPackages = [...busPackages, ...flightPackages];

  const handleSeatChange = (value) => {
    setSelectedSeats(Number(value));
    if (selectedPackage) {
      const updatedPrice = selectedPackage.price * Number(value);
      setDynamicPrice(updatedPrice);
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();
  
    const booking = {
      type: selectedPackage.type,
      title: selectedPackage.title,
      totalPrice: dynamicPrice || selectedPackage.price,
      seats: selectedSeats,
      travelDate,
      adults,
      children,
      place,
    };
  
    try {
      const res = await instance.post("/bus-details", booking);
  
      if (res.status === 200 || res.status === 201) {
        console.log("Booking saved successfully:", res.data);
        toast.success("Booking Confirmed!");
        setSelectedPackage(null); 
        navigate('/payment');
      } else {
        console.error("Unexpected response:", res);
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Booking failed:", error);
      toast.error("Booking failed. Please check the console for more info.");
    }
  };
  

  return (
    <div className="mt-6 p-4 bg-white  w-[90%] m-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Related Travel Packages to {place}
        </h2>
        <button
          className="flex items-center text-blue-600 text-sm hover:underline"
          onClick={() => setRefreshCounter((prev) => prev + 1)}
        >
          <FaSyncAlt className="mr-1" /> Refresh 
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPackages.map((pkg, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedPackage(pkg);
              setSelectedSeats(1);
              setTravelDate("");
              setAdults(1);
              setChildren(0);
              setDynamicPrice(pkg.price);
            }}
            className="cursor-pointer bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2 text-blue-600 text-lg">
                {pkg.type === "Bus" ? <FaBus /> : <FaPlane />}
                <span className="font-semibold">{pkg.title}</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">{pkg.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-gray-900 font-bold">₹{pkg.price}</div>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <FaUsers /> {pkg.seats} seats
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-4 relative">
            <button
              className="absolute top-2 right-4 text-gray-600 text-xl font-bold"
              onClick={() => setSelectedPackage(null)}
            >
              &times;
            </button>
            <img
              src={selectedPackage.image}
              alt={selectedPackage.title}
              className="w-full h-36 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold text-blue-600 mb-1">
              {selectedPackage.title}
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              {selectedPackage.description}
            </p>
            <div className="text-base font-bold mb-1">
              ₹{dynamicPrice || selectedPackage.price}
            </div>
            <div className="text-xs text-gray-600 mb-3 flex items-center gap-1">
              <FaUsers /> Seats Available: {selectedPackage.seats}
            </div>

            <div className="mb-3">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Select travel date:
              </label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Adults:
                </label>
                <input
                  type="number"
                  min={1}
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Children:
                </label>
                <input
                  type="number"
                  min={0}
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Select number of seats:
              </label>
              <select
                value={selectedSeats}
                onChange={(e) => handleSeatChange(e.target.value)}
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              >
                {Array.from({ length: selectedPackage.seats }).map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1} seat{i + 1 > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-xs text-gray-600 mb-3">
              <strong>Popular Places in {place}:</strong>
              <ul className="list-disc ml-5 mt-1">
                {details?.map((d, idx) => (
                  <li key={idx}>{d.name} - ₹{d.cost}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleBooking}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition w-full text-sm"
            >
              Book Now 
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RelatedPackages;
