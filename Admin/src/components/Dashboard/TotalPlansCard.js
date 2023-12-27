import React from "react";
import AdminSectionCard from "./AdminSectionCard";

const TotalPlansCard = () => {
  // Calculate total number of plans (example)
  const totalPlans = 20;

  return (
    <AdminSectionCard title="Total Plans">
      <p className="text-lg font-semibold">{totalPlans}</p>
    </AdminSectionCard>
  );
};

export default TotalPlansCard;
