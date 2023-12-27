import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const apiUrl = "http://localhost:5000/admin/getAll"; // Replace with your API URL

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Response:", response.data); // Log the response data
        // Access the first element in the response array
        if (Array.isArray(response.data) && response.data.length > 0) {
          setUserData(response.data[0]);
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, [apiUrl]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-semibold mb-4">Profile</h1>
          <div className="flex items-center mb-6">
            <img
              src={
                userData.profileImage ||
                "https://media.licdn.com/dms/image/D4D03AQHB5OXCVNGwNQ/profile-displayphoto-shrink_400_400/0/1668274351781?e=1700697600&v=beta&t=ceLl17lLJTboeLfyiQUPTMWKmBs7jgU_r_QAejzGySE"
              }
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">
                {userData.firstname} {userData.lastname}
              </h2>
              <p className="text-gray-600">{userData.email}</p>
            </div>
          </div>
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-600">First Name</label>
                <p>{userData.firstname || "N/A"}</p>
              </div>
              <div>
                <label className="text-gray-600">Last Name</label>
                <p>{userData.lastname || "N/A"}</p>
              </div>
              <div>
                <label className="text-gray-600">Date of Birth</label>
                <p>
                  {userData.DOB ? new Date(userData.DOB).toDateString() : "N/A"}
                </p>
              </div>
              <div>
                <label className="text-gray-600">Gender</label>
                <p>{userData.gender || "N/A"}</p>
              </div>
              {/* Add more fields with conditional rendering */}
              <div>
                <label className="text-gray-600">Age</label>
                <p>{userData.age || "N/A"}</p>
              </div>
              <div>
                <label className="text-gray-600">Username</label>
                <p>{userData.username || "N/A"}</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-600">Email</label>
                <p>{userData.email || "N/A"}</p>
              </div>
              <div>
                <label className="text-gray-600">Phone</label>
                <p>{userData.phonenumber || "N/A"}</p>
              </div>
              <div>
                <label className="text-gray-600">Address</label>
                <p>{userData.address || "N/A"}</p>
              </div>
              {/* Add more fields with conditional rendering */}
              <div>
                <label className="text-gray-600">Role</label>
                <p>{userData.role || "N/A"}</p>
              </div>
              <div>
                <label className="text-gray-600">Active</label>
                <p>{userData.active ? "Yes" : "No"}</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-semibold mb-2">Biography</h3>
            <p>{userData.biography || "No biography available."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
