import React from 'react';
import { FaCheckCircle, FaPalette, FaMobile, FaRocket, FaFileAlt } from 'react-icons/fa';

const PortfolioUpdates: React.FC = () => {
  const updates = [
    {
      icon: <FaPalette />,
      title: 'Modern Design System',
      description: 'Updated with professional blue-purple gradients, glassmorphism effects, and modern typography using Inter font.'
    },
    {
      icon: <FaMobile />,
      title: 'Responsive Design',
      description: 'Completely responsive layout that looks perfect on desktop, tablet, and mobile devices.'
    },
    {
      icon: <FaRocket />,
      title: 'Enhanced Components',
      description: 'All components modernized with hover effects, animations, and professional styling.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Dynamic PDF Generator',
      description: 'New PDF generator that creates updated resumes with latest skills and projects automatically.'
    }
  ];

  return (
    <div className="portfolio-updates">
      <h3 className="updates-title">✨ Portfolio Modernization Complete!</h3>
      <div className="updates-grid">
        {updates.map((update, index) => (
          <div key={index} className="update-card">
            <div className="update-icon">
              {update.icon}
            </div>
            <h4>{update.title}</h4>
            <p>{update.description}</p>
            <FaCheckCircle className="check-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioUpdates;
