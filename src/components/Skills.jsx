import React from 'react';
import { FaPython, FaReact, FaJs, FaDatabase, FaToolbox, FaBook, FaBrain } from 'react-icons/fa'; // يجب تثبيت react-icons

function Skills() {
  const skillsList = [
    { name: 'Python', icon: FaPython, category: 'Programming' },
    { name: 'JavaScript', icon: FaJs, category: 'Programming' },
    { name: 'React (Basics)', icon: FaReact, category: 'Frameworks' },
    { name: 'SQL & Database', icon: FaDatabase, category: 'Data Management' },
    { name: 'Data Analysis (Pandas)', icon: FaToolbox, category: 'Data Science' },
    { name: 'Machine Learning Concepts', icon: FaBrain, category: 'AI' },
    { name: 'Microsoft Office', icon: FaToolbox, category: 'Software' },
    { name: 'Troubleshooting', icon: FaBook, category: 'Support' },
  ];
  
  // دالة لتصنيف المهارات حسب الفئة
  const categories = skillsList.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2>Technical Skills 💻</h2>
        
        <p className="section-description">
          A focused collection of my technical proficiencies, tools, and expertise developed through academic coursework and practical experience.
        </p>

        <div className="skills-categories">
          {Object.keys(categories).map((category, index) => (
            <div key={index} className="skill-category-group">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {categories[category].map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-card">
                    <skill.icon className="skill-icon-lg" />
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;