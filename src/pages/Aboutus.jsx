import React from 'react'
import Navbar from '../components/Navbar';
import p from "../components/Images/p.jpg"
import Footer from '../components/Footer';

export default function Aboutus() {
    return (
        <div>
            <Navbar />


            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row">

                    <img src="https://images.pexels.com/photos/7205806/pexels-photo-7205806.jpeg?auto=compress&cs=tinysrgb&w=800" className="max-w-sm rounded-lg shadow-2xl" />
                    
                    <div>
                        <h1 className="text-2xl font-bold">About Us</h1>
                        <p className="py-1"> Platform where a skillful person can sell their creative products easily and a customer can buy anything they want to buy just sitting at home. This platform extends the market beyond those nearby towns, and nearby village areas where sellers get the right price of their product and customers don’t have to pay more than the actual price of a product. Digitizing local products, and handmade products helps a lot to the local women entrepreneurs of our country Nepal.</p>
                        
                    </div>
                </div>
            </div>


        <Footer />

        </div>
    )
}