
import React, { useState ,useEffect} from "react";
import logo from "../components/Images/g.png";
import { useNavigate, Link } from 'react-router-dom';
import { useSpeechRecognition } from "react-speech-recognition";
import Dictaphone from "./Dictaphone"; // Assuming Dictaphone component is located in './Dictaphone.js'
import Log from "./Log";
import Sin from "./Sin";

export default function Navbar() {
  const [searchText, setSearchText] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition();


  const [token, setToken] = useState(localStorage.getItem("token"));
 const navigate=useNavigate();
  // Function to handle logout
  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    setToken(null);
  };
  useEffect(() => {
    // Check if token exists in local storage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      // Redirect to home page if user is already logged in
      navigate('/');
    } else {
      // If token doesn't exist, set it in the state
      setToken(null);
    }
  }, [navigate]);
  
  
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };


  const handleSpeechInput = () => {
    setSearchText(transcript); // Set search text directly with the transcript
    resetTranscript();
  };

  return (
    <div className="navbar mt-0 mb-5 fixed-top row m-0">
      <div className="col-lg-2 flex justify-end p-0">
        <Link to="/">
          <img src={logo} alt="logo" className="p-0 w-20 logo rounded-full" />
        </Link>
        <a href="to" className="btn btn-ghost text-xl"></a>
      </div>
      <div className="col-lg-10 row gap-2 ">
        <div className="form-control rounded-md row col-lg-8  h-10 flex items-center">
          <div class="col-lg-8 ">
            <input
              type="text"
              placeholder="Search Nepali Local Product...|"
              className="input mr-2 w-full h-full"
              value={searchText}
              onChange={handleInputChange}
              style={{ flex: "3" }} // Adjust input width to fill available space
            />
          </div>
         
          <div class="col-lg-4 " >
          <Dictaphone
            onTranscriptUpdate={setSearchText}
            onResetTranscript={() => window.location.reload()}
          />
        </div>
         
        </div>
      {token ? <><div> <button onClick={handleLogout} className="btn btn-link text-white text-decoration-none">
          Logout
        </button> </div></> :<><div class="flex col-lg-2 me-3  "  >
         <Log  class="flex col-lg-5 bg-red-200 " />
           <Sin class="flex col-lg-7 bg-gray-500 " /></div></>}
      
        {/* Other dropdowns and buttons */}
          

        <div className="dropdown dropdown-end col-lg-1 ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item text-white">
                0
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-1 "><div id="google_translate_element">
          
          </div></div>
      </div>
    </div>
  );
}

