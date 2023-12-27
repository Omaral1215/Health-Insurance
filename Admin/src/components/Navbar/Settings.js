import React from "react";

const Settings = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-semibold mb-4">Settings</h1>
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">General Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-600">Language</label>
                <select className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  {/* Add more options */}
                </select>
              </div>
              <div>
                <label className="text-gray-600">Timezone</label>
                <select className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                  <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                  <option>(GMT+05:30) India Standard Time</option>
                  {/* Add more options */}
                </select>
              </div>
              {/* Add more fields */}
            </div>
          </div>
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-semibold mb-2">Security Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-600">Change Password</label>
                <input
                  type="password"
                  className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  placeholder="Enter new password"
                />
              </div>
              {/* Add more fields */}
            </div>
          </div>
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-semibold mb-2">Email Notifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <label className="ml-2 text-gray-600">Receive newsletter</label>
              </div>
              {/* Add more fields */}
            </div>
          </div>
          {/* Add more sections */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
