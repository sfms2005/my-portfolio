import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 

function BackToTopButton() {

  const [isVisible, setIsVisible] = useState(false);

  
  const toggleVisibility = () => {
   
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); 

  return (
    <div className="back-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top-button">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
