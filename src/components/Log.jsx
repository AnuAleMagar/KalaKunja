import React from 'react'
import { Link } from 'react-router-dom'

export default function Log() {
  return (
    <div>        <div className="dropdown dropdown-end col-lg-1">
    <div tabIndex={0} role="button" className=" ">
      <div className="w-100 ">
        <button
          type="button"
          class="btn btn-link p-1 LoginBtn  text-white text-decoration-none"
        >
          <h4>Login</h4>
        </button>
      </div>
    </div>
    <ul
      tabIndex={0}
      className="mt-4 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52"
    >
      <Link to="/userLogin">
        {" "}
        <li className="loginList">Login as User</li>
      </Link>
      <Link to="/sellerLogin">
        {" "}
        <li className="loginList">Login as Seller</li>{" "}
      </Link>
    </ul>
  </div></div>
  )
}
