import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src="https://github.com/sieke13/ReactPortfolio/blob/main/src/assets/dududancing.gif?raw=true" alt="Logo" className="logo" />
        <h1>Gerardo Avendano Portfolio</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;