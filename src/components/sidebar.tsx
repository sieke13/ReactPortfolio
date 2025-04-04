import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaBriefcase, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      {/* Hamburger toggle button */}
      <button 
        className="sidebar-toggle" 
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <FaBars size={24} />
      </button>

      {/* Overlay to close sidebar when clicked outside */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Navigation</h3>
          <button 
            className="sidebar-close" 
            onClick={closeSidebar}
            aria-label="Close sidebar"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul className="vertical-nav">
            <li>
              <Link 
                to="/" 
                className={isActive('/')} 
                onClick={closeSidebar}
              >
                <FaHome className="sidebar-icon" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about')} 
                onClick={closeSidebar}
              >
                <FaUser className="sidebar-icon" />
                <span>About Me</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/portfolio" 
                className={isActive('/portfolio')} 
                onClick={closeSidebar}
              >
                <FaBriefcase className="sidebar-icon" />
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact')} 
                onClick={closeSidebar}
              >
                <FaEnvelope className="sidebar-icon" />
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/resume" 
                className={isActive('/resume')} 
                onClick={closeSidebar}
              >
                <FaFileAlt className="sidebar-icon" />
                <span>Resume</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;