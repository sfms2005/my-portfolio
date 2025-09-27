import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import EducationCertifications from './components/Education_Certifications.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import BackToTopButton from './components/BackToTopButton.jsx'; 
import './App.css'; 

function App() {
  return (
    <div className="portfolio-container">
      <Header />
      <main>
        <About />
        <Experience />
        <Skills />
        <EducationCertifications />
        <Projects /> 
        <Contact />
      </main>
      
      <BackToTopButton /> {}
    </div>
  );
}

export default App;
