import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src="src/assets/dududancing.gif" alt="Logo" className="logo" />
        <h1>Gerardo Avendano Portfolio</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;