import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const navLocation = () => {
      return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
      });
    };
    const res = await navLocation();
    const latitude = res.coords.latitude;
    const longitude = res.coords.longitude;

    const response = await fetch("http://localhost:5000/api/auth/getlocation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ latlong: { lat: latitude, long: longitude } }),
    });
    const { location } = await response.json();
    setAddress(location);
    setCredentials({ ...credentials, [e.target.name]: location });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/login");
    } else {
      alert("Enter Valid Credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="mb-5">
          <Navbar />
        </div>
        <div
          className="container mt-5 pt-6"
          style={{ width: "50%", maxWidth: "600px" }}
        >
          <form
            className="w-100 m-auto mt-2 pt-4 pb-5 border bg-dark border-warning rounded"
            onSubmit={handleSubmit}
          >
            <div className="m-3">
              <h2 className="mb-4 ">Signup</h2>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={credentials.name}
                onChange={onChange}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="m-3">
              <label htmlFor="email" className="form-label">
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
            </div>
            <div className="m-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <fieldset>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder='"Click below for fetching address"'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  aria-describedby="emailHelp"
                />
              </fieldset>
            </div>
            <div className="m-3">
              <button
                type="button"
                onClick={handleClick}
                name="geolocation"
                className="btn btn-secondary"
              >
                Click for current Location{" "}
              </button>
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
            <div className="m-3">
              <button
                type="submit"
                className="mm-3 btn btn-warning text-white me-2"
              >
                Submit
              </button>
              <Link
                to="/userLogin"
                className="m-3 mx-1 btn btn-white bg-white text-warning"
              >
                Already a user
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
