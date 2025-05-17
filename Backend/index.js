require("dotenv").config();
const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const authRoutes = require("./routes/authroute");
const product = require("./routes/productRoutes");
const app = express();
// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", product);

// Connect to DB

connection();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
