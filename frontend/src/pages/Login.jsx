// src/components/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios"; 

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("auth/login/", { email, password });
      // Store tokens in localStorage
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#0b0d12] ">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-t from-[#111827] to-[#0b0d12] p-8 rounded-lg shadow-lg w-full max-w-sm border-gray-700"
      >
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Login</h2>

        <label className="block text-gray-300 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block text-gray-300 mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-6 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full text-white border rounded-lg hover:bg-white hover:text-black transition font-semibold py-2 px-4 rounded"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};
