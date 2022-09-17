import "./NavbarIcon.css";
import 'animate.css';
import { useState } from "react";

const NavbarIcon = () => {
  const [active, setActive] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [className, setClassName] = useState("");
  const [showBackdrop, setShowBackdrop] = useState(false);

  const handleShowNavbar = () => {
    setActive(false);
    setShowNav(true);
    setShowBackdrop(true);
    setClassName("animate__fadeInLeft");
  }

  const handleHideNavbar = () => {
    setActive(true);
    setShowBackdrop(false);
    setClassName("animate__fadeOutLeft");
  }

  return (
    <>
    {showBackdrop && <div class="backdrop" id="backdrop" onClick={handleHideNavbar}></div>}
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
    {showNav && <div className={`navbar-scroll animate__animated ${className}`} style={{zIndex: 9}} id="navbar-scroll">
        <ul>
          <li>
            <a id="nav-link" href="#" onClick={handleHideNavbar}>
              Home
            </a>
          </li>
          <li>
            <a id="nav-link" href="#about" onClick={handleHideNavbar}>
              About
            </a>
          </li>
          <li>
            <a id="nav-link" href="#background" onClick={handleHideNavbar}>
              My Background
            </a>
          </li>
          <li>
            <a id="nav-link" href="#project" onClick={handleHideNavbar}>
              Projects
            </a>
          </li>
          <li>
            <a id="nav-link" href="#contacts" onClick={handleHideNavbar}>
              Contact
            </a>
          </li>
        </ul>
      </div> }
    </>
  );
};

export default NavbarIcon;
