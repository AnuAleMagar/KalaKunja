import React from "react";
import image from "../components/Images/g.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary h-auto py-2">
        <div className="footer  d-flex justify-content-around ">
          <nav style={{ width: "28rem" }}>
            <img
              src={image}
              alt="logo"
              style={{ width: "5rem", height: "5rem"}}
            />
            <p>
              Explore the Best of Nepal's Cuisine and experience the richness of
              Nepali Tastes,Anytime,Anywhere
            </p>
          </nav>
          <nav>
            <h3 className="footer-title text-warning">Services</h3>
            <div className="d-flex flex-column ">
              <a href="/" className="text-decoration-none text-white">
                Branding
              </a>
              <a href="/" className="text-decoration-none text-white">
                Design
              </a>
              <a href="/" className="text-decoration-none text-white">
                Marketing
              </a>
              <a href="/" className="text-decoration-none text-white">
                Advertisement
              </a>
            </div>
          </nav>
          <nav>
            <h3 className="footer-title text-warning">Company</h3>
            <div className="d-flex flex-column ">
              <a href="/" className="text-decoration-none text-white">
                About us
              </a>
              <a href="/" className="text-decoration-none text-white">
                Contact
              </a>
              <a href="/" className="text-decoration-none text-white">
                Jobs
              </a>
              <a href="/" className="text-decoration-none text-white">
                Press Kit
              </a>
            </div>
          </nav>
          <nav>
            <h3 className="footer-title text-warning">Legal</h3>
            <div className="d-flex flex-column">
              <a href="/" className="text-decoration-none text-white">
                Terms of use
              </a>
              <a href="/" className="text-decoration-none text-white">
                Privacy policy
              </a>
              <a href="/" className="text-decoration-none text-white">
                Cookie policy
              </a>
            </div>
          </nav>
        </div>
        <hr />
        <p className="text-center">© 2024 <i>The Boolean</i>, Inc</p>
      </footer>
    </>
  );
}