import React from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaPython } from 'react-icons/fa';
import { SiMysql, SiTypescript, SiPostgresql, SiRender, SiJsonwebtokens } from 'react-icons/si';

const AboutMe: React.FC = () => {
  return (
    <section className="pdf-section">
      <h2>About Me</h2>
      <img 
        src="/assets/FB_IMG_1745735360797.jpg" 
        alt="Developer" 
        className="profile-pic"
      />
      <p>
        I'm a 36-year-old Jr. Developer passionate about building dynamic and responsive web applications. With knowledge in Java, CSS, React, SQL,Python, Postgresql, Render,  and HTML, I craft seamless digital experiences. I enjoy problem-solving, learning new technologies, and creating user-friendly web solutions.
      </p>
      <div className="icons">
        <FaJava size={40} title="Java" />
        <FaHtml5 size={40} title="HTML5" />
        <FaCss3Alt size={40} title="CSS3" />
        <FaReact size={40} title="React" />
        <SiMysql size={40} title="SQL" />
        <SiTypescript size={40} title="TypeScript" />
        <FaPython size={40} title="Python" />
        <SiPostgresql size={40} title="PostgreSQL" />
        <SiRender size={40} title="Render" />
        <SiJsonwebtokens size={40} title="JWT" />
      </div>
    </section>
  );
};

export default AboutMe;
