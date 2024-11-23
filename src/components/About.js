import React from "react";
import "./About.css";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiExpress, SiGit, SiCplusplus } from "react-icons/si";

const About = () => {
  return (
    <div className="page-container">
      {/* Page 1: Introduction */}
      <section className="page">
        <div>
          <h5 className="page-title">Introduction</h5>
          <h1 className="page-title">Overview.</h1>
          <p className="about-description">
            I am an Information Technology student with a solid foundation in
            programming, having learned C, Java, and JavaScript. My skills
            extend to IoT development, web technologies such as HTML, CSS, and
            React, as well as digital forensics. I am a fast learner, passionate
            about technology, and eager to collaborate on innovative projects
            that solve real-world problems.
          </p>
        </div>
      </section>

      {/* Page 2: Timeline */}
      <section className="page">
        <h5 className="page-title">What I Have Done So Far</h5>
        <h1 className="static-title">WExperience.</h1>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>React.js Developer</h3>
              <p>
                Developed and maintained web applications using React.js and
                other modern frameworks.
              </p>
              <small>March 2020 - April 2021</small>
            </div>
            <span className="timeline-dot"></span>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Full Stack Developer</h3>
              <p>
                Built and scaled full-stack applications using React, Node.js,
                and MongoDB.
              </p>
              <small>May 2021 - June 2022</small>
            </div>
            <span className="timeline-dot"></span>
          </div>
        </div>
      </section>

      {/* Page 3: Professional Skillset */}
      <section className="page">
        <h5 className="page-title">Junior</h5>
        <h1 className="static-title">Skillset.</h1>
        <div className="skills-container">
          <div className="skills-grid">
            <div className="skill-card">
              <FaReact className="skill-icon" style={{ color: "#61DAFB" }} />
              <p>React</p>
            </div>
            <div className="skill-card">
              <FaNodeJs className="skill-icon" style={{ color: "#3C873A" }} />
              <p>Node.js</p>
            </div>
            <div className="skill-card">
              <FaHtml5 className="skill-icon" style={{ color: "#E44D26" }} />
              <p>HTML5</p>
            </div>
            <div className="skill-card">
              <FaCss3Alt className="skill-icon" style={{ color: "#1572B6" }} />
              <p>CSS3</p>
            </div>
            <div className="skill-card">
              <FaJsSquare className="skill-icon" style={{ color: "#F7DF1E" }} />
              <p>JavaScript</p>
            </div>

            <div className="skill-card">
              <SiExpress className="skill-icon" style={{ color: "#ffffff" }} />
              <p>Express.js</p>
            </div>

            <div className="skill-card">
              <SiGit className="skill-icon" style={{ color: "#F1502F" }} />
              <p>Git</p>
            </div>
            <div className="skill-card">
              <SiCplusplus
                className="skill-icon"
                style={{ color: "#00599C" }}
              />
              <p>C++</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
