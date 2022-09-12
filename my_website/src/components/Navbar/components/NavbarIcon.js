import "./NavbarIcon.css";
import 'animate.css';
import { useState } from "react";

const NavbarIcon = () => {
  const [active, setActive] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [className, setClassName] = useState("");

  const handleShowNavbar = () => {
    setActive(false);
    setShowNav(true);
    setClassName("animate__fadeInLeft");
  }

  const handleHideNavbar = () => {
    setActive(true);
    setClassName("animate__fadeOutLeft");
  }

  return (
    <>
    <div className="navbar-icon" id="navbar-icon">
      {active && (
        <i
          id="icon-bars"
          class="fas fa-bars fa-lg"
          onClick={handleShowNavbar}
        ></i>
      )}
      {!active && <i id="icon-times" class="fas fa-times fa-lg" onClick={handleHideNavbar}></i>}
    </div>
    {showNav && <div className={`navbar-scroll animate__animated ${className}`} id="navbar-scroll">
        <ul>
          <li>
            <a id="nav-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a id="nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a id="nav-link" href="#background">
              My Background
            </a>
          </li>
          <li>
            <a id="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a id="nav-link" href="#contacts">
              Contact
            </a>
          </li>
        </ul>
      </div> }
    </>
  );
};

export default NavbarIcon;
