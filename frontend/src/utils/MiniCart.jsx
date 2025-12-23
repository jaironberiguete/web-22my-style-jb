// src/utils/MiniCart.jsx
import { useState, useEffect, useRef } from "react";
import { addToCart } from "../utils/api";
import { ShoppingCart } from "lucide-react"; // use your icon library

export const MiniCart = ({ cartItems = [] }) => { // default to empty array
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-300 hover:text-white"
      >
        <ShoppingCart size={22} />
      </button>

      {open && (
        <div className="absolute right-0 mt-9 w-72 bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-4 z-50">
          <p className="font-semibold mb-3">Cart Preview</p>

          {cartItems.length === 0 ? (
            <p className="text-gray-400 text-sm">Your cart is empty</p>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.product_image}
                    alt={item.product_name}
                    className="w-10 h-10 rounded object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.product_name}</p>
                    <p className="text-xs text-gray-400">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 flex gap-2 border-t pt-5 border-gray-700">
            <button className="flex-1 py-2 rounded text-sm border rounded-lg hover:bg-white hover:text-black transition p-2 font-bold">
                View Cart
            </button>
            <button className="flex-1 bg-whitepy-2 rounded text-sm border rounded-lg hover:bg-white hover:text-black transition p-2 font-bold">
                Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
