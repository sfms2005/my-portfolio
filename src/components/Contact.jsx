import React from 'react';
// يتم افتراض استخدام هذه الأيقونات
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; 

function Contact() {
  const contactLinks = [
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:your.sara.email@example.com', // **غيري هذا الرابط**
      label: 'your.sara.email@example.com',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/your_sara_profile', // **غيري هذا الرابط**
      label: 'LinkedIn Profile',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/your_sara_username', // **غيري هذا الرابط**
      label: 'GitHub Repository',
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2>Contact Me 📧</h2>
        
        <p className="section-description">
          I'm always open to new opportunities, collaborations, and discussions about technology. Feel free to reach out through any of the channels below!
        </p>

        <div className="contact-links-grid">
          {contactLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link-card"
            >
              <link.icon className="contact-icon-lg" />
              <h4>{link.name}</h4>
              <p>{link.label}</p>
            </a>
          ))}
        </div>
        
        <p className="copyright-footer">
          &copy; {new Date().getFullYear()} Sara Alsubaie. Built with React.
        </p>
      </div>
    </section>
  );
}

export default Contact;