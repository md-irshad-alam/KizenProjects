const express = require("express");
const Lead = require("../models/productsmodel");
const data = require("./data.json");
console.log(data);
const product = express.Router();
const mongoose = require("mongoose");
const products = require("../controllers/productController");
const middleware = require("../middleware/authmiddleware");
product.post("/create-product", middleware.protect, products.createLead);
product.get("/leads", middleware.protect, products.getLeads);

product.get("/insert", (req, res) => {
  Lead.insertMany(data)
    .then(() => {
      console.log("Leads inserted successfully");
      mongoose.connection.close();
    })
    .catch((err) => console.error(err));
  res.status(200).send("adfadf");
});
module.exports = product;
