const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./Routes/Auth");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection"mongodb://0.0.0.0:27017/loginemail"
mongoose
  .connect("mongodb://localhost:27017/kalakunja")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/", authRoutes);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
