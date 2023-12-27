import React, { useState, useEffect } from "react";
import axios from "axios";

const InsurancePlan = () => {
  const [planData, setPlanData] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/plandata/getAll"
        );

        if (Array.isArray(response.data)) {
          setPlanData(response.data);
          setLoading(false);
        } else {
          throw new Error("Invalid data structure in API response");
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPlanData();
  }, []);

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
    setSelectedCategory("");
    setSelectedYear("");
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedYear("");
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("User ID:", userId);
    console.log("Selected Plan:", selectedPlan);
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Year:", selectedYear);
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-600">Error: {error.message}</div>
    );
  }

  const selectedPlanData = planData.find((plan) => plan.name === selectedPlan);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">
          Insurance Plan Calculator
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-gray-700 block">Name:</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700 block">Phone Number:</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700 block">User ID:</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700 block">Select Plan:</label>
            <select
              className="w-full p-2 border rounded-lg"
              value={selectedPlan}
              onChange={handlePlanChange}
            >
              <option value="">Select a Plan</option>
              {planData.map((plan) => (
                <option key={plan._id} value={plan.name}>
                  {plan.name}
                </option>
              ))}
            </select>
          </div>
          {selectedPlanData && (
            <div className="mb-4">
              <label className="text-gray-700 block">
                Select Plan Category:
              </label>
              <select
                className="w-full p-2 border rounded-lg"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Select a Category</option>
                {selectedPlanData.categories.map((category) => (
                  <option key={category._id} value={category.planCategory}>
                    {category.planCategory}
                  </option>
                ))}
              </select>
            </div>
          )}
          {selectedCategory && (
            <div className="mb-4">
              <label className="text-gray-700 block">Select Year:</label>
              <select
                className="w-full p-2 border rounded-lg"
                value={selectedYear}
                onChange={handleYearChange}
              >
                <option value="">Select a Year</option>
                {selectedPlanData.categories
                  .find(
                    (category) => category.planCategory === selectedCategory
                  )
                  .premiums.map((premium) => (
                    <option key={premium._id} value={premium.year}>
                      {premium.year} years
                    </option>
                  ))}
              </select>
            </div>
          )}
          {selectedYear && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">
                {selectedPlan} - {selectedCategory} ({selectedYear} years)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="text-left py-2 px-4">Sum Insured</th>
                      <th className="text-center py-2 px-4">Monthly Premium</th>
                      <th className="text-center py-2 px-4">Yearly Premium</th>
                      <th className="text-center py-2 px-4">
                        Premium (Without Tax)
                      </th>
                      <th className="text-center py-2 px-4">
                        Premium (With Tax)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="text-center py-2 px-4">
                        ₹
                        {selectedPlanData.categories
                          .find(
                            (category) =>
                              category.planCategory === selectedCategory
                          )
                          .premiums.find(
                            (premium) => premium.year === parseInt(selectedYear)
                          )
                          .sumInsured.toLocaleString("en-IN")}
                      </td>
                      <td className="text-center py-2 px-4">
                        ₹
                        {Math.round(
                          selectedPlanData.categories
                            .find(
                              (category) =>
                                category.planCategory === selectedCategory
                            )
                            .premiums.find(
                              (premium) =>
                                premium.year === parseInt(selectedYear)
                            ).premiumWithTax / 12
                        ).toLocaleString("en-IN")}
                      </td>
                      <td className="text-center py-2 px-4">
                        ₹
                        {selectedPlanData.categories
                          .find(
                            (category) =>
                              category.planCategory === selectedCategory
                          )
                          .premiums.find(
                            (premium) => premium.year === parseInt(selectedYear)
                          )
                          .premiumWithTax.toLocaleString("en-IN")}
                      </td>
                      <td className="text-center py-2 px-4">
                        ₹
                        {selectedPlanData.categories
                          .find(
                            (category) =>
                              category.planCategory === selectedCategory
                          )
                          .premiums.find(
                            (premium) => premium.year === parseInt(selectedYear)
                          )
                          .premiumWithoutTax.toLocaleString("en-IN")}
                      </td>
                      <td className="text-center py-2 px-4">
                        ₹
                        {selectedPlanData.categories
                          .find(
                            (category) =>
                              category.planCategory === selectedCategory
                          )
                          .premiums.find(
                            (premium) => premium.year === parseInt(selectedYear)
                          )
                          .premiumWithTax.toLocaleString("en-IN")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InsurancePlan;
