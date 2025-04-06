import React, { useState } from "react";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../LandingPages/Footer";
import instance from "../Axios/Axios";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };
    console.log("Login submitted:", formData);

    try {
      const response = await instance.post("/auth/login", formData, {
        withCredentials: true,
      });

      if (response.status === 200) {
        // console.log("Login successful:", response.data);
        toast.success("Login successful!");
        const token = response.data.token;
        localStorage.setItem("token", token);
        setTimeout(() => navigate("/HeroContainer"), 1000);
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      toast.error("Login failed. Please register first.");
      setTimeout(() => navigate("/register"), 1500);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Toaster position="top-center" reverseOrder={false} />
      <Navlinks />

      {/* Login Background */}
      <div className="relative flex-grow">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Login Form */}
        <section className="relative z-10 flex items-center justify-center px-4 py-16">
          <div className="backdrop-blur-md bg-white/30 shadow-2xl rounded-3xl p-10 w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
              Welcome Back
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
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
                Login
              </button>
            </form>
            <p className="text-center text-sm text-white mt-4">
              Don’t have an account?{" "}
              <a href="/register" className="text-green-300 font-medium">
                Register
              </a>
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
