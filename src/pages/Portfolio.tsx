import React from 'react';
import Project from '../components/Project';
import { FaJs, FaNodeJs, FaDatabase, FaReact } from 'react-icons/fa';
import { SiPostgresql, SiMongodb } from 'react-icons/si';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'BingBong Mood Tracker',
      images: ['assets/426808754-a613c71c-c818-4b61-be42-6b29cf88e4b2.png'],
      deployedLink: 'https://bing-bong-mood-tracker-pozd.onrender.com',
      description: 'The primary goal of this application is to provide users with a personal tool to track and improve their habits. This is not a medical application and should not be used as such. If you are experiencing depression or emotional distress, please seek professional help—you are not alone..',
      icons: [<FaReact key="react" title="React" />, <SiPostgresql key="postgresql" title="PostgreSQL" />, <FaDatabase key="sql" title="SQL" />, <SiMongodb key="mongodb" title="MongoDB" />],
    },    {
      title: 'Google Books Search',
      images: ['assets/googlebooks1 (1).jpg'],
      deployedLink: 'https://challenge18-main.onrender.com/',
      description: 'Search engine with login and function to save or delete books.',
      icons: [<FaReact key="react" title="React" />, <SiPostgresql key="postgresql" title="PostgreSQL" />, <FaDatabase key="sql" title="SQL" />, <SiMongodb key="mongodb" title="MongoDB" />],
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
    <section className="pdf-section">
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