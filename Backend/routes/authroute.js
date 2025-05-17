const express = require("express");
const authrouter = express.Router();
const authController = require("../controllers/authcontroller");
const middleware = require("../middleware/authmiddleware");
authrouter.post("/register", authController.register);
authrouter.post("/login", authController.login);
authrouter.get("/profile", middleware.protect, authController.getProfile);
module.exports = authrouter;
