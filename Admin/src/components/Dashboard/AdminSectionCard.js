import React from "react";

const AdminSectionCard = ({ title, children }) => {
  return (
    <section className="mb-6 p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {children}
    </section>
  );
};

export default AdminSectionCard;
