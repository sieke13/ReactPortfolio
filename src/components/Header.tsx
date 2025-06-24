import React from 'react';
import Navigation from './Navigation';
import { FaCode } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="brand">
          <div className="brand-icon">
            <FaCode />
          </div>
          <div className="brand-text">
            <h1 className="brand-title">Juan Gerardo Avendaño</h1>
            <p className="brand-subtitle">Full-Stack Developer & Data Analyst</p>
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;