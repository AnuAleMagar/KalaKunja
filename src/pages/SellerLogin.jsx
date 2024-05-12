import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import Footer from "../components/Footer";

export default function SellerLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatchCart();
  const cartItems = useCart();

  useEffect(() => {
    // Check if user is already logged in, if so, redirect to home page
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/sellerPage");
    }
  }, [navigate]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json); // Check the response in the console to ensure it contains the token

    if (json?.token) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("token", json.token); // Check if json.authToken contains the token
      // Redirect user to homepage or perform any other necessary actions
      navigate("/sellerPage");
    } else {
      alert("Enter Valid Credentials");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  //   const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      {/* <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
      <div>
        <div className="mb-5">
          <Navbar />
        </div>
        <div class="containerUserLogin pb-5   pt-5">
          <form
            class="w-1/4 m-auto  pt-1  pb-1 border  shadow  rounded"
            onSubmit={handleSubmit}
          >
            <div className="m-3">
              <h2 className="mb-4 ">Login</h2>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={credentials.email}
                onChange={onChange}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone.
              </div>
            </div>
            <div className="m-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={credentials.password}
                onChange={onChange}
                name="password"
              />
            </div>
            <Link to="/sellerPage">   <button
              type="submit"
              className=" userLoginSubmitButton mx-3 m-3 btn btn-primary text-white "
            >
              Submit
            </button></Link>
         
            <Link
              to="/sellerSignup"
              className="newUserButton m-3 mx-1 btn btn-white bg-white ">
              New Seller
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
