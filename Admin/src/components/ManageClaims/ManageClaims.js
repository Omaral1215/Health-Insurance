import React, { useState } from "react";

const ManageClaims = () => {
  const [claims, setClaims] = useState([
    {
      _id: "1",
      planName: "Premium Plan",
      planId: "101",
      transactionId: "TXN123",
      amountPaid: 500,
      validity: 12,
      status: "Pending",
      coverageAmount: " ₹1,000,000",
      userId: "123",
    },
    {
      _id: "2",
      planName: "Basic Plan",
      planId: "102",
      transactionId: "TXN456",
      amountPaid: 300,
      validity: 6,
      status: "Pending",
      coverageAmount: " ₹500,000",
      userId: "456",
    },
    // Add more dummy claims here
  ]);

  const [selectedClaim, setSelectedClaim] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const approveClaim = (claimId) => {
    // Implement your logic to approve the claim here
    // Update the claim status in the dummy data
    const updatedClaims = claims.map((claim) =>
      claim._id === claimId ? { ...claim, status: "Approved" } : claim
    );
    setClaims(updatedClaims);
  };

  const rejectClaim = (claimId) => {
    // Implement your logic to reject the claim here
    // Update the claim status in the dummy data
    const updatedClaims = claims.map((claim) =>
      claim._id === claimId ? { ...claim, status: "Rejected" } : claim
    );
    setClaims(updatedClaims);
  };

  const viewClaimDetails = (claim) => {
    setSelectedClaim(claim);
    const user = getUserDetails(claim.userId); // Get user details based on userId
    setSelectedUser(user);
  };

  const closeClaimDetails = () => {
    setSelectedClaim(null);
    setSelectedUser(null);
  };

  // Function to get user details based on userId
  const getUserDetails = (userId) => {
    // Implement your logic to fetch user details here
    // For this example, I'll return static user details
    return {
      userId: userId,
      userName: "John Doe",
      age: 30,
      bloodGroup: "A+",
      planAmount: "₹1,000,000",
      validity: 12,
      otherPlans: ["Basic Plan", "Additional Health Rider"],
      address: "123 Main St, City",
      phoneNumber: "555-555-5555",
      dob: "1990-01-01",
      familyMembers: ["Spouse", "Child 1", "Child 2"],
    };
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Manage Plan Requests</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Plan Requests</h2>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Plan Name</th>
              <th className="border px-4 py-2">Plan ID</th>
              <th className="border px-4 py-2">Transaction ID</th>
              <th className="border px-4 py-2">Amount Paid</th>
              <th className="border px-4 py-2">Validity</th>
              <th className="border px-4 py-2">Coverage Amount</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((claim) => (
              <tr key={claim._id}>
                <td className="border px-4 py-2">{claim.planName}</td>
                <td className="border px-4 py-2">{claim.planId}</td>
                <td className="border px-4 py-2">{claim.transactionId}</td>
                <td className="border px-4 py-2">₹{claim.amountPaid}</td>
                <td className="border px-4 py-2">{claim.validity} months</td>
                <td className="border px-4 py-2">{claim.coverageAmount}</td>
                <td className="border px-4 py-2">
                  <span
                    className={`${
                      claim.status === "Pending"
                        ? "text-yellow-500"
                        : claim.status === "Approved"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {claim.status}
                  </span>
                </td>
                <td className="border px-4 py-2">
                  {claim.status === "Pending" && (
                    <div className="space-x-2">
                      <button
                        onClick={() => approveClaim(claim._id)}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => rejectClaim(claim._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => viewClaimDetails(claim)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        View Profile
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedClaim && (
        <div className="bg-white rounded-lg shadow p-6 mt-4">
          <h2 className="text-xl font-semibold mb-4">Plan Request Details</h2>
          <p>Plan Name: {selectedClaim.planName}</p>
          <p>Plan ID: {selectedClaim.planId}</p>
          <p>Transaction ID: {selectedClaim.transactionId}</p>
          <p>Amount Paid: ₹{selectedClaim.amountPaid}</p>
          <p>Validity: {selectedClaim.validity} months</p>
          <p>Coverage Amount: {selectedClaim.coverageAmount}</p>
          <p>Status: {selectedClaim.status}</p>

          {selectedUser && (
            <>
              <h2 className="text-xl font-semibold mt-4 mb-2">User Profile</h2>
              <p>User ID: {selectedUser.userId}</p>
              <p>Name: {selectedUser.userName}</p>
              <p>Age: {selectedUser.age}</p>
              <p>Blood Group: {selectedUser.bloodGroup}</p>
              <p>Plan Amount: {selectedUser.planAmount}</p>
              <p>Validity: {selectedUser.validity} months</p>
              <p>Other Plans: {selectedUser.otherPlans.join(", ")}</p>
              <p>Address: {selectedUser.address}</p>
              <p>Phone Number: {selectedUser.phoneNumber}</p>
              <p>Date of Birth: {selectedUser.dob}</p>
              <p>Family Members: {selectedUser.familyMembers.join(", ")}</p>
            </>
          )}

          <div className="mt-4">
            <button
              onClick={closeClaimDetails}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClaims;
