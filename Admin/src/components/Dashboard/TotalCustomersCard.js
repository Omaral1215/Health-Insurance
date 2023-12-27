import React from "react";
import AdminSectionCard from "./AdminSectionCard";

const TotalCustomersCard = () => {
  // Calculate total number of customers (example)
  const totalCustomers = 1500;

  return (
    <AdminSectionCard title="Total Customers">
      <p className="text-lg font-semibold">{totalCustomers}</p>
    </AdminSectionCard>
  );
};

export default TotalCustomersCard;
