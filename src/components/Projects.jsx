import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Encryption Algorithms',
      role: 'Developer',
      description: 'Developed a robust Java-based multi-layered encryption system.',
      details: [
        'Implemented Caesar cipher, bit rotation, and random bit insertion for enhanced security.',
        'Utilized SHA-256 hashing to ensure data integrity and end-to-end message security.',
      ],
      technologies: ['Java', 'Cryptography'], // يمكن إضافة أيقونات لاحقاً
      link: '#' // رابط المشروع أو مستودع الكود
    },
    {
      title: 'SPA Booking System',
      role: 'Developer',
      description: 'Built a Single Page Application (SPA) in Java for efficient client booking management.',
      details: [
        'Designed for enhanced user experience with dynamic content and responsive design.',
        'Streamlined workflow for managing appointments and client data.',
      ],
      technologies: ['Java', 'SPA', 'Frontend/Backend'],
      link: '#'
    },
    {
      title: 'Pharmacy User Interface',
      role: 'Designer',
      description: 'Designed a pharmacy management application focusing on user experience and safety.',
      details: [
        'Created high-fidelity mockups using Figma to improve medication adherence.',
        'Incorporated features like automated reminders, drug interaction alerts, and real-time medicine availability checks.',
      ],
      technologies: ['Figma', 'UI/UX Design'],
      link: '#'
    },
    {
      title: 'GP1: Accurate Arabic-English Data Transliteration',
      role: 'Developer & AI Engineer',
      description: 'Developed a web-based application using Large Language Models (LLMs) for accurate Arabic-English data transliteration.',
      details: [
        'Ensured proper handling of personal and location names, preserving original identity and context.',
        'Designed a scalable solution supporting multiple data types while maintaining data integrity.',
      ],
      technologies: ['LLMs', 'Web Development', 'AI'],
      link: '#'
    },
    {
      title: 'My Portfolio',
      role: 'Developer',
      description: 'Created a personal portfolio website to showcase projects and skills.',
      details: [
        'Developed using HTML, CSS, and JavaScript (React framework).',
        'Integrated AI assistant features for enhanced interactivity and user experience.',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      link: 'https://github.com/yourusername/your-portfolio-repo' // يمكنك تغيير هذا لربط المشروع الفعلي
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2>My Projects ✨</h2>
        
        <p className="section-description">
          Explore my latest technical projects, showcasing my skills in development, data analysis, and problem-solving across various domains.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-role">{project.role}</p>
              <p className="project-description">{project.description}</p>
              
              <ul className="project-details-list">
                {project.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>

              {project.technologies.length > 0 && (
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}

              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-button">
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;