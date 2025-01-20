import React from 'react';

const Resume: React.FC = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href="path/to/resume.pdf" download>Download Resume</a>
      <h1>Proficiencies</h1>

      <h2>1. Technical Skills</h2>
      <ul>
        <li>Proficient in front-end development with React.js and modern JavaScript (ES6+).</li>
        <li>Skilled in responsive web design using HTML5, CSS3, and Tailwind CSS.</li>
        <li>Experienced with version control systems like Git and platforms such as GitHub.</li>
        <li>Familiar with back-end development using Node.js and Express.js.</li>
        <li>Knowledgeable in working with REST APIs and third-party integrations.</li>
      </ul>

      <h2>2. Soft Skills</h2>
      <ul>
        <li>Strong problem-solving abilities and attention to detail.</li>
        <li>Excellent communication skills, both written and verbal, with perfect English.</li>
        <li>Collaborative team player with experience working in cross-functional teams.</li>
        <li>Adaptable and eager to learn new technologies and frameworks.</li>
        <li>Demonstrated leadership abilities and a "never give up" attitude.</li>
      </ul>

      <h2>3. Project Management & Workflow</h2>
      <ul>
        <li>Experienced with Agile methodologies and tools like JIRA or Trello.</li>
        <li>Skilled in project planning and task management.</li>
        <li>Proficient with collaborative tools like Slack and Microsoft Teams.</li>
      </ul>
    </section>
  );
};

export default Resume;