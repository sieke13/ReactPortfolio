import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Connect with me on:</p>
      <div className="footer-icons">
        <a href="https://github.com/sieke13" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/gerardo-avendaño-0b78008b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
          <FaStackOverflow size={30} />
        </a>
        <a href="https://wa.me/5551021657" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;