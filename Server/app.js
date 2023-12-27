const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const planRoutes = require("./routes/planRoutes");
const planDataRoutes = require("./routes/plandataRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 5000; // Use PORT from .env or default to 5000
app.use(cors());
// Middleware to parse JSON data
app.use(bodyParser.json());

// Connect to MongoDB using the MONGO_URI from .env
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected Successfully");
  })
  .catch((error) => {
    console.error("Error connecting to the database : ", error);
  });

// Routes
app.use("/users", userRoutes);
app.use("/plans", planRoutes);
app.use("/plandata", planDataRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

// Start the server
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
