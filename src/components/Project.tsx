import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectProps {
  title: string;
  image?: string;
  images?: string[];
  deployedLink: string;
  githubLink?: string;
  description: string;
  technologies?: string[];
  icons: JSX.Element[];
  featured?: boolean;
}

const Project: React.FC<ProjectProps> = ({ 
  title, 
  image, 
  images, 
  deployedLink, 
  githubLink,
  description, 
  technologies,
  icons 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const handleNextImage = () => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const displayImage = images && images.length > 0 ? images[currentImageIndex] : image;

  return (
    <div className="project-content">
      {displayImage && (
        <div className="project-image-container">
          <img 
            src={displayImage} 
            alt={`${title} screenshot`}
            className="project-image"
            onClick={handleNextImage}
            style={{ cursor: images && images.length > 1 ? 'pointer' : 'default' }}
          />
          {images && images.length > 1 && (
            <div className="image-indicator">
              <span>Click to view next ({currentImageIndex + 1}/{images.length})</span>
            </div>
          )}
        </div>
      )}
      
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        {technologies && technologies.length > 0 && (
          <div className="project-technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}

        <div className="project-links">
          <a 
            href={deployedLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link"
          >
            <FaExternalLinkAlt size={14} />
            Live Demo
          </a>
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              <FaGithub size={14} />
              Source Code
            </a>
          )}
        </div>

        <div className="project-icons">
          {icons.map((icon, index) => (
            <span key={index} className="icon-wrapper">
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;