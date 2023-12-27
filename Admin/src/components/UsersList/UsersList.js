import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTableRow from "./UserTableRow";
import EditUser from "./EditUser"; // Import the EditUser component

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // Track the selected user for editing

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    // Fetch user data
    axios
      .get("http://localhost:5000/users/getAll")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }, [searchQuery]);

  const handleDeleteUser = (userId) => {
    // Send a DELETE request to your server's delete endpoint
    axios
      .delete(`http://localhost:5000/users/${userId}`)
      .then(() => {
        // After deletion, you can fetch the updated user list if needed
        const updatedUsers = users.filter((user) => user._id !== userId);
        setUsers(updatedUsers);  
      })
      .catch((error) => {
        console.error("Error deleting user: ", error);
      });
  };

  const handleEditClick = (user) => {
    // Set the selected user for editing
    setSelectedUser(user);
  };

  const handleCancelEdit = () => {
    // Clear the selected user when canceling edit
    setSelectedUser(null);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">User List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border rounded-md px-3 py-2 w-full"
          placeholder="Search by username"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserTableRow
                key={user._id}
                user={user}
                onDeleteClick={handleDeleteUser}
                onUpdateClick={handleEditClick} // Pass the edit function
              />
            ))}
          </tbody>
        </table>
      </div>
      {selectedUser && ( // Display the EditUser component when a user is selected
        <EditUser
          user={selectedUser}
          onCancelEdit={handleCancelEdit}
          onUpdateUser={(updatedUser) => {
            // Update the user in the user list
            const updatedUsers = users.map((user) =>
              user._id === updatedUser._id ? updatedUser : user
            );
            setUsers(updatedUsers);
          }}
        />
      )}
    </div>
  );
};

export default UserList;
