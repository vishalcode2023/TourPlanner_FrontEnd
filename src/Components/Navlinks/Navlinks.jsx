import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const Navlinks = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const navLinks = [ "Support", "bookings"];

  // Check token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logout successful!");
    setIsLoggedIn(false);
    setTimeout(() => {
      navigate("/login");
    }, 2000); // Slightly reduced to make it feel faster
  };


  return (
    <nav className="flex w-[95%] m-auto items-center justify-between px-3 py-3 bg-white my-5 md:px-8 font-bold">
      <div className="text-xl font-bold">TripTrap.</div>

      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`${link}`}
            className="text-gray-700 hover:text-black"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center space-x-3">
        {!isLoggedIn ? (
          <>
            <button className="px-4 py-2 border rounded-full">
              <Link to="/login">Login</Link>
            </button>
            <button className="px-5 py-2 bg-black text-white rounded-full">
              <Link to="/register">Register</Link>
            </button>
          </>
        ) : (
          <button
            className="px-5 py-2 bg-black text-white rounded-full"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white px-4 py-4 shadow-md z-50 md:hidden">
          <div className="flex flex-col space-y-5 font-bold">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-black"
              >
                {link}
              </a>
            ))}

            {!isLoggedIn ? (
              <>
                <Link to="/login" className="text-gray-700 hover:text-black">
                  Login
                </Link>
                <Link to="/register" className="text-gray-700 hover:text-black">
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navlinks;
