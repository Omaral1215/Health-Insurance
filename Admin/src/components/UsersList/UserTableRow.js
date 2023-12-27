// UserTableRow.js
import React from "react";

const UserTableRow = ({ user, onDeleteClick, onUpdateClick }) => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="border px-4 py-2">
        {user.firstName} {user.lastName}
      </td>
      <td className="border px-4 py-2">{user.username}</td>
      <td className="border px-4 py-2">{user.email}</td>
      <td className="border px-4 py-2">{user.age}</td>
      <td className="border px-4 py-2">{user.gender}</td>
      <td className="border px-4 py-2">{user.address}</td>
      <td className="border px-4 py-2">{user.city}</td>
      <td className="border px-4 py-2">{user.country}</td>
      <td className="border px-4 py-2">
        <button
          onClick={() => onUpdateClick(user)}
          className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDeleteClick(user._id)}
          className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserTableRow;
