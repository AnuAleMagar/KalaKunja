import React from 'react'
import { Link } from 'react-router-dom'
export default function Sin() {
  return (
    <div>    <div className="dropdown dropdown-end col-lg-1 ms-1   p-0">
    <div tabIndex={0} role="button" className=" ">
      <div className="w-full ">
        <button
          type="button"
          class="btn btn-link signin Btn p-0 text-white text-decoration-none" 
          style={{ width: '90px', height: '50px' }}
        >
          <h4>Sign Up</h4>
        </button>
      </div>
    </div>
    <ul
      tabIndex={0}
      className="mt-4 z-[1] p-2  shadow menu menu-sm dropdown-content bg-base-100  rounded-box w-52"
    >
      <Link to="/userSignup">
        <li className="loginList">Sign Up as User</li>{" "}
      </Link>
      <Link to="/sellerSignup">
        <li className="loginList">Sign Up as Seller </li>
      </Link>
    </ul>
  </div></div>
  )
}
