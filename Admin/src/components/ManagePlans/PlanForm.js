// PlanForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const PlanForm = ({ plan, onClose, isEditMode }) => {
  const [planData, setPlanData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (plan) {
      setPlanData(plan);
    }
  }, [plan]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlanData({
      ...planData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditMode) {
      // Update existing plan
      axios
        .put(`http://localhost:5000/plans/${planData.id}`, planData)
        .then(() => {
          onClose();
        })
        .catch((error) => {
          console.error("Error updating plan:", error);
        });
    } else {
      // Add new plan
      axios
        .post("http://localhost:5000/plans/create", planData)
        .then(() => {
          onClose();
        })
        .catch((error) => {
          console.error("Error adding plan:", error);
        });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-1/2 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          {isEditMode ? "Edit Plan" : "Add Plan"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Title:</label>
            <input
              type="text"
              name="title"
              value={planData.title}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Description:</label>
            <textarea
              name="description"
              value={planData.description}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-2"
            >
              {isEditMode ? "Update" : "Add"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-semibold py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanForm;
