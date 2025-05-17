import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ profile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.clear("token");
  };

  const navItem = [
    { label: "Dashboard", url: "/dashboard" },
    { label: "Reports", url: "/reports" },
    { label: "Lead Generate", url: "/lead-generate" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50 transition duration-300 ease-in-out">
      <div className="  border-b-violet-600 max-w-full mx-auto px-4 sm:px-6 lg:px-8 p-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-2">
            <div className="text-xl font-bold text-blue-600 hover:text-blue-700 cursor-pointer transition duration-300">
              Kaizen Dashboard
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItem.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="text-gray-700 hover:text-white hover:bg-blue-600 transition-all duration-300 ease-in-out px-4 py-2 rounded-lg transform hover:scale-105 hover:shadow-lg"
              >
                {item.label}
              </Link>
            ))}

            {/* Profile Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 focus:outline-none">
                <span className="text-gray-700">
                  {profile ? (
                    profile.name
                  ) : (
                    <Link
                      to="/login"
                      className="text-gray-700 hover:text-blue-600"
                    >
                      Login
                    </Link>
                  )}
                </span>
                <img
                  className="h-8 w-8 rounded-full border-2 border-gray-300 hover:border-blue-600 transition duration-300"
                  src="https://i.pravatar.cc/150"
                  alt="Profile"
                />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-10 opacity-0 group-hover:opacity-100 transition duration-300 transform scale-95 group-hover:scale-100">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-200"
                >
                  Profile
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-200"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md transition-all duration-300 ease-in-out transform">
          {navItem.map((item, index) => (
            <div
              key={index}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 hover:bg-blue-600 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out rounded-lg"
            >
              <Link
                to={item.url}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white transition-all duration-300 ease-in-out"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
