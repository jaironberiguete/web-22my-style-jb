import { useState, useEffect, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import axios from "axios";

export const MiniCart = ({ cartItems = [], setCartItems, subtotal = 0 }) => {
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

  const handleRemove = async (productId) => {
    const token = localStorage.getItem("accessToken");
    try {
      await axios.delete(
        "http://127.0.0.1:8000/api/cart/remove/",
        {
          headers: { Authorization: `Bearer ${token}` },
          data: { product: productId },
        }
      );
      // Update cart locally
      const updatedItems = cartItems.filter(item => item.product !== productId);
      setCartItems(updatedItems);
    } catch (err) {
      console.error("Failed to remove item:", err.response?.data || err.message);
    }
  };

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
                <div key={item.id} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product_image || "https://via.placeholder.com/50"}
                      alt={item.product_name}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm font-medium">{item.product_name}</p>
                      <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.product)}
                    className="hover:text-red-700 font-bold text-lg"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="mt-4 flex justify-between text-sm font-semibold border-t pt-3 border-gray-700">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          )}

          <div className="mt-4 flex gap-2 border-t pt-5 border-gray-700">
            <button className="flex-1 py-2 rounded text-sm border rounded-lg hover:bg-white hover:text-black transition font-bold">
              View Cart
            </button>
            <button className="flex-1 py-2 rounded text-sm border rounded-lg hover:bg-white hover:text-black transition font-bold">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );};