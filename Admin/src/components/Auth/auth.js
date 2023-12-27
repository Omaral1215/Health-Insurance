import axios from "axios";

export const handleSignIn = async (
  username,
  password,
  setAuthenticated,
  setError,
  navigate
) => {
  try {
    const response = await axios.post("http://localhost:5000/auth/login", {
      username,
      password,
    });

    if (response.data.token) {
      setError("");
      localStorage.setItem("token", response.data.token);
      setAuthenticated(true);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  } catch (error) {
    console.error("Error signing in:", error);
    setError("An error occurred while signing in");
  }
};
