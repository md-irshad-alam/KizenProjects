const express = require("express");

const product = express.Router();
const mongoose = require("mongoose");
const products = require("../controllers/productController");
const middleware = require("../middleware/authmiddleware");
product.post("/create-product", middleware.protect, products.createLead);
product.get("/leads", middleware.protect, products.getLeads);

module.exports = product;
