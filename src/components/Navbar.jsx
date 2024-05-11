import React from 'react'
import logo from "../components/Images/g.png"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar  mt-0 mb-5 fixed-top row  m-0"  >
  <div className="col-lg-2  flex justify-end   p-0">
    <Link to="/"> <img src={logo}  class="   p-0  w-20 logo rounded-full" />
</Link>
    <a className="btn btn-ghost text-xl"></a>
  </div>
  <div className="col-lg-10 row gap-2">
    <div className="form-control rounded-md col-lg-6 h-11 ">
      <input type="text" placeholder="Search Nepali Local Product...|" className="input " />
    </div>
    <div className="dropdown dropdown-end col-lg-1">
      <div tabIndex={0} role="button" className=" ">
        <div className="w-100 ">
        <button type="button" class="btn btn-link p-1 LoginBtn  text-white text-decoration-none"><h4>Login</h4></button>
        </div>
      </div>
      <ul tabIndex={0} className="mt-4 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52">
     
      <Link  to="/userLogin">    <li className='loginList'>Login as User</li></Link>
      <Link Link to="/sellerLogin">    <li className='loginList'>Login as Seller</li> </Link>
     
    
      </ul>
    </div>
    <div className="dropdown dropdown-end col-lg-1  p-0">
      <div tabIndex={0} role="button" className=" ">
        <div className="w-100 ">
        <button type="button" class="btn btn-link LoginBtn p-1 text-white text-decoration-none"><h4>Sign Up</h4></button>
        </div>
      </div>
      <ul tabIndex={0} className="mt-4 z-[1] p-2  shadow menu menu-sm dropdown-content bg-base-100  rounded-box w-52">
     
       <Link to="/userSignup"><li className='loginList' >Sign Up as User</li> </Link> 
        <Link  to="/sellerSignup"><li className='loginList'>Sign Up as Seller </li></Link>
      </ul>
    </div>

    <div className="dropdown dropdown-end col-lg-1 ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item text-white">0</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
      </div>

      <div class="col-lg-2 ">
        {/* <p>Hello</p> */}
      </div>
    
    
    
  </div>
</div>
  )
}
