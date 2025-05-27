import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  const email = 'gera.ave2@gmail.com'; // Replace with your actual email
  const subject = 'Portfolio Contact Request';
  const body = 'Hello Gerardo,\n\nI visited your portfolio website and would like to connect with you regarding...';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section className="pdf-section">
      <h2>Contact</h2>
      <div className="contact-container">
        <p>Feel free to reach out to me through any of the following methods:</p>
        
        <div className="contact-methods">
          <div className="contact-method">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <a href={mailtoLink} className="contact-link">
              Open Email Client
            </a>
            <p>Send me an email directly</p>
          </div>

          <div className="contact-method">
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <a href="tel:+525551021657" className="contact-link">
              Call or Text
            </a>
            <p>Available during business hours</p>
          </div>

          <div className="contact-method">
            <FaLinkedin className="contact-icon" />
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/gerardo-avendaño-0b78008b" target="_blank" rel="noopener noreferrer" className="contact-link">
              Connect on LinkedIn
            </a>
            <p>Let's build our professional network</p>
          </div>

          <div className="contact-method">
            <FaGithub className="contact-icon" />
            <h3>GitHub</h3>
            <a href="https://github.com/sieke13" target="_blank" rel="noopener noreferrer" className="contact-link">
              Follow on GitHub
            </a>
            <p>Check out my code repositories</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;