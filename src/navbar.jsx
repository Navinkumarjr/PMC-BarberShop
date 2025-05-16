import React from "react";
import logo from './logo.jpg'
import { useState } from "react";
const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="main-header" style={{backgroundColor:'#121212'}}>
      <div className="container align-items-center">
        <nav className="navbar navbar-expand-lg navbar-dark px-0">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-controls="mainMenu"
            aria-expanded={expanded}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="mainMenu" data-bs-spy="scroll">
            <ul className="navbar-nav ms-auto text-uppercase">
              <li className="nav-item">
                <a className="nav-link active" href="#top">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tel:+19408081569">
                  <i className="bi bi-telephone me-1"></i>+1 940 808 1569
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-warning text-black btn-sm ms-lg-3 mt-2 mt-lg-0 p-2" href="#book">
                  Book an Appointment
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
