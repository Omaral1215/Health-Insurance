// userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const userValidator = require("../validators/userValidator");

const router = express.Router();

router.post(
  "/create",
  userValidator.createUserValidator,
  userController.createUser
);
router.post("/login", userController.loginUser);

router.get("/getAll", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.delete("/:id", userController.deleteUserById);

router.put(
  "/:id",
  userValidator.updateUserValidator,
  userController.updateUserById
);

module.exports = router;
