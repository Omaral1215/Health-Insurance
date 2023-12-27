import React from "react";
import AdminSectionCard from "./AdminSectionCard";

const TotalClaimsCard = () => {
  // Calculate total claims amount (example)
  const totalClaimsAmount = 50000;

  return (
    <AdminSectionCard title="Total Claims Amount">
      <p className="text-lg font-semibold">₹{totalClaimsAmount}</p>
    </AdminSectionCard>
  );
};

export default TotalClaimsCard;
