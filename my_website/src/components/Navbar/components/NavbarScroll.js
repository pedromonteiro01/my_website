import "./NavbarScroll.css";

const NavbarScroll = () => {
  return (
      <div className="navbar-scroll" id="navbar-scroll">
        <ul>
          <li onclick="toggleIcon()">
            <a id="nav-link" href="#">
              Home
            </a>
          </li>
          <li onclick="toggleIcon()">
            <a id="nav-link" href="#about">
              About
            </a>
          </li>
          <li onclick="toggleIcon()">
            <a id="nav-link" href="#background">
              My Background
            </a>
          </li>
          <li onclick="toggleIcon()">
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
      </div>
  );
};

export default NavbarScroll;
