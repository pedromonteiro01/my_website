import { Link, useLocation } from 'react-router-dom';
import './FullNavbar.css';

const FullNavbar = () => {
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects/";

  return (
    <div className={`banner-text ${isProjectsPage ? 'projects-navbar' : ''}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#background">My Background</Link></li>
        <li><Link to="/#experience">Experience</Link></li>
        <li><Link to="/#projects">Projects</Link></li>
        <li><Link to="/#contacts">Contact</Link></li>
      </ul>
    </div>
  );
}

export default FullNavbar;
