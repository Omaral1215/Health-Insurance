import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PlanForm from "./PlanForm";

const ManagePlans = () => {
  const [plans, setPlans] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlans, setFilteredPlans] = useState([]);

  const filterPlans = useCallback(() => {
    const filtered = plans.filter((plan) => {
      const title = plan.title || "";
      const description = plan.description || "";

      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredPlans(filtered);
  }, [searchTerm, plans]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/plans/getAll")
      .then((response) => {
        setPlans(response.data);
      })
      .catch((error) => {
        console.error("Error fetching plans:", error);
      });
  }, []);

  useEffect(() => {
    filterPlans(); // Call it immediately to filter plans on component mount
  }, [searchTerm, plans, filterPlans]);

  const handleAddClick = () => {
    setIsAddMode(true);
    setSelectedPlan(null);
  };

  const handleEditClick = (plan) => {
    setIsAddMode(false);
    setSelectedPlan(plan);
  };

  const handleFormClose = () => {
    setIsAddMode(false);
    setSelectedPlan(null);
  };

  const handleDelete = (planId) => {
    axios
      .delete(`http://localhost:5000/plans/${planId}`)
      .then(() => {
        // Refresh the plan data after deleting the plan
        axios
          .get("http://localhost:5000/plans/getAll")
          .then((response) => {
            setPlans(response.data);
          })
          .catch((error) => {
            console.error("Error fetching plans:", error);
          });
      })
      .catch((error) => {
        console.error("Error deleting plan:", error);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Manage Health Insurance Plans
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search plans by title or description"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 px-3 border rounded-lg"
          />
        </div>
        <div className="mb-4 flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
            onClick={handleAddClick}
          >
            Add Plan
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                  Serial Number
                </th>
                <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                  Plan Titles
                </th>
                <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPlans.map((plan, index) => (
                <tr key={plan.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                    {plan.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                    {plan.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-md text-gray-900">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded-full mr-2"
                      onClick={() => handleEditClick(plan)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-full"
                      onClick={() => handleDelete(plan.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isAddMode || selectedPlan ? (
        <PlanForm
          plan={selectedPlan}
          onClose={handleFormClose}
          isEditMode={!isAddMode}
        />
      ) : null}
    </div>
  );
};

export default ManagePlans;
