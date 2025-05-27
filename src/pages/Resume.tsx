import React, { useState } from 'react';


const Resume: React.FC = () => {
  const [downloadError, setDownloadError] = useState<string | null>(null);
  
  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if file exists by making a HEAD request
    fetch('assets/Juan Gerardo Avendaño Calderón - Full-Stack Developer & Data AnalystENG.pdf', { method: 'HEAD' })
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



  return (
    <section className="pdf-section">
      <h2>Resume</h2>
      <div className="resume-actions">
        <a 
          href="assets/Juan Gerardo Avendaño Calderón - Full-Stack Developer & Data AnalystENG.pdf" 
          download 
          className="download-button"
          onClick={handleResumeClick}
        >
          Download Portfolio PDF  
        </a>
      </div>
      
      {downloadError && <p className="error-message">{downloadError}</p>}
 
      <h1>Proficiencies</h1>

      <h2>1. Technical Skills</h2>
      <ul>
        <li>Proficient in front-end development with <strong>React.js</strong> and modern JavaScript (ES6+).</li>
        <li>Skilled in responsive web design using HTML5, CSS3, and Tailwind CSS.</li>
        <li>Experienced with version control systems like <strong>Git</strong> and platforms such as <strong>GitHub</strong>.</li>
        <li>Familiar with back-end development using <strong>Node.js</strong> and <strong>Express.js</strong>.</li>
        <li>Knowledgeable in working with REST APIs and third-party integrations.</li>
        <li>Proficient in <strong>Python</strong> for scripting, automation, and back-end development.</li>
        <li>Experienced in database management and querying using <strong>SQL</strong> and <strong>PostgreSQL</strong>.</li>
      </ul>

      <h2>2. Database and Deployment Skills</h2>
      <ul>
        <li>Skilled in designing, querying, and managing relational databases using <strong>PostgreSQL</strong>.</li>
        <li>Proficient in writing complex SQL queries for data analysis and manipulation.</li>
        <li>Experienced in deploying web applications using <strong>Render</strong> for seamless hosting and scaling.</li>
        <li>Knowledgeable in database optimization and performance tuning.</li>
      </ul>

      <h2>3. Soft Skills</h2>
      <ul>
        <li>Strong problem-solving abilities and attention to detail.</li>
        <li>Excellent communication skills, both written and verbal, with perfect English.</li>
        <li>Collaborative team player with experience working in cross-functional teams.</li>
        <li>Adaptable and eager to learn new technologies and frameworks.</li>
        <li>Demonstrated leadership abilities and a "never give up" attitude.</li>
      </ul>

      <h2>4. Project Management & Workflow</h2>
      <ul>
        <li>Experienced with Agile methodologies and tools like JIRA or Trello.</li>
        <li>Skilled in project planning and task management.</li>
        <li>Proficient with collaborative tools like Slack and Microsoft Teams.</li>
      </ul>
    </section>
  );
};

export default Resume;