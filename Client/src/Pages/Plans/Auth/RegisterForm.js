import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    address: "",
    city: "",
    country: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    axios
      .post("http://localhost:5000/users/create", formData)
      .then((response) => {
        console.log("User created successfully", response.data);
        window.alert("User registered successfully!");
        const { email, password, username } = formData;
        register(email, password, username);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error creating user: ", error);

        let errorMessage = "Go to Log In page and Enter your credentials";

        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          // If the server sends an error message, use it
          errorMessage = error.response.data.error;
        }

        window.alert(errorMessage);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <div className="w-64">
        {Object.keys(formData).map((field) => (
          <input
            key={field}
            type={field === "password" ? "password" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full px-4 py-2 mb-2 rounded border"
          />
        ))}
        <button
          onClick={handleRegister}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
