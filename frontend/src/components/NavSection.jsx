import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom"; // Make sure you have react-router-dom installed

export const Navbar = () => {
  return (
    <nav className="border-t border-l border-r border-gray-700 py-8 w-full flex justify-between items-center py-4 px-6 rounded-t-xl bg-gradient-to-r from-[#1A1F2A] to-[#0D1117]">
      <div className="text-xl font-semibold tracking-widest">22MYSTYLE</div>

      <ul className="hidden md:flex gap-10 text-sm text-gray-300">
        <li className="cursor-pointer hover:text-white">MEN</li>
        <li className="cursor-pointer hover:text-white">WOMEN</li>
        <li className="cursor-pointer hover:text-white">KIDS</li>
        <li className="cursor-pointer hover:text-white">SALE</li>
        <li className="cursor-pointer hover:text-white">
          <Link to="/login">LOGIN</Link>
        </li>
      </ul>

      <div className="text-xl cursor-pointer">
        <a href=" ">
          <ShoppingCart />
        </a>
      </div>
    </nav>
  );
};
