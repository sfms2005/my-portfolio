import React from 'react';
import { FaLaptopCode, FaBrain, FaRegLightbulb } from 'react-icons/fa'; // يجب تثبيت react-icons

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2>About Me 🚀</h2>
        
        <p className="about-summary">
          Hello! I'm Sara Alsubaie, an ambitious IT Student with a deep passion for innovation and problem-solving, particularly within the realm of Data Science and Artificial Intelligence. I thrive on turning complex challenges into elegant technical solutions.
        </p>
        
        <p className="about-motto">
          "Driven by curiosity, focused on impact."
        </p>

        <div className="key-skills-list">
          <div className="key-skill-item">
            <FaLaptopCode className="skill-icon" />
            <h3>Coding Enthusiast</h3>
            <p>Proficient in Python and JavaScript for building scalable applications.</p>
          </div>
          
          <div className="key-skill-item">
            <FaBrain className="skill-icon" />
            <h3>AI & Data Focus</h3>
            <p>Specializing in machine learning concepts and data analysis techniques.</p>
          </div>
          
          <div className="key-skill-item">
            <FaRegLightbulb className="skill-icon" />
            <h3>Innovative Solutions</h3>
            <p>Always seeking creative and efficient ways to solve real-world problems.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;