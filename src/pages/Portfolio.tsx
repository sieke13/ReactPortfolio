import React from 'react';
import Project from '../components/Project';
import { FaJs, FaNodeJs, FaDatabase, FaReact } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Kanba Board Project',
      images: ['/assets/kanbaboard-1.jpg', '/assets/kanbaboard1-2.jpg'],
      deployedLink: 'https://github.com/sieke13/Develop14.git',
      description: 'A Kanban board application for task management. Made with React, PostgreSQL, and SQL.',
      icons: [<FaReact key="react" title="React" />, <SiPostgresql key="postgresql" title="PostgreSQL" />, <FaDatabase key="sql" title="SQL" />],
    },
    {
      title: 'Read Gerard Gen',
      image: '/assets/readmegen.jpg',
      deployedLink: 'https://github.com/sieke13/readgerardgen',
      description: 'Creates a README file for your project. Made with JavaScript.',
      icons: [<FaJs key="js" title="JavaScript" />],
    },
    {
      title: 'Gerardo Weather',
      image: '/assets/weather.jpg',
      deployedLink: 'https://github.com/sieke13/gerardoweather13',
      description: 'Gives a 5-day weather forecast. Made with JavaScript.',
      icons: [<FaJs key="js" title="JavaScript" />],
    },
    {
      title: 'Employee Tracker',
      image: '/assets/employe.jpg',
      deployedLink: 'https://github.com/sieke13/Employeetracker10',
      description: 'Tracks employee information and roles. Made with Node.js and MySQL.',
      icons: [<FaNodeJs key="nodejs" title="Node.js" />, <FaDatabase key="mysql" title="MySQL" />],
    },
    {
      title: 'Vehicles Towing Wheeling',
      image: '/assets/vehicles.jpg',
      deployedLink: 'https://github.com/sieke13/vehiclestowingwheeling',
      description: 'Manages vehicle towing and wheeling services. Made with JavaScript.',
      icons: [<FaJs key="js" title="JavaScript" />],
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <Project {...project} />
        </div>
      ))}
    </section>
  );
};

export default Portfolio;