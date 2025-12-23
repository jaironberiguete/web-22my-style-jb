import { MiniCart } from "../utils/MiniCart";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const Navbar = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null); // New state for user info
  const token = localStorage.getItem("accessToken"); // JWT from login

  // Fetch cart on mount
  useEffect(() => {
    if (token) {
      axios.get("http://127.0.0.1:8000/api/cart/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setCart(res.data))
        .catch((err) => console.error(err.response?.data || err.message));

      // Fetch current user info
      axios.get("http://127.0.0.1:8000/api/auth/user/", {  // Make sure this endpoint exists in Django
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data))
        .catch((err) => console.error(err.response?.data || err.message));
    }
  }, [token]);


  return (
    <nav className="border-t border-l border-r border-gray-700 w-full flex justify-between items-center px-6 py-4 rounded-t-xl bg-gradient-to-r from-[#1A1F2A] to-[#0D1117] relative">
      <div className="text-xl font-semibold tracking-widest">22MYSTYLE</div>

      <ul className="hidden md:flex gap-10 text-sm text-gray-300">
        <li className="cursor-pointer hover:text-white">MEN</li>
        <li className="cursor-pointer hover:text-white">WOMEN</li>
        <li className="cursor-pointer hover:text-white">KIDS</li>
        <li className="cursor-pointer hover:text-white">SALE</li>
      </ul>

      <div className="hidden md:flex text-sm border rounded-lg hover:bg-white hover:text-black transition p-2 font-bold">
        {user ? (
        <span>Hi, {user.first_name || user.email}</span> // show first name or email
          ) : (
            <Link to="/login">LOGIN</Link>
          )}
        </div>

      {/* Mini Cart Component */}
      <MiniCart cartItems={cart?.items || []}
                subtotal={cart?.subtotal || 0} 
      />
    </nav>
  );
};
