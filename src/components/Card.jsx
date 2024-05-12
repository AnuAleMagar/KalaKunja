import React from 'react'

export default function Card({
   name,
  description, 
  category,
   price,
   ImgSrc}) {
  return (
   
<div className="card w-64 h-64  bg-base-100 mb-5 me-5  shadow-xl">
  <figure><img class="h-32 mb-0  w-45" src={ImgSrc} alt={name}/></figure>
  <div className="card-body m-0 pt-0  ps-4 pe-3   ">
    <h2 className="card-title mb-0 pb-0 ">
     {name}
      <div className="badge badge-secondary">{description}</div>
    </h2>
    {/* <h6>Delivey Free</h6> */}
     
    {/* <p className="m-0 pb-0 bg-red-200">If a dog chews shoes whodoes he choose?</p> */}
    <div className="card-actions m-0 p-0  ">
      <div className="badge badge-outline  mt-0 pt-0"><h4>{price}</h4></div> 
     
      
          </div>
          
  </div>
</div>
  )
}
