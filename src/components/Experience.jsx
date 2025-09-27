import React from 'react';

function Experience() {
  const experiences = [
    // --- (Experience) ---
    {
      title: 'Information Technology Support Technician',
      company: 'Faraj Alsubaie Food Stores Company',
      location: 'Riyadh, Saudi Arabia',
      duration: 'Jan 2025 – Present',
      details: [
        'Installed, configured, and supported software applications for internal teams.',
        'Provided technical assistance, troubleshooting hardware/software issues.',
        'Supported IT operations ensuring smooth daily workflows.',
      ],
      type: 'Experience'
    },
    {
      title: 'Data Entry Specialist',
      company: 'Faraj Alsubaie Food Stores Company',
      location: 'Riyadh, Saudi Arabia',
      duration: 'Nov 2022 – Jan 2025',
      details: [
        'Entered and verified large volumes of data with accuracy and attention to detail.',
        'Utilized Microsoft Office tools to manage, analyze, and organize information.',
        'Improved data management efficiency by maintaining well-structured records.',
      ],
      type: 'Experience'
    },
    // --- (Volunteering) ---
    {
      title: 'Deputy Leader – Content Writing Committee',
      company: 'TechMinds Club',
      duration: 'Sep 2025 – Present',
      details: ['Assisted the leader in managing content creation workflows and editorial calendars.',],
      type: 'Volunteering'
    },
    {
      title: 'Organizer',
      company: 'Information Technology Club, PNU',
      duration: 'Sep 2024 – Present',
      details: ['Organized and managed technical events, workshops, and community engagement activities for club members.',],
      type: 'Volunteering'
    },
    {
      title: 'Content Writer',
      company: 'Google Developer Groups at PNU',
      duration: 'Sep 2024 – Aug 2025',
      details: ['Developed technical articles and posts focusing on Google’s developer technologies and industry trends.',],
      type: 'Volunteering'
    },
    {
      title: 'Content Writer',
      company: 'TechMinds Club',
      duration: 'Sep 2024 – Aug 2025',
      details: ['Created high-quality content for the club’s digital platforms.',],
      type: 'Volunteering'
    },
    {
      title: 'Marketing Ambassador',
      company: 'Shaguf',
      duration: 'Sep 2024 – Sep 2025',
      details: ['Promoted the organization’s mission and recruitment drives across social media and campus channels.',],
      type: 'Volunteering'
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <h2>Experience & Volunteering 💼</h2>
        
        <p className="section-description">
          A comprehensive record of professional experience and academic contributions, highlighting leadership, technical support, and community involvement.
        </p>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <div key={index} className="experience-item">
              <h3>{item.title} at {item.company}</h3>
              <p className="duration">{item.duration}</p>
              
              <ul className="item-details-list">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
              
              <span className="item-tag">{item.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
