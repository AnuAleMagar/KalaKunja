const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const router = express.Router();
const User = require("../Models/User");
const Item = require("../Models/item");

// Route to get all items
router.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to add a new item
router.post("/items", async (req, res) => {
  try {
    const { name, img, description, price, category } = req.body;

    // Check if all required fields are provided
    if (!name || !img || !description || !price || !category) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new item
    const newItem = new Item({
      name,
      img,
      description,
      price,
      category,
    });
    await newItem.save();

    res.status(201).json(newItem);
  } catch (err) {
    console.error("Error adding item:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/items/category/:category", async (req, res) => {
  try {
    const { category } = req.params;

    const items = await Item.find({ category });

    res.json(items);
  } catch (err) {
    console.error("Error filtering items by category:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Validate request body
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    // Send verification email
    const verificationToken = jwt.sign({ email }, "SECRET", {
      expiresIn: "1d",
    });
    const verificationLink = `http://localhost:8000/verify-email/${verificationToken}`;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "projectautomatic86@gmail.com",
        pass: "uyts sjvw rxke zexa",
      },
    });
    await transporter.sendMail({
      from: "projectautomatic86@gmail.com",
      to: email,
      subject: "Email Verification",
      html: `<p>Please click the following link to verify your email: <a href="${verificationLink}">LINK</a></p>`,
    });
    res.status(201).json({
      message: "User created successfully. Please verify your email.",
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Verify Email Route
router.get("/verify-email/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, "SECRET");
    const user = await User.findOneAndUpdate(
      { email: decoded.email },
      { verified: true },
      { new: true }
    );
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.redirect("http://localhost:3000");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find user by email
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    if (!user.verified) {
      return res.status(401).json({ message: "Email not verified" });
    }
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, "SECRET", { expiresIn: "1d" });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
