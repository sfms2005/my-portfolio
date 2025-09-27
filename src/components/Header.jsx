import React from 'react';

function Header() {
  return (
    <header className="main-header">
      <div className="hero-section">
        <div className="hero-content">
          {}
          <h1>HELLO, I'M SARA ALSUBAIE!</h1>
          <h2>IT Student</h2>
        </div>
        
        {}
        <div className="bottom-nav-buttons">
          <a href="#about"><button className="cta-button">About</button></a>
          <a href="#experience"><button className="cta-button">Experience & Volunteering</button></a>
          <a href="#skills"><button className="cta-button">Skills</button></a>
          <a href="#education"><button className="cta-button">Education & Certifications</button></a>
          <a href="#projects"><button className="cta-button">Projects</button></a>
          <a href="#contact"><button className="cta-button">Contact</button></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
