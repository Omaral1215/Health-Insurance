import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiBell,
  FiChevronDown,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi"; // Import icons

const AdminNavbar = ({ toggleSidebar }) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const navigate = useNavigate();

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex items-center justify-between relative">
        <button
          onClick={toggleSidebar}
          className="text-white cursor-pointer focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Link
          to="/"
          className="text-white text-xl font-semibold flex items-center space-x-2"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            className="h-8"
          />
          <span>Caresure Health Insurance Admin</span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <button
              onClick={toggleUserDropdown}
              className="relative text-white flex items-center"
              aria-label="User Menu"
            >
              <span className="mr-1">Welcome, Admin</span>
              <FiChevronDown
                className={`h-5 w-5 transition-transform duration-300 transform ${
                  isUserDropdownOpen ? "rotate-180" : ""
                }`}
              />
              {isUserDropdownOpen && (
                <div className="origin-bottom-right absolute mt-[170px] w-48 bg-white border rounded-md shadow-lg py-1 z-20 right-0">
                  <Link
                    to="/profile"
                    className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <FiUser className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                  <Link
                    to="/settings"
                    className=" px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <FiSettings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className=" px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center space-x-2 w-full text-left"
                  >
                    <FiLogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </button>
          </div>
          <div className="relative group">
            <button
              onClick={toggleNotificationDropdown}
              className="text-white"
              aria-label="Notification Menu"
            >
              <FiBell className="h-6 w-6" />
            </button>
            {isNotificationDropdownOpen && (
              <div className="origin-bottom-right absolute mt-2 w-40 bg-white border rounded-md shadow-lg py-1 z-20 right-0">
                <Link
                  to="/notifications"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Notifications
                </Link>
                <Link
                  to="/messages"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Messages
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
