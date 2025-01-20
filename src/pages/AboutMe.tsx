import React from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiMysql, SiTypescript } from 'react-icons/si';

const AboutMe: React.FC = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img 
        src="src\assets\366017249_10224441619050091_4238439204750573288_n.jpg" 
        alt="Developer" 
        className="profile-pic"
      />
      <p>
        I'm a 36-year-old developer passionate about building dynamic and responsive web applications. With knowledge in Java, CSS, React, SQL, and HTML, I craft seamless digital experiences. I enjoy problem-solving, learning new technologies, and creating user-friendly web solutions.
      </p>
      <div className="icons">
        <FaJava size={40} title="Java" />
        <FaHtml5 size={40} title="HTML5" />
        <FaCss3Alt size={40} title="CSS3" />
        <FaReact size={40} title="React" />
        <SiMysql size={40} title="SQL" />
        <SiTypescript size={40} title="TypeScript" />
      </div>
    </section>
  );
};

export default AboutMe;