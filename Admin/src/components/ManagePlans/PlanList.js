import React from "react";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri"; // Import icons

const PlanList = () => {
  // Fetch plan data from API or context
  const plans = [
    { id: 1, title: "Plan 1", category: "Family" },
    { id: 2, title: "Plan 2", category: "Diabetes" },
    // Add more plans
  ];

  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">
        Manage Health Insurance Plans
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.id} className="border-b border-gray-300">
                <td className="py-4 px-6 text-gray-600">{plan.id}</td>
                <td className="py-4 px-6 text-gray-800">{plan.title}</td>
                <td className="py-4 px-6 text-gray-800">{plan.category}</td>
                <td className="py-4 px-6 flex space-x-2">
                  <button className="text-blue-600 hover:underline">
                    <RiEdit2Line /> Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    <RiDeleteBinLine /> Delete
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

export default PlanList;
