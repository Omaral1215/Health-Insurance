import React from "react";
// import AdminSectionCard from "./AdminSectionCard";
import TotalPremiumCard from "./TotalPremiumCard";
import TotalCustomersCard from "./TotalCustomersCard";
import TotalClaimsCard from "./TotalClaimsCard";
import TotalPlansCard from "./TotalPlansCard";
import Charts from "./Charts";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Admin Dashboard</h1>
      <TotalPremiumCard />
      <TotalCustomersCard />
      <TotalClaimsCard />
      <TotalPlansCard />
      <Charts />
    </div>
  );
};

export default Dashboard;
