import React from 'react'

export default function Card() {
  return (
   
<div className="card w-64 h-64  bg-base-100 mb-5 me-5  shadow-xl">
  <figure><img class="h-32 mb-0  w-45"src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body m-0 pt-0  ps-4 pe-3   ">
    <h2 className="card-title mb-0 pb-0 ">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <h6>Delivey Free</h6>
     
    {/* <p className="m-0 pb-0 bg-red-200">If a dog chews shoes whodoes he choose?</p> */}
    <div className="card-actions m-0 p-0  ">
      <div className="badge badge-outline  mt-0 pt-0">Rs-500</div> 
     
      
          </div>
          
  </div>
</div>
  )
}
