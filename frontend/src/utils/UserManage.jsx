import { useState, useEffect, useRef } from "react";
import { CircleUser } from "lucide-react";
import { Link } from "react-router-dom";
import { Login } from "../pages/Login";


export const UserManage = ({ user, onLogout }) => {
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
      {/* User Icon Button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-300 hover:text-white"
      >
        <CircleUser size={22} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-10 w-48 bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-4 z-50">
          {user ? (
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-white">
                Hi, {user.first_name}
              </span>
              <Link
                to="/profile"
                className="text-gray-300 hover:text-white text-sm border-t pt-3 border-gray-700"
              >
                PROFILE
              </Link>
              <button
                onClick={onLogout}
                className="text-sm text-red-500 hover:text-red-700 border-t pt-3 border-gray-700"
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Link
                to="/login"
                className="text-gray-300 hover:text-white text-sm "
              >
                LOG IN
              </Link>
              <Link
                to="/register"
                className="text-gray-300 hover:text-white text-sm border-t pt-3 border-gray-700"
              >
                REGISTER
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
