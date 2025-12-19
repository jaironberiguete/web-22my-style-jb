import { MiniCart } from "../utils/MiniCart"; // import component
import { Link } from "react-router-dom";

export const Navbar = () => {
  const cartItems = [
    { id: 1, name: "Black Hoodie", image: "", quantity: 1 },
    { id: 2, name: "Black Hoodie", image: "", quantity: 1 },
    { id: 3, name: "Black Hoodie", image: "", quantity: 1 },
    { id: 1, name: "Black Hoodie", image: "", quantity: 1 },
    { id: 2, name: "Black Hoodie", image: "", quantity: 1 },
    { id: 3, name: "Black Hoodie", image: "", quantity: 1 },
  ];

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
        <Link to="/login">LOGIN</Link>
        </div>

      {/* Mini Cart Component */}
      <MiniCart cartItems={cartItems} />
    </nav>
  );
};
