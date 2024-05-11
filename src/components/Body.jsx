import React from 'react'
import Sidebar from './Sidebar'
import Card from './Card'

export default function Body() {
  return (
    <div>
    <div class="container container1 pt-5">
    <div class="row">
        <div class="col-lg-1 ">

        </div>
      <div class="col-lg-2  ">
       <Sidebar />
      </div>
      <div class="col-lg-9 row flex">
        <div class="flex">
        <Card />
          <Card />
          <Card />
          <Card /> 
        </div>
        <div class="flex">
        <Card />
          <Card />
          <Card />
          <Card /> 
        </div>
        <div class="flex">
        <Card />
          <Card />
          <Card />
          <Card /> 
        </div>
        <div class="flex">
        <Card />
          <Card />
          <Card />
          <Card /> 
        </div>
         
     
        
      </div>
    
    </div>
    </div>
    </div>
  )
}
