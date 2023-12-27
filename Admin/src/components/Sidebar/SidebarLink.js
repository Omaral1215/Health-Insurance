// admin/components/Sidebar/SidebarLink.js

import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLink = ({ to, label, icon }) => {
  return (
    <NavLink
      to={to}
      className="flex items-center py-2 pl-4 text-gray-300 hover:bg-gray-700"
      activeClassName="bg-gray-700 text-white"
    >
      <svg
        className="w-6 h-6 mr-3 text-gray-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Define icons for each link */}
        {icon === "dashboard" && (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h18M3 16h18M3 22h18"
          />
        )}
        {icon === "plans" && (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 10a1 1 0 01.894 1.447L13.332 21H5a2 2 0 01-2-2V5a2 2 0 012-2h8.333a1 1 0 01.894 1.447L8 15l6.227-10.447A1 1 0 0115.667 5H19a2 2 0 012 2v10a2 2 0 01-2 2h-6.333"
          />
        )}
        {icon === "claims" && (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        )}
        {icon === "transactions" && (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h7a4 4 0 014 4v14a4 4 0 01-4 4H3a2 2 0 01-2-2V5a2 2 0 012-2zm0 0l9 7-9 7"
          />
        )}
        {icon === "users" && (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7a4 4 0 100-8 4 4 0 000 8zm0 0c1.333 0 4 1.334 4 4v1c0 1.333-2.667 2-4 2s-4-.667-4-2v-1c0-2.666 2.667-4 4-4zm8 5a3 3 0 11-6 0 3 3 0 016 0zm0 0l4 4m0 0l-4 4m4-4H4"
          />
        )}
      </svg>
      {label}
    </NavLink>
  );
};

export default SidebarLink;
