import { useLocation } from 'react-router-dom';
import './FullNavbar.css';

const FullNavbar = () => {
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects" || location.pathname === "/projects/";

  const handleNavigation = (event, section) => {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();
    
    // If on the projects page, change the URL to root with the hash
    if (isProjectsPage) {
      window.location.href = `/#${section}`;
    } else {
      // If not on the projects page, simply scroll to the section
      window.location.href = `#${section}`;
    }
  };

  return (
    <div className={`banner-text ${isProjectsPage ? 'projects-navbar' : ''}`}>
      <ul>
        <li><a href="/" onClick={(e) => handleNavigation(e, "")}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleNavigation(e, "about")}>About</a></li>
        <li><a href="#background" onClick={(e) => handleNavigation(e, "background")}>My Background</a></li>
        <li><a href="#experience" onClick={(e) => handleNavigation(e, "experience")}>Experience</a></li>
        <li><a href="#projects" onClick={(e) => handleNavigation(e, "projects")}>Projects</a></li>
        <li><a href="#contacts" onClick={(e) => handleNavigation(e, "contacts")}>Contact</a></li>
      </ul>
    </div>
  );
}

export default FullNavbar;
