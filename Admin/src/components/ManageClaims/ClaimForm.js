// admin/components/ManageClaims/ClaimForm.js

import React, { useState } from "react";

const ClaimForm = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, API call, etc.
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add New Insurance Claim</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="status" className="block font-semibold mb-1">
            Status
          </label>
          <input
            type="text"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
        >
          Add Claim
        </button>
      </form>
    </div>
  );
};

export default ClaimForm;
