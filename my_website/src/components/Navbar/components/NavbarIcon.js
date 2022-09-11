import "./NavbarIcon.css";
import { useState } from "react";

const NavbarIcon = () => {
  const [active, setActive] = useState(true);

  const handleActiveIcon = () => setActive(!active);

  return (
    <div className="navbar-icon" id="navbar-icon">
      {active && (
        <i
          id="icon-bars"
          class="fas fa-bars fa-lg"
          onClick={handleActiveIcon}
        ></i>
      )}
      {!active && <i id="icon-times" class="fas fa-times fa-lg"></i>}
    </div>
  );
};

export default NavbarIcon;
