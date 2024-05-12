import React from "react";
import logo from "../components/Images/g.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footter h-auto py-2">
        <div className="footer  d-flex justify-content-around ">
          <nav style={{ width: "28rem" }}>
          <Link to="/"> <img src={logo}  class="   p-0  w-20 logo rounded-full" />
</Link>
            <strong>
            Embrace Tradition, Elevate Craft: Explore Kalakunja
            </strong>
          </nav>
          <nav className="footter">
            <h3 className="footer-title ">Services</h3>
            <div className="d-flex flex-column ">
              <a href="/" className="text-decoration-none footter">
                Branding
              </a>
              <a href="/" className="text-decoration-none footter">
                Design
              </a>
              <a href="/" className="text-decoration-none footter ">
                Marketing
              </a>
              <a href="/" className="text-decoration-none footter ">
                Advertisement
              </a>
            </div>
          </nav>
          <nav className="footter">
            <h3 className="footer-title ">Company</h3>
            <div className="d-flex flex-column ">
              <a href="/aboutus" className="text-decoration-none footter">
                About us
              </a>
              <a href="/" className="text-decoration-none  footter">
                Contact
              </a>
              <a href="/" className="text-decoration-none footter ">
                Jobs
              </a>
              <a href="/" className="text-decoration-none footter ">
                Press Kit
              </a>
            </div>
          </nav>
          <nav className="footter">
            <h3 className="footer-title ">Legal</h3>
            <div className="d-flex flex-column">
              <a href="/" className="text-decoration-none footter ">
                Terms of use
              </a>
              <a href="/" className="text-decoration-none footter ">
                Privacy policy
              </a>
              <a href="/" className="text-decoration-none footter ">
                Cookie policy
              </a>
            </div>
          </nav>
        </div>
        <div>
        <hr />
        <p className="text-center">© 2024 <i>The Booleans</i>, Inc</p>
        </div>
       
      </footer>
    </>
  );
}