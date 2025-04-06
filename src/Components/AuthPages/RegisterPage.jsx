import React, { useState } from "react";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../LandingPages/Footer";
import instance from "../Axios/Axios";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const RegisterPage = () => {

  const usenavgator = useNavigate();

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { username, email, password };
    console.log("Form submitted:", formData);

    const response = await instance.post("/auth/register", formData, {
      withCredentials: true,
    });

    if (response.status === 200) {
      console.log("Registration successful:", response.data);
      toast.success("Register successful!")
      const token = response.data.token;
      localStorage.setItem("token", token);
      setTimeout(() => usenavgator('/HeroContainer'),1500);
    } else {
      console.error("Registration failed:", response.data);
      toast.error(" Something Went Wrong ");
    } 
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="w-[98%] m-auto">
        <Navlinks />
      </div>

      {/* Form + Background Section */}
      <div className="relative flex-grow">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Form Content */}
        <section className="relative z-10 flex items-center justify-center px-4 py-16">
          <div className="backdrop-blur-md bg-white/30 shadow-2xl rounded-3xl p-10 w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
              Create an Account
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-white/40 bg-white/10 text-white placeholder-white rounded-xl focus:outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-white/40 bg-white/10 text-white placeholder-white rounded-xl focus:outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-white/40 bg-white/10 text-white placeholder-white rounded-xl focus:outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-xl font-medium hover:opacity-90"
              >
                Register
              </button>
            </form>
            <p className="text-center text-sm text-white mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-green-300 font-medium">
                Login
              </a>
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPage;
