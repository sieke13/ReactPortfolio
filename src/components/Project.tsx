import React from 'react';

interface ProjectProps {
  title: string;
  image: string;
  deployedLink: string;
  description: string;
  icons: JSX.Element[];
}

const Project: React.FC<ProjectProps> = ({ title, image, deployedLink, description, icons }) => {
  return (
    <div className="project-box">
      <h3>{title}</h3>
      <img src={image} alt={title} />
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