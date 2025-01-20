import React from 'react';
import Project from '../components/Project';
import { FaJs, FaNodeJs, FaDatabase } from 'react-icons/fa';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Read Gerard Gen',
      image: 'src/assets/readmegen.jpg',
      deployedLink: 'https://github.com/sieke13/readgerardgen',
      description: 'Creates a README file for your project. Made with JavaScript.',
      icons: [<FaJs key="js" title="JavaScript" />],
    },
    {
      title: 'Gerardo Weather',
      image: 'src/assets/weather.jpg',
      deployedLink: 'https://github.com/sieke13/gerardoweather13',
      description: 'Gives a 5-day weather forecast. Made with JavaScript.',
      icons: [<FaJs key="js" title="JavaScript" />],
    },
    {
      title: 'Employee Tracker',
      image: 'src/assets/employe.jpg',
      deployedLink: 'https://github.com/sieke13/Employeetracker10',
      description: 'Tracks employee information and roles. Made with Node.js and MySQL.',
      icons: [<FaNodeJs key="nodejs" title="Node.js" />, <FaDatabase key="mysql" title="MySQL" />],
    },
    {
      title: 'Vehicles Towing Wheeling',
      image: 'src/assets/vehicles.jpg',
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