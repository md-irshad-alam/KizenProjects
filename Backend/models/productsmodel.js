const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  source: String, // Facebook, Instagram, Email, etc.
  campaign: String,
  channel: String, // Paid Ads, Social Media, Email
  score: Number, // Lead score 0–100
  status: String, // Lead, MQL, SQL, Converted
  budgetSpent: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Lead", leadSchema);
