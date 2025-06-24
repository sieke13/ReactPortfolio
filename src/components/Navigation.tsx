import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaBriefcase, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Navigation: React.FC = () => {
  const navItems = [
    { to: '/', label: 'About Me', icon: <FaUser /> },
    { to: '/portfolio', label: 'Portfolio', icon: <FaBriefcase /> },
    { to: '/contact', label: 'Contact', icon: <FaEnvelope /> },
    { to: '/resume', label: 'Resume', icon: <FaFileAlt /> }
  ];

  return (
    <nav className="modern-nav">
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            <NavLink 
              to={item.to} 
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;