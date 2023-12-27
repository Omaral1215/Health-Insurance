import React, { useState } from "react";

const ClaimUpload = () => {
  const [claimType, setClaimType] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [memberName, setMemberName] = useState("");
  const [setUploadFile] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Assuming you would have some function to handle form submission and file upload
    // You can send the form data and file to the server using API calls

    // After successful submission, you can clear the form fields
    setClaimType("");
    setPolicyNumber("");
    setMemberName("");
    setUploadFile(null);

    // Show a success message or redirect to a success page
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Upload Health Insurance Claim Documents
      </h2>
      <form onSubmit={handleFormSubmit} className="mb-4">
        <div className="mb-4">
          <label className="block font-medium" htmlFor="claimType">
            Claim Type:
          </label>
          <select
            id="claimType"
            name="claimType"
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            value={claimType}
            onChange={(e) => setClaimType(e.target.value)}
            required
          >
            <option value="">Select Claim Type</option>
            <option value="Medical">Medical</option>
            <option value="Accident">Accident</option>
            {/* Add more claim types as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-medium" htmlFor="policyNumber">
            Policy Number:
          </label>
          <input
            type="text"
            id="policyNumber"
            name="policyNumber"
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            value={policyNumber}
            onChange={(e) => setPolicyNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium" htmlFor="memberName">
            Member Name:
          </label>
          <input
            type="text"
            id="memberName"
            name="memberName"
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            value={memberName}
            onChange={(e) => setMemberName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium" htmlFor="uploadFile">
            Upload Claim Documents:
          </label>
          <input
            type="file"
            id="uploadFile"
            name="uploadFile"
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            onChange={(e) => setUploadFile(e.target.files[0])}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Submit Claim
        </button>
      </form>
      <div>
        <p className="font-medium">Additional Information:</p>
        <p>
          To process your health insurance claim efficiently, please make sure
          to upload all relevant documents, including medical reports, bills,
          and any other required paperwork.
        </p>
        <p>
          Our claim settlement team will review your submitted documents and get
          back to you with the status of your claim within the shortest possible
          time.
        </p>
        <p>
          For any assistance or queries related to claim submission or the
          claims process, please contact our 24/7 helpline at the provided
          helpline number for your respective state.
        </p>
      </div>
    </div>
  );
};

export default ClaimUpload;
