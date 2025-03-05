import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Gerardo Avendano Portfolio</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;