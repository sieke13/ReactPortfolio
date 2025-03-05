import React, { useState } from 'react';

interface ProjectProps {
  title: string;
  image?: string;
  images?: string[];
  deployedLink: string;
  description: string;
  icons: JSX.Element[];
}

const Project: React.FC<ProjectProps> = ({ title, image, images, deployedLink, description, icons }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const handleNextImage = () => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div className="project-box">
      <h3>{title}</h3>
      {images && images.length > 0 ? (
        <div className="project-images">
          <img 
            src={images[currentImageIndex]} 
            alt={`${title} - Image ${currentImageIndex + 1}`} 
            onClick={handleNextImage}
            style={{ cursor: 'pointer' }}
          />
          {images.length > 1 && (
            <p className="image-indicator">
              Click image to view next ({currentImageIndex + 1}/{images.length})
            </p>
          )}
        </div>
      ) : (
        image && <img src={image} alt={title} />
      )}
      <p className="description">{description}</p>
      <div className="icons">
        {icons.map((icon, index) => (
          <span key={index} className="icon">
            {icon}
          </span>
        ))}
      </div>
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="deployed-link">Deployed Application</a>
      </p>
    </div>
  );
};

export default Project;