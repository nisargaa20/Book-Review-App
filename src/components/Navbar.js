import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure appropriate styling

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">Book Review App</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/reviews">My Reviews</Link></li>
        <li><Link to="/recommendations">Recommendations</Link></li>
        <li className="toggle-container">
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
