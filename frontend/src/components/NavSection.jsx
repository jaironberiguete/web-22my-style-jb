import { MiniCart } from "../utils/MiniCart";
import { UserManage } from "../utils/UserManage";
import { useState, useEffect } from "react";
import axios from "axios";

export const Navbar = ({ authChanged }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setUser(null);
      setCart(null);
      return;
    }

    axios.get("/api/auth/user/", {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setUser(res.data));

    axios.get("/api/cart/", {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setCart(res.data));

  }, [authChanged]); // ✅ THIS is the key


  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
    setCart([]);
  };



  return (
    <nav className="border-t border-l border-r border-gray-700 w-full flex justify-between items-center px-6 py-4 rounded-t-xl bg-gradient-to-r from-[#1A1F2A] to-[#0D1117] relative">
      <div className="text-xl font-semibold tracking-widest"> <a href="/">22MYSTYLE</a></div>

      <ul className="hidden md:flex gap-10 text-sm text-gray-300">
        <li className="cursor-pointer hover:text-white">MEN</li>
        <li className="cursor-pointer hover:text-white">WOMEN</li>
        <li className="cursor-pointer hover:text-white">KIDS</li>
        <li className="cursor-pointer hover:text-white">SALE</li>
      </ul>

      {/* User dropdown */}
      <div className="hidden md:flex text-sm">
        <UserManage user={user} onLogout={handleLogout} />
      </div>

      {/* Mini Cart Component */}
      <MiniCart cartItems={cart?.items || []}
                subtotal={cart?.subtotal || 0} 
                setCart={setCart}
      />
    </nav>
  );
};
