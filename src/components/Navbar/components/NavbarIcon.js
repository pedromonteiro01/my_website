import "./NavbarIcon.css";
import 'animate.css';
import { useState } from "react";

const NavbarIcon = ({ topOfPage }) => {
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
    <div className={`navbar-icon-root ${topOfPage ? 'navbar-icon-root--top' : ''}`}>
      {showBackdrop && <div className="backdrop" onClick={handleHideNavbar}></div>}
      <button
        type="button"
        className="navbar-icon"
        id="navbar-icon"
        aria-label={active ? "Open menu" : "Close menu"}
        onClick={active ? handleShowNavbar : handleHideNavbar}
      >
        {active && <i id="icon-bars" className="fas fa-bars"></i>}
        {!active && <i id="icon-times" className="fas fa-times"></i>}
      </button>
      {showNav && (
        <div className={`navbar-scroll animate__animated ${className}`} id="navbar-scroll">
          <span className="navbar-scroll-label">Menu</span>
          <ul>
            <li>
              <a className="nav-link" href="#" onClick={handleHideNavbar}>
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about" onClick={handleHideNavbar}>
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#background" onClick={handleHideNavbar}>
                My Background
              </a>
            </li>
            <li>
              <a className="nav-link" href="#experience" onClick={handleHideNavbar}>
                Experience
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contacts" onClick={handleHideNavbar}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarIcon;
