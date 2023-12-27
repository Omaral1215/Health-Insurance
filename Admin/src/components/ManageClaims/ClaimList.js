// admin/components/ManageClaims/ClaimList.js

import React from "react";

const ClaimList = () => {
  // Fetch claim data from API or context
  const claims = [
    { id: 1, name: "John Doe", status: "Pending" },
    { id: 2, name: "Jane Smith", status: "Approved" },
    // Add more claims
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">List of Insurance Claims</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((claim) => (
              <tr key={claim.id} className="bg-gray-50">
                <td className="py-3 px-4">{claim.id}</td>
                <td className="py-3 px-4">{claim.name}</td>
                <td className="py-3 px-4">
                  <span
                    className={`${
                      claim.status === "Pending"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {claim.status}
                  </span>
                </td>
                <td className="py-3 px-4 space-x-2">
                  {/* Add edit and delete buttons */}
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClaimList;
