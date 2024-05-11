const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require('../Models/User');
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const cors=require('cors')
const nodemailer = require("nodemailer");
// const fetch = require("../middleware/fetchdetails");
const jwtSecret = "HaHa";

// const braintree = require("braintree");
// require("dotenv").config();
// const dotenv = require("dotenv");
// dotenv.config();

//const express = require('express');
// const https = require('https');
// const fs = require('fs');

const app = express();
app.use(cors());

// Middleware and routes setup...

// Specify SSL certificate and key files
// const sslOptions = {
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.cert')
// };

// // Create HTTPS server instance
// const server = https.createServer(sslOptions, app);

// // Start the server

// const PORT = process.env.PORT || 5000; // Change the port number to 5001 or any other unique port
// server.listen(PORT, () => {
//   console.log(`Server running on https://localhost:${PORT}`);
// });



// const gateway = new braintree.BraintreeGateway({
//   environment: braintree.Environment.Sandbox,
//   merchantId: process.env.BRAINTREE_MERCHANT_ID,
//   publicKey: process.env.BRAINTREE_PUBLIC_KEY,
//   privateKey: process.env.BRAINTREE_PRIVATE_KEY,
// });
router.post(
  "/createuser",
  [
    body("email").isEmail(), // Validate email format
    body("password").isLength({ min: 5 }), // Validate password length
    body("name").isLength({ min: 3 }), // Validate name length
  ],
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }

      // Generate salt and hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        location: req.body.location,
        verified: false,
      });

      // Generate JWT token for user authentication
      const authToken = jwt.sign({ userId: user.id }, jwtSecret, {
        expiresIn: "1d",
      });

      // Send verification email
      const verificationToken = jwt.sign({ email: user.email }, jwtSecret, {
        expiresIn: "1d",
      });
      const verificationLink = `http://localhost:5000/api/auth/verify-email/${verificationToken}`;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "projectautomatic86@gmail.com",
          pass: "uyts sjvw rxke zexa",
        },
      });

      await transporter.sendMail({
        from: "projectautomatic86@gmail.com",
        to: user.email,
        subject: "Email Verification",
        html: `<p>Please click the following link to verify your email: <a href="${verificationLink}"> Link </a></p>`,
      });

      // Send response indicating successful user creation
      res.status(201).json({
        success: true,
        authToken,
        message: "User created successfully. Please verify your email.",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error creating user" });
    }
  }
);

