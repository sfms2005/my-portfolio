import React from 'react';
import { 
  FaPython, FaJs, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, 
  FaFigma, FaDatabase, FaClipboardList, FaLightbulb, 
  FaPeopleCarry, FaHandshake, FaBookReader, FaBrain, FaChartLine 
} from 'react-icons/fa';

function Skills() {
  const skillCategories = [
    {
      category: "Technical Skills 💻",
      description: "A focused collection of my technical proficiencies, tools, and expertise developed through academic coursework and practical experience.",
      subCategories: [
        {
          name: "Programming Languages",
          skills: [
            { name: "Java", icon: FaReact, color: "#f89820" }, 
            { name: "Python", icon: FaPython, color: "#306998" },
            { name: "JavaScript", icon: FaJs, color: "#F0DB4F" },
            { name: "C++", icon: FaReact, color: "#00599C" }, 
            { name: "SQL", icon: FaDatabase, color: "#F29111" },
          ],
        },
        {
          name: "Frameworks & Libraries",
          skills: [
            { name: "React (Basics)", icon: FaReact, color: "#61DAFB" },
            { name: "Express.js", icon: FaJs, color: "#68A063" },
            
          ],
        },
        {
          name: "Web Technologies",
          skills: [
            { name: "HTML5", icon: FaHtml5, color: "#E34C26" },
            { name: "CSS3", icon: FaCss3Alt, color: "#264DE4" },
          ],
        },
        {
          name: "Tools & Platforms",
          skills: [
            { name: "Git & GitHub", icon: FaGitAlt, color: "#F1502F" },
            { name: "Figma", icon: FaFigma, color: "#F24E1E" },
            { name: "Power BI", icon: FaChartLine, color: "#F2C811" }, 
            { name: "Oracle", icon: FaDatabase, color: "#F80000" }, ]
        },
        {
          name: "AI & Data",
          skills: [
            { name: "LLMs (Basics)", icon: FaBrain, color: "#663399" }, 
            { name: "Machine Learning (Basics)", icon: FaLightbulb, color: "#FF6F00" },
            { name: "Data Analysis", icon: FaChartLine, color: "#4CAF50" },
          ],
        },
      ],
    },
    {
      category: "Soft Skills 💡",
      description: "My interpersonal and critical thinking abilities, essential for collaborative and effective work environments.",
      subCategories: [
        {
          name: "Collaboration & Communication",
          skills: [
            { name: "Teamwork", icon: FaPeopleCarry, color: "#00BCD4" },
            { name: "Communication", icon: FaHandshake, color: "#4CAF50" },
          ],
        },
        {
          name: "Problem Solving & Adaptability",
          skills: [
            { name: "Problem Solving", icon: FaLightbulb, color: "#FF9800" },
            { name: "Adaptability", icon: FaClipboardList, color: "#F44336" },
          ],
        },
        {
          name: "Learning & Creativity",
          skills: [
            { name: "Quick Learner", icon: FaBookReader, color: "#2196F3" },
            { name: "Creativity", icon: FaBrain, color: "#9C27B0" },
          ],
        },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        {skillCategories.map((categoryData, index) => (
          <div key={index} className="skill-category-group">
            <h2 className="category-title">{categoryData.category}</h2>
            <p className="section-description">{categoryData.description}</p>

            {categoryData.subCategories.map((subCat, subIndex) => (
              <div key={subIndex} className="skill-sub-category">
                <h3 className="sub-category-name">{subCat.name}</h3>
                <div className="skills-grid">
                  {subCat.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-card">
                      <skill.icon className="skill-icon-lg" style={{ color: skill.color }} />
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
