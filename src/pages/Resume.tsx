import React, { useState } from 'react';
import { FaDownload, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaUsers, FaBrain, FaTasks } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiRender, SiTailwindcss } from 'react-icons/si';

const Resume: React.FC = () => {
  const [downloadError, setDownloadError] = useState<string | null>(null);
  
  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if file exists by making a HEAD request
    fetch('dist/assets/Juan Gerardo Avendaño Calderón - CV.pdf', { method: 'HEAD' })
      .then(response => {
        if (!response.ok) {
          e.preventDefault();
          setDownloadError('Resume file not found. Please contact the administrator.');
        }
      })
      .catch(() => {
        e.preventDefault();
        setDownloadError('Error checking resume file. Please try again later.');
      });
  };

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaReact />,
      skills: [
        'React.js & Modern JavaScript (ES6+)',
        'TypeScript for type-safe development',
        'Responsive design with HTML5 & CSS3',
        'Tailwind CSS for rapid UI development',
        'Component-based architecture'
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaNodeJs />,
      skills: [
        'Node.js & Express.js server development',
        'RESTful API design and implementation',
        'Authentication & authorization (JWT)',
        'Python for scripting and automation',
        'Third-party API integrations'
      ]
    },
    {
      title: 'Database & Cloud',
      icon: <FaDatabase />,
      skills: [
        'PostgreSQL database design and optimization',
        'Complex SQL queries and data analysis',
        'Database performance tuning',
        'Cloud deployment with Render',
        'Version control with Git & GitHub'
      ]
    },
    {
      title: 'Soft Skills',
      icon: <FaUsers />,
      skills: [
        'Strong problem-solving and analytical thinking',
        'Excellent communication in English and Spanish',
        'Collaborative teamwork and leadership',
        'Adaptability to new technologies',
        'Growth mindset and continuous learning'
      ]
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Resume & Skills</h2>
        <p className="section-subtitle">
          Comprehensive overview of my technical expertise and professional capabilities as a Full-Stack Developer.
        </p>        <div className="resume-header">          <div className="resume-actions">
            <a 
              href="./public/assets/Juan Gerardo Avendaño Calderón - Full-Stack Developer & Data AnalystENG.pdf" 
              download 
              className="download-button"
              onClick={handleResumeClick}
            >
              <FaDownload />
              Download Current Resume
            </a>
          </div>
          
          {downloadError && (
            <div className="error-message">
              <p>{downloadError}</p>
            </div>
          )}
        </div>

        <div className="skills-overview">
          <h3 className="subsection-title">Professional Proficiencies</h3>
          
          <div className="skills-categories">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category-card">
                <div className="category-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h4 className="category-title">{category.title}</h4>
                </div>
                <ul className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="skill-item">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="technical-stack">
          <h3 className="subsection-title">Technical Stack</h3>
          <div className="tech-icons-grid">
            <div className="tech-icon-item">
              <FaReact size={40} />
              <span>React</span>
            </div>
            <div className="tech-icon-item">
              <SiTypescript size={40} />
              <span>TypeScript</span>
            </div>
            <div className="tech-icon-item">
              <FaNodeJs size={40} />
              <span>Node.js</span>
            </div>
            <div className="tech-icon-item">
              <FaPython size={40} />
              <span>Python</span>
            </div>
            <div className="tech-icon-item">
              <SiPostgresql size={40} />
              <span>PostgreSQL</span>
            </div>
            <div className="tech-icon-item">
              <FaGitAlt size={40} />
              <span>Git</span>
            </div>
            <div className="tech-icon-item">
              <SiTailwindcss size={40} />
              <span>Tailwind CSS</span>
            </div>
            <div className="tech-icon-item">
              <SiRender size={40} />
              <span>Render</span>
            </div>
          </div>
        </div>

        <div className="professional-highlights">
          <h3 className="subsection-title">Professional Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">
                <FaBrain />
              </div>
              <h4>Problem Solver</h4>
              <p>Strong analytical thinking with a proven track record of solving complex technical challenges through innovative solutions.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <FaTasks />
              </div>
              <h4>Project Management</h4>
              <p>Experienced with Agile methodologies, JIRA, Trello, and collaborative tools like Slack and Microsoft Teams.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <FaUsers />
              </div>
              <h4>Team Leadership</h4>
              <p>Demonstrated leadership abilities with excellent communication skills and a collaborative approach to development.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;