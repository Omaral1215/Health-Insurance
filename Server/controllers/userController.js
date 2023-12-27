// userController.js
const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    // Generate a unique ID
    const uniqueId = uuidv4();

    // Combine the unique ID with other fields from the request body
    const user = new User({ id: uniqueId, ...req.body });

    // Save the user to the MongoDB collection
    await user.save();

    return res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Update a user by ID
exports.updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ message: "User updated successfully", user });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
// User Login route
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    // If the user does not exist, return an error
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Generate a JWT token for user authentication
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

      return res.status(200).json({ authenticated: true, token });
    } else {
      return res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error during user login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
// Delete a user by ID
exports.deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
