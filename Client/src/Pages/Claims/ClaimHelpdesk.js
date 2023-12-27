import React, { useState } from "react";

const ClaimHelpdesk = () => {
  const [state, setState] = useState("");
  const [helplineNumber, setHelplineNumber] = useState("");

  const handleStateChange = (selectedState) => {
    setState(selectedState);

    // Replace fictional helpline numbers with actual numbers for each state
    const helplineNumbers = {
      "Andhra Pradesh": "1-800-111-1111",
      "Arunachal Pradesh": "1-800-222-2222",
      Assam: "1-800-333-3333",
      Bihar: "1-800-444-4444",
      Chhattisgarh: "1-800-555-5555",
      Goa: "1-800-666-6666",
      Gujarat: "1-800-777-7777",
      Haryana: "1-800-888-8888",
      "Himachal Pradesh": "1-800-999-9999",
      Jharkhand: "1-800-123-4567",
      Karnataka: "1-800-987-6543",
      Kerala: "1-800-543-2109",
      "Madhya Pradesh": "1-800-987-6543",
      Maharashtra: "1-800-543-2109",
      Manipur: "1-800-987-6543",
      Meghalaya: "1-800-543-2109",
      Mizoram: "1-800-987-6543",
      Nagaland: "1-800-543-2109",
      Odisha: "1-800-987-6543",
      Punjab: "1-800-543-2109",
      Rajasthan: "1-800-987-6543",
      Sikkim: "1-800-543-2109",
      "Tamil Nadu": "1-800-987-6543",
      Telangana: "1-800-543-2109",
      Tripura: "1-800-987-6543",
      "Uttar Pradesh": "1-800-543-2109",
      Uttarakhand: "1-800-987-6543",
      "West Bengal": "1-800-543-2109",
      // Add helpline numbers for other states of India
    };

    setHelplineNumber(helplineNumbers[selectedState] || "");
  };

  // List of all states of India
  const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    // Add all states of India
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Health Insurance Claim Helpdesk
      </h2>
      <div className="mb-4">
        <label className="block font-medium" htmlFor="state">
          Select State:
        </label>
        <select
          id="state"
          name="state"
          className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
          value={state}
          onChange={(e) => handleStateChange(e.target.value)}
          required
        >
          <option value="">Select State</option>
          {statesOfIndia.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      {helplineNumber && (
        <div className="mb-4">
          <p className="font-medium">Helpline Number for {state}:</p>
          <p>{helplineNumber}</p>
        </div>
      )}
      <div>
        <p className="font-medium">Other Relevant Information:</p>
        <p>
          If you have any queries or need assistance with your health insurance
          claim, our helpdesk is available to support you. Please reach out to
          the helpline number for your respective state.
        </p>
        <p>
          Our experienced representatives will guide you through the claim
          process, provide you with the necessary information, and address any
          concerns you may have regarding your health insurance claim.
        </p>
        <p>
          For urgent matters or emergencies, kindly dial our 24/7 helpline
          number for immediate assistance and support.
        </p>
        <p>
          Thank you for choosing us as your health insurance provider. We are
          committed to ensuring a seamless and hassle-free claim experience for
          you.
        </p>
      </div>
    </div>
  );
};

export default ClaimHelpdesk;
