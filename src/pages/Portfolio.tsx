import React from 'react';
import Project from '../components/Project';
import { FaJs, FaNodeJs, FaDatabase, FaReact } from 'react-icons/fa';
import { SiPostgresql, SiMongodb, SiTypescript } from 'react-icons/si';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'BingBong Mood Tracker',
      images: ['assets/426808754-a613c71c-c818-4b61-be42-6b29cf88e4b2.png'],
      deployedLink: 'https://bing-bong-mood-tracker-pozd.onrender.com',
      githubLink: 'https://github.com/sieke13/bing-bong-mood-tracker',
      description: 'A comprehensive personal wellness application designed to help users track and improve their mental health habits. Features mood tracking, habit monitoring, and progress visualization with a clean, intuitive interface.',
      technologies: ['React', 'TypeScript', 'PostgreSQL', 'Node.js', 'Express'],
      icons: [<FaReact key="react" title="React" />, <SiTypescript key="typescript" title="TypeScript" />, <SiPostgresql key="postgresql" title="PostgreSQL" />, <FaNodeJs key="nodejs" title="Node.js" />],
      featured: true,
    },
    {
      title: 'Google Books Search Engine',
      images: ['assets/googlebooks1 (1).jpg'],
      deployedLink: 'https://challenge18-main.onrender.com/',
      githubLink: 'https://github.com/sieke13/google-books-search',
      description: 'A full-stack application that allows users to search for books using the Google Books API, create accounts, and save their favorite books to a personal collection.',
      technologies: ['React', 'GraphQL', 'MongoDB', 'JWT Authentication'],
      icons: [<FaReact key="react" title="React" />, <SiMongodb key="mongodb" title="MongoDB" />, <FaDatabase key="graphql" title="GraphQL" />],
      featured: true,
    },
    {
      title: 'Professional README Generator',
      image: '/assets/readmegen.jpg',
      deployedLink: 'https://github.com/sieke13/readgerardgen',
      githubLink: 'https://github.com/sieke13/readgerardgen',
      description: 'A command-line application that dynamically generates professional README.md files for GitHub projects based on user input, saving developers time and ensuring consistency.',
      technologies: ['JavaScript', 'Node.js', 'Inquirer.js'],
      icons: [<FaJs key="js" title="JavaScript" />, <FaNodeJs key="nodejs" title="Node.js" />],
    },
    {
      title: 'Weather Dashboard',
      image: '/assets/weather.jpg',
      deployedLink: 'https://sieke13.github.io/gerardoweather13/',
      githubLink: 'https://github.com/sieke13/gerardoweather13',
      description: 'A responsive weather application that provides current conditions and 5-day forecasts for multiple cities, featuring search history and data persistence.',
      technologies: ['JavaScript', 'OpenWeather API', 'LocalStorage'],
      icons: [<FaJs key="js" title="JavaScript" />],
    },
    {
      title: 'Employee Management System',
      image: '/assets/employe.jpg',
      deployedLink: 'https://github.com/sieke13/Employeetracker10',
      githubLink: 'https://github.com/sieke13/Employeetracker10',
      description: 'A command-line application for managing company employee database with features to view, add, and update employees, roles, and departments.',
      technologies: ['Node.js', 'MySQL', 'Inquirer.js', 'Console.table'],
      icons: [<FaNodeJs key="nodejs" title="Node.js" />, <FaDatabase key="mysql" title="MySQL" />],
    },
    {
      title: 'Vehicle Management System',
      image: '/assets/vehicles.jpg',
      deployedLink: 'https://github.com/sieke13/vehiclestowingwheeling',
      githubLink: 'https://github.com/sieke13/vehiclestowingwheeling',
      description: 'An object-oriented application for managing different types of vehicles with capabilities for creating, starting, and performing vehicle-specific actions.',
      technologies: ['TypeScript', 'Object-Oriented Programming', 'Node.js'],
      icons: [<SiTypescript key="typescript" title="TypeScript" />, <FaNodeJs key="nodejs" title="Node.js" />],
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        <p className="section-subtitle">
          A collection of projects showcasing my skills in full-stack development, 
          from web applications to command-line tools.
        </p>

        {/* Featured Projects */}
        <div className="featured-projects">
          <h3 className="subsection-title">Featured Projects</h3>
          <div className="projects-grid featured-grid">
            {featuredProjects.map((project, index) => (
              <div key={index} className="project-card featured-project">
                <Project {...project} />
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="other-projects">
          <h3 className="subsection-title">Other Projects</h3>
          <div className="projects-grid">
            {otherProjects.map((project, index) => (
              <div key={index} className="project-card">
                <Project {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;