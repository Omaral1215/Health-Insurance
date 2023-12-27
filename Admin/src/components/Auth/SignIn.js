import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSignIn } from "./auth"; // Import the handleSignIn function

const SignIn = ({ setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignInClick = () => {
    handleSignIn(username, password, setAuthenticated, setError, navigate); // Call the handleSignIn function
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <div className="mb-4">
          <div className="mb-4">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Password"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            onClick={handleSignInClick}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
