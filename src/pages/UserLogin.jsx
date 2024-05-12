import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import Footer from "../components/Footer";

export default function UserLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatchCart();
  const cartItems = useCart();

  useEffect(() => {
    // Check if user is already logged in, if so, redirect to home page
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
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
      navigate("/");
    } else {
      alert("Enter Valid Credentials");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  return (
    <>
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
            <button
              type="submit"
              className=" userLoginSubmitButton mx-3 m-3 btn btn-primary text-white "
            >
              Submit
            </button>
            <Link
              to="/userSignup"
              className="newUserButton m-3 mx-1 btn btn-white bg-white ">
              New User
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
