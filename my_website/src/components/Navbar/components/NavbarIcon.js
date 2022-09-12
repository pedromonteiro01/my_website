import "./NavbarIcon.css";
import { useState } from "react";

const NavbarIcon = () => {
  const [active, setActive] = useState(true);

  const handleActiveIcon = () => setActive(!active);

  return (
    <>
    <div className="navbar-icon" id="navbar-icon">
      {active && (
        <i
          id="icon-bars"
          class="fas fa-bars fa-lg"
          onClick={handleActiveIcon}
        ></i>
      )}
      {!active && <i id="icon-times" class="fas fa-times fa-lg" onClick={handleActiveIcon}></i>}
    </div>
    {!active &&<div className="navbar-scroll" id="navbar-scroll">
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
      </div>}
    </>
  );
};

export default NavbarIcon;
