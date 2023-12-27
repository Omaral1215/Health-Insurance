import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import logo from "../../image/logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../Plans/Auth/auth"; // Import the useAuth hook

const Navbar = () => {
  const { user, logout } = useAuth(); // Destructure user and logout from useAuth hook

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-[80px] mr-3" alt="Logo" />
        </Link>
        <ul className="hidden lg:flex items-center space-x-6">
          <li>
            <Link className="text-sm text-blue-600 font-bold" to="/plans">
              Plans
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link className="text-sm text-blue-600 font-bold" to="/renew">
              Renew
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link className="text-sm text-blue-600 font-bold" to="/claims">
              Claims
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link className="text-sm text-blue-600 font-bold" to="/about">
              About Us
            </Link>
          </li>
          <li className="text-gray-300"></li>
        </ul>
        <div className="flex items-center space-x-6">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600  flex items-center"
            href="tel:+91 8511411930"
          >
            <RiCustomerService2Line className="mr-1" />
            <span>Call Us</span>
          </button>
          {user ? (
            // Show the "Log Out" button if user is authenticated
            <button
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-500  flex items-center"
              onClick={handleLogout}
            >
              Log Out
            </button>
          ) : (
            // Show the "Login" link if user is not authenticated
            <Link className="text-sm text-blue-600 font-bold" to="/plans">
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
