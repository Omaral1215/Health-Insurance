// admin/components/Sidebar/Sidebar.js

import React from "react";

import SidebarLink from "./SidebarLink";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed left-0 top-0 w-64 h-full bg-blue-800 text-white shadow-lg transform ${
        isOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
      } transition-transform duration-300 z-10`}
    >
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Admin Panel</h1>
        <ul className="space-y-2">
          <SidebarLink to="/dashboard" label="Dashboard" icon="dashboard" />
          <SidebarLink to="/manage-plans" label="Manage Plans" icon="plans" />
          <SidebarLink
            to="/manage-claims"
            label="Manage Claims"
            icon="claims"
          />
          <SidebarLink
            to="/transactions"
            label="Transactions"
            icon="transactions"
          />
          <SidebarLink to="/user-list" label="Users List" icon="users" />
          {/* Add more links here */}
        </ul>
      </div>
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
