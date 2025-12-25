// src/components/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios"; 

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("auth/register/", {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      });

      // Optionally, log in automatically after registration
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);

      alert("Registration successful!");
      navigate("/"); // redirect to home
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.detail || "Registration failed");
    }
  };

  return (
    <div className="relative border border-gray-700 py-36 w-full bg-gradient-to-r from-[#111827] to-[#0b0d12] px-4 sm:px-10  flex flex-col md:flex-center  items-center justify-center overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-t from-[#111827] to-[#0b0d12] p-8 rounded-lg shadow-lg w-full max-w-sm border"
      >
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Register</h2>

        <label className="block text-gray-300 mb-2">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block text-gray-300 mb-2">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

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
          REGISTER
        </button>

        <p className="mt-4 text-gray-400 text-sm text-center">
          Already have an account? <a href="/login" className="text-blue-400">Login</a>
        </p>
      </form>
    </div>
  );
};
