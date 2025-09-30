import React from 'react';

function EducationCertifications() { 
  const education = {
    institution: 'Princess Nourah bint Abdulrahman University',
    location: 'Riyadh, Saudi Arabia',
    degree: 'Bachelor of Science in Information Technology',
    duration: 'Aug 2022 – Expected Graduation: Jun 2026',
    focusAreas: ['Information Technology', 'Information Security'],
    coursework: ['Artificial Intelligence', 'Database Systems', 'Software Engineering', 'Networking', 'Web Development'],
  };

  const certifications = [
    {
      title: 'Introduction to AI Engineering with Groq',
      issuer: 'Tuwaiq',
      date: 'Sep 2025',
    },
    {
      title: 'Microsoft Azure AI Fundamentals',
      issuer: 'Microsoft',
      date: 'Oct 2025',
    },
    {
      title: 'Basics of Building Websites from Scratch to Professionalism',
      issuer: 'Princess Nourah University',
      date: 'Feb 2025',
    },
    {
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM',
      date: 'Jan 2025',
    },
    {
      title: 'Cybersecurity Fundamentals',
      issuer: 'IBM',
      date: 'Oct 2024',
    },
    {
      title: 'Dart 101',
      issuer: 'Satr Platform', 
      date: '2024',
    },
    {
      title: 'Programming Jam 9.0 (Certificate of Participation)',
      issuer: 'ACM Professional Chapter',
      date: '2024',
    },
    {
      title: 'English Language Course',
      issuer: 'AlFaisal International Academy',
      date: 'Jul – Aug 2023',
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <h2>Education & Certifications 🎓</h2>
        
        <p className="section-description">
          My academic journey and professional development through various certifications.
        </p>

        {/* --- (Education) --- */}
        <div className="education-block">
          <h3>Education</h3>
          <div className="education-item-card">
            <h4>{education.degree}</h4>
            <p className="institution-name">{education.institution} - {education.location}</p>
            <p className="education-duration">{education.duration}</p>
            
            {education.focusAreas.length > 0 && (
              <p className="focus-areas">
                <strong>Focus Areas:</strong> {education.focusAreas.join(', ')}
              </p>
            )}
            
            {education.coursework.length > 0 && (
              <p className="coursework">
                <strong>Relevant Coursework:</strong> {education.coursework.join(', ')}
              </p>
            )}
          </div>
        </div>

        {/* --- (Certifications) --- */}
        <div className="certifications-block">
          <h3>Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <h4>{cert.title}</h4>
                <p className="issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationCertifications;