router.get("/verify-email/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, jwtSecret);
    const user = await User.findOneAndUpdate(
      { email: decoded.email },
      { verified: true },
      { new: true }
    );
    console.log("Updated user:", user);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.redirect("http://localhost:3000/login");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Authentication a User, No login Requiered
router.post(
  "/login",
  [
    body("email", "Enter a Valid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email }); //{email:email} === {email}
      if (!user) {
        return res
          .status(400)
          .json({ success, error: "Try Logging in with correct credentials" });
      }
      if (!user.verified) {
        return res
          .status(403)
          .json({ success, error: "Email not verified. Verify your email." });
      }

      const pwdCompare = await bcrypt.compare(password, user.password); // this return true false.
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ success, error: "Try Logging in with correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      success = true;
      const authToken = jwt.sign(data, jwtSecret);
      res.json({ success, authToken });
    } catch (error) {
      console.error(error.message);
      res.send("Server Error");
    }
  }
);

// router.post("/getuser", fetch, async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const user = await User.findById(userId).select("-password"); // -password will not pick password from db.
//     res.send(user);
//   } catch (error) {
//     console.error(error.message);
//     res.send("Server Error");
//   }
// });

// router.post("/getlocation", async (req, res) => {
//   try {
//     let lat = req.body.latlong.lat;
//     let long = req.body.latlong.long;
//     console.log(lat, long);
//     let location = await axios
//       .get(
//         "https://api.opencagedata.com/geocode/v1/json?q=" +
//           lat +
//           "+" +
//           long +
//           "&key=74c89b3be64946ac96d777d08b878d43"
//       )
//       .then(async (res) => {
//         // console.log(`statusCode: ${res.status}`)
//         console.log(res.data.results);
//         // let response = stringify(res)
//         // response = await JSON.parse(response)
//         let response = res.data.results[0].components;
//         console.log(response);
//         let { village, county, state_district, state, postcode } = response;
//         return String(
//           village +
//             "," +
//             county +
//             "," +
//             state_district +
//             "," +
//             state +
//             "\n" +
//             postcode
//         );
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//     res.send({ location });
//   } catch (error) {
//     console.error(error.message);
//     res.send("Server Error");
//   }
// });
// router.post("/foodData", async (req, res) => {
//   try {
//     res.send([global.foodData, global.foodCategory]);
//   } catch (error) {
//     console.error(error.message);
//     res.send("Server Error");
//   }
// });

// router.post("/orderData", async (req, res) => {
//   let data = req.body.order_data;
//   await data.splice(0, 0, { Order_date: req.body.order_date });
//   console.log("1231242343242354", req.body.email);

//   let eId = await Order.findOne({ email: req.body.email });
//   console.log(eId);
//   if (eId === null) {
//     try {
//       console.log(data);
//       console.log("1231242343242354", req.body.email);
//       await Order.create({
//         email: req.body.email,
//         order_data: [data],
//       }).then(() => {
//         res.json({ success: true });
//       });
//     } catch (error) {
//       console.log(error.message);
//       res.send("Server Error", error.message);
//     }
//   } else {
//     try {
//       await Order.findOneAndUpdate(
//         { email: req.body.email },
//         { $push: { order_data: data } }
//       ).then(() => {
//         res.json({ success: true });
//       });
//     } catch (error) {
//       console.log(error.message);
//       res.send("Server Error", error.message);
//     }
//   }
// });

// router.post("/myOrderData", async (req, res) => {
//   try {
//     console.log(req.body.email);
//     let eId = await Order.findOne({ email: req.body.email });

//     res.json({ orderData: eId });
//   } catch (error) {
//     res.send("Error", error.message);
//   }
// });

// router.post("/foodData", async (req, res) => {
//   try {
//     const foodItems = await Items.find();
//     const foodCategory = await Category.find();
//     res.send([foodItems, foodCategory]);

//     console.log(foodCategory);
//     console.log(foodItems);
//   } catch (error) {
//     console.error(error.message);
//     res.send("Server Error");
//   }
// });

// // Get all food items and categories
// router.get("/getdata", async (req, res) => {
//   try {
//     const foodItems = await Items.find();
//     const foodCategory = await Category.find();

//     res.json([foodItems, foodCategory]);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //update an item

// router.put("/admin/foodItems/:id", async (req, res) => {
//   try {
//     const updateFoodItem = await Items.findById(req.params.id);
//     if (!updateFoodItem) {
//       res.status(404);
//       throw new Error("contact not found");
//     }
//     const updatedFoodItem = await Items.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.status(200).json(updatedFoodItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

//  // Add a new food item
// router.post("/admin/foodItems", async (req, res) => {
//   try {
//     const newFoodItem = new Items(req.body);
//     const savedFoodItem = await newFoodItem.save();
//     res.status(201).json(savedFoodItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });
// // Delete a food item
// router.delete("/admin/foodItems/:id", async (req, res) => {
//   try {
//     await Items.findByIdAndDelete(req.params.id);
//     res.json({ message: "Food item deleted successfully" });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Admin login route handler
// router.post("/adminlogin", async (req, res) => {
//   const { username, password } = req.body;
//   // Here you should check if the username and password match your admin credentials
//   if (username === "admin" && password === "admin") {
//     // If credentials are correct, generate a token and send it back
//     const token = jwt.sign({ username }, jwtSecret);
//     res.json({ success: true, token });
//   } else {
//     // If credentials are incorrect, send an error response
//     res
//       .status(401)
//       .json({ success: false, error: "Invalid username or password" });
//   }
// });
// // Route to generate client token
// // router.get("/braintree/token", async (req, res) => {
// //   try {
// //     const response = await gateway.clientToken.generate({});
// //     res.json({ clientToken: response.clientToken });
// //   } catch (error) {
// //     console.error("Error generating client token:", error);
// //     res.status(500).json({ error: "Internal server error" });
// //   }
// // });

// // Route to process payment
// // router.post("/braintree/payment", async (req, res) => {
// //   const { nonce, amount } = req.body;

// //   try {
// //     const result = await gateway.transaction.sale({
// //       amount: amount,
// //       paymentMethodNonce: nonce,
// //       options: {
// //         submitForSettlement: true,
// //       },
// //     });

// //     if (result.success) {
// //       res.json({ success: true, message: "Payment successful" });
// //     } else {
// //       res.status(500).json({ success: false, message: "Payment failed" });
// //     }
// //   } catch (error) {
// //     console.error("Error processing payment:", error);
// //     res.status(500).json({ success: false, message: "Internal server error" });
// //   }
// // });
// router.post("/khalti-api", async (req, res) => {
//   const payload = req.body;
//   const khaltiresponse = await axios.post(
//     "https://a.khalti.com/api/v2/epayment/initiate/",
//     payload,
//     {
//       headers: {
//         Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
//       },
//     }
//   );
//   if (khaltiresponse) {
//     res.json({
//       success: true,
//       data: khaltiresponse?.data,
//     });
//   } else {
//     res.json({
//       success: false,
//       message: "Wrong",
//     });
//   }
//   //console.log(khaltiresponse);
// });


// //fetch by id 
// const FoodItems = require('../models/Items'); // Import the FoodItems model

// router.get("/admin/foodItems/:id", async (req, res) => {
//   try {
//     const foodItem = await FoodItems.findById(req.params.id);
//     if (!foodItem) {
//       res.status(404).json({ message: "Food item not found" });
//       return;
//     }
//     res.status(200).json(foodItem);
//   } catch (error) {
//     console.error("Error fetching food item:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// ///all oders show
// router.get("/allOrders", async (req, res) => {
//   try {
//     const allOrders = await Order.find({});
//     res.json(allOrders);
//   } catch (error) {
//     res.status(500).send("Error fetching orders: " + error.message);
//   }
// });


// ///payment handling
// router.post("/payment/confirm", async (req, res) => {
//   try {
//     const { pidx } = req.body;
    
//     // Make a POST request to confirm payment
//     const khaltiRes = await axios.post("https://a.khalti.com/api/v2/epayment/lookup", {
//       pidx: pidx,
//     });

//     // Assuming userInfo, amt, ship, and products are available in the request body
//     // const { userInfo, amt, products } = req.body;

//     // Make a POST request to create an order
//     // const orderRes = await axios.post("/order", {
//     //   ...userInfo,
//     //   totalamount: amt ,
//     //   products,
//     // });

//     // Assuming cartId is available in the request body
//     // const { cartId } = req.body;

//     // // Make a DELETE request to delete the order
//     // const deleteRes = await axios.delete("/order", {
//     //   data: {
//     //     cartid: cartId,
//     //   },
//     // });

//     res.status(200).json({ success: true, message: "Payment confirmed, order created, and cart deleted successfully" });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// });
// module.exports = router;
