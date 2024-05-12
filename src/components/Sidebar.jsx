import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className="drawer lg:drawer-open ">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      {/* Page content here */}
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
    </div> 
    <div className="drawer-side shadow ps-2 pe-5  sidebarHeight mb-5">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay">  <h2 className=' mt-2 mb-0 pb-0'>Category</h2></label> 
      <hr className='p-0 m-0' />
      
      <ul className="menu m-0 p-0  w-70 bg-base-200 text-base-content ">
        {/* Sidebar content here */}
    
        <li><a a className='m-0 p-0 pb-2 pt-3 '>Handicrafts</a></li>
        <li><a a className='m-0  pb-2 p-0'>Accessories</a></li>
        <li><a a className='m-0  pb-2 p-0'>Textiles</a></li>

        <li><a a className='m-0  pb-2 p-0'>Cultural Artifacts</a></li>

        <li><a a className='m-0  pb-2 p-0'>Tibetian Handicrafts</a></li>
        <li><a a className='m-0  pb-2 p-0'>Ethnic Handicraft</a></li>

         <li><a a className='m-0  pb-2 p-0'>Handmade Jewelry</a></li>
         <li><a a className='m-0  pb-2 p-0'>Musical instrument</a></li>
         <li><a a className='m-0  pb-2 p-0'>Handmade Home Decor</a></li>
         <li><a a className='m-0  pb-2 p-0'>Culture Dresses</a></li>
         <Link to ='/localbusiness'><li><a a className='m-0  pb-2 p-0'>Local Businesses Near Me</a></li></Link>
         <Link to ='/informationCenter'><li><a a className='m-0  pb-2 p-0'>Information Center</a></li></Link>


        
      </ul>
    
    </div>
  </div>
  )
}
