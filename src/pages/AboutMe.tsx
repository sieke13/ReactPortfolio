import React from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaPython, FaCode, FaLaptopCode } from 'react-icons/fa';
import { SiMysql, SiTypescript, SiPostgresql, SiRender, SiJsonwebtokens, SiJavascript, SiNodedotjs } from 'react-icons/si';

const AboutMe: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="profile-section">
            <img 
              src="/assets/FB_IMG_1745735360797.jpg" 
              alt="Juan Gerardo Avendaño Calderón - Full-Stack Developer" 
              className="profile-image"
            />
            <div className="profile-info">
              <h3 className="name-title">Juan Gerardo Avendaño Calderón</h3>
              <p className="role-subtitle">Full-Stack Developer & Data Analyst</p>
            </div>
          </div>

          <div className="about-text">
            <p className="intro-text">
              I'm a passionate Full-Stack Developer with expertise in building dynamic, responsive, and user-centric web applications. 
              With a strong foundation in modern web technologies and data analysis, I craft seamless digital experiences that solve real-world problems.
            </p>
            
            <div className="highlights">
              <div className="highlight-item">
                <FaCode className="highlight-icon" />
                <div>
                  <h4>Problem Solver</h4>
                  <p>I thrive on tackling complex challenges and finding elegant solutions through code.</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <FaLaptopCode className="highlight-icon" />
                <div>
                  <h4>Continuous Learner</h4>
                  <p>Always exploring new technologies and best practices to stay at the forefront of development.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="icons-row">
                  <div className="skill-icon">
                    <FaReact size={40} title="React" />
                    <span>React</span>
                  </div>
                  <div className="skill-icon">
                    <SiTypescript size={40} title="TypeScript" />
                    <span>TypeScript</span>
                  </div>
                  <div className="skill-icon">
                    <SiJavascript size={40} title="JavaScript" />
                    <span>JavaScript</span>
                  </div>
                  <div className="skill-icon">
                    <FaHtml5 size={40} title="HTML5" />
                    <span>HTML5</span>
                  </div>
                  <div className="skill-icon">
                    <FaCss3Alt size={40} title="CSS3" />
                    <span>CSS3</span>
                  </div>
                </div>
              </div>

              <div className="skill-category">
                <h4>Backend</h4>
                <div className="icons-row">
                  <div className="skill-icon">
                    <SiNodedotjs size={40} title="Node.js" />
                    <span>Node.js</span>
                  </div>
                  <div className="skill-icon">
                    <FaJava size={40} title="Java" />
                    <span>Java</span>
                  </div>
                  <div className="skill-icon">
                    <FaPython size={40} title="Python" />
                    <span>Python</span>
                  </div>
                  <div className="skill-icon">
                    <SiJsonwebtokens size={40} title="JWT" />
                    <span>JWT</span>
                  </div>
                </div>
              </div>

              <div className="skill-category">
                <h4>Database & Cloud</h4>
                <div className="icons-row">
                  <div className="skill-icon">
                    <SiPostgresql size={40} title="PostgreSQL" />
                    <span>PostgreSQL</span>
                  </div>
                  <div className="skill-icon">
                    <SiMysql size={40} title="MySQL" />
                    <span>MySQL</span>
                  </div>
                  <div className="skill-icon">
                    <SiRender size={40} title="Render" />
                    <span>Render</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
