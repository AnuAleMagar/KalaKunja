import React from 'react'
// import Sidebar from './Sidebar'
// import Card from './Card'
import Sidebar from '../components/Sidebar'
import SellerRight from '../components/SellerRight'
import Navbar from '../components/Navbar';
import Sell from '../components/Sell';
export default function SellerPage() {
    return (
        <div>

            <Navbar />


            <div className="container container1 pt-5 m-0">

                <div className="row ">
                    {/* <div className="col-lg-1 ">
          </div> */}

                    <div className="col-lg-2 bg-gray-700  
                    mt-10">
                        {/* <SellerDashboard /> */}

                        <Sell />
                    </div>


                    <div className="col-lg-10 row flex ml-64 mt-4">
                        <SellerRight />
                    </div>


                </div>
            </div>
        </div>
    )
}
